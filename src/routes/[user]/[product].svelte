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
  import Arrow from "../../assets/arrow forward.png";
  import ArrowDown from "../../assets/arrow down.png";
  import ArrowWhite from "../../assets/arrow(white).png";
  import ArrowDark from "../../assets/arrow(dark).png";
  import ArrowPurple from "../../assets/arrow(purple).png";

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

  let navDotsContainer,
    currentSlide = 1;

  const moveRight = () => {
    const slider = document.getElementsByClassName("slider")[0];
    if (currentSlide < productImages.length) {
      if (screenWidth > 1200) {
        slider.style.transform = "translateX(-" + 450 * currentSlide + "px)";
      } else if (screenWidth <= 1200 && screenWidth > 900) {
        slider.style.transform = "translateX(-" + 360 * currentSlide + "px)";
      } else if (screenWidth <= 900 && screenWidth > 620) {
        slider.style.transform = "translateX(-" + 540 * currentSlide + "px)";
      } else if (screenWidth <= 620 && screenWidth > 480) {
        slider.style.transform = "translateX(-" + 405 * currentSlide + "px)";
      } else {
        slider.style.transform =
          "translateX(-" + moveSlider * currentSlide + "px)";
      }

      currentSlide++;
    }
  };
  const moveLeft = () => {
    const slider = document.getElementsByClassName("slider")[0];

    if (currentSlide > 1) {
      if (screenWidth > 1200) {
        slider.style.transform =
          "translateX(-" + 450 * (currentSlide - 2) + "px)";
      } else if (screenWidth <= 1200 && screenWidth > 900) {
        slider.style.transform =
          "translateX(-" + 360 * (currentSlide - 2) + "px)";
      } else if (screenWidth <= 900 && screenWidth > 620) {
        slider.style.transform =
          "translateX(-" + 540 * (currentSlide - 2) + "px)";
      } else if (screenWidth <= 620 && screenWidth > 480) {
        slider.style.transform =
          "translateX(-" + 405 * (currentSlide - 2) + "px)";
      } else {
        slider.style.transform =
          "translateX(-" + moveSlider * (currentSlide - 2) + "px)";
      }

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

  let dropdownOpen1 = false,
    dropdownopen2 = false;

  let screenWidth;

  $: moveSlider = screenWidth - 30;
  $: width = (screenWidth - 30).toString() + "px";
  $: sliderHeight = (((screenWidth - 30) * 10) / 9).toString() + "px";
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if PersonFound && ProductFound}
  <main style="--width:{width};--slider-height:{sliderHeight}">
    <div class="top">
      <div class="left">
        <div class="slider-wrapper">
          <div
            class="left-arrow"
            on:click={() => moveLeft()}
            style={currentSlide === 1 ? "display:none" : ""}
          >
            <img src={Arrow} alt="" />
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
            on:click={() => moveRight()}
            style={currentSlide === productImages.length ? "display:none" : ""}
          >
            <img src={Arrow} alt="" />
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
          <div class="seller-info non-responsive-mobile">
            <div
              class="pfp"
              style="background: url({pfp});background-size:cover;background-position:center;"
            />
            <span id="name-of-seller">{name}</span>
            <a href="/{username}" id="seller-link"
              >check&nbsp;<img
                class="arrow"
                src={ArrowPurple}
                style="width:25px;height:21px"
                alt=""
              /></a
            >
          </div>
          <div class="product-name">
            {productName}
            <a href="/{username}"
              ><div
                class="pfp responsive-mobile"
                style="background: url({pfp});background-size:cover;background-position:center;"
              /></a
            >
          </div>
          <div class="pricing">
            <span class="amount">₹ {productPrize}</span>
            <span class="discount">({discount}% DISCOUNT)</span>
          </div>
          <div class="variants-wrapper">
            {#if productSizes}
              <div
                class="product-sizes variant"
                style="border: {dropdownOpen1
                  ? '1px solid #444444'
                  : '0.8px solid #c4c4c4'};"
                on:click={() => {
                  dropdownOpen1 = !dropdownOpen1;
                  dropdownopen2 = false;
                }}
              >
                <span class="variant-heading">Sizes</span>
                <span
                  class="arrow-down"
                  style="background:url({ArrowDown});background-size:cover;background-position:center;{dropdownOpen1
                    ? 'transform:rotate(180deg)'
                    : ''}"
                />
                <div
                  class="variant-list"
                  style="display: {dropdownOpen1 ? 'block' : 'none'};"
                >
                  {#each productSizes as productSize}
                    <option
                      value={productSize}
                      on:click={(e) => {
                        e.path[2].children[0].innerHTML =
                          productSize.toUpperCase();

                        SizeChosen = true;
                        SizeChosenValue = e.target.innerHTML;

                        if (ColorChosen && SizeChosen) {
                          alertMsg = false;
                        }
                      }}>{productSize}</option
                    >
                  {/each}
                </div>
              </div>
            {/if}
            {#if productColors}
              <div
                class="product-colors variant"
                style="border: {dropdownopen2
                  ? '1px solid #444444'
                  : '0.8px solid #c4c4c4'};"
                on:click={() => {
                  dropdownopen2 = !dropdownopen2;
                  dropdownOpen1 = false;
                }}
              >
                <span class="variant-heading">Colours</span>
                <span
                  class="arrow-down"
                  style="background:url({ArrowDown});background-size:cover;background-position:center;{dropdownopen2
                    ? 'transform:rotate(180deg)'
                    : ''}"
                />
                <div
                  class="variant-list"
                  style="display: {dropdownopen2 ? 'block' : 'none'};"
                >
                  {#each productColors as productColor}
                    <option
                      class="product-color"
                      value={productColor}
                      on:click={(e) => {
                        e.path[2].children[0].innerHTML =
                          productColor.toUpperCase();

                        ColorChosen = true;
                        ColorChosenValue = e.target.innerHTML;

                        if (ColorChosen && SizeChosen) {
                          alertMsg = false;
                        }
                      }}>{productColor}</option
                    >
                  {/each}
                </div>
              </div>
            {/if}
          </div>
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
              }}
              >Buy Now&nbsp;<img src={ArrowWhite} class="arrow" alt="" /></span
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
        <h1 id="buzzar-review-icon">Buzzaar</h1>
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
        <span class="info-heading">Review this product here</span>
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

  .non-responsive-mobile {
    display: block;
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
    background: #fbfbfb;
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

    min-width: 450px;
  }
  .left-arrow,
  .right-arrow {
    cursor: pointer;
    background: #444444;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
  }
  .left-arrow {
    transform: translateY(-50%) scaleX(-1);
    margin-left: 10px;
  }
  .right-arrow {
    right: 0;
    margin-right: 10px;
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
    width: 160px;
    color: #444;
  }
  #seller-link {
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid #99319b;
    text-transform: uppercase;
    font-weight: 500;
    color: #99319b;
    font-size: 17px;
    display: flex;
  }
  .product-name {
    font-size: 28px;
    font-weight: 700;
    color: #444;
    margin: 10px 0;
  }
  .pricing {
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

  .variants-wrapper {
    display: grid;
    grid-gap: 30px;
    margin: 40px 0;
  }
  .variant {
    position: relative;
    border-radius: 10px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .variant-heading {
    font-size: 22px;
    font-weight: 500;
    color: #444444;
  }
  .arrow-down {
    width: 20px;
    height: 20px;
    transition: all 100ms;
  }
  .variant-list {
    position: absolute;
    top: 101%;
    background: #ffffff;
    width: 100%;
    left: 0;
    border: 0.8px solid #c4c4c4;
    border-radius: 10px;
    transition: all 200ms;
    z-index: 2;
    overflow: hidden;
  }
  .variant-list option {
    padding: 10px 30px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    color: #444444;
  }
  .variant-list option:hover {
    background-color: #e3e3e3;
  }
  .product-color {
    text-transform: capitalize;
  }
  /* .color-box {
    width: 50px;
    height: 20px;
    margin-right: 20px;
  } */
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
  }
  .final-pricing {
    border: 0.5px solid #99319b;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 600;
    color: #99319b;
    margin-left: auto;
  }
  .final-pricing span {
    padding: 15px;
  }
  .buy-now {
    color: #ffffff;
    display: inline-flex;
    background-color: #99319b;
    cursor: pointer;
  }

  .arrow {
    width: 26px;
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
    margin: 30px 150px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;
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
    width: 162px;
    height: 288px;

    border-radius: 10px;
  }
  .responsive-mobile {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    main {
      width: 800px;
    }
    .left,
    .slider-wrapper {
      width: 360px;
    }
    .product-image {
      min-width: 360px;
    }
    .slider-wrapper,
    .slider {
      height: 400px;
    }
    .right {
      width: 440px;
    }
    #name-of-seller {
      font-size: 24px;
    }
    #seller-link {
      padding: 12px 15px;
    }
    .product-name {
      font-size: 26px;
    }
    .variants-wrapper {
      margin: 30px 0;
    }
    .final-pricing-wrapper {
      margin: 30px;
    }
    .final-pricing {
      font-size: 20px;
    }
    .final-pricing span {
      padding: 10px 15px;
    }
    #buzzar-review-icon {
      font-size: 48px;
      padding: 50px 80px;
    }
    .question {
      font-size: 22px;
    }
    .review {
      font-size: 18px;
    }
    .product-info-heading {
      padding: 10px 50px;
      font-size: 24px;
    }
    .info-heading {
      font-size: 22px;
    }
    .review-this-product span {
      margin-left: 50px;
    }
    .product-for-review {
      width: 140px;
      height: 210px;
    }
  }

  @media screen and (max-width: 900px) {
    .responsive-mobile {
      display: block;
    }
    main {
      width: 540px;
    }
    .top {
      flex-direction: column;
    }
    .left,
    .right {
      width: 100%;
    }
    .slider-wrapper {
      width: 540px;
    }
    .product-image {
      min-width: 540px;
    }
    .slider-wrapper,
    .slider {
      height: 600px;
    }
    .prod-seller {
      margin: 0 45px;
    }
    .product-name {
      font-size: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .variants-wrapper {
      grid-template-columns: 1fr 1fr;
      margin: 25px 0 20px;
    }
    .seller-msg {
      padding: 30px 0;
    }
    #seller-name,
    #msg {
      margin: 0 30px;
    }
    #msg {
      font-size: 21px;
    }
    .buzzar-review {
      flex-direction: column;
    }
    #buzzar-review-icon {
      font-size: 45px;
      padding: 25px;
      text-align: center;
    }
    .buzzar-review-msg {
      border-radius: 0 0 10px 10px;
      border: 0.5px solid #c4c4c4;
      border-top: unset;
      padding: 35px;
      width: unset;
    }
    .product-info-heading {
      padding: 15px 30px;
    }
    .details {
      flex-direction: column;
      padding: 0 30px;
      margin: unset;
    }
    .details > div {
      margin-top: 25px;
    }
    .info {
      margin-top: 15px;
    }
    .review-this-product span {
      margin-left: 40px;
    }
    .review-product-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 32px;
      margin: 20px;
      width: unset;
      overflow: hidden;
      overflow-x: scroll;
      justify-content: unset;
    }
    .product-for-review {
      width: 100px;
      height: 150px;
    }
    .non-responsive-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 620px) {
    main {
      width: 405px;
    }
    .top {
      flex-direction: column;
    }
    .left,
    .right {
      width: 100%;
    }
    .slider-wrapper {
      width: 405px;
    }
    .product-image {
      min-width: 405px;
    }
    .slider-wrapper,
    .slider {
      height: 450px;
    }
    .navigation-dots {
      grid-gap: 15px;
    }
    .single-dot {
      width: 15px;
      height: 15px;
      box-shadow: 0 0 6px #444444cc;
    }
    .active-dot {
      width: 10px;
      height: 10px;
    }
    .prod-seller {
      margin: 0 30px;
    }
    .variant-heading {
      font-size: 20px;
    }
    .arrow-down {
      width: 15px;
      height: 15px;
    }
    #msg {
      font-size: 19px;
    }
    .final-pricing {
      font-size: 18px;
    }
    .arrow {
      width: 21px;
    }
    /* .review-product-grid {
      width: 405px;
    } */
  }
  @media screen and (max-width: 480px) {
    main {
      padding: 15px;
      width: var(--width);
      background: #fbfbfb;
    }

    .slider-wrapper,
    .slider {
      height: var(--slider-height);
    }
    .slider-wrapper,
    .product-image {
      min-width: var(--width);
    }

    .product-name {
      font-size: 24px;
    }
    .amount {
      font-size: 20px;
    }
    .discount {
      font-size: 15px;
    }
    .pfp {
      width: 35px;
      height: 35px;
    }
    .variant {
      padding: 10px 20px;
    }
    .variant-heading {
      font-size: 18px;
    }
    .arrow-down {
      width: 18px;
    }
    .variant-list option {
      font-size: 16px;
    }
    #seller-name {
      font-size: 15px;
    }
    #msg {
      font-size: 17px;
    }
    .final-pricing {
      font-size: 16px;
    }
    .final-pricing span {
      padding: 10px 15px;
    }
    .arrow {
      width: 19px;
    }
    .buzzar-review-msg {
      padding: 20px;
    }
    .question {
      font-size: 18px;
      margin-bottom: 8px;
    }
    .review {
      font-size: 16px;
    }
    .product-info-heading {
      font-size: 21px;
      padding: 15px 20px;
    }
    .details {
      padding: 0 20px;
    }
    .details > div {
      margin-top: 25px;
    }
    .info-heading {
      font-size: 20px;
    }
    .info {
      font-size: 18px;
      margin-top: 10px;
    }

    .review-this-product .info-heading {
      padding: 15px 20px;
      margin: unset;
    }
    .product-for-review {
      width: 90px;
      height: 160px;
    }
  }

  @media screen and (max-width: 400px) {
    .variants-wrapper {
      grid-gap: 20px;
    }
    .variant-heading {
      font-size: 16px;
    }
    .arrow-down {
      width: 15px;
    }
  }
</style>
