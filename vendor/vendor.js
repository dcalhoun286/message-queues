'use strict';

require('dotenv').config();

const faker = require('faker');

const PORT = process.env.PORT || 3333;

console.log(PORT);

const host = `${process.env.url}${PORT}`;

const client = require('socket.io-client');

const socket = client.connect(`${host}/vendor`);

function timestamp() {
  return new Date().toISOString();
}

class Vendor {
  constructor() {
    this.storeName = process.env.store;
  }

  create() {
    let productOrder = {
      storeName: this.storeName,
      customerName: faker.name.findName(),
      shippingAddress: `${faker.address.streetAddress('###')}, ${faker.address.city()}, ${faker.address.zipCode('#####')}`,
      orderId: faker.datatype.uuid()
    }
  }
}

let order = new Vendor();

function deliveryComplete(payload) {
  payload.event = 'thank-you';
  console.log(`VENDOR: ${payload.payload.storeName} -- Thank you for completing your delivery!`);
}

function createOrder() {
  setInterval(() => {
    socket.emit('pickup', {
      payload: order.create(),
      event: 'pickup',
      time: timestamp(),
    });
    console.log(`STATUS: ready for pickup`);
  }, 5000);
}

createOrder();

module.exports = { createOrder }
