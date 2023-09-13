<script>
  let text;

  function handleClick() {
    text = "";
  }
</script>

<div>
  <input placeholder="Add Task" bind:value={text} />
  <button on:click={handleClick}> Button</button>
</div>

<p>{text ? text : ""}</p>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    background-color: transparent;
    border: none;
    width: 300px;
    font-size: 15px;
    border-bottom: 1px dotted gray;
    margin: 0 15px;
  }

  input:focus {
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    font-size: larger;
    border-radius: 10px;
    border: 2px solid black;
  }
</style>
