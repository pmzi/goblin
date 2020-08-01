<script>
  export let selectedEmails = [];
  export let result = [];

  import { slide } from 'svelte/transition';

</script>

<div class="result-list">
  {#if result.length}
    <table class="result-list__table">
      <thead>
        <tr>
          <th>
    
          </th>
          <th>
            ID
          </th>
          <th>
            Email
          </th>
          <th>
            Depth
          </th>
          <th>
            Address
          </th>
        </tr>
      </thead>
      <tbody>
        {#each result as email (email.email)}
          <tr>
            <td>
              <input type="checkbox" checked value={email} bind:group={selectedEmails} />
            </td>
            <td>
              {email.id}
            </td>
            <td>
              {email.email}
            </td>
            <td>
              {email.depth}
            </td>
            <td>
              <a target="_blank" href={email.url}>
                <img class="result-list__link-icon" alt="link" src="/icons/link.png" />
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <span class="result-list__not-found">
      No emails found!
    </span>
  {/if}
</div>

<style>
.result-list {
  display: flex;
  flex-direction: column; 
}
.result-list__table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #eee;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
}
.result-list__not-found {
  color: red;
  align-self: center;
}
.result-list__table tr {
  height: 40px;
  transition-duration: 0.3s;
}
.result-list__table tr:nth-child(even) {
  background-color: #eee;
}
.result-list__table tr:hover {
  background-color: rgb(204, 204, 204);
}
.result-list__table td {
  text-align: center;
}
.result-list__link-icon {
  width: 16px;
  height: 16px;
}
</style>