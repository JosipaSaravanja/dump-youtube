<script>
  import { deleteTodo, completeTodo } from "../stores/store";
  export let props;
</script>

<div>
  <input
    type="checkbox"
    checked={props.isFinished}
    on:change={() => completeTodo(props.id)}
  />
  <span>{props.text}</span>
  <button on:click={deleteTodo(props.id)}> Delete </button>
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    border: 2px solid rgb(128, 128, 128, 0.4);
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0;
    align-items: center;
  }

  span {
    background-color: transparent;
    border: none;
    width: 300px;
    margin: 0 15px;
  }

  button {
    padding: 8px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
</style>
