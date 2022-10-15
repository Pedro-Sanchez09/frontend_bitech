const formulario = document.getElementById("editarProducto");

formulario.addEventListener("submit",async function (e) {
  e.preventDefault();

  var formData = new FormData(this);
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
  try {
    let id=formData.get('id');
    var response = await axios({

        method: "put",
        url: "http://localhost:5000/api/v1/productos/"+id,
        headers:{
            "Content-Type":"application/json"
        },
        data: formData
    });

    if(($('#file').val()) && (response)){
        console.log("Registro");
        var responseImagen = await axios({

            method: "post",
            url: `http://localhost:5000/api/v1/productos/${id}/imagen`,
            headers:{
                "Content-Type":"multipart/form-data"
            },
            data: formData
        });
       
        
    }
    window.location.href = `/producto/administrar`
  
  
  } catch (error) {
    console.log("err", error);
  }

 
});
