// calling DOM elements
const addingBook = document.getElementById('book_list');
const addBtn = document.getElementById('add_btn');
const addTitle = document.getElementById('book_title');
const addAuthor = document.getElementById('book_autor');

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
let storedJson;
let bookList = [];
let j = bookList.length;
// Create a Mothods Object
const booksMets = {
  retrieve() {
    storedJson = localStorage.getItem('Books');
    bookList = JSON.parse(storedJson);
    booksMets.run(bookList);
    console.log(bookList);
  },
  run(bookList) {
    bookList.forEach((book) => {
      booksMets.create(book);
    });
  },
  create(book) {
    // Create book li //
    addingBook.appendChild(
      document.createElement('li').setAttribute('id', `${book}.id`)
    );
    // Create book title //
  },
  store() {
    j += 1;
    const bookToAdd = {
      id: j,
      title: addTitle.value,
      author: addAuthor.value,
    };
    bookList.push(bookToAdd);
    window.localStorage.setItem('Books', JSON.stringify(bookList));
    booksMets.retrieve();
  },
};

addBtn.addEventListener('click', booksMets.store());
booksMets.retrieve();
