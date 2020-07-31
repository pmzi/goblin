<script>
  import Button from './Button.svelte';
  import FormItem from './FormItem.svelte';

  import { fade } from 'svelte/transition';
  import { createEventDispatcher  } from 'svelte';

  const dispatch = createEventDispatcher();

  let text = "";
  let loading = false;
  let sent = false;
  let message = "";
  let succeed = false;

  function cancel(){
    if(loading) return; 
    dispatch("cancel")
  }
  
  function submit(){
    loading = true;
    setTimeout(()=>{
      loading = false;
      sent = true;
      succeed = true;
      message = "Emails sent successfully!";
    }, 1000);
    console.log('submit')
  }
</script>

<div transition:fade={{duration: 300}} on:click={cancel} class="submit-form-modal">
  <div on:click|stopPropagation class="submit-form-modal__content">
    {#if !sent}
      <form on:submit|preventDefault={submit} class="submit-form-modal__form">
        <FormItem label="Text to send:">
          <textarea class="submit-form-modal__text" bind:value={text} required />
        </FormItem>
        <div class="submit-form-modal__actions">
          <Button danger disabled={loading} on:click={cancel}>
            Cancel
          </Button>
          <Button {loading} on:click={submit} type="submit">
            Send Emails
          </Button>
        </div>
      </form>
    {:else}
      <div class="submit-form-modal__message" class:submit-form-modal__message--error={succeed == false} class:submit-form-modal__message--success={succeed}>
        { message }
      </div>
    {/if}
  </div>
</div>

<style>
.submit-form-modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit-form-modal__content {
  background-color: white;
  box-shadow: 10px;
  width: 100%;
  max-width: 800px;
  min-height: 200px;
  padding: 20px;
}
.submit-form-modal__text {
  resize: none;
  width: 100%;
  height: 150px;
}
.submit-form-modal__actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.submit-form-modal__message {
  height: 200px;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit-form-modal__message--error {
  color: red;
}
.submit-form-modal__message--success {
  color: green;
}
</style>