// AI Generated!

function getFirstTwoSentences(markdownContent) {
  if (!markdownContent) return "";

  // 1. Remove Markdown syntax to get clean text
  const cleanText = markdownContent
    // Remove headers (e.g., # Header)
    .replace(/^#+\s+.*$/gm, "")
    // Remove images and links but keep the alt/link text [text](url) -> text
    .replace(/!?\[([^\]]+)\]\([^)]+\)/g, "$1")
    // Remove emphasis (bold, italics) **bold** or *italic* -> bold/italic
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1")
    // Remove code blocks and inline code
    .replace(/```[^`]+```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    // Replace multiple spaces/newlines with a single space
    .replace(/\s+/g, " ")
    .trim();

  // 2. Match sentences using a regex
  // This looks for text ending in ., !, or ? followed by a space or end of string
  const sentenceRegex = /[^.!?]+[.!?]+(\s|$)/g;
  const sentences = cleanText.match(sentenceRegex);

  // 3. Return the first two sentences joined together
  if (!sentences) return cleanText; // Fallback if no punctuation is found
  return sentences.slice(0, 2).join("").trim();
}

export { getFirstTwoSentences };
