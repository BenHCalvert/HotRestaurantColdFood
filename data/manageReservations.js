'use strict';

const Reservation = require("./reservation")
const reservationList = [];


function getReservations() {
  return reservationList; 
};

const storeReservation = (res) => {
  const newRes = new Reservation(res.customerName,res.customerPhone,res.customerEmail,res.customerId);
  reservationList.push(newRes);
};

/*
const r1 = {
  customerName: "a",
  customerPhone: "123",
  customerEmail: "email1",
  customerId: 1
}
const r2 = {
  customerName: "b",
  customerPhone: "321",
  customerEmail: "email2",
  customerId: 2
}

function init() {
  storeReservation(r1); 
  storeReservation(r2); 
  const out = getReservations();

  console.log("out",out);
};
init();
*/
module.exports = [getReservations,storeReservation];