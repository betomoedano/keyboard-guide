export interface Message {
  author: string;
  message: string;
  image: string | null;
  createdAt: Date;
}

export const KeithPhoto = "https://avatars.githubusercontent.com/u/8053974?v=4";
export const BetoPhoto = "https://avatars.githubusercontent.com/u/43630417?v=4";

export const messages: Message[] = [
  {
    author: "Keith",
    message:
      "Hey Beto, have you tried using Expo for React Native development?",
    image: null,
    createdAt: new Date("2024-08-08T10:00:00Z"),
  },
  {
    author: "Beto",
    message: "Yeah, I started using it last month. It's amazing!",
    image: null,
    createdAt: new Date("2024-08-08T10:02:00Z"),
  },
  {
    author: "Keith",
    message:
      "I know, right? The setup process is so smooth. No more dealing with native build tools.",
    image: null,
    createdAt: new Date("2024-08-08T10:04:00Z"),
  },
  {
    author: "Beto",
    message:
      "Absolutely! And the hot reloading feature is a game-changer. Look at this demo:",
    image:
      "https://as2.ftcdn.net/v2/jpg/05/34/48/37/1000_F_534483775_2hBgOxryd3El6t3tKOtbcM95Yq3OmTGG.jpg",
    createdAt: new Date("2024-08-08T10:07:00Z"),
  },
  {
    author: "Keith",
    message:
      "That's awesome! I love how Expo handles all the heavy lifting with notifications and updates too.",
    image: null,
    createdAt: new Date("2024-08-08T10:10:00Z"),
  },
  {
    author: "Beto",
    message:
      "Definitely. And have you tried Expo Go? Testing on physical devices has never been easier.",
    image: null,
    createdAt: new Date("2024-08-08T10:12:00Z"),
  },
  {
    author: "Keith",
    message:
      "Oh yeah, it's fantastic. No need to mess with Apple developer accounts just to test on iOS.",
    image: null,
    createdAt: new Date("2024-08-08T10:15:00Z"),
  },
  {
    author: "Beto",
    message:
      "Exactly! And look at this chart showing how much time I've saved since switching to Expo:",
    image: null,
    createdAt: new Date("2024-08-08T10:18:00Z"),
  },
  {
    author: "Keith",
    message:
      "Those are impressive numbers! The Expo SDK is so comprehensive too. It covers almost everything I need.",
    image: null,
    createdAt: new Date("2024-08-08T10:21:00Z"),
  },
  {
    author: "Beto",
    message:
      "True, and when you do need to add custom native code, EAS makes it straightforward.",
    image: null,
    createdAt: new Date("2024-08-08T10:24:00Z"),
  },
  {
    author: "Keith",
    message:
      "Expo has really transformed my React Native workflow. I can't imagine going back to the old way of doing things.",
    image: null,
    createdAt: new Date("2024-08-08T10:27:00Z"),
  },
  {
    author: "Beto",
    message:
      "Same here! It's made development so much more enjoyable. Cheers to Expo! 🎉",
    image:
      "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
    createdAt: new Date("2024-08-08T10:30:00Z"),
  },
];
