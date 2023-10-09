import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState, React } from "react";

//
//   typingIndicator={<TypingIndicator content="Emily is typing" />}
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import Chatbotbaymax from "./assets/profilechatbot.png";
import UserAvatar from "./assets/telegram.png";

export default function Baymax() {
  const API_KEY = "sk-****************************";
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hallo aku baymax asisten kesehatan mu", // teks ini akan ditampilkan di awal percakapan
      sender: "ChatGPT", // sender ChatGPT ada dua sender disini ChatGPT dan user, ini penting
    },
  ]);
  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user", // tadi diatas sendernya ChatGPT sekarang sender dari user ini penting karena akan jadi key
      direction: "outgoing", // ini direction untuk logic chat
    };

    const newMessages = [...messages, newMessage]; // agar arraynya bisa banyak === [pesan1,pesan2,pesan3 .......]
    setMessages(newMessages);

    setTyping(true); // ini buat nampilin typing atau ngga typing

    await ProccesMessageToChatGPT(newMessages); // parameter yang akan diterima oleh function  ProccesMessageToChatGPT adalah hasil dari  newMessages, newMessage adalah hasil dari pesan
  };
  // ini biar kalau mau reload atau exit dikasih warning (percakapan tidak disave)
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  async function ProccesMessageToChatGPT(chatMessage) {
    // masih ingat dengan parameter yang dikirim? nah parameter yang tadi kita map, foreach tidak support return
    let apiMessages = chatMessage.map((messageObject) => {
      // diatas kita buat varabel apiMessages yang nanti kita akan gunakan di apirequest body
      let role = "";
      // buat variabel role string kosong karena nanti akan kita kasih logic kalau messageObject dari sender adalah ChatGPT maka role kita isi asisstant, selain itu role user
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
      // yang di definisi hanya role,  return content, hasil object messageObject
    });
    const systemMessage = {
      // kita buat sistemnya kalau mau lebih jelas bisa baca di website resmi platfrom.openai.com
      role: "system", // role kita definisikan sebagai system
      content:
        "Profesional pskilog yang mempunyai pengalaman lebih dari 10 tahun harus mendengarkan dan menjawab dengan baik. harus jawab menggunakan bahasa indonesia", // content ini itu kayak deskripsikan botnya mau di gimanain sih gitu
    };
    const apiRequestBody = {
      model: "gpt-3.5-turbo", // ini model kalau kalian sultan bisa pakai gpt-4
      max_tokens: 100, // max token bebas kalau kalian sultan kasih banyak aja
      messages: [systemMessage, ...apiMessages],
    };
    //  ini mah dibawah kayak fetch biasa aja sesuai dengan yang ada di situs platfrom.openai.com
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessage,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }
  const [closedAlert, isClosedAlert] = useState(true);
  const handelClosedAlert = () => {
    isClosedAlert(false);
  };
  return (
    <>
      {closedAlert && (
        <div class="rounded-lg bg-white p-8 shadow-2xl bg-[#fff]">
          <h2 class="text-lg font-bold">
            Jika baymax tidak membalas chat lebih dari 10 menit
          </h2>

          <p class="mt-2 text-sm text-black italic">
            Periksa jaringan internet, jika jaringan sudah{" "}
            <span class="text-[#20f]">OKE</span> dan masih belum balas, kamu
            harus menunggu tokennya reset (reset setiap jam 4 pagi)
          </p>

          <div class="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handelClosedAlert}
              class="rounded bg-[#6cdf00] px-4 py-2 text-sm font-medium text-[#000000]"
            >
              Yes, i understand
            </button>
          </div>
        </div>
      )}
      <div className="bg-[#fff]  h-[90vh] md:h-[100vh]">
        <ChatContainer>
          <ConversationHeader>
            <Avatar src={Chatbotbaymax} name="Emily" />
            <ConversationHeader.Content
              userName="Baymax"
              info="A profesional robot psycology"
            />
          </ConversationHeader>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="Baymax lagi ngetik" /> : null
            }
          >
            {messages.map((message, i) => {
              const messageStyle = {
                marginTop: "10px",
                textAlign: message.direction === "outgoing" ? "right" : "left",
              };

              return (
                <Message key={i} model={message} style={messageStyle}>
                  <Avatar
                    src={
                      message.direction === "outgoing"
                        ? UserAvatar
                        : Chatbotbaymax
                    }
                    name={message.sender}
                  />
                </Message>
              );
            })}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSend}
            className="pt-6"
          />
        </ChatContainer>
      </div>
      <div className="bg-[#fff] w-full h-10 md:h-5"></div>
    </>
  );
}
