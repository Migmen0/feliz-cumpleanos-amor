function irPagina2() {
  document.getElementById("pagina1").classList.remove("activa");
  document.getElementById("pagina2").classList.add("activa");
  iniciarCuenta();
}

function irPagina3() {
  document.getElementById("pagina2").classList.remove("activa");
  document.getElementById("pagina3").classList.add("activa");
  iniciarCarta();
}

function iniciarCuenta() {
  let tiempo = 10;
  const contador = document.getElementById("contador");
  contador.textContent = tiempo;

  const intervalo = setInterval(() => {
    tiempo--;
    contador.textContent = tiempo;

    if (tiempo <= 0) {
      clearInterval(intervalo);
      irPagina3();
    }
  }, 1000);
}

function iniciarCarta() {

  const textos = [
`Feliz cumpleaños, mi amor

Mi amor,

Hoy el mundo está de fiesta porque nació la persona que más ilumina mis días. No sabes lo agradecido que me siento por tenerte en mi vida. Desde que llegaste, todo tiene más color, más sentido y más esperanza.`,

`Eres ternura en su forma más pura. Eres esa sonrisa que calma cualquier tormenta, ese abrazo que convierte un día difícil en uno llevadero, esa mirada que me hace sentir en casa sin importar dónde estemos. Me enamora tu forma de ser, tu dulzura, tu fuerza, tu risa… me enamora todo de ti.`,

`En tu cumpleaños quiero recordarte lo increíble que eres. Que mereces sueños cumplidos, tranquilidad en el corazón, amor sincero y felicidad constante. Y yo quiero estar a tu lado para verte crecer, para apoyarte, para celebrar tus logros y sostenerte cuando lo necesites.`,

`Gracias por existir. Gracias por elegirme. Gracias por amarme como lo haces. Prometo seguir cuidando lo nuestro con todo mi corazón.

Feliz cumpleaños, mi hermosa emperatriz. Que este nuevo año de vida esté lleno de bendiciones, alegrías y momentos inolvidables… y que yo pueda compartirlos todos contigo.

Te amo más de lo que las palabras pueden explicar.

Con todo mi amor,
Miguel`
  ];

  const elementos = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("b4")
  ];

  const stickers = document.querySelectorAll(".sticker");
  const fotoFinal = document.getElementById("fotoFinal");
  const typingSound = document.getElementById("typingSound");
  const dingSound = document.getElementById("dingSound");

  let bloque = 0;
  let i = 0;

  function escribir() {

    if (bloque < textos.length) {

      // 🔥 MOSTRAR STICKER JUSTO AL INICIAR SU BLOQUE
      if (i === 0 && bloque > 0 && stickers[bloque - 1]) {
        stickers[bloque - 1].classList.add("visible");
      }

      if (i < textos[bloque].length) {

        elementos[bloque].textContent += textos[bloque].charAt(i);

        typingSound.currentTime = 0;
        typingSound.play().catch(()=>{});

        i++;
        setTimeout(escribir, 28);

      } else {

        bloque++;
        i = 0;
        setTimeout(escribir, 500);
      }

    } else {

      dingSound.play().catch(()=>{});
      fotoFinal.classList.add("visible");
      lanzarCorazones();
    }
  }

  escribir();
}

function lanzarCorazones() {
  const contenedor = document.getElementById("corazones");

  for (let i = 0; i < 15; i++) {
    const corazon = document.createElement("span");
    corazon.innerHTML = "💖";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (3 + Math.random() * 2) + "s";
    contenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }
}


const btnMusica = document.getElementById("btnMusica");
const musica = document.getElementById("musicaFondo");
let musicaActiva = false;

// Función para actualizar el botón
function actualizarBoton() {
  btnMusica.textContent = musicaActiva ? "🔊" : "🎵";
}

// Intentamos reproducir al cargar la página
window.addEventListener("load", () => {
  musica.volume = 0.9; // opcional, volumen al 30%
  musica.play().then(() => {
    musicaActiva = true;
    actualizarBoton();
  }).catch(() => {
    // Si no se permite autoplay en móviles, se queda en pausa
    musicaActiva = false;
    actualizarBoton();
  });
});

// Control de botón
btnMusica.addEventListener("click", () => {
  if (musicaActiva) {
    musica.pause();
    musicaActiva = false;
  } else {
    musica.play().catch(() => {});
    musicaActiva = true;
  }
  actualizarBoton();
});
