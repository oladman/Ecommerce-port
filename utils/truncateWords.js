export const truncateWords = (text, maxWords = 10) => {
  if (!text) return "";

  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};
