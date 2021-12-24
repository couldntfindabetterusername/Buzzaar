<script>
  import LoginAsset from "../assets/login asset.png";
  import SignupAsset from "../assets/signup asset.png";
  import ShowPassword from "../assets/show password.png";
  import HidePassword from "../assets/hide password.png";
  export let login, signup;
  let loggedIn = false;
  let passwordVisible = false;
  let src = ShowPassword;
  let modalContainer;
</script>

<svelte:window
  on:click={(e) => {
    if (e.target == modalContainer) {
      modalContainer.style.display = "none";
      signup = false;
      login = false;
    }
  }}
/>
<main>
  {#if loggedIn}
    <div class="container container-login">
      <span class="p">Hi, username</span>
      <span class="p">Welcome to</span>
      <span class="buzzaar">Buzzaar Marketplace</span>
      <span class="shop">Start shopping</span>
    </div>
    <div class="container container-login">
      Are you a seller?
      <span class="seller">Register your business</span>
    </div>
  {:else}
    <div class="container">
      Are you new on Buzzaar?
      <span
        class="signup"
        on:click={() => {
          signup = true;
          login = false;
        }}>Sign up for free</span
      >
      <span class="or">or</span>
      <span
        class="login"
        on:click={() => {
          login = true;
          signup = false;
        }}>Log in</span
      >
    </div>
  {/if}
</main>

{#if login || signup}
  <section bind:this={modalContainer}>
    <div class="modal">
      {#if login}
        <div
          class="left"
          style="background: url({LoginAsset}) center center / cover;"
        />
        <div class="right">
          <span class="modal-heading">Login into your Buzzaar account</span>
          <form action="">
            <div class="form-item">
              <label for="username">Email address/Number</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your details"
                required
              />
            </div>
            <div class="form-item">
              <label for="password">Enter your password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" class="btn">Login</button>
          </form>
          <span class="or-form">or</span>
          <button class="btn google-btn">Sign in with google</button>
          <span class="bottom"
            >Don't have a accounnt? <span
              class="bottom-btn"
              on:click={() => {
                signup = true;
                login = false;
              }}>Sign up</span
            ></span
          >
        </div>
      {/if}
      {#if signup}
        <div
          class="left"
          style="background: url({SignupAsset}) center center / cover;"
        />
        <div class="right">
          <div class="modal-heading-wrapper">
            <span class="modal-heading-signup">Sign up</span>
          </div>

          <form action="">
            <div class="form-item">
              <label for="email">E-mail address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div class="form-item">
              <label for="phone">Contact no</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your contact no"
                required
              />
            </div>
            <div class="form-item" style="position: relative;">
              <label for="password">Set up your password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
              <img
                {src}
                alt=""
                class="show-password"
                on:click={(e) => {
                  if (e.srcElement.previousElementSibling.value) {
                    if (passwordVisible) {
                      e.srcElement.previousElementSibling.setAttribute(
                        "type",
                        "password"
                      );
                      passwordVisible = false;
                      src = ShowPassword;
                    } else {
                      e.srcElement.previousElementSibling.setAttribute(
                        "type",
                        "text"
                      );
                      passwordVisible = true;
                      src = HidePassword;
                    }
                  }
                }}
              />
            </div>
            <button type="submit" class="btn">Signup</button>
          </form>
          <span class="bottom"
            >Already have an accounnt? <span
              class="bottom-btn"
              on:click={() => {
                login = true;
                signup = false;
              }}>Login</span
            ></span
          >
        </div>
      {/if}
    </div>
  </section>
{/if}

<style>
  main {
    width: 300px;
    border: 0.5px solid rgb(196 196 196 / 85%);
    border-radius: 15px;
  }
  .container {
    margin: 80px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #444444;
    text-align: center;
  }
  .container-login {
    margin: 30px;
  }
  .container-login:last-child {
    margin-top: 60px;
  }
  .p {
    font-weight: 500;
  }
  .p:nth-child(2) {
    margin-top: 30px;
  }
  .buzzaar {
    color: #99319b;
    font-size: 22px;
    margin-bottom: 30px;
  }
  .shop,
  .seller {
    font-size: 18px;
    font-weight: 500;
    color: #99319b;
    padding: 10px 15px;
    border: 1px solid #99319b;
    border-radius: 10px;
  }
  .seller {
    color: #ffffff;
    background-color: #99319b;
    margin-top: 10px;
  }
  .signup {
    margin-top: 40px;
    padding: 10px 20px;
    border: 1px solid #99319b;
    border-radius: 10px;
  }
  .signup,
  .login {
    font-size: 20px;
    font-weight: 500;
    color: #99319b;
  }
  .login {
    text-decoration: underline;
  }
  .or {
    margin: 15px 0;
  }

  /*sign up and login modal for web*/
  section {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    width: 1100px;
    background: #ffffff;
    display: flex;
    border: 0.7px solid #c4c4c4;
    border-radius: 15px;
    overflow: hidden;
  }
  .left {
    width: 600px;
  }
  .right {
    font-family: "Montserrat";
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    align-items: center;
    margin: auto;
    color: #444444;
  }
  .modal-heading {
    font-size: 23px;
    font-weight: 600;
  }
  form {
    margin-top: 10px;
    width: 100%;
  }
  .form-item {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
  }
  input {
    padding: 15px 25px;
    font-size: 18px;
    border: 1px solid #0e58a5;
    border-radius: 15px;
    outline: none;
    font-family: "Montserrat";
  }
  .btn {
    width: 100%;
    padding: 10px;
    font-size: 21px;
    font-weight: 500;
    font-family: "Montserrat";
    color: #ffffff;
    background: #0e58a5;
    border: 1px solid #0e58a5;
    border-radius: 10px;
    margin-top: 30px;
  }
  .google-btn {
    background: #ffffff;
    color: #444444;
    border: 1px solid #444444;
    margin-top: 0;
  }
  .or-form {
    font-size: 18px;
    margin: 15px;
  }
  .bottom {
    font-size: 18px;
    color: #44444480;
    margin-top: 30px;
  }
  .bottom-btn {
    color: #0e58a5;
    font-weight: 600;
    text-decoration: underline;
  }
  .modal-heading-wrapper {
    width: 360px;
  }
  .modal-heading-signup {
    font-size: 23px;
    font-weight: 600;
  }
  .show-password {
    width: 24px;
    position: absolute;
    right: 20px;
    top: 58%;
  }
</style>
