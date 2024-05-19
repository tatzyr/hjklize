export type Pattern = {
  url: string;
  selector: string;
};

// Ordered by url in alphabetical order.
export const patterns: Pattern[] = [
  {
    url: "^https://www.amazon.co.jp/s\\?",
    selector: "h2 a",
  },
  {
    url: "^https://www.google.com/search\\?",
    selector: "a[jsname='UWckNb']",
  },
  {
    url: "^https://www.youtube.com/$",
    selector: "#video-title-link",
  },
  {
    url: "^https://www.youtube.com/(@|results\\?)",
    selector: "#video-title",
  },
];
