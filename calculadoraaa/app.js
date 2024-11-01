const express = require("express");
const path= require("path"); // con path lo usamos para poder encontrar la direccion de un archivo de manera rapida y facil
const app= express();
const port= 3001; // se indica el ´puerto al que nos estamos conectando 
app.use('/carpeta1', express.static(path.join(__dirname, 'carpeta1'))); // Servir archivos desde carpeta1
app.use('/carpeta2', express.static(path.join(__dirname, 'carpeta2')));
app.get ("/",(req,res )=>{ //es nuestro middleware
res.sendFile(path.join(__dirname+"/index.html"));

});
app.get("/calcu/calcula.html", (req, res) => {
    res.sendFile(path.join(__dirname, "calcu/calcula.html")); // 
});
app.get("/qrs/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "qrs/index.html")); // Ruta para index.html
});
app.listen(3001,()=>{  // una vez que se realice u opere el evento al detectar el puetrto 3001 node 
    console.log("corre en el puerto",3001); // entramos en esta linea de codigo
});
