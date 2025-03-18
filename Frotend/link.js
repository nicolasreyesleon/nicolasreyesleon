function redireccion(){
    let titulo = document.getElementById('titulo');
        titulo.textContent = "Inicio de sescion";

        let usuario = document.getElementById('usuario');
        usuario.textContent = "Usuario";

        let usuarios = document.getElementById('usuario1');
        let inicio = document.getElementById('boton');
        if(usuario == "hacker"){
            alert("Bienvenido hacker");
        }else{
            alert("No eres hacker"); 
        }
        let contrasena = document.getElementById('cons');
        if(contrasena == "01082003"){
            alert("Bienvenido hamo");
            location.href="redireccion()";
        }else{
            alert("No eres hamo");
            //inicio.href="redireccion()";
        }
        if(usuario == "alex"){
            alert("Bienvenido Alex");
        }else{
            alert("No eres Alex");
        }
        if(contrasena == "2406"){
            alert("Bienvenido Tio");
            location.href="reireccion1()";
        }
        location.href="index2.html";
        if(usuario == "trabajo"){
            alert("Bienbenido esclavo");
        }else{
            alert("No eres esclavo");
        }
        if(contrasena == "123456789"){
            alert("Bienbenidos esclavo a chambiar");
            location.href="redireccion2()";
        }else{
            alert("No eres un esclavo");
            alert("Fuera de aqui escoria");
        }
        
}

function redireccion1(){
    location.href="jefe.html";
}       

function redireccion2(){
    location.href="trebajador.html";
}