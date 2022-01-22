<script>
  import Home from "../assets/home.png";
  import HomeAlt from "../assets/home solid fill.png";
  import Loupe from "../assets/loupe.png";
  import LoupeAlt from "../assets/loupe solid fill.png";
  import Add from "../assets/add.png";
  import AddAlt from "../assets/add solid fill.png";
  import Wishlist from "../assets/wishlist.png";
  import WishlistAlt from "../assets/wishlist solid fill.png";
  import User from "../assets/user.png";
  import UserAlt from "../assets/user solid fill.png";
  export let segment;
  export let style;

  let username = "randombuyer";
</script>

<nav
  style="--width: {segment === undefined ||
  segment === 'search' ||
  segment === 'add' ||
  segment === 'wishlist' ||
  segment === 'user'
    ? '300px'
    : '100px'};
    --box-shadow:{segment === undefined ||
  segment === 'search' ||
  segment === 'add' ||
  segment === 'wishlist' ||
  segment === 'user'
    ? 'unset'
    : '2px 0 10px rgb(68 68 68 / 15%)'};
    --width-at-1400:{segment === undefined ||
  segment === 'search' ||
  segment === 'add' ||
  segment === 'wishlist' ||
  segment === 'user'
    ? '220px'
    : '80px'};{style}
    "
>
  <div
    class="nav-icons"
    style="--nav-icons-height:{segment === undefined ||
    segment === 'search' ||
    segment === 'add' ||
    segment === 'wishlist' ||
    segment === 'user'
      ? '300px'
      : '360px'}"
  >
    <div class="nav-item-wrapper">
      <span
        class="bar"
        class:border={segment === undefined}
        style="--bar-display: {segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? 'inline block'
          : 'none'};"
      /><a
        href="/"
        style="--link-margin:{segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? '0'
          : 'auto'}"
        ><img src={segment === undefined ? HomeAlt : Home} alt="" /><span
          class="nav-item-name"
          class:nav-active={segment === undefined}
          style="--display:{segment === undefined ||
          segment === 'search' ||
          segment === 'add' ||
          segment === 'wishlist' ||
          segment === 'user'
            ? 'inline block'
            : 'none'}">Home</span
        ></a
      >
    </div>
    <div class="nav-item-wrapper">
      <span
        class="bar"
        class:border={segment === "search"}
        style="--bar-display: {segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? 'inline block'
          : 'none'};"
      /><a
        href="/search"
        style="--link-margin:{segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? '0'
          : 'auto'}"
        ><img src={segment === "search" ? LoupeAlt : Loupe} alt="" /><span
          class="nav-item-name"
          class:nav-active={segment === "search"}
          style="--display:{segment === undefined ||
          segment === 'search' ||
          segment === 'add' ||
          segment === 'wishlist' ||
          segment === 'user'
            ? 'inline block'
            : 'none'}">Search</span
        ></a
      >
    </div>
    <div class="nav-item-wrapper">
      <span
        class="bar"
        class:border={segment === "add"}
        style="--bar-display: {segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? 'inline block'
          : 'none'};"
      /><a
        href="/add"
        style="--link-margin:{segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? '0'
          : 'auto'}"
        ><img src={segment === "add" ? AddAlt : Add} alt="" /><span
          class="nav-item-name"
          class:nav-active={segment === "add"}
          style="--display:{segment === undefined ||
          segment === 'search' ||
          segment === 'add' ||
          segment === 'wishlist' ||
          segment === 'user'
            ? 'inline block'
            : 'none'}">Add product</span
        ></a
      >
    </div>
    <div class="nav-item-wrapper">
      <span
        class="bar"
        class:border={segment === "wishlist"}
        style="--bar-display: {segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? 'inline block'
          : 'none'};"
      /><a
        href="/wishlist"
        style="--link-margin:{segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? '0'
          : 'auto'}"
        ><img
          src={segment === "wishlist" ? WishlistAlt : Wishlist}
          alt=""
        /><span
          class="nav-item-name"
          class:nav-active={segment === "wishlist"}
          style="--display:{segment === undefined ||
          segment === 'search' ||
          segment === 'add' ||
          segment === 'wishlist' ||
          segment === 'user'
            ? 'inline block'
            : 'none'}">Wishlist</span
        ></a
      >
    </div>
    <div class="nav-item-wrapper">
      <span
        class="bar"
        class:border={segment === "user"}
        style="--bar-display: {segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? 'inline block'
          : 'none'};"
      /><a
        href="/{username}"
        style="--link-margin:{segment === undefined ||
        segment === 'search' ||
        segment === 'add' ||
        segment === 'wishlist' ||
        segment === 'user'
          ? '0'
          : 'auto'}"
        ><img src={segment === "user" ? UserAlt : User} alt="" /><span
          class="nav-item-name"
          class:nav-active={segment === "user"}
          style="--display:{segment === undefined ||
          segment === 'search' ||
          segment === 'add' ||
          segment === 'wishlist' ||
          segment === 'user'
            ? 'inline block'
            : 'none'}">User</span
        ></a
      >
    </div>
  </div>
</nav>

<style>
  nav {
    width: var(--width);
    height: 100vh;
    box-shadow: var(--box-shadow);
    position: fixed;
    z-index: 4;
    transition: all 0.5s ease-in-out;
  }
  .nav-icons {
    height: var(--nav-icons-height);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 150px 0 0 0;
  }
  .nav-item-wrapper {
    display: flex;
    width: 100%;
  }
  a {
    padding: 8px 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: var(--link-margin);
  }
  .bar {
    border-left: 6px solid #99319b;
    visibility: hidden;
    margin-right: 50px;
    display: var(--bar-display);
  }
  .border {
    visibility: visible;
  }
  img {
    width: 030px;
    height: 30px;
  }
  .nav-item-name {
    font-family: "Montserrat", sans-serif;
    margin-left: 10px;
    color: #444444;
    font-size: 26px;
    font-weight: 500;
    display: var(--display);
  }
  .nav-active {
    color: #99319b;
  }

  @media screen and (max-width: 1400px) {
    nav {
      width: var(--width-at-1400);
    }
    .bar {
      margin-right: 30px;
    }
    .nav-item-name {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    nav {
      width: 60px;
      box-shadow: 2px 0 10px rgb(68 68 68 / 15%);
      z-index: 3;
    }

    .nav-icons {
      height: 360px;
    }

    img {
      width: 24px;
      height: 24px;
    }

    .nav-item-wrapper {
      justify-content: center;
    }

    .bar,
    .nav-item-name {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    nav {
      width: 100vw;
      height: 60px;
      position: fixed;
      bottom: 0;
      background: #ffffff;
    }

    .nav-icons {
      height: unset;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 10px 0;
    }
  }
</style>
