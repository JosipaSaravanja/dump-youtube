<script>
  import Input from "../components/Input.svelte";

  let title = "Homepage";
</script>

<div class="wrapper">
  <h1>{title}</h1>
  <Input />
</div>

<style>
  h1 {
    text-align: center;
    font-weight: 800;
    text-align: center;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-self: center;
    justify-content: center;
  }
</style>
