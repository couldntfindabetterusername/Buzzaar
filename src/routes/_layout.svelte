<script>
  import LeftNav from "../components/LeftNav.svelte";
  import TopNav from "../components/TopNav.svelte";
  import UserLoginInfo from "../components/UserLoginInfo.svelte";
  export let segment;

  let screenWidth;
  $: width = screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<main>
  {#if screenWidth > 480}
    <LeftNav {segment} />{/if}

  <article
    style="--margin-left:{segment === undefined ||
    segment === 'search' ||
    segment === 'add' ||
    segment === 'wishlist' ||
    segment === 'user'
      ? '300px'
      : '100px'};--margin-left-at-1400:{segment === undefined ||
    segment === 'search' ||
    segment === 'add' ||
    segment === 'wishlist' ||
    segment === 'user'
      ? '220px'
      : '80px'};"
  >
    <TopNav {segment} />
    <div
      class="div"
      style={segment === "user" || segment === "add"
        ? ""
        : "--div-margin-top:130px;--div-margin-left:50px"}
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
      </div>
    </div>
  </article>
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

  @media screen and (max-width: 1400px) {
    article {
      margin-left: var(--margin-left-at-1400);
    }
  }

  @media screen and (max-width: 768px) {
    article {
      margin-left: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    .side-panel {
      display: none;
    }
    .div {
      margin-left: 0;
    }
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
    }

    .extra {
      width: 100%;
      height: 80px;
    }
  }
</style>
