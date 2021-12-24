<script context="module">
  export async function preload(page) {
    const { user, product } = page.params;
    console.log(page);
    return { user, product };
  }
</script>

<script>
  export let user, product;
  console.log(user, product);

  import UserData from "../../data";
  import BuyNowModal from "../../components/BuyNowModal.svelte";
  import { children } from "svelte/internal";

  let PersonFound = false,
    ProductFound = false,
    ColorChosen = true,
    SizeChosen = true,
    ColorChosenValue,
    SizeChosenValue;

  export let modalOpen;
  let alertMsg = false;
  modalOpen = false;

  const Person = UserData.find((person) => {
    PersonFound = true;
    return person.username === user;
  });

  const { name, pfp, username } = Person;

  const Product = Person.products.find((item) => {
    ProductFound = true;
    return item.productId.toString() === product;
  });

  const {
    productName,
    productPrize,
    productSizes,
    productColors,
    productImages,
    sellerMessage,
    buzzarMessage,
    discount,
    description,
    delivery,
    productForReview,
  } = Product;

  if (productSizes) {
    SizeChosen = false;
  }
  if (productColors) {
    ColorChosen = false;
  }

  let leftBtn,
    rightBtn,
    navDotsContainer,
    currentSlide = 1;

  const moveRight = () => {
    const slider = document.getElementsByClassName("slider")[0];
    if (currentSlide < productImages.length) {
      slider.style.transform = "translateX(-" + 450 * currentSlide + "px)";
      currentSlide++;
    }
  };
  const moveLeft = () => {
    const slider = document.getElementsByClassName("slider")[0];
    if (currentSlide > 1) {
      slider.style.transform =
        "translateX(-" + 450 * (currentSlide - 2) + "px)";
      currentSlide--;
    }
  };

  $: navDots = navDotsContainer;
  $: {
    if (navDots) {
      for (let i = 0; i < navDots.children.length; i++) {
        navDots.children[i].classList.remove("active-dot");
      }
      navDots.children[currentSlide - 1].classList.add("active-dot");
    }
  }
</script>

{#if PersonFound && ProductFound}
  <main>
    <div class="top">
      <div class="left">
        <div class="slider-wrapper">
          <div
            class="left-arrow"
            bind:this={leftBtn}
            on:click={() => moveLeft()}
          >
            left
          </div>
          <div class="slider">
            {#each productImages as productImage}
              <div
                class="product-image"
                style="background: url({productImage});background-position: center;background-size: 100%;background-repeat:no-repeat"
              />
            {/each}
          </div>
          <div
            class="right-arrow"
            bind:this={rightBtn}
            on:click={() => moveRight()}
          >
            right
          </div>

          <div class="navigation-dots" bind:this={navDotsContainer}>
            {#each productImages as productImg}
              <div class="single-dot active-dot" />
            {/each}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="prod-seller">
          <div class="seller-info">
            <div
              class="pfp"
              style="background: url({pfp});background-size:cover;background-position:center;"
            />
            <span id="name-of-seller">{name}</span>
            <a href="/{username}" id="seller-link">check</a>
          </div>
          <div class="product-name">{productName}</div>
          <div class="pricing">
            <span class="amount">₹ {productPrize}</span>
            <span class="discount">({discount}% DISCOUNT)</span>
          </div>
          {#if productSizes}
            <div class="product-sizes">
              {#each productSizes as productSize}
                <span
                  class="product-size"
                  on:click={(e) => {
                    const allSize =
                      document.getElementsByClassName("product-size");

                    for (let i = 0; i < allSize.length; i++) {
                      allSize[i].style.backgroundColor = "white";
                      allSize[i].style.border = "0.8px solid #c4c4c4";
                      allSize[i].style.color = "#444444";
                    }

                    e.target.style.backgroundColor = "#99319b";
                    e.target.style.border = "0.8px solid #99319b";
                    e.target.style.color = "#ffffff";

                    SizeChosen = true;
                    SizeChosenValue = e.target.innerHTML;

                    if (ColorChosen && SizeChosen) {
                      alertMsg = false;
                    }
                  }}>{productSize}</span
                >
              {/each}
            </div>
          {/if}
          {#if productColors}
            <div class="product-colors">
              {#each productColors as productColor}
                <span
                  class="product-color"
                  style="color: {productColor};"
                  on:click={(e) => {
                    const allColors =
                      document.getElementsByClassName("product-color");

                    for (let i = 0; i < allColors.length; i++) {
                      allColors[i].style.backgroundColor = "white";
                      allColors[i].style.border = "0.5px solid #c4c4c4";
                      allColors[i].style.color = allColors[i].innerHTML;
                    }

                    e.target.style.backgroundColor = productColor;
                    e.target.style.border = `0.8px solid ${productColor}`;
                    e.target.style.color = "#ffffff";

                    ColorChosen = true;
                    ColorChosenValue = e.target.innerHTML;

                    if (ColorChosen && SizeChosen) {
                      alertMsg = false;
                    }
                  }}>{productColor}</span
                >
              {/each}
            </div>
          {/if}
        </div>
        {#if sellerMessage}
          <div class="seller-msg">
            <span id="seller-name">{name}'s message</span>
            <p id="msg">{sellerMessage}</p>
          </div>
        {/if}

        <div class="final-pricing-wrapper">
          <div class="final-pricing">
            <span class="final-amount"
              >₹ {productPrize - productPrize * (discount / 100)}</span
            >
            <span
              class="buy-now"
              on:click={(e) => {
                if (SizeChosen && ColorChosen) {
                  modalOpen = true;
                  alertMsg = false;
                } else {
                  alertMsg = true;
                }
              }}>Buy Now</span
            >
          </div>
        </div>

        {#if alertMsg}
          <div class="alert-msg">
            *
            {#if !SizeChosen && !ColorChosen}
              Choose valid size and color.
            {:else if !SizeChosen}
              Choose valid size.
            {:else if !ColorChosen}
              Choose valid color.
            {/if}
          </div>
        {/if}
      </div>
    </div>

    {#if buzzarMessage}
      <div class="buzzar-review">
        <h1 id="buzzar-review-icon">Buzzar</h1>
        <div class="buzzar-review-msg">
          <span class="question">What's special about this product?</span>
          <span class="review">{buzzarMessage}</span>
        </div>
      </div>
    {/if}

    <div class="product-info">
      <div class="product-info-heading">Product Details</div>
      <div class="details">
        <div class="description-wrapper">
          <span class="info-heading">Description</span>
          <ul class="info">
            {#each description as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>
        <div class="delivery-wrapper">
          <span class="info-heading">Shipping & Delivery</span>
          <ul class="info">
            {#each delivery as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>
      </div>
      <div class="review-this-product">
        <span class="info-heading">Review these products</span>
        <div class="review-product-grid">
          {#each productForReview as product}
            <div
              class="product-for-review"
              style="background: url({product});background-position:center;background-size:cover;"
            />
          {/each}
        </div>
      </div>
    </div>
  </main>

  {#if modalOpen}
    <BuyNowModal {SizeChosenValue} {ColorChosenValue} {Product} />
  {/if}
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  a {
    text-decoration: none;
  }
  main {
    width: 1000px;
    padding-top: 60px;
    margin: auto;
    font-family: "Montserrat", sans-serif;
    position: relative;
  }
  .top {
    display: flex;
    border: 0.5px solid #c4c4c4;
    border-radius: 10px;
  }
  .left {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* .slider-wrapper,
  .product-image {
    width: 450px;
    height: 500px;
  }
  .slider-wrapper {
    overflow: hidden;
    border-radius: 10px;
    background: rgba(68, 68, 68, 0.05);
    position: relative;
  }
  .slider {
    overflow: hidden;
    display: grid;
    grid-template-columns: 100% 100% 100% 100%;
  } */
  .slider-wrapper {
    position: relative;
    width: 450px;
    height: 500px;
    overflow: hidden;
  }
  .slider {
    height: 500px;
    width: 400%;
    display: flex;
    position: absolute;
    transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .product-image {
    height: 100%;

    width: 450px;
  }
  .left-arrow,
  .right-arrow {
    background: #eee;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  .right-arrow {
    right: 0;
  }
  .navigation-dots {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .single-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 0px 10px #444444;
  }
  .active-dot {
    width: 12px;
    height: 12px;
    margin: 2px 0;
    background: #eeeeee;
  }

  .right {
    width: 45%;
    border-left: 0.5px solid #c4c4c4;
  }
  .prod-seller {
    margin: 0 30px;
  }
  .seller-info {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pfp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #name-of-seller {
    font-size: 26px;
    font-weight: 600;
    width: 200px;
    color: #444;
  }
  #seller-link {
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid #99319b;
    text-transform: uppercase;
    font-weight: 500;
    color: #99319b;
  }
  .product-name {
    font-size: 28px;
    font-weight: 700;
    color: #444;
    margin: 10px 0;
  }
  .pricing {
    margin: 5px 0 30px 0;
    color: #444;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .discount {
    font-weight: 400;
    font-size: 17px;
  }
  .product-sizes {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }
  .product-size {
    font-size: 27px;
    font-weight: 600;
    color: #444;
    border: 0.8px solid #c4c4c4;
    border-radius: 5px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-colors {
    display: flex;
    justify-content: space-between;
    margin: 35px 0;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
  }
  .product-color {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #c4c4c4;
    border-radius: 5px;
  }
  .seller-msg {
    padding: 15px 0;
    width: 100%;
    background: rgb(239 239 239 / 60%);
  }
  #seller-name {
    margin: 0 25px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    color: rgb(68 68 68 / 40%);
  }
  #msg {
    font-size: 19px;
    color: #444444;
    font-weight: 500;
    margin: 0px 25px;
    padding: 5px 25px 0 0;
  }
  .final-pricing-wrapper {
    margin: 35px;
    display: flex;
    justify-content: end;
  }
  .final-pricing {
    border: 0.5px solid #99319b;
    padding: 15px 0;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 600;
    color: #99319b;
  }
  .final-pricing span {
    padding: 15px;
  }
  .buy-now {
    color: #ffffff;
    background-color: #99319b;
  }
  .alert-msg {
    margin: 0 35px;
    margin-bottom: 20px;
    color: #ff0000;
    font-size: 14px;
    font-style: italic;
    text-align: end;
  }
  .buzzar-review {
    width: 100%;
    display: flex;
    margin: 50px 0;
    border-radius: 10px;
    overflow: hidden;
  }
  #buzzar-review-icon {
    font-size: 60px;
    font-family: "DM SERIF DISPLAY", sans-serif;
    color: white;
    font-style: italic;
    background: #99319b;
    padding: 50px 100px;
    font-weight: 500;
  }
  .buzzar-review-msg {
    border: 0.5px solid #c4c4c4;
    border-radius: 0 10px 10px 0;
    border-left: unset;
    width: 100%;
    padding: 20px 50px;
  }
  .question {
    display: block;
    color: #444444;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .review {
    font-size: 20px;
    font-weight: 500;
    color: rgb(68 68 68 / 70%);
  }
  .product-info {
    border: 0.5px solid #c4c4c4;
    border-radius: 10px;
    color: #444444;
  }
  .product-info-heading {
    border-bottom: 0.5px solid #c4c4c4;
    padding: 10px 150px;
    font-size: 26px;
    font-weight: 700;
  }
  .details {
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0;
  }
  .info-heading {
    font-size: 24px;
    font-weight: 600;
  }
  .info {
    list-style: none;
    margin-top: 20px;
  }
  .info li {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 500;
    line-height: 30px;
  }
  .info li::before {
    content: "•";
    color: #444444;
    display: inline-block;
    width: 1em;
  }
  .review-this-product {
    padding-top: 30px;
  }
  .review-this-product span {
    margin-left: 150px;
  }
  .review-product-grid {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px 0;
  }
  .product-for-review {
    width: 160px;
    height: 240px;
    border-radius: 10px;
  }
</style>
