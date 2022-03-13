<script>
  import LoginAsset from "../assets/login asset.png";

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<svelte:head>
  <style>
    body {
      background: linear-gradient(180deg, rgba(167, 0, 250, 0.5), transparent);
    }
  </style>
</svelte:head>
<main>
  <div
    class="left"
    style="background: url({LoginAsset}) center center / cover;"
  />
  <div class="right">
    <div class="modal-heading-wrapper">
      <span class="modal-heading"
        >Login {#if screenWidth > 520}into your Buzzaar account{/if}</span
      >
    </div>
    <form action="">
      <div class="form-item">
        <label for="username">Email address/Number</label>
        <div class="input-wrapper">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your details"
            required
          />
        </div>
      </div>
      <div class="form-item">
        <label for="password">Enter your password</label>
        <div class="input-wrapper">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <button type="submit" class="btn">Login</button>

      <span class="or-form">or</span>
      <button class="btn google-btn">Sign in with google</button>
    </form>
    <span class="bottom"
      >Don't have an accounnt? <a href="signup" class="bottom-btn">Sign up</a>
    </span>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    width: 600px;
    margin: 50px auto;
    border: 0.5px solid #c4c4c4;
    border-radius: 20px;
    padding: 30px 60px;
    background-color: #fbfbfb;
    font-family: "Montserrat", sans-serif;
    color: #444444;
  }

  .modal-heading-wrapper {
    text-align: center;
  }

  .modal-heading {
    font-size: 25px;
    font-weight: 600;
  }

  form {
    margin: 30px 0;
    display: grid;
    grid-gap: 30px;
  }

  .form-item {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 20px;
    margin-left: 10px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .input-wrapper,
  button {
    border: 1px solid #99319b;
    border-radius: 15px;
    padding: 15px 30px;
  }

  .input-wrapper {
    background: #ffffff;
    display: flex;
    align-items: center;
  }

  input {
    border: unset;
    outline: none;
    color: #444444;
    width: 100%;
  }

  #password {
    font-weight: 700;
  }
  #password::placeholder {
    font-weight: 400;
  }

  input,
  button {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
  }

  button {
    background: #99319b;
    color: #ffffff;
    font-weight: 500;
  }

  .or-form {
    display: block;
    text-align: center;
    margin: -10px;
  }

  .google-btn {
    color: #444444;
    background: #ffffff;
    border-color: #444444;
  }

  .bottom {
    font-size: 18px;
    color: rgba(68, 68, 68, 0.5);
    text-align: center;
    display: block;
  }

  .bottom a {
    color: #99319b;
    font-weight: 600;
  }

  @media screen and (max-width: 1000px) {
    main {
      width: 450px;
      padding: 30px 40px;
    }

    .modal-heading {
      font-size: 21px;
    }

    form {
      grid-gap: 25px;
    }

    label {
      font-size: 18px;
      margin-bottom: 9px;
    }

    .input-wrapper,
    button {
      padding: 12px 20px;
    }

    input,
    button {
      font-size: 16px;
    }

    .bottom {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      width: 70%;
    }
  }

  @media screen and (max-width: 480px) {
    main {
      width: 85%;
      padding: 0;
    }

    .right {
      margin: 20px 30px;
    }

    form {
      margin: 20px 0;
      grid-gap: 20px;
    }

    label {
      font-size: 16px;
      margin-bottom: 6px;
    }

    .input-wrapper,
    button {
      padding: 10px 20px;
      border-radius: 10px;
    }

    input {
      font-size: 15px;
    }

    .or-form {
      font-size: 14px;
    }

    .bottom {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 400px) {
    .right {
      margin: 20px;
    }
  }
</style>
