<script>
  import ProductData from "../homePageProductsData";
  import Wishlist from "../assets/wishlist.png";
  import WishlistFill from "../assets/wishlist solid fill.png";
  import ArrowWhite from "../assets/arrow(white).png";
  import Rating from "../components/Rating.svelte";
  let saved = false;

  const clickHandler = (e) => {
    const gridItems = document.getElementsByClassName("grid-item");

    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].classList.remove("active");
    }

    e.path[0].classList.add("active");
  };

  let screenWidth;
  $: activeHeight =
    screenWidth <= 480
      ? (screenWidth * 0.9 * 0.75 + 15).toString() + "px"
      : screenWidth <= 700
      ? "250px"
      : screenWidth <= 768
      ? (screenWidth - 450).toString() + "px"
      : screenWidth <= 850
      ? (screenWidth / 3).toString() + "px"
      : (screenWidth / 4).toString() + "px";

  export let product;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="container">
  <div class="top">
    <a class="name-info" href="/treschic/{product.productId}"
      >{product.productName}
      <span class="collection-name">in product</span></a
    >
    <div class="icons">
      <a href="/treschic">
        <div
          class="icon"
          style="background: url({product
            .productImages[0]});background-size:cover;background-position:center;"
        /></a
      >
      <div
        class="icon wishlist"
        style="background: url({saved
          ? WishlistFill
          : Wishlist}) center center / cover;"
        on:click={() => (saved = !saved)}
      />
    </div>
  </div>
  <div class="image-grid" style="--active-height:{activeHeight}">
    <div
      class="active grid-item"
      style="background: url({product.productImages[0]}) center center / cover;"
    />
    <div
      class="grid-item"
      style="background: url({product.productImages[1]}) center center / cover;"
      on:click={(e) => clickHandler(e)}
    />
    <div
      class="grid-item"
      style="background: url({product.productImages[2]}) center center / cover;"
      on:click={(e) => clickHandler(e)}
    />
    <div
      class="grid-item"
      style="background: url({product.productImages[3]}) center center / cover;"
      on:click={(e) => clickHandler(e)}
    />
  </div>
  <div class="bottom">
    <Rating />
    <div class="check-wrapper">
      <span class="price">₹ {product.productPrize}</span>
      <a href="/treschic/{product.productId}"
        ><span class="check"
          >Check&nbsp;<img class="arrow" src={ArrowWhite} alt="" /></span
        ></a
      >
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  a {
    text-decoration: none;
    color: #444444;
  }
  .container {
    transform: scale(1.1);
    padding: 20px 40px;
    border: 0.7px solid #c4c4c4;
    border-radius: 10px;
    margin: 60px auto 100px auto;
    width: fit-content;
    font-family: "Montserrat", sans-serif;
    background: #ffffff;
  }
  .top {
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
  }
  .name-info {
    font-size: 26px;
    color: #444444;
    font-weight: 700;
  }
  .collection-name {
    font-size: 15px;
    font-style: italic;
    font-weight: 400;
  }
  .icons {
    display: flex;
  }
  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 20px;
  }
  .wishlist {
    border-radius: 0%;
  }
  .image-grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    width: 520px;
    height: 400px;
    margin: 20px 0;
  }
  .active {
    grid-row-start: 1;
    grid-row-end: 5;
  }
  .grid-item {
    border-radius: 10px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .check-wrapper {
    font-size: 18px;
    font-weight: 600;
    color: #99319b;
    border: 1px solid #99319b;
    border-radius: 10px;
    overflow: hidden;
    height: fit-content;
  }
  .check-wrapper span {
    padding: 15px;
  }
  .check {
    color: #ffffff;
    background: #99319b;
    border: 1px solid #99319b;
    display: inline-flex;
  }
  .arrow {
    width: 22px;
  }

  @media screen and (max-width: 1500px) {
    .container {
      transform: unset;
      margin: 40px auto;
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      padding: 20px;
    }
    .top {
      padding: unset;
    }
    .name-info {
      font-size: 22px;
    }
    .collection-name {
      font-size: 13px;
    }
    .icon {
      width: 35px;
      height: 35px;
      margin-left: 10px;
    }
    .image-grid {
      width: 100%;
      height: unset;
      grid-gap: 15px;
      margin: 15px 0;
    }
    .active {
      height: var(--active-height);
      width: var(--active-height);
    }
    .check-wrapper {
      font-size: 14px;
    }
    .check-wrapper span {
      padding: 8px 10px;
    }
    .arrow {
      width: 16px;
    }
  }

  @media screen and (max-width: 850px) {
    .container {
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      margin: 15px auto 0 auto;
      width: 90%;
      transform: unset;
      padding: 20px 15px;
    }
    .name-info {
      font-size: 21px;
    }
    .collection-name {
      font-size: 10px;
    }
    .icon {
      width: 25px;
      height: 25px;
    }
    .image-grid {
      grid-gap: 15px;
      margin: 15px 0;
      width: 100%;
      height: unset;
    }
    .active {
      height: var(--active-height);
    }
    .check-wrapper {
      font-size: 13px;
    }
    .check-wrapper span {
      padding: 10px;
    }
    .arrow {
      width: 17px;
    }
  }
</style>
