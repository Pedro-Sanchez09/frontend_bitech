const formulario = document.getElementById("registrarProducto");

formulario.addEventListener("submit",async function (e) {
  e.preventDefault();

  var formData = new FormData(this);
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
  try {
    var response = await axios({

        method: "post",
        url: "http://localhost:5000/api/v1/productos/",
        headers:{
            "Content-Type":"application/json"
        },
        data: formData
    });
    if(response){
        console.log("Registro");
        let idProducto=response.data.data.id;
       // console.log("id", idProducto);
        var responseImagen = await axios({

            method: "post",
            url: `http://localhost:5000/api/v1/productos/${idProducto}/imagen`,
            headers:{
                "Content-Type":"multipart/form-data"
            },
            data: formData
        });

        console.log("Imagen",responseImagen.data);
        formulario.reset();

    }
  
  } catch (error) {
    console.log("err", error.response.data);
  }

 
});
