<script>
  import ProductGrid from "../components/ProductGrid.svelte";
  import Data from "../homePageProductsData";
  import Illustration from "../assets/modal illustration.png";
  let loggedIn = false;
  let modal;
</script>

<svelte:window
  on:click={(e) => {
    if (e.target == modal) {
      window.history.back();
    }
  }}
/>
<main>
  <div class="div"><span class="heading">Wishlist</span></div>
  {#if loggedIn}
    <ProductGrid data={Data} />
  {:else}
    <section bind:this={modal}>
      <div class="modal-wrapper">
        <div class="modal">
          <div
            class="left"
            style="background: url({Illustration}) center / cover;"
          />
          <div class="right">
            Sign up to use this feature
            <span class="login signup">Sign up free</span>
            <span class="or">or</span>
            <span class="login">Login</span>
          </div>
        </div>
      </div>
    </section>
  {/if}
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
    font-family: "Montserrat", sans-serif;
  }
  .div {
    margin: 30px;
    width: 85%;
  }
  .heading {
    color: #444444;
    font-size: 26px;
    font-weight: 600;
  }

  section {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -300px;
    z-index: 4;
    top: 0;
    background: rgba(0, 0, 0, 0.55);
  }
  .modal {
    padding: 40px;
    border-radius: 15px;
    background: #ffffff;
    display: flex;
    align-items: center;
    border: 0.7px solid #c4c4c4;
  }
  .left {
    width: 370px;
    height: 400px;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    color: #99319b;
    margin: 30px;
  }

  .login {
    font-size: 21px;
    text-decoration: underline;
  }
  .signup {
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #99319b;
    margin-top: 30px;
    text-decoration: none;
  }
  .or {
    font-size: 18px;
    margin: 15px;
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
      margin: 0 20px;
    }
    .div {
      margin: 15px;
      width: 100%;
    }
    .heading {
      font-size: 24px;
    }
  }
</style>
