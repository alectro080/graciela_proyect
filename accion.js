    function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("show");
    }



let currentSlide = 0;

function moverSlide(direccion) {
  const slides = document.querySelector('.slides');
  if (!slides) return;

  const totalSlides = slides.children.length;
  currentSlide = (currentSlide + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 34}%)`;
}


    function showContent(section) {
      const content = document.getElementById("content");
      let html = "";

      switch (section) {
        case 'quienSoy':
          html = 
`
        <section class="quien-soy">
            <div class="foto-lateral">
            <div class="foto-placeholder">
                <img src="/imagen/WhatsApp Image 2025-06-21 at 12.09.54 PM.jpeg" alt="">
            </div>
            </div>
            <div class="texto-lateral">
                <h1>
                Quién Soy?
                </h1>
                <p>


                    Mi nombre es Graciela Acosta y desde muy joven el camino terapéutico comenzó a manifestarse en mi vida, primero como una necesidad personal —fruto de experiencias desafiantes— y luego como una profunda vocación.

                </p>
                <p>
                    Siempre fui una persona curiosa, con ganas de sentirme bien y de ayudar a otros a lograr lo mismo. Intuí desde temprano que la vida no es difícil por naturaleza… sino que muchas veces somos nosotros, los seres humanos, quienes la hacemos amarga. Por eso elegí explorar, conocerme y transformarme.
                
                </p>
                <p>
                    Mi primer gran herramienta fueron las Flores de Bach, que abrieron la puerta a un mundo sutil y revelador. Luego llegaron el Reiki, la Biodecodificación, las Sanaciones Cuánticas, el Método DEI con imanes, las 5 Leyes Biológicas de Hamer, conocimientos de Neurociencia… y muchas otras enseñanzas que hoy viven dentro mío, no solo como técnicas, sino como experiencia encarnada.
                
                </p>
                <p>
                    A lo largo del tiempo descubrí que no hay un solo camino, ni una sola forma. Por eso mis terapias son una fusión viva de todo lo que soy y he aprendido, como el universo mismo: un todo en movimiento.
                
                </p>
                <p>
                    Hoy acompaño a personas que buscan sanar, comprenderse, cambiar patrones o simplemente recordar su propia luz. También comparto formaciones en Flores de Bach, porque creo en expandir esta sabiduría y sembrarla en otras almas listas para florecer.
                
                </p>
            </div>
        </section>
        `;

  break;

        case 'cursos':
          html = `
            <h2>Cursos</h2>
            <div class="cursos-container">
              <div class="curso-card">
                <h3>Formacion - flores de Bach</h3>
                <p>Aprendé a utilizar las esencias florales como herramienta de equilibrio emocional. Curso teórico-práctico. Modalidad online y presencial.</p>
                <p>mandar un whatsapp</p>
              </div>
          `;
          break;

        case 'introduccion':
          html = `
                <div class="carrusel">
                  <div class="slides">
                    <div class="slide"><img src="/imagen/descarga.jpg" alt="Imagen 1"></div>
                    <div class="slide"><img src="/imagen/images.jpg" alt="Imagen 2"></div>
                    <div class="slide"><img src="/imagen/quesperarenunasesinpsicolgicaenargentina-20231120224736.jpg" alt="Imagen 3"></div>
                  </div>
                  <button class="prev" onclick="moverSlide(-1)">❮</button>
                  <button class="next" onclick="moverSlide(1)">❯</button>
                </div>
              <div class="intro-text">
                <h1>Introducción</h1>
                <p>Bienvenida a mi espacio, soy Graciela Acostta.
Acompaño procesos de transformación desde una mirada integradora, amorosa y consciente.
Creo en la sanación como un camino hacia el equilibrio del alma, el cuerpo y la mente.
Aquí vas a encontrar terapias que despiertan, alivian y ordenan, y también formaciones para quienes sienten el llamado a expandirse y acompañar a otros.</p>
              </div>
            </section>
          `;
          break;


        case "turnos":
          html = `
            <h2>Reservar Turno</h2>
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0HAWl29zdTZYLvSAYLEogdV354Pj54VACvbC9YpwsPidtxbYZ_hQg10OPtQDLaoizvEu_UzfkV?gv=true"
            style="border: 0" width="100%" height="600" frameborder="0">
            </iframe>
        `;
          break;

        case 'terapias':
          html = `
            <h2>Terapias</h2>
            <div class="cursos-container">
              <div class="curso-card">
                <h3>Terapias - de mirada integral</h3>
                <p>Acompañamiento para descubrirte, con distintas herramientas y tecnicas.</p>
              </div>
              <div class="curso-card">
                <h3>Terapeuta floral - sistema Bach</h3>
                <p>Descubre como las flores pueden ayudarte a mejorar tu bienestar emocional, el Estrés y la ansiedad que nos produce un desiquilibrio emocional</p>
              </div>
              <div class="curso-card">
                <h3>Reiki + imanes + péndulo</h3>
                <p>Sanación por imposición de manos y equilibrio de chacras</p>
              </div>
            </div>
          `;
          break;

            


      }

      content.innerHTML = html;
    }