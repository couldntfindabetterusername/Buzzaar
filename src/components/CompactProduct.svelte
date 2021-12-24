<script>
  export let product;
  import Product from "../components/Product.svelte";
  let openModal = false;
  let modalContainer;
</script>

<div
  class="container"
  on:click={() => {
    openModal = true;
  }}
>
  <div class="info">
    <span class="product-name">{product.productName}</span>
  </div>
  <div class="images">
    <div
      class="img"
      id="img-1"
      style="background-image: url({product.productImages[0]});"
    />
    <div
      class="img"
      id="img-2"
      style="background-image: url({product.productImages[1]});"
    />
    <div
      class="img"
      style="background-image: url({product.productImages[2]});"
    />
  </div>
</div>

<svelte:window
  on:click={(e) => {
    if (e.target == modalContainer) {
      modalContainer.style.display = "none";
      openModal = false;
    }
  }}
/>
{#if openModal}
  <main bind:this={modalContainer}>
    <Product {product} />
  </main>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  .container {
    font-family: "Montserrat", sans-serif;
    width: 240px;
    border: 0.3px solid #c4c4c4;
    border-radius: 10px;
    padding: 15px;
  }
  .product-name {
    font-size: 20px;
    font-weight: 600;
    color: #444444;
    padding: 0 20px;
  }
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
    width: min-content;
    margin-top: 10px;
  }
  .img {
    background-position: center;
    background-size: cover;
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }
  #img-1 {
    width: 150px;
    height: 150px;
    grid-row-start: 1;
    grid-row-end: 3;
    margin-right: 10px;
  }
  #img-2 {
    margin-bottom: 10px;
  }

  main {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
</style>
