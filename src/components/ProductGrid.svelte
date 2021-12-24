<script>
  import CompactProduct from "../components/CompactProduct.svelte";
  export let data;
</script>

<main>
  {#each data as product}
    <CompactProduct {product} />
  {/each}
</main>

<style>
  main {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }
</style>
