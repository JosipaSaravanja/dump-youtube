<script>
  import { list } from "../stores/store.js";
  import { get } from "svelte/store";
</script>

<div>
    {#each $list as item}
        <div>
        {item}
        </div>
    {/each}
</div>