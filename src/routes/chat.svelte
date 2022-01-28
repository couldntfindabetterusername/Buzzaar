<script>
  import chatData from "../chatData";
  const buzzaarChat = chatData[0];
</script>

<main>
  <div class="top">
    <div class="pfp" />
    <div class="username">{buzzaarChat.chatWith}</div>
  </div>
  <div class="chat-section">
    <div class="chat-wrapper">
      <div class="chat">
        {#each buzzaarChat.messages as message}
          <div class={message.sender ? "msg sender-msg" : "msg reciever-msg"}>
            {#if message.type === "product"}
              <div class="card">
                <div
                  class="left"
                  style="background-image: url({message.product
                    .image});background-size:cover;background-position:center;"
                />
                <div class="right">
                  <span class="product-name">{message.product.name}</span>
                  <span class="flex"
                    >Order placed:&nbsp;<img src="" alt="" /></span
                  >
                  <span class="flex"
                    >Delivered to:&nbsp;<span class="content"
                      >{message.product.reciever}</span
                    >
                  </span>
                  <span class="flex"
                    >Seller:&nbsp;<span class="content"
                      >{message.product.seller}</span
                    ></span
                  >
                </div>
              </div>
            {:else if message.type === "message"}
              <span class="message">{message.message}</span>
            {/if}
          </div>
        {/each}
      </div>
    </div>
    <div class="type-in">
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Type message..."
      />
      <button class="send-btn">Send</button>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  main {
    width: 800px;
    border-radius: 10px;
    overflow: hidden;
    border: 0.5px solid #c4c4c4;
    margin-left: 75px;
    margin-top: 20px;
    height: calc(100vh - 200px);
    font-family: "Montserrat", sans-serif;
    color: #444444;
  }
  .top {
    padding: 25px 60px;
    border-bottom: 0.5px solid #c4c4c4;
    display: flex;
    align-items: center;
  }
  .pfp {
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .username {
    font-size: 23px;
    font-weight: 500;
  }
  .chat-section {
    height: calc(100% - 140px);
    padding: 20px 30px;
  }
  .chat-wrapper {
    height: calc(100% - 80px);
    overflow: hidden;
    overflow-y: scroll;
  }
  .chat-wrapper::-webkit-scrollbar {
    width: 6px;
  }
  .chat-wrapper::-webkit-scrollbar-track {
    background: transparent;
  }
  .chat-wrapper::-webkit-scrollbar-thumb {
    background: rgba(68, 68, 68, 0.2);
    border-radius: 5px;
  }
  .chat-wrapper::-webkit-scrollbar-thumb:hover {
    background: rgba(68, 68, 68, 0.5);
  }

  .sender-msg {
    margin-left: auto;
    background: #99319b;
    color: #ffffff;
  }
  .reciever-msg {
    margin-right: auto;
    background: #fbfbfb;
  }
  .msg {
    width: fit-content;
    font-weight: 500;
    max-width: 450px;
    border: 0.8px solid #c4c4c4;
    border-radius: 20px;
    margin-top: 50px;
    overflow: hidden;
  }
  .message {
    margin: 20px 25px;
    display: block;
  }

  .card {
    width: 410px;
    background: #ffffff;
    padding: 20px;
    display: flex;
    border: 0.8px solid #c4c4c4;
    border-radius: 20px;
    align-items: center;
    color: #444444;
  }
  .left {
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
    overflow: hidden;
    border-radius: 20px;
    margin-right: 30px;
  }
  .right {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 240px;
  }
  .product-name {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .flex {
    color: #a8a8a8;
    margin-bottom: 10px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    text-transform: capitalize;
    color: #444444;
  }
  .type-in {
    width: 100%;
    margin-top: 20px;
    height: 60px;
    display: flex;
    align-items: center;
    border: 0.8px solid #a8a8a8;
    border-radius: 10px;
  }
  input,
  button {
    background: transparent;
    border: unset;
    height: 30px;
    font-size: 21px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: #444444;
  }
  input {
    width: 82%;
    outline: none;
    margin: 0 20px 0 30px;
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  button {
    color: #99319b;
  }
</style>
