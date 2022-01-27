<script>
</script>

<main>
  <div class="heading">Chat</div>
  <div class="chat-section">
    <a href="/chat">
      <div class="chat">
        <div
          class="profile-img"
          style="background: url('https://source.unsplash.com/random') center / cover;"
        />
        <div class="info">
          <span class="chat-title">Buzzaar</span>
          <span class="last-msg">Thank you so muchhwncnncwanoeq</span>
        </div>
      </div>
    </a>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  a {
    text-decoration: none;
  }
  main {
    width: 300px;
    height: fit-content;
    font-family: "Montserrat", sans-serif;
    color: #444444;
    border: 0.5px solid #c4c4c4;
    border-radius: 15px;
    margin-top: 30px;
    overflow: hidden;
  }
  .heading {
    font-size: 25px;
    font-weight: 600;
    padding: 15px 30px;
    border-bottom: 0.5px solid #c4c4c4;
  }
  .chat-section {
    padding-bottom: 20px;
  }
  .chat {
    width: calc(100% - 40px);
    border-bottom: 0.5px solid #c4c4c4;
    display: flex;
    padding: 15px 20px;
  }
  .profile-img {
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .info {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .chat-title {
    font-size: 21px;
    font-weight: 500;
    color: #444444;
  }
  .last-msg {
    color: #99319b;
  }

  @media screen and (max-width: 1400px) {
    main {
      width: 200px;
    }
    .heading {
      font-size: 22px;
    }
    .chat {
      padding: 12px 15px;
      width: calc(100% - 30px);
    }
    .profile-img {
      min-width: 40px;
      max-width: 40px;
      min-height: 40px;
      max-height: 40px;
      margin-right: 15px;
    }
    .chat-title {
      font-size: 18px;
    }
    .last-msg {
      font-size: 15px;
    }
  }
</style>
