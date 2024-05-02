const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(response => {
    if (!response.ok){
      throw new Error('Error al cargar los datos');
    }
    // Convirtiendo los datos ah formato JSON
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error)
  })