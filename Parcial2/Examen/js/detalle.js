    const urlLocal = new URL(window.location.href); 
    const params = urlLocal.searchParams;
    const id = params.get('id');

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    fetch(url)
  .then(response => response.json())
  .then(photo => {
    document.getElementById("titulo").innerHTML = photo.title;
    document.getElementById("id").innerHTML = photo.id;
    document.getElementById("cuerpo").innerHTML = photo.body;
  })
