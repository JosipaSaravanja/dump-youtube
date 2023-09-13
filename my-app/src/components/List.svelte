<script>
  import { list } from "../stores/store.js";
  import Card from "./Card.svelte";
</script>

<div>
  {#each $list as props}
    <Card {props} />
  {/each}
</div>
