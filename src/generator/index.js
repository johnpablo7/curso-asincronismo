function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// Otra forma
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["oscar", "omar", "ana", "lucia", "juan "]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Reto
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

async function* iterData(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    yield console.log(products[12]);

    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    yield console.log(products[20]);

    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
    yield console.log(products[30]);

    console.log(products);
    console.log(product.title);
    console.log(category.name);
    console.log("Finalizo");
  } catch (error) {
    console.log(error);
  }
}
const res = iterData(API);
res.next();
res.next();
res.next();
res.next();
