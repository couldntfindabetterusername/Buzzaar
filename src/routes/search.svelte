<script>
  import Icon from "../assets/loupe.png";
  import Data from "../homePageProductsData";
  import ProductGrid from "../components/ProductGrid.svelte";
</script>

<main>
  <div class="search-bar">
    <img src={Icon} alt="" id="search-icon" />
    <input
      type="text"
      placeholder="Search products, sellers or Buzzaar codes"
    />
  </div>
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
  .search-bar {
    margin: 30px 0;
    border: 0.5px solid #c4c4c4;
    border-radius: 30px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    width: 550px;
  }
  #search-icon {
    width: 20px;
    margin-right: 15px;
  }
  input {
    border: none;
    outline: none;
    font-size: 18px;
    font-family: "Montserrat";
    width: 100%;
  }
</style>
