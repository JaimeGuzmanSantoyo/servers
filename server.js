const express = require("express");
const path = require("path");  /// path lo que hace es buscar por defecto nuestro archivo index ,si la ruta "c"

const app= express();
app.use('/estilos', express.static(path.join(__dirname, 'estilo')));
app.use('/carpeta1', express.static(path.join(__dirname, 'carpeta1'))); // Servir archivos desde carpeta1
app.use('/carpeta2', express.static(path.join(__dirname, 'carpeta2')));
//app.use(express.static("carpeta1"));
app.get("/",(req,res)=>{ //midddlelware
    //res.send("hello world"); //texto plano    //anteriormente teniamos la ruta del archivo ,pero es una mala praxis ,por si se llega a cambiar la ruta del archivo o pasa algo 
    res.sendFile(path.join(__dirname+"/bienvenida.html")); /// para ingresar el apartado html ,esta compuesta por la ruta del archivo y el index
});
//app.listen(express.static("estilo"));
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "carpeta2/cont acto.html")); // Ruta para contacto.html
});
app.get("/carpeta1/index", (req, res) => {
    res.sendFile(path.join(__dirname, "carpeta1/index.html")); // Ruta para index.html
});
app.listen(3001,()=>{
    console.log("server conectado en el puerto esta conectado a ",3001);
});
