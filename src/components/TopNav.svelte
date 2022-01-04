<script>
  let menuOpen = false,
    menuBtn,
    menuItems;

  const menuHandler = () => {
    if (!menuOpen) {
      console.log(menuBtn.children);
      menuBtn.children[0].style.transform = "translateY(0px) rotate(45deg)";
      menuBtn.children[1].style.opacity = "0";
      menuBtn.children[2].style.transform = "translateY(0px) rotate(-45deg)";
      menuItems.style.left = "unset";
      menuItems.style.right = "0";
      menuOpen = true;
    } else {
      menuBtn.children[0].style.transform = "translateY(-10px)";
      menuBtn.children[1].style.opacity = "1";
      menuBtn.children[2].style.transform = "translateY(10px)";
      menuItems.style.left = "100%";
      menuItems.style.right = "unset";
      menuOpen = false;
    }
  };

  export let segment;
</script>

<nav
  style={segment === undefined ||
  segment === "search" ||
  segment === "add" ||
  segment === "wishlist" ||
  segment === "user"
    ? "--left:100px;border-bottom:unset;--responsive-left:60px;--responsive-left-mobile:0"
    : ""}
>
  <a href="/" class="logo">Buzzaar</a>
  <div class="menu-btn" bind:this={menuBtn} on:click={() => menuHandler()}>
    <div class="menu-btn-burger" />
    <div class="menu-btn-burger" />
    <div class="menu-btn-burger" />
  </div>
  <div class="nav-items" bind:this={menuItems}>
    <a href="/contact">Contact</a>
    <a href="/faq">FAQ</a>
    <a href="/help">Help</a>
    <a href="/seller">Become a seller</a>
  </div>
</nav>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  a {
    text-decoration: none;
  }
  nav {
    display: flex;
    width: 100%;
    justify-content: space-around;
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
  }
  .nav-items {
    font-family: "Montserrat", sans-serif;
    width: 500px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-left: 250px;
  }
  .nav-items a {
    color: #444;
    padding: 15px;
  }
  .nav-items a:last-child {
    background-color: #99319b;
    color: #fff;
    border-radius: 10px;
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
    width: 30px;
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
    transform: translateY(-10px);
  }
  .menu-btn-burger:last-child {
    transform: translateY(10px);
  }

  @media screen and (max-width: 920px) {
    .logo {
      font-size: 50px;
    }
    .nav-items {
      width: 450px;
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      left: var(--responsive-left);
    }
    .menu-btn {
      display: flex;
    }
    .nav-items {
      position: absolute;
      left: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    nav {
      left: var(--responsive-left-mobile);
      width: 80%;
      justify-content: space-between;
      padding: 18px 10%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .logo {
      font-size: 40px;
    }
  }
</style>
