<footer>
  <div class="buzzaar-container non-responsive">
    <span class="buzzaar">Buzzaar</span>
    <span class="marketplace">marketplace</span>
  </div>

  <div class="column">
    <span class="heading">online shopping</span>
    <ul>
      <li>Accessories</li>
      <li>Gift Collections</li>
      <li>stationary</li>
      <li>resin art</li>
    </ul>
  </div>

  <div class="column">
    <span class="heading">useful links</span>
    <ul>
      <li>contact us</li>
      <li>FAQ's</li>
      <li>Terms & conditions</li>
      <li>help</li>
    </ul>
  </div>

  <div class="column">
    <span class="heading">keep in touch</span>
    <ul>
      <li>instagram</li>
      <li>mail</li>
    </ul>
  </div>

  <div class="buzzaar-container responsive">
    <hr />
    <span class="buzzaar">Buzzaar</span>
    <span class="marketplace">marketplace</span>
  </div>
</footer>

<style>
  footer {
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 0.5px solid rgba(196, 196, 196, 0.85);
    margin-top: 50px;
  }

  .buzzaar-container {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #99139b;
  }

  .buzzaar {
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: italic;
  }

  .marketplace {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .column span.heading {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 21px;
    color: #444444;
    text-transform: uppercase;
  }

  .column ul {
    margin-top: 20px;
  }

  .column ul li {
    list-style: none;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 18px;
    color: #444444;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .responsive {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    footer {
      padding: 50px;
    }

    .buzzaar {
      font-size: 44px;
    }

    .marketplace {
      font-size: 18px;
    }

    .column span.heading {
      font-size: 19px;
      margin-bottom: 15px;
    }

    .column ul li {
      font-size: 17px;
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 1000px) {
    footer {
      padding: 40px 20px;
    }
  }

  @media screen and (max-width: 900px) {
    .non-responsive {
      display: none;
    }

    footer {
      display: grid;
      grid-template-columns: auto auto auto;
      justify-content: space-evenly;
    }

    .buzzaar {
      font-size: 35px;
    }

    .marketplace {
      font-size: 15px;
    }

    .column span.heading {
      font-size: 17px;
      margin-bottom: 12px;
    }

    .column ul li {
      font-size: 16px;
    }

    .responsive {
      display: flex;
      grid-column-start: 1;
      grid-column-end: 4;
    }

    hr {
      width: 100%;
      height: 1px;
      border: unset;
      background: rgba(196, 196, 196, 0.7);
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }

  @media screen and (max-width: 650px) {
    footer {
      grid-template-columns: auto auto;
    }

    .column:nth-child(4) {
      margin-top: 30px;
    }

    .responsive {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  @media screen and (max-width: 480px) {
    footer {
      padding: 30px;
      padding-bottom: 90px;
      justify-content: unset;
    }

    .column:nth-child(4) {
      margin-top: 20px;
    }

    hr {
      margin-top: 20px;
    }

    @media screen and (max-width: 440px) {
      footer {
        grid-template-columns: 1fr;
      }

      .responsive {
        grid-column-start: unset;
        grid-column-end: unset;
      }
    }

    .column:nth-child(3) {
      margin-top: 20px;
    }
  }
</style>
