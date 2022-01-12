<script>
  import Product from "../components/Product.svelte";
  import ProductData from "../homePageProductsData";
</script>

<main>
  {#each ProductData as product}
    <Product {product} />
  {/each}
</main>

<style>
  main {
    width: -webkit-fill-available;
    padding: 10px 0;
    border: 0.5px solid rgba(196, 196, 196, 0.85);
    border-radius: 15px;
    background: rgb(251 251 251 / 80%);
  }
  @media screen and (max-width: 480px) {
    main {
      padding: unset;
      border: unset;
    }
  }
</style>
