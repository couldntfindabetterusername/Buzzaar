<script context="module">
  export async function preload(page) {
    const { user } = page.params;
    return { user };
  }
</script>

<script>
  export let user;
  console.log(user);
  // console.log(user);
  import UserData from "../../data";
  import ChatBubble from "../../assets/chat-bubble.png";
  import CompactProduct from "../../components/CompactProduct.svelte";

  let name, username, pfp, bio, tags, buzzarCode, products, collections;

  UserData.map((person) => {
    if (person.username === user) {
      name = person.name;
      username = person.username;
      pfp = person.pfp;
      bio = person.bio;
      tags = person.tags;
      buzzarCode = person.buzzarCode;
      products = person.products;
      collections = person.collections;
    }
  });

  let tabOpen = true;
  const tabHandler = (e) => {
    const tabs = document.getElementsByClassName("tab-name");

    for (let i = 0; i < 2; i++) {
      tabs[i].classList.remove("active");
    }

    e.path[0].classList.add("active");
  };

  let screenWidth;
  $: width = (screenWidth - 30).toString() + "px";
  $: nameInfoWidth = (screenWidth - 130).toString() + "px";

  let divWidth;
  $: divwidth =
    screenWidth >= 600
      ? (divWidth - 160).toString() + "px"
      : screenWidth >= 480
      ? (divWidth - 135).toString() + "px"
      : (divWidth - 100).toString() + "px";
</script>

<svelte:head>
  <title>{name} at Buzzar</title></svelte:head
>

<svelte:window bind:innerWidth={screenWidth} />
<main style="--width:{width};--name-info-width:{nameInfoWidth}">
  <div class="user-info">
    <div
      class="followers-panel"
      bind:clientWidth={divWidth}
      style="--div-width:{divwidth}"
    >
      <div
        class="pfp"
        style="background:url({pfp});background-size:cover;backgorund-position:center"
      />
      <div class="name-and-info">
        <div class="name">
          <span id="username"
            >{name}
            <div
              class="buzzar-code buzzar-code-responsive responsive-tablet responsive-mobile"
            >
              {buzzarCode}
            </div></span
          >
          <p id="user-tag">{tags}</p>
        </div>
        <div class="info non-responsive-mobile">
          <div class="prod-coll">
            <span class="prod-coll-name">PRODUCTS</span><span
              class="prod-coll-num">{products.length}</span
            >
          </div>
          <!-- <div class="prod-coll">
            <span class="prod-coll-name">COLLECTIONS</span><span
              class="prod-coll-num">{collections.length}</span
            >
          </div> -->
        </div>
      </div>
    </div>
    <div class="info info-responsive responsive-mobile">
      <div class="prod-coll">
        <span class="prod-coll-name">PRODUCTS</span><span class="prod-coll-num"
          >{products.length}</span
        >
      </div>
      <!-- <div class="prod-coll">
        <span class="prod-coll-name">COLLECTIONS</span><span
          class="prod-coll-num">{collections.length}</span
        >
      </div> -->
    </div>
    <div class="buzzar-code non-responsive-mobile non-responsive-tablet">
      Buzzar Code: {buzzarCode}
    </div>
    <div class="bio">
      <div class="message-section">
        <span id="user-msg">{name}'s message</span>
        <p id="about">{bio} wcjnk jbxkq knxkq jxnqlnl xejqkn</p>
      </div>
    </div>
  </div>

  <div class="gallery">
    <div class="tabs">
      <span
        class="tab-name active"
        on:click={(e) => {
          tabOpen = true;
          tabHandler(e);
        }}>Products</span
      >
      <!-- <span
        class="tab-name"
        on:click={(e) => {
          tabOpen = false;
          tabHandler(e);
        }}>Collections</span
      > -->
    </div>
    <hr />
    <div class="products-gallery" style="display:{tabOpen ? 'grid' : 'none'}">
      {#each products as product}
        <CompactProduct {product} />
      {/each}
    </div>

    <!-- <div
      class="collections-gallery"
      style="display:{tabOpen ? 'none' : 'grid'}"
    >
      
    </div> -->
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  a {
    text-decoration: none;
  }

  .non-responsive-mobile {
    display: block;
  }
  main {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background: rgba(251, 251, 251, 0.4);
  }
  .user-info {
    margin: 50px 0;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 800px;
  }
  .followers-panel {
    display: flex;
    align-items: center;
  }
  .pfp {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
  /* .pfp img {
    width: 100%;
  } */
  .name-and-info {
    margin-left: 50px;
  }
  #username {
    font-size: 26px;
    font-weight: bold;
  }
  #user-tag {
    font-size: 15px;
    font-style: italic;
    color: #444444b3;
  }
  .info {
    display: flex;
    margin-top: 35px;
  }
  .prod-coll {
    border: 0.5px solid #99319b;
    border-radius: 5px;
    padding: 8px 0;
  }

  .prod-coll span {
    padding: 8px 12px;
    font-weight: 600;
  }
  .prod-coll-name {
    color: #99319b;
    border-right: 0.5px solid #99319b;
  }
  .prod-coll-num {
    color: #444;
  }
  .buzzar-code {
    margin: 14px 0 20px 0;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.57);
  }
  .bio {
    padding: 20px;
    border: 0.5px solid #99319b;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }
  #user-msg {
    text-transform: uppercase;
    color: rgba(68, 68, 68, 0.57);
    font-weight: 500;
  }
  #about {
    margin-top: 10px;
    margin-right: 40px;
    font-size: 17px;
    font-weight: 500;
    color: #444;
  }

  .gallery {
    width: 1150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gallery hr {
    width: 100%;
  }
  .tabs {
    margin: 0px 140px;
    display: flex;
    align-items: center;
    width: 220px;
    justify-content: space-between;
    align-self: flex-start;
  }
  .tabs span {
    padding: 10px;
    color: #44444460;
    border-bottom: 2px solid #fff;
  }
  .tabs span.active {
    color: #444444;
    border-bottom: 2px solid #444444;
  }
  hr {
    height: 0.7px;
    border: unset;
    background: #c4c4c4;
  }
  .products-gallery {
    display: grid;
    grid-gap: 50px;
    padding: 30px 0;
    grid-template-columns: repeat(4, 1fr);
  }
  /* .card {
    width: fit-content;
    display: inline-block;
    border: 0.3px solid #c4c4c4;
    height: min-content;
    padding: 20px 16.7px 0px 16.7px;
    border-radius: 10px;
  }
  .product-name {
    margin-left: 12px;
    font-weight: 500;
    font-size: 20px;
    color: #444;
  }
  .images {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
  }
  .main-img {
    width: 140px;
    height: 140px;
    border-radius: 10px;
    overflow: hidden;
    background: aliceblue;
  }
  .side-img {
    width: 65px;
    height: 65px;
    margin-left: 10px;
    margin-bottom: 10px;
    background: antiquewhite;
    border-radius: 10px;
    overflow: hidden;
  } */

  /* .collection {
    margin-top: 50px;
    border: 0.3px solid #c4c4c4;
    border-radius: 10px;
    padding: 20px 0;
    padding-left: 40px;
  }
  .collection-name {
    color: #444;
    font-size: 22px;
    font-weight: 600;
  }
  .collection-grid {
    display: flex;
    margin-top: 20px;
  }
  .collection-product {
    margin: 0 15px;
    width: 150px;
    border-radius: 10px;
    height: 150px;
    overflow: hidden;
    position: relative;
  }
  .collection-product-name {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    line-height: 24px;
    background: rgba(255, 255, 255, 0.8);
  } */

  .responsive-mobile {
    display: none;
  }
  .responsive-tablet {
    display: none;
  }

  @media screen and (max-width: 1550px) {
    .gallery {
      width: auto;
    }
    .products-gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 1400px) {
    .products-gallery {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 30px;
    }
  }

  @media screen and (max-width: 1300px) {
    .user-info {
      width: 60%;
    }
    .products-gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 1000px) {
    .products-gallery {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 900px) {
    .products-gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 850px) {
    .responsive-tablet {
      display: block;
    }

    .user-info {
      width: 80%;
    }
    #username {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    #user-tag {
      width: var(--div-width);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .pfp {
      min-width: 110px;
      min-height: 110px;
      max-width: 110px;
      max-height: 110px;
    }
    .buzzar-code-responsive {
      margin: unset;
      margin-bottom: 10px;
    }
    .bio {
      margin-top: 40px;
    }
    .tabs {
      margin: unset;
      margin-left: 50px;
    }
    .non-responsive-tablet {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    .products-gallery {
      grid-gap: 15px;
    }
  }
  @media screen and (max-width: 650px) {
    .products-gallery {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
  }
  @media screen and (max-width: 600px) {
    .name-and-info {
      margin-left: 25px;
    }
    .info {
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 480px) {
    .responsive-mobile {
      display: block;
    }
    .non-responsive-mobile {
      display: none;
    }

    main {
      width: 100%;
      padding: 15px;
    }
    main > div {
      align-self: baseline;
    }
    .user-info {
      width: var(--width);
      margin: unset;
    }

    .pfp {
      min-width: 80px;
      min-height: 80px;
      max-width: 80px;
      max-height: 80px;
    }
    .name-and-info {
      margin-left: 20px;
      width: var(--name-info-width);
    }
    #username {
      font-size: 24px;
    }
    .buzzar-code-responsive {
      font-size: 12px;
    }
    #user-tag {
      font-size: 13px;
    }
    .info-responsive {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 20px;
    }
    .bio {
      margin-top: 20px;
    }
    #user-msg {
      font-size: 15px;
    }
    #about {
      margin-right: unset;
      font-size: 14px;
    }

    .gallery {
      width: var(--width);
      margin-top: 30px;
    }
    .tabs {
      margin: 0 30px;
    }

    .products-gallery {
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
      padding: 20px 0;
    }
  }
</style>
