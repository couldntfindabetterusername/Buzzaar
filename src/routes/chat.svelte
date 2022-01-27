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
    <div class="chat">
      {#each buzzaarChat.messages as message}
        <div class={message.sender ? "msg sender-msg" : "msg reciever-msg"}>
          {#if message.type === "product"}
            {message.product}
          {:else if message.type === "message"}
            {message.message}
          {/if}
        </div>
      {/each}
    </div>
    <div class="type-in">
      <input type="text" name="message" id="message" />
      <button class="send-btn">Send</button>
    </div>
  </div>
</main>
