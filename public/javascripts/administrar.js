console.log("Admin")


$(document).on("click", ".btnEditar", function () {
    fila = $(this);
    id = parseInt(fila.closest('tr').find('td:eq(0)').text());
console.log("Editar,",id);
window.location.href = `/producto/${id}/editar`

});
