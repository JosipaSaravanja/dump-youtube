<script>
    import {list} from "../../stores/store";
    import Card from "../../components/Card.svelte";
  </script>
  
  <div>
    {#each $list.filter((todo) => todo.isFinished) as props}
      <Card {props} />
    {/each}
  </div>
  