<main>
  <div class="heading">Contact us</div>
  <div class="content">
    <div class="section">
      <div class="heading-2">Call us or whatsapp at</div>
      <span class="content-2">+91-9797997554</span>
    </div>
    <div class="section">
      <div class="heading-2">Email</div>
      <span class="content-2">buzzaarmarketplace@fxn.com</span>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    color: #444444;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    width: 50%;
    margin: 80px auto;
    margin-left: 200px;
  }

  .heading {
    font-size: 28px;
    font-weight: 700;
  }

  .section {
    display: flex;
    justify-content: space-between;
  }

  .heading-2 {
    margin-bottom: 15px;
    font-weight: 600;
  }

  @media screen and (max-width: 1200px) {
    main {
      width: 70%;
      margin: 60px auto;
    }
  }
  @media screen and (max-width: 850px) {
    main {
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      width: 90%;
      font-size: 18px;
    }
    .heading {
      font-size: 23px;
    }
  }
  @media screen and (max-width: 480px) {
    main {
      width: 100%;
      margin: 30px 25px;
      grid-gap: 30px;
    }

    .section {
      flex-direction: column;
      margin-bottom: 30px;
    }
    .heading-2 {
      margin-bottom: 10px;
    }
  }
</style>
