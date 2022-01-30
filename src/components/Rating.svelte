<script>
  const arr = [1, 2, 3, 4, 5];
</script>

<link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous"
/>

<main>
  <div>
    {#each arr as a}
      <input type="radio" name="star" id="star{a.toString()}" />
      <label for="star{a.toString()}" class="fa fa-star" />
    {/each}
  </div>
  <span>What would you rate?</span>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    display: grid;
    padding: 5px;
    grid-gap: 3px;
    grid-template-columns: repeat(5, 1fr);
    transform: scaleX(-1);
  }
  input {
    display: none;
  }
  label {
    display: block;
    cursor: pointer;
    font-size: 24px;
    color: #fff;
    -webkit-text-stroke: 2.5px #99319b;
    transition: all 0.1s ease-in-out;
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label,
  input:checked ~ label {
    color: #99319b;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: #444444;
    font-family: "Montserrat", sans-serif;
  }

  @media screen and (max-width: 1200px) {
    label {
      font-size: 20px;
    }
    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 950px) {
    label {
      font-size: 16px;
    }
    span {
      font-size: 11px;
    }
  }
</style>
