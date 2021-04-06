// translates letters in sentence into thir position in alphabet

// MY ANSWER
function alphabetPosition(text) {
  text = text.toLowerCase();
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i])) {
      let alphabetPosition = text.charCodeAt(i) - 96;
      answer += `${alphabetPosition} `;
    }
  }
  answer = answer.slice(0, -1);

  return answer;
}

// TOP ANSWER
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }

// ONE LINER
function alphabetPosition(text) {
    return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
  }