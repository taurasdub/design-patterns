// TASK: Create classes for items in cart: Book, Notebook, Pen with their descriptions. Use factory method.

function itemFactory(type, props) {
  switch (type) {
    case "book":
      return createBook(props);
    case "notebook":
      return createNotebook(props);
    case "pen":
      return createPen(props);
    default:
      throw Error("This item is not manufactured");
  }
}

function createBook(props) {
  return {
    title: props.title,
    author: props.author,
    pages: props.pages,
  };
}

function createNotebook(props) {
  return {
    price: props.price,
    brand: props.brand,
    ruling: props.ruling,
  };
}

function createPen(props) {
  return {
    price: props.price,
    brand: props.brand,
    color: props.color,
  };
}

const book = itemFactory("book", {
  title: "All Quiet On The Western Front",
  author: "Erich Maria Remarque",
  pages: 400,
});

const book2 = itemFactory("book", {
  title: "Arch of Triumph",
  author: "Erich Maria Remarque",
  pages: 410,
});

const notebook = itemFactory("notebook", {
  price: 4,
  brand: "Nice",
  ruling: "Horizontal",
});

const pen = itemFactory("pen", {
  price: 2,
  brand: "Epic",
  color: "Red",
});

console.log("Book 1: ", book);
console.log("Book 2: ", book2);
console.log("Notebook 1: ", notebook);
console.log("Pen 1: ", pen);
