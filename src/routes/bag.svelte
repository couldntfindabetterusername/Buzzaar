<script>
  import ArrowWhite from "../assets/arrow(white).png";
  import Closebtn from "../assets/close.png";

  let cartProducts = [
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
    {
      productId: 3,
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
  ];

  let totalitems = 0,
    totalamount = 0;

  cartProducts.map((product) => {
    totalitems++;
    totalamount = totalamount + product.productPrize;
  });

  const removeItem = (i) => {
    cartProducts.splice(i, 1);
    cartProducts = [...cartProducts];

    totalitems = 0;
    totalamount = 0;

    cartProducts.map((product) => {
      totalitems++;
      totalamount = totalamount + product.productPrize;
    });
  };
</script>

<main>
  <span class="heading">Shopping Bag</span>
  <article>
    <div class="products-container">
      {#each cartProducts as product, i}
        <div class="product">
          <div
            class="cancel-btn"
            style="background: url({Closebtn});background-position:center;background-size:cover"
            on:click={() => removeItem(i)}
          />
          <div
            class="img-container"
            style="background: url({product.productImages[0]}) center / cover;"
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
    transition: all 0.5s ease-in-out;
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
    height: calc(100vh - 265px);
    overflow: hidden;
  }
  .cancel-btn {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 30px;
  }
  .products-container {
    display: grid;
    grid-gap: 40px;
    overflow-y: scroll;
    padding-right: 20px;
  }
  .products-container::-webkit-scrollbar {
    width: 6px;
  }
  .products-container::-webkit-scrollbar-thumb {
    background: rgba(68, 68, 68, 0.2);
    border-radius: 5px;
  }
  .products-container::-webkit-scrollbar-thumb:hover {
    background: rgba(68, 68, 68, 0.5);
  }
  .product {
    width: 500px;
    position: relative;
    padding: 30px;
    border-radius: 20px;
    border: 0.8px solid #c4c4c4;
    display: flex;
    height: fit-content;
  }
  .img-container {
    min-width: 200px;
    min-height: 200px;
    max-width: 200px;
    max-height: 200px;
    margin-right: 50px;
    border-radius: 20px;
  }
  .right {
    padding-top: 20px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
    height: calc(100vh - 315px);
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

  @media screen and (max-width: 1400px) {
    main {
      width: 97%;
    }
  }
  @media screen and (max-width: 1250px) {
    main {
      width: 600px;
      margin: auto;
      margin-top: 20px;
    }
    main,
    article {
      height: unset;
    }
    article {
      flex-direction: column;
      justify-content: unset;
      align-items: center;
      padding: unset;
      padding-top: 30px;
    }
    .products-container {
      padding: unset;
    }
    aside {
      width: 500px;
      margin: 60px 0;
    }
  }

  @media screen and (max-width: 850px) {
    main {
      width: 500px;
    }
    .heading {
      font-size: 25px;
    }
    .products-container {
      width: 100%;
    }
    .product {
      width: 430px;
      margin: auto;
    }
    .cancel-btn {
      width: 20px;
      height: 20px;
    }
    .img-container {
      min-width: 150px;
      min-height: 150px;
      max-width: 150px;
      max-height: 150px;
      margin-right: 30px;
    }
    .right {
      padding-top: 15px;
    }
    .product-name {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .product-info {
      font-size: 17px;
      margin: 5px 0;
    }
    aside {
      width: 430px;
      margin: 40px 0;
    }
    .sub-heading,
    .amount {
      font-size: 20px;
    }
    .checkout {
      font-size: 20px;
    }
    .arrow {
      width: 23px;
    }
  }

  @media screen and (max-width: 650px) {
    main {
      width: 400px;
    }
    .product,
    aside {
      width: 350px;
      padding: 20px;
    }
    .cancel-btn {
      right: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    main {
      width: 100%;
    }
    .heading {
      margin-left: 30px;
    }
    .product,
    aside {
      width: calc(100% - 70px);
    }
    .img-container {
      min-width: 130px;
      min-height: 130px;
      max-width: 130px;
      max-height: 130px;
      margin-right: 20px;
    }
    .right {
      padding-top: 10px;
    }
  }
</style>
