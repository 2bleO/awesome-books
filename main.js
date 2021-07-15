// calling DOM elements
const books = document.getElementById('book_list');
const addBtn = document.getElementById('add_btn');
const addTitle = document.getElementById('book_title');
const addAuthor = document.getElementById('book_autor');
const form = document.getElementById('add_book');

const booksProp = {
  bookDiv: null,
  bookTitle: null,
  bookAuthor: null,
  bookBtn: null,
};

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
let bookList = [];
let j = 0;
// Create a Mothods Object
const booksMets = {
  retrieve() {
    if (JSON.parse(localStorage.getItem('Books'))) {
      bookList = JSON.parse(localStorage.getItem('Books'));
      j = bookList.length;
      booksMets.run(bookList);
    } else {
      booksMets.listen();
    }
    console.log(j);
    console.log(JSON.parse(localStorage.getItem('Books')));
  },
  run(bookList) {
    bookList.forEach((book) => {
      booksMets.create(book);
    });
  },
  create(book) {
    // Create book li //
    books.appendChild(document.createElement('li')).setAttribute('id', book.id);
    booksProp.bookDiv = document.getElementById(book.id);
    // Create book title //
    booksProp.bookDiv.appendChild(document.createElement('p')).setAttribute('id', `${book.id}-title`);
    booksProp.bookTitle = document.getElementById(`${book.id}-title`);
    booksProp.bookTitle.innerText = book.title;
    // Create book author //
    booksProp.bookDiv.appendChild(document.createElement('p')).setAttribute('id', `${book.id}-author`);
    booksProp.bookAuthor = document.getElementById(`${book.id}-author`);
    booksProp.bookAuthor.innerText = book.author;
    // Create book button //
    booksProp.bookDiv.appendChild(document.createElement('button')).setAttribute('id', `${book.id}-btn`);
    booksProp.bookBtn = document.getElementById(`${book.id}-btn`);
    booksProp.bookBtn.innerText = 'delete';
  },
  store() {
    if (bookList === null || bookList === undefined) {
      bookList = [];
    }
    const bookToAdd = {
      id: j,
      title: addTitle.value,
      author: addAuthor.value,
    };
    bookList.push(bookToAdd);
    window.localStorage.setItem('Books', JSON.stringify(bookList));
    booksMets.retrieve();
  },
  listen() {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (addTitle.value === '' || addAuthor.value === '') {
        const alert = document.createElement('p');
        alert.innerHTML = 'Please you must enter a value for both inputs';
        alert.style.color = 'red';
        alert.style.fontWeight = 'bold';
        form.appendChild(alert);
      } else {
        booksMets.store();
      }
    });
  },
};
booksMets.retrieve();
