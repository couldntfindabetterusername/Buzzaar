<script>
  import Data from "../homePageProductsData";

  let screenWidth;

  $: width = (screenWidth - 50).toString() + "px";
  $: cardWidth = (screenWidth - 100).toString() + "px";
  $: rightContainerWidth = (screenWidth - 215).toString() + "px";
</script>

<svelte:window bind:innerWidth={screenWidth} />

<main
  style="--width:{width};--card-width:{cardWidth};--right-container-width:{rightContainerWidth}"
>
  <div class="section">
    <span class="heading username">Hello, (user)</span>
    <span class="subtext-2">Good to have you</span>
    <button class="edit-btn">Edit</button>
  </div>
  <hr />
  <div class="section">
    <span class="heading">Contact information</span>
    <span class="subtext-1">+91-8484848448</span>
    <span class="subtext-1">buxxaurnn@nccjs.com</span>
  </div>
  <hr />
  <div class="section">
    <span class="heading">Address</span>
    <span class="subtext-1">401, Platinum tower 2, Nehru Road, Andheri (w)</span
    >
    <span class="subtext-1">Near Region Park</span>
  </div>
  <hr />
  <div class="section">
    <span class="heading">Orders</span>
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
              >Delivered to:&nbsp;<span class="content">Shreyash Mishra</span>
            </span>
            <span class="flex"
              >Seller:&nbsp;<span class="content">{"Tres Chic"}</span></span
            >
          </div>
        </div>{/each}
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    width: 1000px;
    display: grid;
    grid-gap: 40px;
    color: #444444;
    margin: 50px auto;
    font-family: "Montserrat", sans-serif;
    position: relative;
  }
  .section {
    display: grid;
    width: 500px;
    grid-gap: 25px;
    padding: 0 40px;
  }
  hr {
    border-width: 0;
    height: 1px;
    background-color: rgb(68 68 68 / 40%);
  }
  .heading {
    font-size: 28px;
    font-weight: 600;
  }
  .username {
    font-weight: 700;
  }
  .subtext-1,
  .subtext-2 {
    font-size: 25px;
    font-weight: 400;
    color: rgb(68 68 68 / 60%);
  }
  .subtext-1 {
    color: #444444;
  }
  .edit-btn {
    position: absolute;
    padding: 10px 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 21px;
    font-weight: 600;
    border: unset;
    background: #99319b;
    color: #ffffff;
    border-radius: 5px;
    right: 40px;
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr;
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

  @media screen and (max-width: 1200px) {
    main {
      width: 90%;
    }
    .section {
      grid-gap: 20px;
      width: calc(100% - 180px);
    }
    .heading {
      font-size: 26px;
    }
    .subtext-1,
    .subtext-2 {
      font-size: 22px;
    }
    .edit-btn {
      padding: 8px 30px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 850px) {
    .section {
      padding: 0 20px;
      width: calc(100% - 60px);
      grid-gap: 10px;
    }
    .edit-btn {
      right: 20px;
    }
    .heading {
      font-size: 23px;
    }
    .subtext-1,
    .subtext-2 {
      font-size: 19px;
    }
    .cards-wrapper {
      grid-gap: 25px;
    }
    .card {
      width: 360px;
      padding: 20px;
    }

    .left {
      min-width: 120px;
      max-width: 120px;
      min-height: 120px;
      max-height: 120px;
      margin-right: 20px;
    }
    .right {
      font-size: 16px;
      width: 220px;
    }
    .product-name {
      font-size: 19px;
      margin-bottom: 8px;
    }
    .flex {
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 480px) {
    main {
      width: var(--width);
      margin: 25px;
      grid-gap: 25px;
    }
    .section {
      width: 100%;
      grid-gap: 15px;
      padding: 0 10px;
    }
    .heading {
      font-size: 21px;
    }
    .subtext-1,
    .subtext-2 {
      font-size: 18px;
      padding: 0 10px;
    }
    .edit-btn {
      font-size: 16px;
      padding: 5px 15px;
      right: 10px;
    }

    .cards-wrapper {
      grid-gap: 25px;
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
  }
</style>
