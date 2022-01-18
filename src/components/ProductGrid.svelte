<script>
  import CompactProduct from "../components/CompactProduct.svelte";
  export let data;
</script>

<main>
  {#each data as product}
    <CompactProduct {product} />
  {/each}
</main>

<style>
  main {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 1650px) {
    main {
      grid-gap: 30px;
    }
  }

  @media screen and (max-width: 1550px) {
    main {
      grid-gap: 50px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 1400px) {
    main {
      width: 90%;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 0 30px;
      transition: unset;
      grid-gap: unset;
    }
  }

  @media screen and (max-width: 1300px) {
    main {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      grid-gap: 24px;
    }
  }

  @media screen and (max-width: 700px) {
    main {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 480px) {
    main {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      margin: 0 25px;
      width: 100%;
    }
  }
</style>
