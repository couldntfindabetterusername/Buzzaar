<script>
  import ProductGrid from "../components/ProductGrid.svelte";
  import Data from "../homePageProductsData";
</script>

<main>
  <div><span class="heading">Wishlist</span></div>
  <ProductGrid data={Data} />
</main>

<style>
  main {
    width: -webkit-fill-available;
    padding: 10px 0;
    border: 0.5px solid rgba(196, 196, 196, 0.85);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fbfbfb;
  }
  div {
    margin: 30px;
    width: 85%;
  }
  .heading {
    color: #444444;
    font-size: 26px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  @media screen and (max-width: 1000px) {
    .heading {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    main {
      padding: unset;
      border-radius: unset;
      border: unset;
      border-top: 0.5px solid rgba(196, 196, 196, 0.85);
      margin-left: 60px;
    }
  }
  @media screen and (max-width: 480px) {
    main {
      padding: unset;
      border: unset;
      margin: 0 25px;
    }
    div {
      margin: 15px;
      width: 100%;
    }
    .heading {
      font-size: 24px;
    }
  }
</style>
