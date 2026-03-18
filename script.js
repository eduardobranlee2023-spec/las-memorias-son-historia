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
    { name: "ESMA (Escuela de Mecánica de la Armada)", desc: "El centro clandestino de detención más grande y emblemático, hoy convertido en Espacio para la Memoria.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Esma01.jpg/800px-Esma01.jpg", link: "https://maps.app.goo.gl/wY5C4aJjQ2z92jQo7" },
    { name: "Club Atlético", desc: "Funcionó en el sótano de la Policía Federal en CABA. Miles de personas pasaron por este centro. Hoy es un sitio arqueológico.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sitio_memoria_Atl%C3%A9tico_1.jpg/800px-Sitio_memoria_Atl%C3%A9tico_1.jpg", link: "https://maps.app.goo.gl/P3PZZg1W2zY14p4e8" },
    { name: "Mansión Seré", desc: "Ubicada en Morón, Buenos Aires, administrada por la Fuerza Aérea. En 1978, un grupo de prisioneros logró fugarse.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mansionsere-bustos.jpg/800px-Mansionsere-bustos.jpg", link: "https://maps.app.goo.gl/J2Yp5zW1wZqXyFkT9" },
    { name: "Olimpo", desc: "Funcionó bajo la órbita del Primer Cuerpo de Ejército. Se destacó por sus brutales métodos en el barrio de Floresta.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Centro_Clandestino_de_Detenci%C3%B3n_Olimpo.JPG/800px-Centro_Clandestino_de_Detenci%C3%B3n_Olimpo.JPG", link: "https://maps.app.goo.gl/5rVwWQ4H9kXT4yXv9" },
    { name: "Pozo de Banfield", desc: "Un eslabón del 'Circuito Camps'. Fue utilizado como maternidad clandestina donde muchas embarazadas dieron a luz en cautiverio.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Espacio_para_la_Memoria_ex_Pozo_de_Banfield.jpg/800px-Espacio_para_la_Memoria_ex_Pozo_de_Banfield.jpg", link: "https://maps.app.goo.gl/2F3TfXk8m9k6B8Yq7" },
    { name: "Automotores Orletti", desc: "Fachada de un taller mecánico que sirvió de base principal operativa para el represivo Plan Cóndor en el cono sur.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orletti01.jpg/800px-Orletti01.jpg", link: "https://maps.app.goo.gl/A4dRXzV1ZfN7xU6P6" },
    { name: "Plaza de Mayo", desc: "Punto de encuentro de las Madres y Abuelas, marchando cada jueves reclamando aparición con vida y justicia.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Plaza_de_Mayo%2C_Buenos_Aires%2C_Argentina.jpg/800px-Plaza_de_Mayo%2C_Buenos_Aires%2C_Argentina.jpg", link: "https://maps.app.goo.gl/d2P9oYX8w2mQY9S58" },
    { name: "La Perla (Córdoba)", desc: "El mayor centro clandestino del interior, en Córdoba, al mando del General Luciano Benjamín Menéndez.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/La_perla_frente.jpg/800px-La_perla_frente.jpg", link: "https://maps.app.goo.gl/f7J8MhL1n8KQW8L46" },
    { name: "Base Naval Mar del Plata (El Faro)", desc: "Centro de detención en la ciudad costera, fuertemente vinculado con desapariciones y los denominados 'vuelos de la muerte'.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Faro_Punta_Mogotes_espacio_memoria_4.jpg/800px-Faro_Punta_Mogotes_espacio_memoria_4.jpg", link: "https://maps.app.goo.gl/x2zWQ1bY9z2hU8XRA" },
    { name: "Parque de la Memoria", desc: "Monumento a las Víctimas del Terrorismo de Estado, frente al Río de la Plata, conteniendo miles de nombres esculpidos.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monumento_a_las_V%C3%ADctimas_del_Terrorismo_de_Estado_%28PA01%29.jpg/800px-Monumento_a_las_V%C3%ADctimas_del_Terrorismo_de_Estado_%28PA01%29.jpg", link: "https://maps.app.goo.gl/v5e2R2z9qY9M5M8S7" }
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

    // Render 10 Lugares
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
});
