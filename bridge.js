// You have different type of food: sweets, aperitive, main dish, hot dish.
// Also you have different cook employees: some of them can prepare only hot dishes, some only cold dishes, some only drinks.
// Create classes for each type, create class which allows to bridge between types of Cook and types of Food,
// and you can pass the instance of food correctly to each cook.

class Food {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

class Sweet extends Food {
  constructor() {
    super("Sweet");
  }
}

class Aperitive extends Food {
  constructor() {
    super("Aperitive");
  }
}

class Cook {
  constructor(food) {
    this.food = food;
  }

  prepareFood() {
    return `type of Cook, can prepare: ${this.food.getType()}`;
  }
}

class SweetCook extends Cook {
  constructor(sweet) {
    super(sweet);
  }
}

class AperitiveCook extends Cook {
  constructor(aperitive) {
    super(aperitive);
  }
}

const sweet = new Sweet();
const aperitive = new Aperitive();

const sweetCook = new SweetCook(sweet);
const aperitiveCook = new AperitiveCook(aperitive);
console.log(sweetCook.prepareFood());
console.log(aperitiveCook.prepareFood());
