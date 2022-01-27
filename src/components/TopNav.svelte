<script>
  import UserLogin from "./UserLoginInfo.svelte";
  import ChatIconDark from "../assets/chat icon dark.png";
  import BagDark from "../assets/bag(dark).png";
  import BagLight from "../assets/bag(purple).png";
  let menuOpen = false,
    menuBtn,
    menuWrapper,
    loggedIn = false,
    isBuyer = false;

  const menuHandler = () => {
    if (!menuOpen) {
      console.log(menuBtn.children);
      menuBtn.children[0].style.transform = "translateY(0px) rotate(45deg)";
      menuBtn.children[1].style.opacity = "0";
      menuBtn.children[2].style.transform = "translateY(0px) rotate(-45deg)";
      for (let i = 0; i < menuBtn.children.length; i++) {
        menuBtn.children[i].style.background = "#ffffff";
      }
      // hamburgerBG.style.opacity = "1";
      // hamburgerBG.style.display = "block";

      if (screenWidth > 480 && screenWidth <= 768) {
        menuWrapper.style.transform = "translateX(-60px)";
      } else {
        menuWrapper.style.transform = "translateX(0)";
      }
      menuWrapper.style.background = "rgba(0,0,0,0.5)";
      menuOpen = true;
    } else {
      menuBtn.children[0].style.transform = "translateY(-10px)";
      menuBtn.children[1].style.opacity = "1";
      menuBtn.children[2].style.transform = "translateY(10px)";
      for (let i = 0; i < menuBtn.children.length; i++) {
        menuBtn.children[i].style.background = "#444444";
      }
      // hamburgerBG.style.opacity = "0";
      // hamburgerBG.style.display = "none";
      menuWrapper.style.transform = "translateX(100vw)";
      menuWrapper.style.background = "unset";
      menuOpen = false;
    }
  };

  let screenHeight, screenWidth;

  $: tabWidth = (screenWidth - 180).toString() + "px";
  $: width = (screenWidth - 80).toString() + "px";
  $: height = (screenHeight + 0).toString() + "px";
  $: hamburgerWrapperHeight = (screenHeight - 130).toString() + "px";
  export let segment;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

<nav
  style="{menuOpen
    ? 'z-index:4'
    : ''};--width:{width};--tab-width:{tabWidth};{segment === undefined ||
  segment === 'search' ||
  segment === 'add' ||
  segment === 'wishlist' ||
  segment === 'user'
    ? '--left:100px;border-bottom:unset;--responsive-left:60px;--responsive-left-mobile:0'
    : ''}"
>
  <a href="/" class="logo">Buzzaar</a>

  <aside>
    <a href="/bag"
      ><div
        class="bag-icon"
        style="background-image: url({segment === '/bag'
          ? BagLight
          : BagDark});background-position:center;background-size:cover;"
      /></a
    >
    <div class="menu-btn" bind:this={menuBtn} on:click={() => menuHandler()}>
      <div class="menu-btn-burger" />
      <div class="menu-btn-burger" />
      <div class="menu-btn-burger" />
    </div>
  </aside>

  <!--for desktop-->
  <div class="nav-items">
    <a href="/contact">Contact</a>
    <a href="/faq">FAQ</a>
    <a href="/help">Help</a>
    <a href="/bag" class="topnav-btn"
      >Bag&nbsp;<img class="bag-icon" src={BagLight} alt="" /></a
    >
    <a href="/seller" class="topnav-btn">Become a seller</a>
  </div>

  <!--for hamburger menu-->
  <!-- <div class="hamburger-bg" bind:this={hamburgerBG} style="--height:{height}" /> -->

  <div
    class="hamburger-wrapper"
    bind:this={menuWrapper}
    style="--height:{height}"
  >
    <div class="nav-items-wrapper">
      <div
        class="nav-items-hamburger-wrapper"
        style="--hamburger-height:{hamburgerWrapperHeight}"
      >
        <div class="nav-items-hamburger">
          {#if loggedIn}
            <span class="hamburger-username">hello, (user)</span>
            <a href="/user" class="mobile-view" on:click={() => menuHandler()}
              >My Profile</a
            >
            <a href="/chat" class="mobile-view" on:click={() => menuHandler()}
              >Chat with Buzzaar</a
            >
            <a href="/orders" class="mobile-view" on:click={() => menuHandler()}
              >Orders</a
            >
            <a href="/contact" on:click={() => menuHandler()}>Contact</a>
            <a href="/faq" on:click={() => menuHandler()}>FAQ</a>
            <a href="/help" on:click={() => menuHandler()}>Help</a>
            <a href="#" class="mobile-view" on:click={() => menuHandler()}
              >Sign Out</a
            >

            {#if isBuyer}
              <a href="/seller" class="become-seller-btn">Become a seller</a>
            {/if}
          {:else}
            <UserLogin />
          {/if}
        </div>
        <div class="hamburger-bottom">
          <hr />
          <span class="hamburger-buzzaar">Buzzaar</span>
          <span class="hamburger-marketplace">marketplace</span>
          <span class="hamburger-instagram-wrapper"> Check us out at </span>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    width: var(--width);
    justify-content: space-between;
    align-items: center;
    color: #99319b;
    padding: 20px 0;
    border-bottom: 0.5px solid #c4c4c48e;
    left: var(--left);
    background: #ffffff;
    position: fixed;
    z-index: 3;
  }
  .logo {
    font-family: "DM Serif Display", sans-serif;
    font-size: 60px;
    font-style: italic;
    color: #99319b;
    margin-left: 80px;
  }
  .nav-items {
    font-family: "Montserrat", sans-serif;
    width: 580px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin-right: 80px;
  }
  .nav-items a {
    color: #444;
  }
  .bag-icon {
    width: 20px;
    height: 18px;
  }
  .nav-items .topnav-btn {
    padding: 12px 15px;
    border-radius: 10px;
    font-weight: 600;
    color: #99319b;
    border: 1px solid #99319b;
  }
  .nav-items a:last-child {
    background-color: #99319b;
    color: #fff;
  }
  .mobile-view {
    display: none;
  }

  aside {
    display: none;
  }

  .menu-btn {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    display: none;
    z-index: 2;
  }
  .menu-btn-burger {
    width: 35px;
    height: 4px;
    border-radius: 3px;
    background-color: #444;
    transition: all 0.5s ease-in-out;
  }
  .menu-btn-burger:first-child,
  .menu-btn-burger:last-child {
    content: "";
    position: absolute;
  }
  .menu-btn-burger:first-child {
    transform: translateY(-11.5px);
  }
  .menu-btn-burger:last-child {
    transform: translateY(11.5px);
  }

  .hamburger-wrapper {
    display: none;
  }

  /* .hamburger-bg {
    display: none;
  } */

  @media screen and (max-width: 1200px) {
    .logo {
      margin-left: 60px;
    }
    .nav-items {
      width: 475px;
      font-size: 16px;
      margin-right: 30px;
    }

    .nav-items .topnav-btn {
      padding: 8px 12px;
    }
  }
  @media screen and (max-width: 950px) {
    .logo {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 900px) {
    nav {
      width: var(--width);
      left: var(--responsive-left);
      z-index: 2;
    }
    .logo {
      margin-left: 40px;
    }
    .nav-items {
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 850px) {
    nav {
      width: var(--tab-width);
      padding: 30px 60px;
      justify-content: space-between;
      right: 0;
    }

    .logo {
      font-size: 48px;
      margin: unset;
    }
    aside {
      display: flex;
    }
    aside .bag-icon {
      width: 35px;
      height: 35px;
      margin-right: 20px;
    }
    .menu-btn {
      display: flex;
    }

    .nav-items {
      display: none;
    }

    /* .hamburger-bg {
      display: block;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: all 0.5s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: var(--height);
      display: none;
      z-index: -1;
    } */
    .hamburger-wrapper {
      display: block;
      width: 100vw;
      height: var(--height);
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(100vw);
      transition: all 0.5s ease-in-out;
    }
    .nav-items-wrapper {
      position: absolute;
      background: #99319b;
      font-family: "Montserrat", sans-serif;
      font-size: 25px;
      font-weight: 500;
      width: 70%;
      right: 0;
      height: 100%;
      border-radius: 10px 0 0 10px;
    }
    .nav-items-hamburger-wrapper {
      margin: 100px 40px 30px;
      height: var(--hamburger-height);
    }
    .nav-items-hamburger-wrapper,
    .nav-items-hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #ffffff;
    }

    .nav-items-hamburger a {
      color: #ffffff;
      font-size: 23px;
      margin-bottom: 25px;
    }
    .nav-items-hamburger a.become-seller-btn {
      background: #fff;
      border-radius: 10px;
      padding: 10px;
      color: #99319b;
      text-align: center;
    }
    .hamburger-username {
      text-transform: uppercase;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 50px;
    }

    .hamburger-bottom {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hamburger-bottom hr {
      width: 100%;
      background: #ffffff;
      margin-bottom: 10px;
    }
    .hamburger-buzzaar {
      font-family: "DM Serif Display";
      font-style: italic;
      font-size: 48px;
    }
    .hamburger-marketplace {
      text-transform: uppercase;
      font-size: 20px;
      letter-spacing: 2px;
    }
    .hamburger-instagram-wrapper {
      margin-top: 30px;
      font-size: 20px;
    }

    .mobile-view {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    nav {
      left: var(--responsive-left-mobile);
      justify-content: space-between;
      padding: 0 40px;
      height: 90px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 2;
      width: var(--width);
      margin-left: unset;
    }
    .logo {
      font-size: 40px;
      margin-left: unset;
    }

    aside .bag-icon {
      width: 32px;
      height: 32px;
    }

    .menu-btn-burger {
      width: 30px;
    }
    .menu-btn-burger:first-child {
      transform: translateY(-10px);
    }
    .menu-btn-burger:last-child {
      transform: translateY(10px);
    }

    .nav-items-wrapper {
      font-size: 20px;
    }
    .hamburger-username {
      margin-bottom: 40px;
    }
    .nav-items-hamburger a {
      font-size: 20px;
      margin-bottom: 18px;
    }
    .hamburger-buzzaar {
      font-size: 37px;
    }
    .hamburger-marketplace,
    .hamburger-instagram-wrapper {
      font-size: 15px;
    }
  }
</style>
