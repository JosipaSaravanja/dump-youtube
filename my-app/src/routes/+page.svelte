<script>
  import Input from "../components/Input.svelte";
  import Card from "../components/Card.svelte"; 

  let title = "Homepage";
</script>

<div class="wrapper">
  <h1>{title}</h1>
  <Input />
  <Card text="Card text" />
  <Card text="Some other ard text" />
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
