<script>
  export let label = "";
  export let width = "100%";
</script>

<div style={`width: ${width}`} class="form-item">
  <label class="form-item__label">
    { label }
  </label>
  <slot  />
</div>

<style>
.form-item {
  margin-left: 10px;
}
.form-item:first-child {
  margin-left: 0;
}
.form-item__label {
  margin-bottom: 5px;
}
</style>