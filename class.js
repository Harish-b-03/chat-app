export class User {
    #id = -1;
    #name = "";
    #profilePic = "";

    constructor(id, name, profilePic) {
        if (typeof id === "number") {
            this.#id = id;
        }
        if (typeof name === "string") {
            this.#name = name;
        }
        if (typeof profilePic === "string") {
            this.#profilePic = profilePic;
        }
    }
    getUserName() {
        return this.#name;
    }
    getUserId() {
        return this.#id;
    }
    getProfilePic() {
        return this.#profilePic;
    }
}

export class Message {
    #sender = -1;
    #message = "";
    #time = "";
    constructor(time, sender, message) {
        if (typeof sender === "number") {
            this.#sender = sender;
        }
        if (typeof message === "string") {
            this.#message = message;
        }
        if (typeof time === "string") {
            this.#time = time;
        }
    }
    getMessage() {
        return this.#message;
    }
    getSender() {
        return this.#sender;
    }
    getTime() {
        return this.#time;
    }
}

export class Chat {
    #receiver = new User();
    #messages = [];
    constructor(receiver, messages) {
        if (receiver instanceof User) {
            this.#receiver = receiver;
        }
        if (Array.isArray(messages) && messages.length > 0 ) {
            this.#messages = messages;
        }
    }
    getReceiverId() {
        return this.#receiver.getUserId();
    }
    getReceiverName() {
        return this.#receiver.getUserName();
    }
    getMessages() {
        return this.#messages;
    }
    AddMessageToChat(message) {
      this.#messages.push(message);
    }
}
