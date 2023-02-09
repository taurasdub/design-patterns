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

class Cook {
  constructor(food) {
    this.food = food;
  }

  prepareFood() {
    return `type of Cook, can prepare: ${this.food.getType()}`;
  }
}

class ColdCook extends Cook {
  constructor(sweet) {
    super(sweet);
  }
}

const sweet = new Sweet();

const coldCook = new ColdCook(sweet);
console.log(coldCook.prepareFood());
