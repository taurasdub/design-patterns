// Emulate ticket ordering in a theatre for multiple users.

class TicketOrderMediator {
  constructor() {
    this.users = [];
  }

  register(user) {
    this.users.push(user);
  }

  broadcast(sender, message) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receive(message);
      }
    });
  }
}

class User {
  constructor(mediator, name) {
    this.mediator = mediator;
    this.name = name;
  }

  send(message) {
    console.log(`${this.name} sent: ${message}`);
    this.mediator.broadcast(this, message);
  }

  receive(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

const ticketOrderMediator = new TicketOrderMediator();

const user1 = new User(ticketOrderMediator, "User 1");
const user2 = new User(ticketOrderMediator, "User 2");
const user3 = new User(ticketOrderMediator, "User 3");

ticketOrderMediator.register(user1);
ticketOrderMediator.register(user2);
ticketOrderMediator.register(user3);

user1.send("3 tickets");
