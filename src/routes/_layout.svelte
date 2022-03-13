<script>
  import LeftNav from "../components/LeftNav.svelte";
  import TopNav from "../components/TopNav.svelte";
  import UserLoginInfo from "../components/UserLoginInfo.svelte";
  import Chat from "../components/Chat.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;

  let screenWidth;
  $: width = screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<main>
  {#if segment != "signup" && segment != "login"}
    {#if screenWidth > 768}
      <LeftNav {segment} />{/if}{/if}

  <article
    style={segment != "signup" && segment != "login"
      ? segment === undefined ||
        segment === "search" ||
        segment === "add" ||
        segment === "wishlist"
        ? "--margin-left:260px;--margin-left-at-1400:220px;bg-color:#fbfbfb;"
        : "--margin-left:100px;--margin-left-at-1400:80px;bg-color:#fbfbfb;"
      : screenWidth >= 900
      ? "--margin-left:0;"
      : "--margin-left:0;margin-left:0;--bg-color:transparent"}
  >
    <TopNav {segment} />
    <div
      class="div"
      style={segment === undefined ||
      segment === "search" ||
      segment === "wishlist"
        ? "--div-margin-top:120px;--div-margin-left:50px"
        : "--div-margin-top:120px;"}
    >
      <slot />

      <div class="extra" />
      <div
        class="side-panel"
        style="--display: {segment === undefined ||
        segment === 'search' ||
        segment === 'wishlist'
          ? 'block'
          : 'none'};"
      >
        <UserLoginInfo />
        <Chat />
        <div class="extra-side-panel" />
      </div>
    </div>

    {#if segment != undefined && segment != "search" && segment != "add" && segment != "wishlist" && segment != "login" && segment != "signup"}
      <Footer />
    {/if}
  </article>

  {#if screenWidth <= 768 && segment != "signup" && segment != "login"}
    <LeftNav {segment} />{/if}
</main>

<style>
  :root {
    --margin-left: 100px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    width: 100%;
    display: flex;
    position: relative;
    overflow-x: hidden;
  }
  article {
    width: 100%;
    margin-left: var(--margin-left);
    position: relative;
  }
  .div {
    display: flex;
    margin-top: var(--div-margin-top);
    margin-left: var(--div-margin-left);
  }
  .side-panel {
    margin: 0 30px;
    display: var(--display);
  }

  .extra-side-panel {
    width: 300px;
    height: 20px;
    display: block;
  }
  @media screen and (max-width: 1400px) {
    article {
      margin-left: var(--margin-left-at-1400);
    }

    .extra-side-panel {
      width: 200px;
    }
  }

  @media screen and (max-width: 900px) {
    article {
      margin-left: 60px;
    }
  }

  @media screen and (max-width: 850px) {
    article {
      margin-left: 60px;
    }

    .side-panel {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
    main {
      flex-direction: column-reverse;
    }
    article {
      margin-left: 0px;
    }
    .div {
      margin-top: 90px;
      flex-direction: column;
      margin-left: unset;
      background: var(--bg-color);
    }

    .extra {
      width: 100%;
      height: 80px;
    }
  }
</style>
