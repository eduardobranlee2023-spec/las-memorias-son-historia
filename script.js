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
});
