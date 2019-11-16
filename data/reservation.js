'use strict';
// need to add to require package
// const uuidv1 = require('uuid/v1');

class Reservation {
  constructor(name,phone,email,id) {
    this.customerName = name;
    this.customerId = id; 
    // this.id = uuidv1(); 
    this.customerEmail =  email;
    this.customerPhone =  phone;
  }

  getName()  { return this.customerName; }
  getId()    { return this.customerId; }
  getEmail() { return this.customerEmail; }
  getphone() { return this.customerPhone; }
}

// const test = new Reservation("me","123", "123@123",123);
// console.log(test);

module.exports = Reservation;
