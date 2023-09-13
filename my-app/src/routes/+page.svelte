<script>
  import Input from "../components/Input.svelte";
  import List from "../components/List.svelte";
</script>

<div class="wrapper">
  <h1>Homepage</h1>
  <Input />
  <List />
</div>

<style>
  h1 {
    text-align: center;
    font-weight: 800;
    text-align: center;
  }
  .wrapper {
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    align-self: center;
    justify-content: center;
  }
</style>
