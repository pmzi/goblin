<script>
  export let selectedEmails = [];
  export let result = [];

</script>

<table class="result-list">
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
    {#each result as email (email.id)}
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
          <a href={email.link}>
            <img />
          </a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
.result-list {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #eee;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1); 
}
.result-list tr {
  height: 40px;
  transition-duration: 0.3s;
}
.result-list tr:nth-child(even) {
  background-color: #eee;
}
.result-list tr:hover {
  background-color: rgb(204, 204, 204);
}
.result-list td {
  text-align: center;
}

</style>