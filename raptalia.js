window.onload = function fecha() {
    //Crear objeto Date
    var d = new Date();
    //crear objeto horas
    var hours = d.getHours();
    //minutos
    var mins = d.getMinutes();
    var da = d.getDate();
    //Arreglo de dias 
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";
    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = da
    //->var m->07
    let m = d.getMonth() + 1;
    document.getElementById("month").innerHTML = m;
    //->2021
    document.getElementById("year").innerHTML = d.getFullYear();
    //Jueves
    document.getElementById("dia").innerHTML = n;
    //->hora 
    //enviar Bienvenida
    document.getElementById("f").innerHTML = "Hola me alegra verte de nuevo♥️";
    //Hora
    if (hours <= 12) {
        document.getElementById("msgh").innerHTML = "Hola Buenos dias mi amor♥️";
        //->"Hola Buenos dias mi amor♥️";
        document.getElementById("hora").innerHTML = hours + ":" + mins + "a.m";
        //10:51 a.m
    } else if (hours >= 12 && hours <= 17) {
        document.getElementById("msgh").innerHTML = "Hola Buenos Tardes mi amor♥️";
        //->"Hola Buenos dias mi amor♥️";
        document.getElementById("hora").innerHTML = hours + ":" + mins + "p.m";
        //->13:48 p.m 
    } else if (hours >= 18 && hours <= 23) {
        document.getElementById("msgh").innerHTML = "Hola Buenos noches mi amor♥️";
        //->"Hola Buenos dias mi amor";
        document.getElementById("hora").innerHTML = hours + ":" + mins + "p.m";
        //->10.52 pm prueba hoy
    } else
        document.getElementById("msgh").innerHTML = "Sino ya es de madrugada";
    //mensajes personalidos segun dias
}
fotos = () => {
    /*->Vamos a usar math.floor random para que nos de unas 10 imágenes random de raptalia en un tamañao
    grande*/
    //->imagen 1
    let x = Math.floor((Math.random() * 14) + 1);
    document.write("<h1 style='background-color: White; color:black; text-align:center;border-radius:20px; -webkit-border-radius:20px;'>Wallpaper</h1>")
    document.write("<body style='background-color:black'></body>")
    switch (x) {
        case 1:
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp4373426.jpg" width="100%" height="100%" alt="Raptalia " align="center" loading="lazy">');
            break;
        case 2:
            //->Imagen 2
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp4373389.jpg" width="100%" height="100%" alt="Raptalia " align="center" loading="lazy">');
            break;
        case 3:
            //->imagen 3
            window.onload = document.write('<img src=" https://wallpapercave.com/wp/wp4373451.png" width="100%" height="100%" alt="Raptalia " align="center" loading="lazy">');
            break;
        case 4:
            //->imangen 4
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp4373471.png" width="100%" height="100%" alt="Raptalia " align="center" loading="lazy">');
            break;
        case 5:
            //->imagen 5
            window.onload = document.write('<img src="https://c4.wallpaperflare.com/wallpaper/287/277/228/anime-girls-anime-picture-in-picture-raphtalia-tate-no-yuusha-no-nariagari-hd-wallpaper-preview.jpg" width="100%" height="100%" alt="Raptalia " align-items:"center"; loading="lazy">');
            break;
        case 6:
            //imangen 6
            window.onload = document.write('<img src=" https://c4.wallpaperflare.com/wallpaper/35/435/637/tate-no-yuusha-no-nariagari-brunette-animal-ears-raphtalia-filo-tate-no-yuusha-no-nariagari-hd-wallpaper-preview.jpg" width="100%" height="100%" alt="Raptalia " align -items:center;"loading="lazy">');
            break;
        case 7:
            //imagen -7
            window.onload = document.write('<img src=" https://wallpaperaccess.com/full/1611075.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        case 8:
            //imangen 8
            window.onload = document.write('<img src=" https://wallpaperaccess.com/full/1611129.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        case 9:
            //imagen 8
            window.onload = document.write('<img src="https://wallpaperaccess.com/full/1610976.png" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        //imagen 9
        case 10:
            window.onload = document.write('<img src=" https://kawaii-mobile.com/wp-content/uploads/2019/09/Tate-no-Yuusha-no-Nariagari-Raphtalia-2160x3840-225x400.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        case 11:
            //imangen 10
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp5465056.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        case 12:
            //imagen 11
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp5105097.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        case 13:
            //imagen 12
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp6275709.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        case 14:
            //imagen 13
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp6275757.jpg" width=100% height=100% alt="Raptalia align="center" loading="lazy">');
            break;
        case 14:
            //imagen 14
            window.onload = document.write('<img src="https://wallpapercave.com/wp/wp5105069.jpg" width=100% height=100% alt="Raptalia " align="center" loading="lazy">');
            break;
        default:
            //imagen 15
            window.onload = document.write('<img src=" https://kawaii-mobile.com/wp-content/uploads/2019/09/Tate-no-Yuusha-no-Nariagari-Firo-Fitoria-2160x3840-225x400.jpg" width=100% height=100% alt="The tate-no-yuusha " align="center" loading="lazy"><br/>');
    }
    document.write("\n\n<button><a href='http://localhost:8158/index.html'style='text-decoration:none; font-size:40px; justify-align:center; Justify-content:center;'>🔙</a></button>");
    document.write("<footer style='color:white; text-align:center;'>Hecho por Programacíón R &copy</footer>")
    //termina función de botón
}

msg = () => {
    let frases = ["Estoy seguro que vendrás a verme yo te esperaba", "Quería conocerte te estaba esperando...", "Me alegra verte de nuevo", "Yo soy tu espada y te seguiré a cualquier infierno.", "Hoy somos más fuertes que ayer y mañana lo seremos aun más, aprendamos de cada error.", "Incluso si ya no puedes confiar en nadie, confío en ti.", "Naofumi Sama.. No me dejarás, ¿verdad? No puedo imaginar un mundo sin ti.", "Qué clase de caballero descuida a la gente que está destinado a defender", "Yo soy la espada de Naofumi-sama. Nadie puede faltarle el respeto en mi presencia.", "Debe haber sido muy doloroso. De ahora en adelante, comparte tu dolor conmigo", "Te conozco mejor que nadie en este mundo. Sé lo amable que eres. Entonces, incluso si todo el mundo habla mal de ti, diré que están equivocados. Les repetiré que eres una persona maravillosa. Tú fuiste quien me salvó la vida, me dio una espada y me mostró el propósito de mi vida. Yo soy tu espada.", "⁠Comparado contigo, una moneda de oro no vale nada.", "Aunque el camino sea difícil te acompañaré en cada momento"];

    // Generar un índice aleatorio dentro del rango del array de frases
    let indiceAleatorio = Math.floor(Math.random() * frases.length);

    // Obtener el mensaje aleatorio correspondiente al índice generado
    let mensaje = frases[indiceAleatorio];

    // Asignar el mensaje al elemento con ID "msgd"
    document.getElementById("msgd").innerHTML = mensaje;

    // Crear un objeto de síntesis de voz
    let synthesis = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(mensaje);

    // Hablar la frase
    synthesis.speak(utterance);
}

//function para cambiar de color de fondo 
var toque = 1;
function modedark() {
    //depende el valor del toque si es par negro impar colores defaul
    toque++;
    //condicional
    if (toque % 2 == 0) {
        //->fondo
        document.getElementById("hora").style.backgroundColor = "black";
        //->letras verde
        document.getElementById("hora").style.color = "lime";
        //->fondo negro
        document.getElementById("day").style.backgroundColor = "black";
        //->Letras verdes
        document.getElementById("day").style.color = "lime";
        //->Mes fondo negro
        document.getElementById("month").style.backgroundColor = "black";
        //->Letras color verde
        document.getElementById("month").style.color = "lime";
        //->año fondo negro
        document.getElementById("year").style.backgroundColor = "black";
        //->Lettas de color verde
        document.getElementById("year").style.color = "lime";
        //->fondo negro
        document.getElementById("dia").style.backgroundColor = "black";
        //->fondo verde
        document.getElementById("dia").style.color = "lime";
        //->fondo negro
        document.getElementById("f").style.backgroundColor = "black";
        //-letraa verdes
        document.getElementById("f").style.color = "lime";
        //->mensaje negro 
        document.getElementById("msgh").style.backgroundColor = "black";
        //lettas verdes 
        document.getElementById("msgh").style.color = "lime";
        document.getElementById("msgd").style.backgroundColor = "black";
        document.getElementById("msgd").style.color = "lime";
    } else if (toque % 2 != 0) {
        //->café
        document.getElementById("hora").style.backgroundColor = "#4a2b03d8";
        //blanco
        document.getElementById("hora").style.color = "#ffffff";
        //cafe
        document.getElementById("day").style.backgroundColor = "#4a2b03d8";
        document.getElementById("day").style.color = "#ffffff";
        //->celeste cielo
        document.getElementById("month").style.backgroundColor = "#00aae4";
        document.getElementById("month").style.color = "#ffffff";
        //rosado
        document.getElementById("year").style.backgroundColor = "pink";
        document.getElementById("year").style.color = "black";
        document.getElementById("dia").style.backgroundColor = "#ffffff";
        //celeste
        document.getElementById("dia").style.color = "#f9a6e6";
        //blanco
        document.getElementById("f").style.backgroundColor = "#ffffff";
        document.getElementById("f").style.color = "black";
        //lettas negras
        document.getElementById("msgh").style.backgroundColor = "#ffffff";
        document.getElementById("msgh").style.color = "black";
        document.getElementById("msgd").style.backgroundColor = "#ffffff";
        document.getElementById("msgd").style.color = "black";
    } else {
        alert("quieres experimentar")
    }
}
//hecho por programacíón R