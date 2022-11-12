const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAllBank = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result);
};

const findByIdBank = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

const insertProductBank = async (productName) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [...Object.values(productName)],
  );

  return insertId;
};

module.exports = {
  findAllBank,
  findByIdBank,
  insertProductBank,
};