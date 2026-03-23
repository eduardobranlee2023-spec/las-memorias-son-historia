const timelineData = [
    { day: 1, month: 'ene', year: '', title: 'Año Nuevo', desc: 'Inicio del año calendárico. Festividad internacional. No laborable nacional.', tag: 'Feriado' },
    { day: 3, month: 'ene', year: '1833', title: 'Ocupación de Malvinas', desc: 'Inglaterra ocupa las Islas Malvinas por la fuerza, expulsando a las autoridades argentinas.', tag: 'Historia' },
    { day: 6, month: 'ene', year: '', title: 'Reyes Magos', desc: 'Festividad religiosa católica. Día no laborable según ley.', tag: 'Religión' },
    { day: 27, month: 'ene', year: '1811', title: 'Batalla de Paraguarí', desc: 'Manuel Belgrano sufre una derrota frente a fuerzas paraguayas, obligándolo a retirarse.', tag: 'Batalla' },
    
    { day: 2, month: 'feb', year: '1536', title: '1ª Fundación de Buenos Aires', desc: 'Pedro de Mendoza funda "Nuestra Señora del Buen Aire" en la costa del Río de la Plata.', tag: 'Fundación' },
    { day: 3, month: 'feb', year: '1852', title: 'Batalla de Caseros', desc: 'Derrota de Juan Manuel de Rosas ante Justo José de Urquiza, marcando el fin de su hegemonía.', tag: 'Historia' },
    { day: 11, month: 'feb', year: '', title: 'Mujer y Niña en la Ciencia', desc: 'Día Internacional para conmemorar la participación femenina en el ámbito científico.', tag: 'Internacional' },
    { day: 15, month: 'feb', year: '1811', title: 'Nace Domingo F. Sarmiento', desc: 'Nacimiento del "Maestro de América", político y presidente con gran legado educativo.', tag: 'Personaje' },
    { day: 21, month: 'feb', year: '', title: 'Día de la Lengua Materna', desc: 'Día de respeto y preservación de las lenguas maternas (ONU).', tag: 'Internacional' },
    { day: 27, month: 'feb', year: '1812', title: 'Creación de la Bandera', desc: 'Manuel Belgrano iza por primera vez la bandera albiceleste en Rosario.', tag: 'Símbolo' },

    { day: 8, month: 'mar', year: '', title: 'Día de la Mujer', desc: 'Conmemora la lucha histórica por los derechos de las mujeres en todo el mundo.', tag: 'Social' },
    { day: 21, month: 'mar', year: '', title: 'Contra la Disc. Racial', desc: 'Día Internacional por la Eliminación de la Discriminación Racial.', tag: 'Internacional' },
    { day: 24, month: 'mar', year: '1816', title: 'Congreso de Tucumán', desc: 'Inauguración de las sesiones que prepararían la declaración de la independencia.', tag: 'Historia' },
    { day: 24, month: 'mar', year: '1976', title: 'Golpe de Estado', desc: 'Inicio de la última dictadura militar tras el derrocamiento de Isabel Perón.', tag: 'Memoria' },
    { day: 30, month: 'mar', year: '1793', title: 'Nace Juan Manuel de Rosas', desc: 'Nacimiento del influyente líder federal y gobernador de Buenos Aires.', tag: 'Personaje' },

    { day: 2, month: 'abr', year: '1982', title: 'Guerra de Malvinas', desc: 'Inicio del conflicto bélico con el Reino Unido por la soberanía de las islas.', tag: 'Soberanía' },
    { day: 24, month: 'abr', year: '1915', title: 'Genocidio Armenio', desc: 'Día de acción por la tolerancia y el respeto entre los pueblos.', tag: 'Memoria' },

    { day: 1, month: 'may', year: '', title: 'Día del Trabajador', desc: 'Homenaje a la huelga de Chicago de 1886. Feriado inamovible nacional.', tag: 'Social' },
    { day: 3, month: 'may', year: '1853', title: 'Constitución Nacional', desc: 'Sanción de la Constitución Argentina en la ciudad de Santa Fe.', tag: 'Ley' },
    { day: 7, month: 'may', year: '1919', title: 'Nace Eva Perón', desc: 'Nacimiento de "Evita", líder social y símbolo del movimiento peronista.', tag: 'Personaje' },
    { day: 11, month: 'may', year: '1813', title: 'Himno Nacional', desc: 'Primer canto público de la Marcha Patriótica dirigida por Blas Parera.', tag: 'Símbolo' },
    { day: 18, month: 'may', year: '1812', title: 'Día de la Escarapela', desc: 'Creación del primer distintivo nacional por decreto del Triunvirato.', tag: 'Símbolo' },
    { day: 25, month: 'may', year: '1810', title: 'Revolución de Mayo', desc: 'Creación de la Primera Junta de Gobierno, inicio del proceso independentista.', tag: 'Independencia' },

    { day: 11, month: 'jun', year: '1580', title: 'Fundación definitiva de BA', desc: 'Juan de Garay funda la ciudad de Buenos Aires por segunda vez.', tag: 'Fundación' },
    { day: 17, month: 'jun', year: '1821', title: 'Paso a la mmortalidad de Güemes', desc: 'Fallecimiento del héroe salteño que defendió la frontera norte.', tag: 'Historia' },
    { day: 20, month: 'jun', year: '1820', title: 'Día de la Bandera', desc: 'Fallecimiento de Manuel Belgrano, creador de nuestra insignia nacional.', tag: 'Símbolo' },

    { day: 9, month: 'jul', year: '1816', title: 'Día de la Independencia', desc: 'Firma del Acta de Independencia en el Congreso de Tucumán.', tag: 'Independencia' },
    { day: 17, month: 'jul', year: '1843', title: 'Nace Julio A. Roca', desc: 'Natalicio del militar y presidente en dos períodos del país.', tag: 'Personaje' },
    { day: 26, month: 'jul', year: '1952', title: 'Fallece Eva Perón', desc: 'A los 33 años muere Evita, marcando profundamente la historia social.', tag: 'Personaje' },

    { day: 17, month: 'ago', year: '1850', title: 'Paso a la Inmortalidad de San Martín', desc: 'Fallecimiento del Libertador de Argentina, Chile y Perú en Francia.', tag: 'Historia' },
    { day: 22, month: 'ago', year: '1865', title: 'Día del Folklore', desc: 'Nacimiento de Juan B. Ambrosetti, padre del folklore argentino.', tag: 'Cultura' },
    { day: 24, month: 'ago', year: '1899', title: 'Nace Jorge Luis Borges', desc: 'Nacimiento de uno de los escritores más universales de nuestra lengua.', tag: 'Cultura' },

    { day: 11, month: 'sep', year: '1888', title: 'Día del Maestro', desc: 'Fallecimiento de Sarmiento. Jornada dedicada a los educadores.', tag: 'Social' },
    { day: 16, month: 'sep', year: '1976', title: 'Noche de los Lápices', desc: 'Homenaje a los estudiantes secundarios secuestrados en la dictadura.', tag: 'Memoria' },
    { day: 20, month: 'sep', year: '1880', title: 'Federalización de BA', desc: 'La ciudad de Buenos Aires se convierte en Capital Federal del país.', tag: 'Historia' },
    { day: 21, month: 'sep', year: '', title: 'Día del Estudiante', desc: 'Celebración de la primavera y reconocimiento a los estudiantes.', tag: 'Social' },

    { day: 8, month: 'oct', year: '1895', title: 'Nace Juan D. Perón', desc: 'Nacimiento del líder y fundador del movimiento peronista.', tag: 'Personaje' },
    { day: 12, month: 'oct', year: '', title: 'Diversidad Cultural', desc: 'Respeto a los pueblos originarios y a la diversidad de culturas.', tag: 'Social' },
    { day: 17, month: 'oct', year: '1945', title: 'Día de la Lealtad', desc: 'Hito histórico del peronismo por la liberación de Juan Perón.', tag: 'Historia' },

    { day: 19, month: 'nov', year: '1882', title: 'Fundación de La Plata', desc: 'Dardo Rocha funda la capital de la Provincia de Buenos Aires.', tag: 'Fundación' },
    { day: 20, month: 'nov', year: '1845', title: 'Soberanía Nacional', desc: 'Combate de la Vuelta de Obligado contra fuerzas anglo-francesas.', tag: 'Soberanía' },
    { day: 29, month: 'nov', year: '1910', title: 'Batalla de Zapala', desc: 'Hito de la denominada Campaña del Desierto en la región patagónica.', tag: 'Historia' },

    { day: 8, month: 'dic', year: '', title: 'Inmaculada Concepción', desc: 'Festividad religiosa nacional e inamovible.', tag: 'Religión' },
    { day: 10, month: 'dic', year: '1983', title: 'Retorno de la Democracia', desc: 'Asunción de Raúl Alfonsín tras la última dictadura.', tag: 'Historia' },
    { day: 11, month: 'dic', year: '1890', title: 'Día Nacional del Tango', desc: 'Homenaje a los natalicios de Carlos Gardel y Julio De Caro.', tag: 'Cultura' },
    { day: 25, month: 'dic', year: '', title: 'Navidad', desc: 'Festividad cristiana y feriado nacional inamovible.', tag: 'Religión' }
];

const monthNames = {
    ene: 'Enero', feb: 'Febrero', mar: 'Marzo', abr: 'Abril', may: 'Mayo', jun: 'Junio',
    jul: 'Julio', ago: 'Agosto', sep: 'Septiembre', oct: 'Octubre', nov: 'Noviembre', dic: 'Diciembre'
};

const lugaresData = [
  { name: "ESMA (Escuela de Mecánica de la Armada)", desc: "Uno de los centros clandestinos más grandes del país. Fue símbolo del terrorismo de Estado. Hoy es el Espacio Memoria y Derechos Humanos.", link: "https://maps.google.com/?q=ESMA+Buenos+Aires", img: "" },
  { name: "Club Atlético", desc: "Funcionaba en el subsuelo de la Policía Federal. Miles de detenidos pasaron por allí; hoy es sitio arqueológico.", link: "https://maps.google.com/?q=Club+Atl%C3%A9tico+Centro+Clandestino+Buenos+Aires", img: "" },
  { name: "Mansión Seré", desc: "Centro clandestino en Morón operado por la Fuerza Aérea. Famoso por la fuga de detenidos en 1978.", link: "https://maps.google.com/?q=Mansi%C3%B3n+Ser%C3%A9+Mor%C3%B3n", img: "" },
  { name: "Olimpo", desc: "Centro de detención en el barrio de Floresta. Destacado por su brutalidad dentro del circuito represivo.", link: "https://maps.google.com/?q=Olimpo+Centro+Clandestino+Floresta", img: "" },
  { name: "Pozo de Banfield", desc: "Parte del “Circuito Camps”. Funcionó como maternidad clandestina donde nacieron bebés en cautiverio.", link: "https://maps.google.com/?q=Pozo+de+Banfield", img: "" },
  { name: "Automotores Orletti", desc: "Taller mecánico usado como centro clandestino. Base del Plan Cóndor, coordinación represiva internacional.", link: "https://maps.google.com/?q=Automotores+Orletti", img: "" },
  { name: "Plaza de Mayo", desc: "Plaza central de Buenos Aires. Lugar histórico de las marchas de las Madres y Abuelas.", link: "https://maps.google.com/?q=Plaza+de+Mayo", img: "" },
  { name: "La Perla (Córdoba)", desc: "Centro clandestino más grande del interior del país. Núcleo del aparato represivo en Córdoba.", link: "https://maps.google.com/?q=La+Perla+C%C3%B3rdoba+Memoria", img: "" },
  { name: "Base Naval Mar del Plata (El Faro)", desc: "Instalación naval utilizada durante la dictadura. Vinculada a desapariciones y “vuelos de la muerte”.", link: "https://maps.google.com/?q=Base+Naval+Mar+del+Plata+Faro", img: "" },
  { name: "Parque de la Memoria", desc: "Monumento frente al Río de la Plata. Contiene los nombres de miles de desaparecidos.", link: "https://maps.google.com/?q=Parque+de+la+Memoria+Buenos+Aires", img: "" },
  { name: "Casa de la Masacre de Monte Grande", desc: "Vivienda donde ocurrió un operativo represivo. Representa la violencia directa en el conurbano bonaerense.", link: "https://maps.google.com/?q=Boulevard+Buenos+Aires+1151+Luis+Guill%C3%B3n", img: "" },
  { name: "Plaza de la Memoria (Monte Grande)", desc: "Espacio conmemorativo local. Punto de memoria y actos por el 24 de marzo.", link: "https://maps.google.com/?q=Boulevard+Buenos+Aires+y+Salta+Monte+Grande", img: "" },
  { name: "Ruta 205", desc: "Vía clave del conurbano sur. Asociada a traslados y operativos durante la dictadura.", link: "https://maps.google.com/?q=Ruta+205+Buenos+Aires", img: "" },
  { name: "Comisaría 1° de Monte Grande", desc: "Dependencia policial histórica. Señalada en testimonios como lugar de detención.", link: "https://maps.google.com/?q=Sofia+Terrero+de+Santamarina+474+Monte+Grande", img: "" },
  { name: "Cementerio Municipal de Monte Grande", desc: "Cementerio local. Lugar vinculado a enterramientos e investigaciones posteriores.", link: "https://maps.google.com/?q=Cementerio+Monte+Grande", img: "" },
  { name: "El Vesubio", desc: "Centro clandestino ubicado en La Matanza, bajo control del Ejército. Fue uno de los principales lugares de tortura y desaparición del Primer Cuerpo.", link: "https://maps.google.com/?q=El+Vesubio+Centro+Clandestino+La+Matanza", img: "" },
  { name: "Pozo de Quilmes", desc: "Centro clandestino que funcionó en una brigada policial. Parte del “Circuito Camps”, clave en secuestros y desapariciones en el conurbano.", link: "https://maps.google.com/?q=Pozo+de+Quilmes", img: "" },
  { name: "Campo de Mayo", desc: "Complejo militar con múltiples centros clandestinos. Lugar donde funcionaron maternidades clandestinas y se realizaron vuelos de la muerte.", link: "https://maps.google.com/?q=Campo+de+Mayo", img: "" },
  { name: "Comisaría 5° de La Plata", desc: "Dependencia policial utilizada como centro de detención. Asociada a secuestros de estudiantes (como en la “Noche de los Lápices”).", link: "https://maps.google.com/?q=Comisaria+5+La+Plata", img: "" },
  { name: "Arana (Centro Clandestino)", desc: "Instalación rural utilizada para detenciones ilegales. Vinculada a torturas y ejecuciones en la zona de La Plata.", link: "https://maps.google.com/?q=Arana+Centro+Clandestino+La+Plata", img: "" },
  { name: "ESIM (Escuela de Suboficiales de Infantería de Marina)", desc: "Dependencia de la Armada. Funcionó como centro clandestino en la costa atlántica.", link: "https://maps.google.com/?q=ESIM+Mar+del+Plata", img: "" },
  { name: "Quinta de Funes", desc: "Casa operativa en Santa Fe. Utilizada para inteligencia y detención dentro del Plan Cóndor.", link: "https://maps.google.com/?q=Quinta+de+Funes+Santa+Fe", img: "" },
  { name: "La Escuelita (Bahía Blanca)", desc: "Centro clandestino en instalaciones militares. Punto clave de represión en el sur bonaerense.", link: "https://maps.google.com/?q=La+Escuelita+Bahia+Blanca", img: "" },
  { name: "Batallón de Comunicaciones 601 (City Bell)", desc: "Unidad militar del Ejército. Señalada en múltiples testimonios por detenciones ilegales.", link: "https://maps.google.com/?q=Batallon+601+City+Bell", img: "" },
  { name: "D2 Mendoza", desc: "Departamento de Informaciones de la policía mendocina. Centro de tortura emblemático en la provincia de Mendoza.", link: "https://maps.google.com/?q=D2+Mendoza+Memoria", img: "" },
  { name: "La Ribera (Córdoba)", desc: "Centro clandestino previo a La Perla. Parte del circuito represivo cordobés.", link: "https://maps.google.com/?q=La+Ribera+C%C3%B3rdoba+Memoria", img: "" },
  { name: "Jefatura de Policía de Rosario", desc: "Edificio policial histórico. Utilizado para detenciones ilegales durante la dictadura.", link: "https://maps.google.com/?q=Jefatura+Policia+Rosario", img: "" },
  { name: "Fábrica Militar de Villa María", desc: "Instalación industrial militar. Señalada como lugar de detención clandestina.", link: "https://maps.google.com/?q=Fabrica+Militar+Villa+Maria", img: "" },
  { name: "Ingenio Ledesma (Jujuy)", desc: "Empresa azucarera. Vinculada a “La Noche del Apagón”, donde hubo secuestros masivos.", link: "https://maps.google.com/?q=Ingenio+Ledesma+Jujuy", img: "" },
  { name: "Regimiento de Infantería 9 (Corrientes)", desc: "Unidad militar. Funcionó como centro clandestino en el nordeste argentino.", link: "https://maps.google.com/?q=Regimiento+9+Corrientes", img: "" }
];

const quizData = [
    {
        scenario: "Estás en 1976 y sos periodista para un diario local. Te llega información y pruebas fehacientes sobre secuestros ilegales operando durante la noche en tu barrio. ¿Qué acción tomas?",
        options: [
            { text: "Publicas la información con evidencia fotográfica.", consequenceTitle: "Censura y Persecución", consequenceText: "Consecuencia: En la dictadura, la censura estatal era estricta y directa. Muchos periodistas que publicaron información fueron perseguidos y secuestrados (la CONADEP registra más de 100 periodistas desaparecidos y asesinados). Tu diario es clausurado y tu vida corre peligro." },
            { text: "Ocultas la información y sigues la línea oficial.", consequenceTitle: "Supervivencia y Autocensura", consequenceText: "Consecuencia: Al ocultar la información protegías tu vida debido al miedo infundido en la sociedad. La autocensura fue el día a día para la mayoría de los medios, permitiendo al gobierno militar operar con impunidad en la clandestinidad." }
        ]
    },
    {
        scenario: "Son las 12:30 AM. Hubo un accidente con un familiar y necesitas salir urgente a la calle a buscar un médico o ayuda. ¿Qué haces?",
        options: [
            { text: "Sales a la calle en plena noche.", consequenceTitle: "Toque de Queda y Violencia", consequenceText: "Consecuencia: El gobierno implementaba controles nocturnos ('razzias') constantemente. Si salías después de la medianoche, los militares intervenían con el civil. Eras detenido, interrogado con violencia, o incluso llevado como detenido-desaparecido." },
            { text: "Te quedas en casa hasta el amanecer.", consequenceTitle: "El Terrorismo de Estado en Casa", consequenceText: "Consecuencia: La restricción de circulación obligaba a los civiles a recluirse y perder su libertad. Vivías con constante temor y perdías el acceso a emergencias básicas de salud por miedo a enfrentarte a un retén militar." }
        ]
    },
    {
        scenario: "Eres un estudiante secundario. Tus compañeros están organizando una marcha para pedir por el 'Boleto Estudiantil Secundario' (BES). ¿Te sumas y marchas con ellos?",
        options: [
            { text: "Sí, asisto a la marcha a reclamar mis derechos.", consequenceTitle: "Represión Estudiantil (Noche de los Lápices)", consequenceText: "Consecuencia: La actividad estudiantil estaba prohibida y era considerada 'subversiva'. Los jóvenes fueron uno de los grupos más atacados (como ocurrió en 'La Noche de los Lápices' en Septiembre de 1976 en La Plata, donde 10 estudiantes fueron secuestrados por este mismo reclamo)." },
            { text: "No, decido mantenerme al margen.", consequenceTitle: "Silenciamiento", consequenceText: "Consecuencia: Lograbas mantenerte a salvo temporalmente en el colegio. Evitar la participación era el objetivo dictatorial: infundir terror para desarticular y silenciar cualquier organización juvenil en busca de sus derechos." }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timelineRoot = document.getElementById('timeline-root');
    const filters = document.querySelectorAll('.month-filter');

    function renderTimeline(monthFilter = 'all') {
        timelineRoot.innerHTML = '';
        const filtered = monthFilter === 'all' 
            ? timelineData 
            : timelineData.filter(e => e.month === monthFilter);

        filtered.forEach((event, index) => {
            const eventEl = document.createElement('div');
            eventEl.className = 'timeline-event';
            eventEl.innerHTML = `
                <span class="event-date">${event.day} de ${monthNames[event.month]} ${event.year}</span>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.desc}</p>
                    <span class="event-tag">${event.tag}</span>
                </div>
            `;
            timelineRoot.appendChild(eventEl);
            
            // Trigger animation
            setTimeout(() => {
                eventEl.classList.add('show');
            }, index * 100);
        });
    }

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTimeline(btn.dataset.month);
        });
    });

    // Initial render
    renderTimeline();

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.info-card, .info-block').forEach(el => observer.observe(el));

    // Render 30 Lugares
    const lugaresRoot = document.getElementById('lugares-root');
    if (lugaresRoot) {
        lugaresData.forEach((lugar, i) => {
            const card = document.createElement('a');
            card.href = lugar.link;
            card.target = "_blank";
            card.className = "lugar-card";
            card.innerHTML = `
                <div class="lugar-img" style="background-image: url('${lugar.img}')"></div>
                <div class="lugar-info">
                    <span class="lugar-num">#${i + 1}</span>
                    <h3>${lugar.name}</h3>
                    <p>${lugar.desc}</p>
                    <span class="lugar-btn">Ver en Maps 📍</span>
                </div>
            `;
            lugaresRoot.appendChild(card);
            observer.observe(card);
        });
    }

    // Logic for Decisiones Interactivas
    let currentQuizIndex = 0;
    const quizScenario = document.getElementById('quiz-scenario');
    const quizOptions = document.getElementById('quiz-options');
    const quizResult = document.getElementById('quiz-result');
    const quizConsequenceTitle = document.getElementById('quiz-consequence-title');
    const quizConsequenceText = document.getElementById('quiz-consequence-text');
    const quizNextBtn = document.getElementById('quiz-next-btn');

    function loadQuiz(index) {
        if(index >= quizData.length) {
            quizScenario.innerHTML = "<strong>Has completado todas las historias.</strong> La represión y el terror dejaron heridas profundas en la sociedad que hoy recordamos para decir: ¡Nunca Más!";
            quizOptions.innerHTML = "";
            quizResult.classList.add('hidden');
            return;
        }

        const data = quizData[index];
        quizScenario.textContent = data.scenario;
        quizResult.classList.add('hidden');
        quizOptions.innerHTML = '';
        
        data.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline quiz-btn';
            btn.textContent = opt.text;
            btn.onclick = () => showConsequence(opt);
            quizOptions.appendChild(btn);
        });
    }

    function showConsequence(optionData) {
        quizOptions.innerHTML = '';
        quizConsequenceTitle.textContent = optionData.consequenceTitle;
        quizConsequenceText.textContent = optionData.consequenceText;
        quizResult.classList.remove('hidden');
    }

    if(document.getElementById('quiz-container')) {
        quizNextBtn.addEventListener('click', () => {
            currentQuizIndex++;
            loadQuiz(currentQuizIndex);
        });
        loadQuiz(0);
    }

    // Fix for auto-scroll issue: ensure page starts at top
    window.scrollTo(0, 0);
});


const testimoniosData = [
  // Menores
  { icon: "🧒", name: "1. Simón Antonio Riquelo", info: "Edad: bebé | Situación: desaparecido / apropiado", text: '"El 13 de julio de 1976 (...) me encontraba terminándole de dar el pecho a mi hijo Simón. Forzaron la puerta (...) comenzaron a torturarme (...) Cuando me sacaron de la casa les pregunté qué iba a ocurrir con el niño. Me respondieron que no debía preocuparme, que el niño se iba a quedar con ellos (...) Esa fue la última vez que vi a Simón." - Testimonio (madre)' },
  { icon: "🧒", name: "2. Griselda (13 años) y bebé Viviana", info: "Situación: abandono durante operativo", text: '"Optaron por llevarnos a todos, menos a Viviana, de seis meses de edad, que junto con Griselda, mi hermana de 13 años, quedaron en el domicilio."' },
  { icon: "🧒", name: "3. Hijos de Norberto Liwsky", info: "Edad: menores | Situación: secuestro familiar", text: '"Mi esposa y mis dos hijas ya habían sido capturadas y \'chupadas\'." - Testimonio (padre)' },
  { icon: "🧒", name: "4. Hijo de María Teresa de Cuello", info: "Situación: testigo directo de secuestro", text: '"El 26 de noviembre de 1976 a la madrugada invadieron nuestra vivienda (...) preguntaron quién era Teresa (...) la secuestraron (...) cuando mi padre intentó oponerse, le partieron la cabeza de un culatazo." - Testimonio (hijo)' },
  { icon: "🧒", name: "5. Niños en Hospital de Campo de Mayo", info: "Edades: 2, 3 y 5 años | Situación: niños retenidos en ámbito militar", text: '"Vi a niños pequeños (...) dos chiquitos de 3 y 5 años (...) otra vez una criatura de aproximadamente 2 años, que lloraba pidiendo a su madre (...) al pasar algunas horas más tarde (...) los chicos ya no estaban." - Testimonio (médico)' },
  { icon: "🧒", name: "6. Menores apropiadas", info: "Situación: apropiación y adopción ilegal", text: '"El Tribunal procedió entonces a entregar a las menores en guarda provisoria (...) un año después (...) obtuvo la adopción plena." - Testimonio institucional' },
  { icon: "🧒", name: "7. Niños en centros clandestinos", info: "Situación: tortura / exposición", text: '"Presenciaban las torturas a que eran sometidos sus padres, o eran ellos mismos torturados en presencia de éstos." - Testimonio general' },
  { icon: "🧒", name: "8. Niños durante secuestros domiciliarios", info: "Edad: 5 años", text: '"Le dijeron al nene que cerrara los ojos."' },

  // Embarazadas y violencia a mujeres
  { icon: "🤰", name: "1. Mujer embarazada en cautiverio", info: "Situación: embarazo dentro de centro clandestino", text: '"Había una chica embarazada (...) estaba muy avanzada (...) la mantenían en las mismas condiciones que a todos (...) atada, vendada (...) se quejaba mucho por los dolores." - Testimonio de sobreviviente' },
  { icon: "🤰", name: "2. Parto en cautiverio", info: "Situación: nacimiento dentro de centro clandestino", text: '"Una detenida dio a luz en el lugar (...) no había ningún tipo de atención médica adecuada (...) después del nacimiento, el bebé fue separado de la madre."' },
  { icon: "🤰", name: "3. Embarazada desaparecida", info: "Situación: secuestro estando embarazada", text: '"Se encontraba embarazada al momento de su detención (...) fue vista en el centro clandestino (...) luego no se volvió a saber ni de ella ni del hijo."' },
  { icon: "🤰", name: "4. Testimonio sobre mujeres embarazadas en centros", info: "Situación: patrón sistemático", text: '"Las embarazadas eran mantenidas con vida hasta el momento del parto (...) luego se apropiaban de los niños."' },
  { icon: "👩", name: "5. Testimonio de mujer detenida", info: "Situación: violencia extrema", text: '"Fui secuestrada en mi casa (...) me golpearon (...) me aplicaron picana eléctrica (...) permanecí vendada todo el tiempo."' },
  { icon: "👨", name: "6. Sobreviviente", info: "Situación: tortura sistemática", text: '"Me desnudaron (...) me ataron a una cama metálica (...) comenzaron a pasarme corriente eléctrica por todo el cuerpo."' },
  { icon: "👩👧", name: "7. Madre separada de su hijo", info: "Situación: dolor de una madre", text: '"Escuchaba a mi hijo llorar (...) no me dejaban verlo (...) no supe más de él."' },
  { icon: "👨", name: "8. Secuestro con violencia extrema", info: "Situación: operativo nocturno", text: '"Entraron de noche (...) rompieron todo (...) me tiraron al piso (...) me llevaron encapuchado."' },
  { icon: "👩", name: "9. Detenida", info: "Situación: aislamiento total", text: '"No sabía si era de día o de noche (...) estaba siempre vendada (...) los gritos eran constantes."' },
  { icon: "👨👩👧", name: "10. Familia completa secuestrada", info: "Situación: desmembramiento familiar", text: '"Nos llevaron a todos (...) nos separaron (...) nunca más volví a ver a algunos de ellos."' },

  // La Noche de los Lápices
  { icon: "✏️", name: "Pablo Díaz", info: "Situación: Sobreviviente de la Noche de los Lápices", text: '“Yo tenía 17 años y participaba en la lucha por el boleto estudiantil. El 21 de septiembre de 1976, de madrugada, varios hombres armados llegaron a mi casa... Lo único que escuchaba eran gritos de otras personas. Ahí entendí que no estaba solo... Yo sigo contando lo que pasó porque no quiero que se olvide. Nosotros fuimos testigos de lo que les hicieron a otros. Tenemos sus últimas palabras, sus últimas miradas. Y eso no puede desaparecer.”' },

  // Mas testimonios
  { icon: "👨", name: "1. Juan de Dios Gómez", info: "Situación: detenido-desaparecido", text: '"El 10 de agosto de 1976 (...) detuvieron a mi hijo Juan de Dios Gómez (...) Después se fueron con mi hijo y no tuvimos más noticias de él." - Testimonio (madre)' },
  { icon: "👨", name: "3. Norberto Liwsky", info: "Situación: secuestro familiar", text: '"Mi esposa y mis dos hijas ya habían sido capturadas y \'chupadas\'."' },
  { icon: "👨", name: "4. Alberto Santiago Bumichon", info: "Situación: secuestro y asesinato", text: '"Mi esposo, mi hijo David y yo fuimos secuestrados (...) Mi hijo fue liberado (...) El cadáver de mi esposo fue hallado con siete impactos de bala en la garganta." - Testimonio (esposa)' },
  { icon: "👩", name: "5. Graciela Mabel Barroca", info: "Situación: estudiante desaparecida", text: '"Mi otra hija (...) regresó (...) ya que al día siguiente tenía un examen (...) la detuvieron (...) y se la llevaron (...) sigue desaparecida." - Testimonio (madre)' },
  { icon: "👨👩👧", name: "6. Familia Núñez", info: "Situación: operativo violento + múltiples secuestros", text: '"Durante el operativo (...) no permitieron que nadie me auxiliara (...) debí permanecer en la misma posición sin comer ni ser atendida (...) amenazada de continuo." - Testimonio (familiar cuadripléjica)' },
  { icon: "👨", name: "7. Testimonio de sobreviviente", info: "Situación: tortura en centro clandestino", text: '"Fui encapuchado (...) atado (...) comenzaron a aplicarme picana eléctrica en distintas partes del cuerpo (...) los interrogatorios eran constantes."' },
  { icon: "👨", name: "8. Testimonio sobre secuestro nocturno", info: "Situación: irrupción domiciliaria", text: '"Forzaron la puerta (...) entraron violentamente (...) me golpearon (...) me encapucharon y me llevaron sin dar explicación."' },
  { icon: "👩", name: "9. Testimonio de mujer detenida", info: "Situación: detención ilegal + tortura", text: '"Fui detenida sin orden judicial (...) me mantuvieron vendada (...) escuchaba los gritos de otras personas siendo torturadas."' },
  { icon: "👨", name: "10. Testimonio sobre centros clandestinos", info: "Situación: condiciones de detención", text: '"Permanecíamos vendados (...) no sabíamos si era de día o de noche (...) los gritos eran permanentes."' }
];

// Render Testimonios
document.addEventListener('DOMContentLoaded', () => {
    const testimoniosRoot = document.getElementById('testimonios-root');
    if (testimoniosRoot) {
        testimoniosData.forEach((testimonio, i) => {
            const card = document.createElement('div');
            card.className = "testimonio-card fade-in";
            card.innerHTML = `
                <div class="testimonio-icon">${testimonio.icon}</div>
                <div class="testimonio-content">
                    <h3>${testimonio.name}</h3>
                    <p class="testimonio-info">${testimonio.info}</p>
                    <blockquote class="testimonio-text">${testimonio.text}</blockquote>
                </div>
            `;
            testimoniosRoot.appendChild(card);
            // Observer is already defined in script.js, but let's re-observe it manually or use a new observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }
});
