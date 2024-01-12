import { Message } from "./class.js";

const userdata = [
    {
        id: 1,
        name: "Harish",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
    {
        id: 2,
        name: "Sandeep Kumar",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
    {
        id: 3,
        name: "Karthic",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
    {
        id: 4,
        name: "Rohan",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
    {
        id: 5,
        name: "Amma",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
    {
        id: 6,
        name: "Appa",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
    {
        id: 7,
        name: "Akash",
        profilePic: `https://picsum.photos/${Math.floor(
            Math.random() * 300 + 1
        )}`,
    },
];

const chat_2 = [
    new Message("6:23 PM", 1, "Hii dude"),
    new Message("6:23 PM", 1, "what are you doing"),
    new Message("6:26 PM", 2, "Hii vroo"),
    new Message("6:26 PM", 2, "netflix vro"),
    new Message("6:30 PM", 1, "ohhhhhhhhhhhhh"),
    new Message("6:30 PM", 1, "we are planning for dinner out"),
    new Message("6:23 PM", 1, "Hii dude"),
    new Message("6:30 PM", 1, "at taj"),
    new Message("6:31 PM", 1, "are you coming"),
    new Message("6:34 PM", 2, "noo bro"),
    new Message("6:34 PM", 2, "I have some work to do"),
    new Message("6:35 PM", 2, "sorryy"),
    new Message("6:41 PM", 1, "ok bro"),
    new Message("6:41 PM", 1, "lets meet next time"),
    new Message("6:41 PM", 2, "yeah sure"),
];

const chat_3 = [
    new Message("6:23 PM", 1, "Hiiiiii Karthic"),
    new Message("6:23 PM", 1, "what are you doing"),
];

const chat_4 = [
    new Message("6:23 PM", 4, "what are you doing"),
    new Message("6:26 PM", 1, "Hii vroo"),
    new Message("6:26 PM", 1, "netflix vro"),
    new Message("6:30 PM", 4, "ohhhhhhhhhhhhh"),
    new Message("6:30 PM", 4, "we are planning for dinner out"),
    new Message("6:23 PM", 4, "Hii dude"),
    new Message("6:30 PM", 4, "at taj"),
    new Message("6:31 PM", 4, "are you coming"),
    new Message("6:34 PM", 1, "noo bro"),
    new Message("6:34 PM", 1, "I have some work to do"),
    new Message("6:35 PM", 1, "sorryy"),
    new Message("6:41 PM", 4, "ok bro"),
    new Message("6:41 PM", 4, "lets meet next time"),
    new Message("6:41 PM", 1, "yeah sure"),
];

const chat_5 = [
    new Message("6:23 PM", 1, "Amma....."),
    new Message("6:23 PM", 1, "I need some help"),
    new Message("6:26 PM", 1, "Call me"),
];

const chat_6 = [
    new Message("6:23 PM", 6, "pl call me if u r free"),
    new Message("6:23 PM", 1, "5 mins pa"),
    new Message("6:26 PM", 6, "okk"),
];

const chat_7 = [
    new Message("6:23 PM", 1, "Brooooo"),
    new Message("6:23 PM", 1, "send me the link"),
    new Message("6:26 PM", 7, "wait"),
    new Message("6:28 PM", 7, "www.google.com"),
    new Message("6:28 PM", 1, "Thanks"),
];

export default { userdata, chat_2, chat_3, chat_4, chat_5, chat_6, chat_7 };
