// Escribe una función que se conecte a una API gratuita y devuelva el resultado de la consulta en un array de objetos.
// Puedes probarla en la consola de tu navegador.
// La API es la siguiente: https://jsonplaceholder.typicode.com/users
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Usage example:
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

