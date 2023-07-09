const getUsurioById = (id, callback) =>{
    const usuario = {
        nombre: 'braian',
        id
    }
    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsurioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});