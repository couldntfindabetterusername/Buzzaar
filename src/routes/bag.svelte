<script>
  import ArrowWhite from "../assets/arrow(white).png";

  const cartProducts = [
    {
      productId: 1,
      productName: "Satin Top",
      productImages: [
        "https://source.unsplash.com/random2",
        "https://source.unsplash.com/random3",
        "https://source.unsplash.com/random4",
        "https://source.unsplash.com/random5",
      ],

      productColors: ["red", "violet", "brown"],
      productSizes: ["s", "m", "l", "xl"],
      productPrize: 599,
      sellerMessage: "Great Product with best affordable price",
      buzzarMessage:
        "Great Product with best affordable pricekaelnaelnaiefj  jdc ",
      discount: 10,
      description: [
        "satin fabric",
        "backless strap",
        "western fashion",
        "smooth and silky",
      ],
      delivery: ["free delivery inmumbai"],
      productForReview: [
        "https://source.unsplash.com/nature",
        "https://source.unsplash.com/nature",
        "https://source.unsplash.com/nature",
        "https://source.unsplash.com/nature",
      ],
    },
    {
      productId: 2,
      productName: "Satin pop",
      productImages: [
        "https://source.unsplash.com/random2",
        "https://source.unsplash.com/random3",
        "https://source.unsplash.com/random4",
        "https://source.unsplash.com/random5",
      ],

      productColors: ["red", "violet", "brown"],
      productSizes: ["s", "m", "l"],
      productPrize: 599,
      sellerMessage: "Great Product with best affordable price",
      buzzarMessage:
        "Great Product with best affordable pricekaelnaelnaiefj  jdc ",
      discount: 10,
      description: [
        "satin fabric",
        "backless strap",
        "western fashion",
        "smooth and silky",
      ],
      delivery: ["free delivery inmumbai"],
      productForReview: [
        "https://source.unsplash.com/nature",
        "https://source.unsplash.com/nature",
        "https://source.unsplash.com/nature",
        "https://source.unsplash.com/nature",
      ],
    },
  ];

  let totalitems = 0,
    totalamount = 0;
  //   $: totalItems = totalitems;
  //   $: totalAmount = totalamount;

  cartProducts.map((product) => {
    totalitems++;
    totalamount = totalamount + product.productPrize;
  });

  console.log(totalitems);
</script>

<main>
  <span class="heading">Shopping Bag</span>
  <article>
    <div class="products-container">
      {#each cartProducts as product}
        <div class="product">
          <div class="cancel-btn" />
          <div
            class="img-container"
            style="background: url({product
              .productImages[0]});background-size:cover;background-position:center"
          />
          <div class="right">
            <div class="product-name">{product.productName}</div>
            <div class="amount amount-0 amount-1">₹ {product.productPrize}</div>
            <div class="product-info">
              <span class="key">size: </span><span class="value">m</span>
            </div>
            <div class="product-info">
              <span class="key">color: </span><span class="value">yellow</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <aside>
      <div class="info-container">
        <span class="sub-heading">Price details</span>
        <div class="sub-info">
          <span class="sub-heading sub-heading-1">Items: </span><span
            class="amount">{totalitems}</span
          >
        </div>
        <div class="sub-info">
          <span class="sub-heading sub-heading-1">Total MRP: </span><span
            class="amount">₹ {totalamount}</span
          >
        </div>
        <hr />
        <div class="sub-info">
          <span class="sub-heading sub-heading-0">Total amount</span><span
            class="amount">₹ {totalamount}</span
          >
        </div>
      </div>
      <div class="button-wrapper">
        <div class="btn-container">
          <span class="amount amount-0">₹ {totalamount}</span><span
            class="checkout"
            >Checkout&nbsp;<img src={ArrowWhite} class="arrow" alt="" /></span
          >
        </div>
      </div>
    </aside>
  </article>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    width: 90%;
    height: calc(100vh - 130px);
    overflow: hidden;
    margin-left: auto;
    margin-top: auto;
    font-family: "Montserrat", sans-serif;
    color: #444;
  }
  .heading {
    font-size: 28px;
    font-weight: 700;
  }
  article {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    padding-left: 10px;
    min-height: 100%;
  }
  .products-container {
    display: grid;
    grid-gap: 40px;
    height: fit-content;
  }
  .product {
    width: 500px;
    position: relative;
    padding: 30px;
    border-radius: 20px;
    border: 0.8px solid #c4c4c4;
    display: flex;
  }
  .img-container {
    width: 200px;
    height: 200px;
    margin-right: 50px;
    border-radius: 20px;
  }
  .right {
    padding-top: 20px;
  }
  .product-name {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .product-info {
    margin: 10px 0;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 19px;
  }
  .key {
    color: rgba(68, 68, 68, 0.7);
  }

  aside {
    width: 400px;
    border: 0.8px solid #c4c4c4;
    border-radius: 20px;
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info-container {
    display: grid;
    grid-gap: 20px;
  }
  .sub-heading {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .sub-heading-0 {
    font-weight: 600;
  }
  .sub-heading-1 {
    font-weight: 500;
  }
  .sub-info {
    display: flex;
    justify-content: space-between;
  }
  .amount,
  .checkout {
    font-size: 22px;
    font-weight: 700;
    color: #99319b;
  }
  .amount-0,
  .checkout {
    font-weight: 600;
    padding: 15px 20px;
  }
  .checkout {
    color: #fff;
    background: #99319b;
    display: inline-flex;
  }
  .amount-1 {
    padding: unset;
    font-size: 22px;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 40px;
    height: 1px;
    border: unset;
    background: #444;
  }

  .btn-container {
    margin-left: auto;
    width: fit-content;
    border: 0.5px solid #99319b;
    border-radius: 5px;
    overflow: hidden;
  }
  .arrow {
    width: 26px;
  }
</style>
