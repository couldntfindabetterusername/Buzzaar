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

  @media screen and (max-width: 768px) {
    main {
      margin: 0 50px;
    }
  }

  @media screen and (max-width: 700px) {
    main {
      margin: 0 20px;
    }
  }
  @media screen and (max-width: 500px) {
    main {
      margin: unset;
      border-radius: unset;
      border: unset;
      border-top: 0.5px solid rgba(196, 196, 196, 0.85);
    }
  }
  @media screen and (max-width: 480px) {
    main {
      padding: unset;
    }
  }
</style>
