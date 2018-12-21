# Caesarnote

[Caesarnote](https://caesarnote.herokuapp.com/) is a cryptographic cloud-based note-taking app inspired (heavily) by Evernote. Caesarnote implements many of the core features of Evernote, including:
* Note creation, editing, and deletion with full-featured rich-text editing, autosave, and full-screen mode
* Notebooks and tags for note organization
* Shortcuts for faster navigation

Unlike Evernote, which has been subject to [data leaks](https://www.cnn.com/2013/03/04/tech/web/evernote-hacked/index.html) in the past, Caesarnote ships with [state-of-the-art note encryption](https://en.wikipedia.org/wiki/Caesar_cipher) to make your data cryptographically impenetrable.

Caesarnote's tech stack consists of React and Redux on the front end and Ruby on Rails and PostgresQL on the backend. The project incorporates the React-Quill library for rich-text editing. Caesarnote was designed and built in 10 days.

![splash](https://github.com/micah-jaffe/caesarnote/blob/master/app/assets/images/readme/splash.png)

# Key Features


```javascript
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
```
