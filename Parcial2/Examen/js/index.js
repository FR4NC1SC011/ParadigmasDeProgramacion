    const url = "https://jsonplaceholder.typicode.com/photos";
        const lista = document.getElementById("lista")
        const imagen = document.getElementById("imagen")


        // fetch(url)
        //     .then(resultado => resultado.json())
        //     .then(photos => {
        //         photos.map(elemento => {
        //             let li = document.createElement('li')
        //             li.innerHTML = `<a href="detalle.html?id=${elemento.id}">${elemento.title}</a>`
        //             lista.appendChild(li);
        //         })
        //     })
        //     .catch(error => console.log(error))
        //     .finally(() => {
        //         imagen.src ="";
        //     })

        const getPhotos = async () => {

            const resultado = await fetch(url);
            const photos = await resultado.json();
             photos.map(elemento => {
                     let li = document.createElement('li')
                     li.innerHTML = `<a href="detalle.html?id=${elemento.id}">${elemento.title}</a>`
                    lista.appendChild(li);
                })

                return photos;

        }

        getPhotos().then(photos => {
            console.log(photos)
        }).catch(error => console.log(error))
        .finally(() => {
                 imagen.src ="";
             })

     // const url = "https://jsonplaceholder.typicode.com/photos";
      //const lista = document.getElementById("lista")
//      fetch(url)
//       .then(resultado => resultado.json())
//       .then(photos => {
//        photos.map(elemento => {
//          let li = document.createElement('li')
//          li.innerHTML = `<a href="detalle.html?id=${elemento.id}">${elemento.title}</a>`; 
//          lista. appendChild(li);
//        }) 
//       })
//      .catch(error => console.log(error))
//      .finally(() => {
//    imagen.src = "";
//  })
//
     // const getPhotos() = async = () => {
      //  const resultado = await fetch(url);
       // const photos = await resultado.json();
        //photos.map(elemento => {
      //    let li = document.createElement('li')
      //    li.innerHTML = `<a href="detalle.html?id=${elemento.id}">${elemento.title}</a>`; 
      //    lista. appendChild(li);
      //  }) 
      //  return photos;
      //}

      //getPhotos().then(photos => {
       // console.log(photos)
      ////}).catch(error => console.log(error))
      ////.finally(() => {
      ////        imagen.src ="";
       // })


