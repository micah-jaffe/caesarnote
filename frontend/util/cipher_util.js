// the crown jewels

export const richCaesarCipher = (htmlString, shift = 0, mode = 'encode') => {
  let cipheredHtml = '';
  let inHtmlTag = false;
  let inReservedChar = false;

  for (let i = 0; i < htmlString.length; i++) {
    const char = htmlString.charAt(i);

    if (char === '<') {
      inHtmlTag = true;
    } else if (char === '>') {
      inHtmlTag = false;
    } else if (char === '&') {
      inReservedChar = true;
    } else if (char === ';') {
      inReservedChar = false;
    }

    if (inHtmlTag || inReservedChar) {
      cipheredHtml += char;
    } else {
      cipheredHtml += (mode === 'encode' ? caesarShift(char, shift) : caesarShift(char, -shift));
    }
  }

  return cipheredHtml;
};

export const caesarShift = (char, shift) => {
  if (!char.match(/[a-z]/i)) {
    return char;
  }

  let startPos;
  let endPos;

  if (char === char.toUpperCase()) {
    startPos = 'A'.charCodeAt(0);
    endPos = 'Z'.charCodeAt(0);
  } else if (char === char.toLowerCase()) {
    startPos = 'a'.charCodeAt(0);
    endPos = 'z'.charCodeAt(0);
  }

  const shifted = (char.charCodeAt(0) - startPos + shift) % 26;
  if (shifted >= 0) {
    return String.fromCharCode(shifted + startPos);
  } else if (shifted % 26 === 0) {
    return String.fromCharCode(shifted + endPos);
  } else {
    return String.fromCharCode(shifted + endPos + 1); 
  }
};
