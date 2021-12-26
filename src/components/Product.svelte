<script>
  import ProductData from "../homePageProductsData";
  import Wishlist from "../assets/wishlist.png";
  import WishlistFill from "../assets/wishlist solid fill.png";
  import ArrowWhite from "../assets/arrow(white).png";

  let saved = false;

  const clickHandler = (e) => {
    const gridItems = document.getElementsByClassName("grid-item");

    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].classList.remove("active");
    }

    e.path[0].classList.add("active");
  };

  export let product;
</script>

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
  <div class="image-grid">
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
    <div class="check-wrapper">
      <span class="price">₹ {product.productPrize}</span>
      <a href="/treschic/{product.productId}"
        ><span class="check"
          >Check&nbsp;<img style="width:22px" src={ArrowWhite} alt="" /></span
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
    justify-content: flex-end;
  }
  .check-wrapper {
    font-size: 18px;
    font-weight: 600;
    color: #99319b;
    border: 1px solid #99319b;
    border-radius: 10px;
    overflow: hidden;
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
</style>
