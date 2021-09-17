export async function getCategories() {
  const URL = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const myResults = await URL.json();
  return myResults;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL = await fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const myResults = await URL.json();
  return myResults;
}
