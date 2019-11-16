'use strict';

class Reservation {
  constructor(name,phone,email,id) {
    this.name = name;
    this.id = setId(); 
    this.email =  email;
    this.phone =  phone;
  }

  getName()  { return this.name; }
  getId()    { return this.id; }
  getEmail() { return this.email; }
  getphone() { return this.phone; }

  // need method to generate card
}

module.exports = Reservation;