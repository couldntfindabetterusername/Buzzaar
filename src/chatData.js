const chatData = [
  {
    chatWith: "Buzzaar",
    messages: [
      {
        id: 1,
        sender: true,
        reciever: false,
        chatWith: "Buzzaar",
        date: "27/1/2022",
        time: "19:23:32",
        type: "product",
        message: "",
        product: {
          name: "Satin Top",
          seller: "Tres Chic",
          reciever: "Shreyash Mishra",
          status: "placed",
        },
      },
      {
        id: 2,
        sender: false,
        reciever: true,
        chatWith: "Buzzaar",
        date: "27/1/2022",
        time: "19:24:22",
        type: "message",
        message: `Your Order is placed with the Seller!<br>
Thank you for Ordering!`,
        product: {},
      },
      {
        id: 3,
        sender: true,
        reciever: false,
        chatWith: "Buzzaar",
        date: "27/1/2022",
        time: "20:23:32",
        type: "message",
        message: `Thank you so much!`,
        product: {},
      },
    ],
  },
];

export default chatData;
