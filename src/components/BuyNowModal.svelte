<script>
  // import Product from "../routes/[user]/[product].svelte";
  import Arrow from "../assets/arrow(dark).png";
  import ArrowForward from "../assets/arrow forward.png";
  import Upload from "../assets/upload.png";

  export let SizeChosenValue, ColorChosenValue, Product;

  let form;

  const deliveryCharge = 50;

  console.log(Product);
  let name,
    email,
    std1 = "+91",
    phone1,
    address,
    landmark,
    std2 = "+91",
    phone2;

  function checkForm() {
    return true;
  }

  let translateXvalue = 0;
  function prevSlide(e) {
    const slide = document.getElementsByClassName("slide");
    console.log(slide.length);
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.visibility = "hidden";
    }
    const modal = document.getElementsByClassName("modal");
    translateXvalue = translateXvalue - (Product.customization ? 25 : 100 / 3);
    modal[0].style.transform = `translateX(-${translateXvalue}%)`;
    e.path[2].previousElementSibling.style.visibility = "visible";
  }

  function nextSlide(e) {
    const slide = document.getElementsByClassName("slide");
    console.log(slide.length);
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.visibility = "hidden";
    }
    const modal = document.getElementsByClassName("modal");
    translateXvalue = translateXvalue + 100 / (Product.customization ? 4 : 3);
    modal[0].style.transform = `translateX(-${translateXvalue}%)`;
    e.path[3].nextElementSibling.style.visibility = "visible";
  }

  let navDotsContainer,
    currentSlide = 1;

  const moveRight = () => {
    const slider = document.getElementsByClassName("slider")[1];
    console.log(slider);
    if (currentSlide < Product.productImages.length) {
      if (screenWidth > 1100) {
        slider.style.transform = "translateX(-" + 405 * currentSlide + "px)";
      } else if (screenWidth >= 480 && screenWidth < 1100) {
        slider.style.transform = "translateX(-" + 315 * currentSlide + "px)";
      } else {
        slider.style.transform =
          "translateX(-" + moveSlider * currentSlide + "px)";
      }

      currentSlide++;
    }
  };
  const moveLeft = () => {
    const slider = document.getElementsByClassName("slider")[1];
    console.log(slider);
    if (currentSlide > 1) {
      if (screenWidth > 1100) {
        slider.style.transform =
          "translateX(-" + 405 * (currentSlide - 2) + "px)";
      } else if (screenWidth >= 480 && screenWidth < 1100) {
        slider.style.transform =
          "translateX(-" + 315 * (currentSlide - 2) + "px)";
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

  let screenWidth, stdCodeInputWidth;

  $: moveSlider = screenWidth - 80;
  $: inputWidth = (screenWidth - 90).toString() + "px";
  $: phoneInputWidth = (screenWidth - 90 - stdCodeInputWidth).toString() + "px";
  $: productReviewWidth = (screenWidth - 80).toString() + "px";
  $: sliderHeight = (((screenWidth - 80) * 10) / 9).toString() + "px";
  $: deliveryAddressBoxWidth = (screenWidth - 140).toString() + "px";
</script>

<svelte:window bind:innerWidth={screenWidth} />
<main
  style="--input-width:{inputWidth};--phone-input-width:{phoneInputWidth};--product-review-width:{productReviewWidth};--slider-height:{sliderHeight};--delivery-address-box-width:{deliveryAddressBoxWidth}"
>
  <div class="modal-container">
    <div
      class="modal"
      style="width: {Product.customization ? '400%' : '300%'};"
    >
      {#if Product.customization}
        <div class="slide">
          <div class="heading-wrapper">
            <img src={Arrow} alt="" class="back-arrow" />
            <span class="heading non-responsive-mobile"
              >customize your product</span
            >
            <span class="page" />
          </div>
          <span class="heading responsive-mobile">customize your product</span>
          <div class="customization-wrapper">
            <div class="flex flex-column input-label">
              <label for="customization-field-1"
                >How do you want to customize it?</label
              >
              <textarea
                name="customization-field-1"
                id="customization-field-1"
                cols="30"
                rows="3"
              />
            </div>
            <div class="flex flex-column input-label">
              <label for="customization-field-2"
                >Upload Picture of Customization ( if any )</label
              >
              <label for="customization-field-2" id="customization-label"
                >UPLOAD <img src={Upload} alt="" /></label
              >
              <input
                type="file"
                name="customization-field-2"
                id="customization-field-2"
              />
            </div>
            <div class="flex flex-column input-label">
              <label for="customization-field-3"
                >Any specific note for the seller (eg- Gift pack, a special
                note, etc)</label
              >
              <textarea
                name="customization-field-1"
                id="customization-field-1"
                cols="30"
                rows="3"
              />
            </div>
            <div class="btn-container">
              <button type="submit" class="btn" on:click={(e) => nextSlide(e)}
                >save & next</button
              >
            </div>
          </div>
        </div>
      {/if}
      <div class="slide">
        <div class="heading-wrapper">
          <img
            src={Arrow}
            alt=""
            class="back-arrow"
            on:click={(e) => {
              form.reset();
              if (Product.customization) {
                prevSlide(e);
              }
            }}
          />
          <span class="heading non-responsive-mobile"
            >create your profile card</span
          >
          <span class="page">1 / 3</span>
        </div>
        <span class="heading responsive-mobile">create your profile card</span>
        <form class="form" on:submit|preventDefault bind:this={form}>
          <div class="flex flex-column-responsive grid-at-1100">
            <div class="flex flex-column input-label">
              <label for="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                bind:value={name}
                required
              />
            </div>
            <div class="flex flex-column input-label">
              <label for="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                bind:value={email}
                required
              />
            </div>
            <div class="flex flex-column input-label">
              <label for="phone1">contact no.</label>
              <div>
                <div
                  bind:clientWidth={stdCodeInputWidth}
                  style="display: inline-block;"
                >
                  <input type="text" class="phone-code" bind:value={std1} />
                </div>

                <input
                  type="tel"
                  name="phone1"
                  id="phone1"
                  maxlength="10"
                  minlength="10"
                  pattern="[0-9]{10}"
                  bind:value={phone1}
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex flex-column">
            <div class="input-heading">delivery address</div>
            <div class="address-info">
              <div class="flex flex-column input-label">
                <label for="address">address</label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="4"
                  bind:value={address}
                  required
                />
              </div>
              <div class="flex flex-column-responsive grid-at-1100">
                <div class="flex flex-column input-label">
                  <label for="landmark">landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    id="landmark"
                    bind:value={landmark}
                  />
                </div>
                <div class="flex flex-column input-label">
                  <label for="phone2">alternate contact no.</label>
                  <div>
                    <input type="text" class="phone-code" bind:value={std2} />
                    <input
                      type="tel"
                      name="phone2"
                      id="phone2"
                      maxlength="10"
                      minlength="10"
                      pattern="[0-9]{10}"
                      bind:value={phone2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-container">
            <button
              type="submit"
              class="btn"
              on:click={(e) => {
                if (checkForm()) {
                  nextSlide(e);
                }
              }}>save & next</button
            >
          </div>
        </form>
      </div>
      <div class="slide">
        <div class="heading-wrapper">
          <img
            src={Arrow}
            alt=""
            class="back-arrow"
            on:click={(e) => prevSlide(e)}
          />

          <span class="heading non-responsive-mobile"
            >confirm your product card</span
          >
          <span class="page">2 / 3</span>
        </div>
        <span class="heading responsive-mobile">confirm your product card</span>
        <div class="product-review-wrapper">
          <div class="slider-wrapper">
            <div
              class="left-arrow"
              on:click={() => moveLeft()}
              style={currentSlide === 1 ? "display:none" : ""}
            >
              <img src={ArrowForward} alt="" />
            </div>
            <div class="slider">
              {#each Product.productImages as productImage}
                <div
                  class="product-image"
                  style="background: url({productImage});background-position: center;background-size: 100%;background-repeat:no-repeat"
                />
              {/each}
            </div>
            <div
              class="right-arrow"
              on:click={() => moveRight()}
              style={currentSlide === Product.productImages.length
                ? "display:none"
                : ""}
            >
              <img src={ArrowForward} alt="" />
            </div>

            <div class="navigation-dots" bind:this={navDotsContainer}>
              {#each Product.productImages as productImg}
                <div class="single-dot active-dot" />
              {/each}
            </div>
          </div>
          <div class="product-info">
            <div class="product-info-container">
              <div class="product-heading-wrapper flex">
                <span class="product-heading">{Product.productName}</span>
                <span class="amount">₹ {Product.productPrize}</span>
              </div>
              {#if SizeChosenValue != "" || ColorChosenValue != ""}
                <div class="specs">
                  {#if SizeChosenValue}
                    <div>
                      <span class="key">SIZE: </span><span class="value"
                        >{SizeChosenValue}</span
                      >
                    </div>
                  {/if}
                  {#if ColorChosenValue}
                    <div>
                      <span class="key">COLOR: </span><span class="value"
                        >{ColorChosenValue}</span
                      >
                    </div>
                  {/if}
                </div>
              {/if}
            </div>
            <div class="product-info-container">
              <div class="product-heading-wrapper flex">
                <span class="product-heading">Delivery Charges</span>
                <span class="amount">₹ {deliveryCharge}</span>
              </div>
              <div class="address-wrapper">
                <span class="address-heading">DELIVERY ADDRESS</span>
                <span class="reciever-name">{name}, {std1}-{phone1}</span>
                <p class="address">{address}</p>
              </div>
            </div>
            <div class="checkout-wrapper">
              <div class="checkout-section">
                <span class="final-amount"
                  >₹ {Product.productPrize + deliveryCharge}</span
                >
                <span
                  class="checkout"
                  on:click={(e) => {
                    nextSlide(e);
                  }}>Checkout</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="heading-wrapper">
          <img
            src={Arrow}
            alt=""
            class="back-arrow"
            on:click={(e) => prevSlide(e)}
          />

          <span class="heading non-responsive-mobile">payment</span>
          <span class="page">3 / 3</span>
        </div>
        <span class="heading responsive-mobile">payment</span>
        <div class="payment-wrapper" />
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  .non-responsive-mobile {
    display: block;
  }

  main {
    background: rgba(0, 0, 0, 0.7);
    width: calc(100vw + 100px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: -100px;
    z-index: 5;
  }
  .modal-container {
    width: 1000px;
    border-radius: 15px;
    margin-left: 100px;
    overflow: hidden;
  }
  .modal {
    text-transform: uppercase;
    font-family: "Montserrat";
    color: #444444;
    display: flex;
    align-items: center;
  }
  .slide {
    width: calc(100% / 3);
    background-color: #ffffff;
    border: 0.7px solid #c4c4c4;
    border-radius: 15px;
  }
  .heading-wrapper {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    border-bottom: 0.7px solid #c4c4c4;
  }
  .back-arrow {
    cursor: pointer;
    width: 25px;
    transform: scale(-1);
  }
  .heading {
    font-weight: 700;
  }
  .page {
    font-weight: 500;
  }

  .customization-wrapper {
    padding: 30px 70px;
  }
  .form {
    padding: 40px;
    font-size: 16px;
    font-weight: 500;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .flex-column {
    flex-direction: column;
  }
  .input-heading {
    font-weight: 600;
    margin: 25px 0 15px 0;
    font-size: 18px;
  }
  .address-info {
    width: 90%;
    margin: auto;
  }
  input,
  textarea {
    padding: 15px;
    border: 0.8px solid #c4c4c4;
    border-radius: 7px;
    outline: none;
    margin-top: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
  }
  textarea {
    resize: none;
  }
  .input-label {
    margin-bottom: 15px;
  }
  .phone-code {
    width: 30px;
    margin-right: 5px;
  }
  #customization-label {
    width: fit-content;
    cursor: pointer;
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 500;
    color: #99319b;
    display: flex;
    align-items: center;
    border: 0.8px solid #c4c4c4;
    border-radius: 7px;
    margin-top: 8px;
  }
  #customization-label img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  #customization-field-2 {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  #name {
    width: 200px;
  }
  #email {
    width: 250px;
  }
  #phone1,
  #phone2 {
    width: 150px;
  }
  #landmark {
    width: 300px;
  }
  .btn-container {
    display: flex;
    justify-content: end;
  }
  .btn {
    display: inline-block;
    padding: 20px;
    background: #99319b;
    color: #ffffff;
    text-transform: capitalize;
    font-weight: 500;
    border-radius: 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    border: unset;
    margin: 15px 10px 0 0;
  }
  .product-review-wrapper {
    text-transform: none;
    display: flex;
    padding: 50px;
  }
  .slider-wrapper {
    position: relative;
    width: 405px;
    height: 450px;
    overflow: hidden;
  }
  .slider {
    height: 450px;
    width: 400%;
    display: flex;
    position: absolute;
    transition: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .product-image {
    height: 100%;
    width: 405px;
  }
  .left-arrow,
  .right-arrow {
    background: #444444;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 2;
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
  .product-info {
    margin-left: 50px;
    width: 48%;
  }
  .product-info-container {
    margin-bottom: 60px;
  }
  .product-heading-wrapper {
    margin-bottom: 10px;
    align-items: center;
  }
  .product-heading {
    font-size: 25px;
    font-weight: 700;
  }
  .amount {
    font-size: 22px;
    color: #99319b;
    font-weight: 600;
  }
  .specs {
    font-size: 19px;
    color: rgb(68 68 68 / 70%);
    font-weight: 600;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .value {
    color: #444444;
    margin-right: 40px;
    text-transform: uppercase;
  }
  .address-wrapper {
    border: 0.8px solid #c4c4c4;
    padding: 20px 40px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
  }
  .address-heading {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .reciever-name {
    font-size: 18px;
    font-weight: 700;
  }
  .address {
    font-size: 18px;
    font-weight: 500;
    margin-top: 5px;
  }
  .checkout-wrapper {
    display: flex;
    justify-content: end;
  }
  .checkout-section {
    border: 0.7px solid #99319b;
    border-radius: 5px;
    padding: 20px 0;
    color: #99319b;
    font-size: 19px;
    font-weight: 600;
    overflow: hidden;
  }
  .checkout-section span {
    padding: 20px 15px;
  }
  .checkout {
    color: #ffffff;
    background: #99319b;
  }
  .payment-wrapper {
    padding: 30px;
  }
  .responsive-mobile {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    .modal-container {
      width: 800px;
    }

    .grid-at-1100 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .product-review-wrapper {
      justify-content: space-between;
    }
    .slider-wrapper,
    .product-image {
      width: 315px;
    }

    .slider-wrapper,
    .slider {
      height: 350px;
    }
    .product-info {
      width: 350px;
      margin-left: unset;
    }
    .specs {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
    .value {
      margin-right: unset;
    }
    .address-wrapper {
      padding: 20px;
    }
  }

  @media screen and (max-width: 850px) {
    .modal-container {
      width: 500px;
    }
    .grid-at-1100 {
      grid-template-columns: 1fr;
    }
    .customization-wrapper {
      padding: 30px;
    }
    #name,
    #email,
    #landmark {
      width: 80%;
    }
    #phone1,
    #phone2 {
      width: 63%;
    }
    .input-label {
      margin-bottom: 10px;
    }
    input,
    textarea {
      margin-top: 4px;
    }
    .product-review-wrapper {
      flex-direction: column;
      padding: 30px;
    }
    .slider-wrapper {
      margin: auto;
    }
    .product-info {
      width: 100%;
      margin-top: 30px;
    }
    .specs {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 550px) {
    .modal-container {
      width: 450px;
    }
  }
  @media screen and (max-width: 480px) {
    .responsive-mobile {
      display: block;
    }

    main {
      width: 100%;
      left: 0;
      display: unset;
      height: unset;
      position: absolute;
    }
    .modal-container {
      width: 100%;
      border-radius: unset;
      margin-left: unset;
    }
    .modal {
      align-items: unset;
    }

    .slide {
      border-radius: unset;
      height: fit-content;
      min-height: 100vh;
    }
    .heading {
      text-align: center;
      margin-top: 30px;
      font-size: 18px;
    }
    .form {
      padding: 30px;
    }
    .flex-column-responsive {
      flex-direction: column;
    }
    .input-label {
      margin-bottom: 30px;
    }
    .input-label > div {
      display: flex;
    }
    #customization-label {
      padding: 10px 15px;
      font-size: 16px;
    }
    #customization-label img {
      width: 16px;
      height: 16px;
    }
    #name,
    #email,
    #landmark {
      width: var(--input-width);
    }
    #phone1,
    #phone2 {
      width: var(--phone-input-width);
    }
    .input-heading {
      margin: 15px 0 30px;
    }
    .address-info {
      width: 100%;
    }
    .product-review-wrapper {
      width: 100%;
      flex-direction: column;
      padding: 40px;
    }
    .slider-wrapper {
      width: var(--product-review-width);
      height: var(--slider-height);
      margin: unset;
    }
    .slider {
      height: var(--slider-height);
    }
    .product-image {
      width: var(--product-review-width);
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
    .product-info {
      margin: unset;
      margin-top: 15px;
      width: var(--product-review-width);
    }
    .product-info-container {
      margin-bottom: 45px;
    }
    .product-heading {
      font-size: 23px;
    }
    .amount {
      font-size: 21px;
    }
    .specs {
      font-size: 17px;
      display: flex;
      justify-content: space-between;
      width: var(--product-review-width);
    }
    .value {
      margin: unset;
    }
    .address-wrapper {
      padding: 15px 30px;
      width: var(--delivery-address-box-width);
      margin-top: 20px;
    }
    .checkout-section {
      padding: 15px 0;
      font-size: 17px;
    }
    .checkout-section span {
      padding: 15px;
    }
    .address-heading,
    .reciever-name,
    .address {
      font-size: 17px;
    }

    .non-responsive-mobile {
      display: none;
    }
  }
</style>
