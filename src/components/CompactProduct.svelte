<script>
  export let product;
  import Product from "../components/Product.svelte";
  let openModal = false;
  let modalContainer, screenWidth;

  $: imgWidth = ((screenWidth - 105) / 3).toString() + "px";
  $: smallImgWidth = ((screenWidth - 130) / 6).toString() + "px";
  $: imgHeight = ((screenWidth - 105) / 3).toString() + "px";
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
      style="background-image: url({product
        .productImages[0]});--width:{imgWidth};--height:{imgHeight}"
    />
    <div
      class="img"
      id="img-2"
      style="background-image: url({product
        .productImages[1]});--small-width:{smallImgWidth}"
    />
    <div
      class="img"
      style="background-image: url({product.productImages[2]});"
    />
  </div>
</div>

<svelte:window
  bind:innerWidth={screenWidth}
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
    width: fit-content;
    border: 0.3px solid #c4c4c4;
    border-radius: 10px;
    padding: 15px;
    transition: all 0.5s ease-in-out;
    background: #ffffff;
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
    width: 65px;
    height: 65px;
    border-radius: 10px;
  }
  #img-1 {
    width: 140px;
    height: 140px;
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

  @media screen and (max-width: 1550px) {
    .img {
      width: 75px;
      height: 75px;
    }
    #img-1 {
      width: 160px;
      height: 160px;
    }
  }

  @media screen and (max-width: 1400px) {
    .container {
      margin: auto;
      margin-bottom: 30px;
    }
    .img {
      width: 55px;
      height: 55px;
    }
    #img-1 {
      width: 120px;
      height: 120px;
    }
  }

  @media screen and (max-width: 1300px) {
    .container {
      margin-bottom: 40px;
    }
    .img {
      width: 70px;
      height: 70px;
    }
    #img-1 {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (max-width: 1150px) {
    .container {
      margin-bottom: 20px;
      padding: 10px;
    }
    .img {
      width: 55px;
      height: 55px;
    }
    #img-1 {
      width: 120px;
      height: 120px;
    }
  }
  @media screen and (max-width: 1000px) {
    .product-name {
      font-size: 16px;
      padding: 0 10px;
    }
    .img {
      width: 40px;
      height: 40px;
    }
    #img-2 {
      margin-bottom: 5px;
    }
    #img-1 {
      width: 87.5px;
      height: 87.5px;
      margin-right: 5px;
    }
  }
  @media screen and (max-width: 900px) {
    .container {
      width: 155px;
      padding-top: 10px;
    }
    .product-name {
      font-size: 16px;
      padding: 0 10px;
    }
    .images {
      grid-template-rows: unset;
    }
    .img {
      width: 45px;
      height: 45px;
    }
    #img-1 {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      width: unset;
      padding: 10px;
      margin-bottom: unset;
    }
    /* .product-name {
      font-size: 16px;
    } */
    .images {
      grid-template-rows: 1fr 1fr;
      grid-gap: 6px;
    }
    .img {
      width: var(--small-width);
      height: var(--small-width);
    }
    #img-1 {
      width: var(--width);
      height: var(--height);
      margin-right: unset;
    }
    #img-2 {
      margin-bottom: unset;
    }
  }
</style>
