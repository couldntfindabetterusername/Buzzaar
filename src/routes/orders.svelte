<script>
  import Data from "../homePageProductsData";

  let isBuyer = true;
  const username = "shreyash";

  let screenWidth;

  $: cardWidth = (screenWidth - 90).toString() + "px";
  $: rightContainerWidth = (screenWidth - 205).toString() + "px";
</script>

<svelte:window bind:innerWidth={screenWidth} />
<main
  style="--card-width:{cardWidth};--right-container-width:{rightContainerWidth}"
>
  <span class="heading">
    Products You've
    {#if isBuyer}
      Ordered
    {:else}
      Sold
    {/if}
  </span>

  <div class="cards-wrapper">
    {#each Data as product}
      <div class="card">
        <div
          class="left"
          style="background-image: url({product
            .productImages[0]});background-size:cover;background-position:center;"
        />
        <div class="right">
          <span class="product-name">{product.productName}</span>
          <span class="flex">Order placed:&nbsp;<img src="" alt="" /></span>
          <span class="flex"
            >Delivered to:&nbsp;<span class="content">{username} Mishra</span>
          </span>
          <span class="flex"
            >Seller:&nbsp;<span class="content">{"Tres Chic"}</span></span
          >
        </div>
      </div>{/each}
  </div>

  <footer>
    <span class="footer-heading">To contact us or any queries</span>
    <span class="flex"
      >Call or whatsapp:&nbsp;<span class="content">+91-9797997554</span></span
    >
    <span class="flex"
      >Email:&nbsp;<span class="content">buzzaarmarketplace@gmail.com</span
      ></span
    >
  </footer>
  <div style="width:100%;height:50px;" />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    font-family: "Montserrat", sans-serif;
    padding: 50px 0px;
    margin: auto;
    color: #444444;
  }
  .heading {
    font-size: 28px;
    font-weight: 600;
    margin: 0 50px;
  }

  .cards-wrapper {
    margin: 35px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  .card {
    width: calc(500px - 60px);
    padding: 25px 30px;
    display: flex;
    border: 0.8px solid #c4c4c4;
    border-radius: 20px;
    align-items: center;
  }
  .left {
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 20px;
    margin-right: 40px;
  }
  .right {
    display: flex;
    flex-direction: column;
    font-size: 19px;
    width: 240px;
  }
  .product-name {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .flex {
    color: #a8a8a8;
    margin-bottom: 10px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    text-transform: capitalize;
    color: #444444;
  }

  footer {
    display: flex;
    justify-content: space-between;

    font-size: 20px;
  }
  footer .flex,
  footer .content {
    font-weight: 600;
  }

  @media screen and (max-width: 1300px) {
    .heading {
      margin: unset;
      font-size: 26px;
    }
    .cards-wrapper {
      margin: 20px auto;
      grid-gap: unset;
    }
    .card {
      transform: scale(0.85);
    }
    .heading,
    footer {
      margin-left: 35px;
    }
    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
      width: fit-content;
    }
    .footer-heading {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  @media screen and (max-width: 1100px) {
    .cards-wrapper {
      grid-template-columns: 1fr;
      grid-gap: 40px;
      margin: 35px 40px;
    }
    .card {
      transform: unset;
    }
    .heading,
    footer {
      margin-left: unset;
    }
    footer {
      justify-content: unset;
      grid-template-columns: unset;
      width: unset;
    }
    .footer-heading {
      grid-column-start: unset;
      grid-column-end: unset;
    }
    footer .flex {
      margin-bottom: unset;
    }
  }

  @media screen and (max-width: 768px) {
    .cards-wrapper {
      margin: 30px auto;
    }
    footer {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 600px) {
    .card {
      width: 380px;
      padding: 15px;
    }
    .left {
      width: 140px;
      height: 140px;
      margin-right: 25px;
    }
    .right {
      width: 180px;
    }
  }
  @media screen and (max-width: 480px) {
    main {
      padding: 30px;
    }
    .heading {
      font-size: 21px;
      margin: unset;
    }
    .cards-wrapper {
      grid-gap: 25px;
      grid-template-columns: 1fr;
      margin: 25px 0;
    }
    .card {
      padding: 15px;
      width: var(--card-width);
    }
    .left {
      width: 100px;
      height: 100px;
      margin-right: 15px;
      border-radius: 10px;
    }
    .right {
      font-size: 15px;
      width: var(--right-container-width);
    }
    .product-name {
      font-size: 19px;
      margin-bottom: 8px;
    }
    .flex {
      margin-bottom: 5px;
    }

    footer {
      margin-top: 60px;
      font-size: 17px;
    }
    .footer-heading {
      margin-bottom: 10px;
    }
    footer .flex {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 16px;
    }
  }
</style>
