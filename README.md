# Caesarnote

[Caesarnote](https://caesarnote.herokuapp.com/) is a cryptographic cloud-based note-taking app inspired (heavily) by Evernote. Caesarnote implements many of the core features of Evernote, including:
* Secure user authentication
* Note creation, editing, and deletion with full-featured rich-text editing, autosave, and full-screen mode
* Notebooks and tags for note organization
* Shortcuts for faster navigation
* Search by note content
* Trash bin for retrieval of deleted notes

Unlike Evernote, which has been subject to [data leaks](https://www.cnn.com/2013/03/04/tech/web/evernote-hacked/index.html) in the past, Caesarnote ships with [state-of-the-art note encryption](https://en.wikipedia.org/wiki/Caesar_cipher) to make your data cryptographically impenetrable.

Caesarnote's tech stack consists of React and Redux on the front end and Ruby on Rails and PostgreSQL on the backend. The project incorporates the React-Quill library for rich-text editing. Caesarnote was designed and built in 10 days.

![splash](https://github.com/micah-jaffe/caesarnote/blob/master/app/assets/images/readme/splash.png)

# Key Features

## Note Processing

![main](https://github.com/micah-jaffe/caesarnote/blob/master/app/assets/images/readme/main.png)

Each time notes are rendered, they are sorted and filtered by various parameters. In order to keep code clean and readable as the number of processing parameters grows, a modularized note processing procedure was developed as follows:

```javascript
  processNotes() {
    this.sortNotes();
    return this.filterNotes();
  }

  sortNotes() {
    this.props.notes.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);
  }

  filterNotes() {
    return this.props.notes
      .filter(this.searchFilter())
      .filter(this.trashFilter());
  }

  searchFilter() {
    let { searchQuery } = this.props;
    searchQuery = searchQuery.toLowerCase();

    return note => note.title.toLowerCase().includes(searchQuery) || note.body.toLowerCase().includes(searchQuery);
  }

  trashFilter() {
    const { trash } = this.props;
    return note => note.is_trashed === trash;
  }
```

Though the application currently only supports one sort parameter and two filter parameters, future versions may include many different sort parameters (chronological by date created, alphabetical by title) and filter parameters (tags). This structure will allow for easy additions of future parameters while maintaining readable and modular code.

## Note Encryption

![ciphered](https://github.com/micah-jaffe/caesarnote/blob/master/app/assets/images/readme/ciphered.png)

There is no known algorithm for a rich-text Caesar cipher (suprising, given how practical an application it is). A conventional Caesar cipher won't work since rich-text tags (`<img>`, `<em>`) and reserved characters (`&amp;`, `&nbsp;`) must be preserved while their inner HTML should be ciphered. A hand-rolled algorithm was implemented as follows:

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

Further, the application must maintain state of whether a note is ciphered so as to cipher or decipher appropriately. This was implemented via a database column containing the cipher key for each note. The cipher key defaults to `0` when a new note is created and is randomly chosen when the note is first ciphered.

```javascript
cipherNote() {
    const randomKey = Math.floor(Math.random() * 25) + 1;
    const key = this.state.cipher_key ? -this.state.cipher_key : randomKey;

    this.setState({
      title: richCaesarCipher(this.state.title, key),
      body: richCaesarCipher(this.state.body, key),
      is_ciphered: !this.state.is_ciphered,
      cipher_key: key
    });
  }
```

# Future Features

Given the 10-day timeline of this project, it was not possible to implement all desired features. Top priorities for further work include:
* Additional note filtering and sorting
* Dark theme
* Note sharing

# Image Gallery
![login](https://github.com/micah-jaffe/caesarnote/blob/master/app/assets/images/readme/login.png)


![notebooks](https://github.com/micah-jaffe/caesarnote/blob/master/app/assets/images/readme/notebooks.png)
