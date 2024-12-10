const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title, price) VALUES (?, ?)',
      [this.title, this.price]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products where products.id = ?', [id])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};
