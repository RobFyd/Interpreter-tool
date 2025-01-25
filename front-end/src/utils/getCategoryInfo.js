export function getCategoryInfo(category) {
  switch (category) {
    case "noun":
      return "There are over 80,000 nouns in the English language!";
    case "verb":
      return "There are over 25,000 verbs in the English language!";
    default:
      return "There are over 170,000 words in the English language!";
  }
}
