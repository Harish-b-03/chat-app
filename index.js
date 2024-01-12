import { User, Message, Chat } from "./class.js";
import data from "./data.js";

class Main {
    #users = [];
    #currentUserID = 1; // its you, the user logged in to SEND messages
    #selectedReceiverId = -1; // selected user's chat will be displayed in the right pane
    #messagesList = [];

    constructor() {
        const { userdata, chat_2, chat_3, chat_4, chat_5, chat_6, chat_7 } =
            data;
        userdata.forEach((user) => {
            this.#users.push(new User(user.id, user.name, user.profilePic));
        });
        this.#messagesList.push(
            new Chat(this.#users[1], chat_2),
            new Chat(this.#users[2], chat_3),
            new Chat(this.#users[3], chat_4),
            new Chat(this.#users[4], chat_5),
            new Chat(this.#users[5], chat_6),
            new Chat(this.#users[6], chat_7)
        );
        this.#selectedReceiverId = this.#users[1].getUserId();

        this.renderMessage();
        this.generateChatSummary();
        document.getElementById(
            `chatSummary-${this.#selectedReceiverId}`
        ).style.backgroundColor = "rgba(0,0,0,0.05)";
        this.generateChatHeader();
    }

    getUsers() {
        return this.#users;
    }

    getCurrentUserID() {
        return this.#currentUserID;
    }

    getSelectedReceiverId() {
        return this.#selectedReceiverId;
    }

    getMessagesList() {
        return this.#messagesList;
    }

    renderMessage() {
        const selectedReceiverChat = this.#messagesList.filter(
            (msg) => msg.getReceiverId() === this.#selectedReceiverId
        )[0];

        if (selectedReceiverChat === undefined) {
            new Error("selectedReceiverChat undefined");
        }
        selectedReceiverChat.getMessages().forEach((msg) => {
            if (msg.getSender() !== this.#selectedReceiverId) {
                chats.innerHTML += `<div class="chatContainer" style="display: flex; justify-content: end;">
                                        <div class="sentChat" style="background-color: rgba(34, 193, 34, 0.5);">${msg.getMessage()}</div>
                                    </div>`;
            } else {
                chats.innerHTML += `<div class="chatContainer" style="display: flex; justify-content: start;">
                <div class="receivedChat"  style="background-color: lightgrey;">${msg.getMessage()}</div>
                </div>`;
            }
        });
        const chatContainer = document.getElementById("chatsWrapper");
        chatContainer.scrollTo(0, chatContainer.clientHeight);
    }

    generateChatSummary() {
        let container = document.getElementById("chatSummaryContainer");
        this.#users.forEach((user) => {
            if (user.getUserId() !== this.#currentUserID) {
                let chat = this.#messagesList.filter(
                    (msg) => msg.getReceiverId() === user.getUserId()
                )[0];
                let lastMessage = chat
                    .getMessages()
                    [chat.getMessages().length - 1].getMessage();
                container.innerHTML += `<div class="chatSummary" onclick="chatSummaryOnClick(${user.getUserId()})" id="chatSummary-${user.getUserId()}">
                    <img src="${user.getProfilePic()}" alt="userPic" class="profilePhoto"/> 
                    <div class="chatSummaryRight">
                        <div class="chatTitle">${user.getUserName()}</div>
                        <div class="messagePreview">${lastMessage}</div>
                    </div>
                    </div>`;
            }
        });
    }

    generateChatHeader() {
        document.getElementById(
            "rightBoxHeader"
        ).innerHTML = `<img src="${this.#users[
            this.#selectedReceiverId - 1
        ].getProfilePic()}" alt="userPic" class="profilePhoto"/>
            <span class="logo">
                ${this.#users[this.#selectedReceiverId - 1].getUserName()}
            </span>`;
    }
    
    sendMessage = () => {

        const msg = document.getElementById("messageInput").value;
        if (msg === "") {
            return;
        }
        const selectedReceiverChat = this.#messagesList.filter(
            (msg) => msg.getReceiverId() === this.#selectedReceiverId
        )[0];
        if (selectedReceiverChat === undefined) {
            new Error("selectedReceiverChat undefined");
        }
    
        selectedReceiverChat.AddMessageToChat(new Message("6:31 PM", 1, msg));
    
        document.getElementById("chats").innerHTML += `<div class="chatContainer" style="display: flex; justify-content: end;">
                                        <div class="sentChat" style="background-color: rgba(34, 193, 34, 0.5);">${msg}</div>
                                    </div>`;
        const chatContainer = document.getElementById("chatsWrapper");
        chatContainer.scrollTo(0, chatContainer.clientHeight);
        document.getElementById("messageInput").value = "";
    };
    
    chatSummaryOnClick = (userId) => {
        document.getElementById(
            `chatSummary-${this.#selectedReceiverId}`
        ).style.backgroundColor = "transparent";
        this.#selectedReceiverId = userId;
        document.getElementById(
            `chatSummary-${this.#selectedReceiverId}`
        ).style.backgroundColor = "rgba(0,0,0,0.05)";
        document.getElementById("chats").innerHTML = "";
    
        this.renderMessage();
        this.generateChatHeader();
    };
}

const object = new Main();

window.sendMessage = () => object.sendMessage();

window.chatSummaryOnClick = (userId) => object.chatSummaryOnClick(userId);




























// const { userdata, chat_2, chat_3, chat_4, chat_5, chat_6, chat_7 } = data;

// const users = [];
// const currentUserID = 1; // its you, the user logged in to SEND messages

// userdata.forEach((user) => {
//     users.push(new User(user.id, user.name, user.profilePic));
// });

// let selectedReceiverId = users[1].getUserId(); // selected user's chat will be displayed in the right pane

// const messagesList = [
//     new Chat(users[1], chat_2),
//     new Chat(users[2], chat_3),
//     new Chat(users[3], chat_4),
//     new Chat(users[4], chat_5),
//     new Chat(users[5], chat_6),
//     new Chat(users[6], chat_7),
// ];

// const chats = document.getElementById("chats");
// const chatContainer = document.getElementById("chatsWrapper");

// window.sendMessage = () => {
//     const msg = document.getElementById("messageInput").value;
//     if (msg === "") {
//         return;
//     }
//     const selectedReceiverChat = messagesList.filter(
//         (msg) => msg.getReceiverId() === selectedReceiverId
//     )[0];
//     if (selectedReceiverChat === undefined) {
//         new Error("selectedReceiverChat undefined");
//     }

//     selectedReceiverChat.AddMessageToChat(new Message("6:31 PM", 1, msg));

//     chats.innerHTML += `<div class="chatContainer" style="display: flex; justify-content: end;">
//                                     <div class="sentChat" style="background-color: rgba(34, 193, 34, 0.5);">${msg}</div>
//                                 </div>`;
//     chatContainer.scrollTo(0, chatContainer.clientHeight);
//     document.getElementById("messageInput").value = "";
// }

// window.chatSummaryOnClick= (userId) => {
//     document.getElementById(
//         `chatSummary-${selectedReceiverId}`
//     ).style.backgroundColor = "transparent";
//     selectedReceiverId = userId;
//     document.getElementById(
//         `chatSummary-${selectedReceiverId}`
//     ).style.backgroundColor = "rgba(0,0,0,0.05)";
//     chats.innerHTML = "";

//     renderMessage();
//     generateChatHeader();
// }

// function renderMessage() {
//     const selectedReceiverChat = messagesList.filter(
//         (msg) => msg.getReceiverId() === selectedReceiverId
//     )[0];
//     if (selectedReceiverChat === undefined) {
//         new Error("selectedReceiverChat undefined");
//     }
//     selectedReceiverChat.getMessages().forEach((msg) => {
//         if (msg.getSender() !== selectedReceiverId) {
//             chats.innerHTML += `<div class="chatContainer" style="display: flex; justify-content: end;">
//                                     <div class="sentChat" style="background-color: rgba(34, 193, 34, 0.5);">${msg.getMessage()}</div>
//                                 </div>`;
//         } else {
//             chats.innerHTML += `<div class="chatContainer" style="display: flex; justify-content: start;">
//                                 <div class="receivedChat"  style="background-color: lightgrey;">${msg.getMessage()}</div>
//                             </div>`;
//         }
//     });
//     chatContainer.scrollTo(0, chatContainer.clientHeight);
// }
// renderMessage();

// (function generateChatSummary() {
//     let container = document.getElementById("chatSummaryContainer");
//     users.forEach((user) => {

//         if (user.getUserId() !== currentUserID) {
//             let chat = messagesList.filter(
//                 (msg) => msg.getReceiverId() === user.getUserId()
//             )[0];
//             let lastMessage = chat
//                 .getMessages()
//                 [chat.getMessages().length - 1].getMessage();
//             container.innerHTML += `<div class="chatSummary" onclick="chatSummaryOnClick(${
//                 user.getUserId()
//             })" id="chatSummary-${user.getUserId()}">
//                 <img src="${
//                     user.getProfilePic()
//                 }" alt="userPic" class="profilePhoto"/>
//                 <div class="chatSummaryRight">
//                     <div class="chatTitle">${user.getUserName()}</div>
//                     <div class="messagePreview">${lastMessage}</div>
//                 </div>
//             </div>`;
//         }
//     });
// })()

// document.getElementById(
//     `chatSummary-${selectedReceiverId}`
// ).style.backgroundColor = "rgba(0,0,0,0.05)";

// function generateChatHeader() {
//     document.getElementById("rightBoxHeader").innerHTML = `<img src="${
//         users[selectedReceiverId - 1].getProfilePic()
//     }" alt="userPic" class="profilePhoto"/>
//     <span class="logo">
//         ${users[selectedReceiverId - 1].getUserName()}
//     </span>`;
// }
// generateChatHeader();
