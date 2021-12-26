<script>
  // import Product from "../routes/[user]/[product].svelte";
  import Arrow from "../assets/arrow(dark).png";
  import ArrowForward from "../assets/arrow forward.png";

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
  function nextSlide(e) {
    const checked = checkForm();
    if (checked) {
      const slide = document.getElementsByClassName("slide");
      console.log(slide.length);
      for (let i = 0; i < slide.length; i++) {
        slide[i].style.visibility = "hidden";
      }
      const modal = document.getElementsByClassName("modal");
      translateXvalue = translateXvalue + 100 / 3;
      modal[0].style.transform = `translateX(-${translateXvalue}%)`;
      console.log(e.path[3].nextElementSibling);
      e.path[3].nextElementSibling.style.visibility = "visible";
    }
  }

  let navDotsContainer,
    currentSlide = 1;

  const moveRight = () => {
    const slider = document.getElementsByClassName("slider")[1];
    console.log(slider);
    if (currentSlide < Product.productImages.length) {
      slider.style.transform = "translateX(-" + 405 * currentSlide + "px)";
      currentSlide++;
    }
  };
  const moveLeft = () => {
    const slider = document.getElementsByClassName("slider")[1];
    console.log(slider);
    if (currentSlide > 1) {
      slider.style.transform =
        "translateX(-" + 405 * (currentSlide - 2) + "px)";
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

<main>
  <div class="modal-container">
    <div class="modal">
      <div class="slide">
        <div class="heading-wrapper">
          <img
            src={Arrow}
            alt=""
            class="back-arrow"
            on:click={() => {
              form.reset();
            }}
          />
          <span class="heading">create your profile card</span>
          <span class="page">1 / 3</span>
        </div>
        <form class="form" on:submit|preventDefault bind:this={form}>
          <div class="flex">
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
                <input type="text" class="phone-code" bind:value={std1} />
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
              <div class="flex">
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
            <button type="submit" class="btn" on:click={(e) => nextSlide(e)}
              >save & next</button
            >
          </div>
        </form>
      </div>
      <div class="slide">
        <div class="heading-wrapper">
          <img src={Arrow} alt="" class="back-arrow" />

          <span class="heading">confirm your product card</span>
          <span class="page">2 / 3</span>
        </div>
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
                    <span class="key">SIZE: </span><span class="value"
                      >{SizeChosenValue}</span
                    >
                  {/if}
                  {#if ColorChosenValue}
                    <span class="key">COLOR: </span><span class="value"
                      >{ColorChosenValue}</span
                    >
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
      <div class="slide" />
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
    overflow: hidden;
  }
  .modal {
    width: 300%;
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
</style>
