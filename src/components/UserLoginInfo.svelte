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

  let screenHeight, screenWidth;
  $: width = screenWidth;
  $: height = (screenHeight + 0).toString() + "px";
  $: tabImgHeight = (screenWidth * 0.7).toString() + "px";
</script>

<svelte:window
  bind:innerHeight={screenHeight}
  bind:innerWidth={screenWidth}
  on:click={(e) => {
    if (e.target == modalContainer) {
      modalContainer.style.transform = "translateY(100vh)";
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
          modalContainer.style.transform = "translateY(-100px)";
        }}
        >Sign up
        {#if width > 1400 || width <= 480}
          for free
        {/if}
      </span>
      <span class="or">or</span>
      <span
        class="login"
        on:click={() => {
          login = true;
          signup = false;
          modalContainer.style.transform = "translateY(-100px)";
        }}>Log in</span
      >
    </div>
  {/if}
</main>

{#if login || signup}
  <section
    bind:this={modalContainer}
    style="--height:{height};--tab-img-height:{tabImgHeight}"
  >
    <div class="modal">
      {#if login}
        <div
          class="left"
          style="background: url({LoginAsset}) center center / cover;"
        />
        <div class="right">
          <span class="modal-heading" id="login-heading"
            >Login into your {#if screenWidth < 850 || screenWidth > 1200}Buzzaar{/if}
            account</span
          >
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
    background: #fbfbfb;
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
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
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

  @media screen and (max-width: 1400px) {
    main {
      width: 200px;
    }
    .container {
      margin: 30px;
      font-size: 20px;
    }
    .signup,
    .login,
    .or {
      font-size: 18px;
    }
    .signup {
      margin-top: 20px;
      padding: 8px 15px;
    }
    .or {
      margin: 10px 0;
    }

    .container-login,
    .p,
    .buzzaar,
    .shop,
    .seller {
      font-size: 16px;
    }
    .container-login {
      margin: 30px 20px;
    }
    .container-login:last-child {
      margin-top: unset;
    }
    .p:nth-child(2) {
      margin-top: 15px;
    }
    .buzzaar {
      margin-bottom: 15px;
    }
    .shop {
      padding: 8px 12px;
    }
  }

  @media screen and (max-width: 1200px) {
    .modal {
      width: 750px;
    }
    .left {
      width: 420px;
    }
    .right {
      padding: 30px 0;
    }
    .modal-heading-wrapper,
    .modal-heading {
      width: 240px;
    }
    .modal-heading-signup,
    .modal-heading {
      font-size: 21px;
    }
    #login-heading {
      font-size: 19px;
    }
    form {
      margin: unset;
    }
    .form-item {
      margin-top: 20px;
    }
    label {
      font-size: 16px;
      margin-bottom: 5px;
    }
    input {
      font-size: 16px;
      padding: 8px 15px;
      border-radius: 10px;
    }
    .show-password {
      width: 18px;
    }
    .or-form {
      margin: 8px;
      font-size: 15px;
    }
    .btn {
      padding: 8px;
      font-size: 16px;
    }
    .bottom {
      font-size: 14px;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 850px) {
    section {
      align-items: unset;
    }
    .modal {
      width: 70%;
      flex-direction: column;
    }
    .left {
      height: var(--tab-img-height);
      width: 100%;
    }
    .modal-heading {
      font-size: 23px;
    }
    .form-item {
      margin-top: 35px;
    }
    label {
      margin-bottom: 15px;
      font-size: 20px;
    }
    input {
      padding: 15px 25px;
      font-size: 18px;
      border-radius: 15px;
    }
    .btn {
      font-size: 21px;
      margin-top: 30px;
      padding: 10px;
    }
    .or-form {
      font-size: 18px;
      margin: 15px;
    }
    .bottom {
      font-size: 18px;
      margin-top: 30px;
    }
    .modal-heading-wrapper {
      width: 360px;
    }
    .modal-heading-signup {
      font-size: 23px;
    }
    .show-password {
      width: 24px;
    }

    #login-heading {
      font-size: 23px;
    }
    .modal-heading {
      width: initial;
    }
  }
  @media screen and (max-width: 768px) {
    main {
      background: unset;
      border: unset;
      width: 100%;
    }
    .container {
      margin: 20px 0;
      color: #ffffff;
    }
    .signup,
    .login {
      font-size: 21px;
      font-weight: 500;
      margin: 15px 0;
      color: #ffffff;
    }
    .signup {
      margin-top: 40px;
      background: #ffffff;
      color: #99319b;
    }
    .or {
      font-size: 18px;
      margin: unset;
      font-weight: 500;
    }

    section {
      top: unset;
      transform: translateY(100vh);
      align-items: flex-end;
      transition: all 0.5s ease-in-out;
      height: var(--height);
    }

    .modal {
      width: 100%;
      border-radius: 15px 15px 0 0;
    }
    .left {
      display: none;
    }
    .right {
      padding: 30px;
    }
    #login-heading {
      font-size: 21px;
    }
    .form-item {
      margin-top: 20px;
    }
    label {
      font-size: 18px;
    }
    input {
      font-size: 16px;
    }
  }
</style>
