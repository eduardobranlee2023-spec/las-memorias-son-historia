const fs = require('fs');

const places = `
#1 ESMA (Escuela de Mecánica de la Armada)
📍 https://maps.google.com/?q=ESMA+Buenos+Aires
🧾 Uno de los centros clandestinos más grandes del país.
🎯 Fue símbolo del terrorismo de Estado. Hoy es el Espacio Memoria y Derechos Humanos.

#2 Club Atlético
📍 https://maps.google.com/?q=Club+Atl%C3%A9tico+Centro+Clandestino+Buenos+Aires
🧾 Funcionaba en el subsuelo de la Policía Federal.
🎯 Miles de detenidos pasaron por allí; hoy es sitio arqueológico.

#3 Mansión Seré
📍 https://maps.google.com/?q=Mansi%C3%B3n+Ser%C3%A9+Mor%C3%B3n
🧾 Centro clandestino en Morón operado por la Fuerza Aérea.
🎯 Famoso por la fuga de detenidos en 1978.

#4 Olimpo
📍 https://maps.google.com/?q=Olimpo+Centro+Clandestino+Floresta
🧾 Centro de detención en el barrio de Floresta.
🎯 Destacado por su brutalidad dentro del circuito represivo.

#5 Pozo de Banfield
📍 https://maps.google.com/?q=Pozo+de+Banfield
🧾 Parte del “Circuito Camps”.
🎯 Funcionó como maternidad clandestina donde nacieron bebés en cautiverio.

#6 Automotores Orletti
📍 https://maps.google.com/?q=Automotores+Orletti
🧾 Taller mecánico usado como centro clandestino.
🎯 Base del Plan Cóndor, coordinación represiva internacional.

#7 Plaza de Mayo
📍 https://maps.google.com/?q=Plaza+de+Mayo
🧾 Plaza central de Buenos Aires.
🎯 Lugar histórico de las marchas de las Madres y Abuelas.

#8 La Perla (Córdoba)
📍 https://maps.google.com/?q=La+Perla+C%C3%B3rdoba+Memoria
🧾 Centro clandestino más grande del interior del país.
🎯 Núcleo del aparato represivo en Córdoba.

#9 Base Naval Mar del Plata (El Faro)
📍 https://maps.google.com/?q=Base+Naval+Mar+del+Plata+Faro
🧾 Instalación naval utilizada durante la dictadura.
🎯 Vinculada a desapariciones y “vuelos de la muerte”.

#10 Parque de la Memoria
📍 https://maps.google.com/?q=Parque+de+la+Memoria+Buenos+Aires
🧾 Monumento frente al Río de la Plata.
🎯 Contiene los nombres de miles de desaparecidos.

#11 Casa de la Masacre de Monte Grande
📍 https://maps.google.com/?q=Boulevard+Buenos+Aires+1151+Luis+Guill%C3%B3n
🧾 Vivienda donde ocurrió un operativo represivo.
🎯 Representa la violencia directa en el conurbano bonaerense.

#12 Plaza de la Memoria (Monte Grande)
📍 https://maps.google.com/?q=Boulevard+Buenos+Aires+y+Salta+Monte+Grande
🧾 Espacio conmemorativo local.
🎯 Punto de memoria y actos por el 24 de marzo.

#13 Ruta 205
📍 https://maps.google.com/?q=Ruta+205+Buenos+Aires
🧾 Vía clave del conurbano sur.
🎯 Asociada a traslados y operativos durante la dictadura.

#14 Comisaría 1° de Monte Grande
📍 https://maps.google.com/?q=Sofia+Terrero+de+Santamarina+474+Monte+Grande
🧾 Dependencia policial histórica.
🎯 Señalada en testimonios como lugar de detención.

#15 Cementerio Municipal de Monte Grande
📍 https://maps.google.com/?q=Cementerio+Monte+Grande
🧾 Cementerio local.
🎯 Lugar vinculado a enterramientos e investigaciones posteriores.

#16 El Vesubio
📍 https://maps.google.com/?q=El+Vesubio+Centro+Clandestino+La+Matanza
🧾 Centro clandestino ubicado en La Matanza, bajo control del Ejército.
🎯 Fue uno de los principales lugares de tortura y desaparición del Primer Cuerpo.

#17 Pozo de Quilmes
📍 https://maps.google.com/?q=Pozo+de+Quilmes
🧾 Centro clandestino que funcionó en una brigada policial.
🎯 Parte del “Circuito Camps”, clave en secuestros y desapariciones en el conurbano.

#18 Campo de Mayo
📍 https://maps.google.com/?q=Campo+de+Mayo
🧾 Complejo militar con múltiples centros clandestinos.
🎯 Lugar donde funcionaron maternidades clandestinas y se realizaron vuelos de la muerte.

#19 Comisaría 5° de La Plata
📍 https://maps.google.com/?q=Comisaria+5+La+Plata
🧾 Dependencia policial utilizada como centro de detención.
🎯 Asociada a secuestros de estudiantes (como en la “Noche de los Lápices”).

#20 Arana (Centro Clandestino)
📍 https://maps.google.com/?q=Arana+Centro+Clandestino+La+Plata
🧾 Instalación rural utilizada para detenciones ilegales.
🎯 Vinculada a torturas y ejecuciones en la zona de La Plata.

#21 ESIM (Escuela de Suboficiales de Infantería de Marina)
📍 https://maps.google.com/?q=ESIM+Mar+del+Plata
🧾 Dependencia de la Armada.
🎯 Funcionó como centro clandestino en la costa atlántica.

#22 Quinta de Funes
📍 https://maps.google.com/?q=Quinta+de+Funes+Santa+Fe
🧾 Casa operativa en Santa Fe.
🎯 Utilizada para inteligencia y detención dentro del Plan Cóndor.

#23 La Escuelita (Bahía Blanca)
📍 https://maps.google.com/?q=La+Escuelita+Bahia+Blanca
🧾 Centro clandestino en instalaciones militares.
🎯 Punto clave de represión en el sur bonaerense.

#24 Batallón de Comunicaciones 601 (City Bell)
📍 https://maps.google.com/?q=Batallon+601+City+Bell
🧾 Unidad militar del Ejército.
🎯 Señalada en múltiples testimonios por detenciones ilegales.

#25 D2 Mendoza
📍 https://maps.google.com/?q=D2+Mendoza+Memoria
🧾 Departamento de Informaciones de la policía mendocina.
🎯 Centro de tortura emblemático en la provincia de Mendoza.

#26 La Ribera (Córdoba)
📍 https://maps.google.com/?q=La+Ribera+C%C3%B3rdoba+Memoria
🧾 Centro clandestino previo a La Perla.
🎯 Parte del circuito represivo cordobés.

#27 Jefatura de Policía de Rosario
📍 https://maps.google.com/?q=Jefatura+Policia+Rosario
🧾 Edificio policial histórico.
🎯 Utilizado para detenciones ilegales durante la dictadura.

#28 Fábrica Militar de Villa María
📍 https://maps.google.com/?q=Fabrica+Militar+Villa+Maria
🧾 Instalación industrial militar.
🎯 Señalada como lugar de detención clandestina.

#29 Ingenio Ledesma (Jujuy)
📍 https://maps.google.com/?q=Ingenio+Ledesma+Jujuy
🧾 Empresa azucarera.
🎯 Vinculada a “La Noche del Apagón”, donde hubo secuestros masivos.

#30 Regimiento de Infantería 9 (Corrientes)
📍 https://maps.google.com/?q=Regimiento+9+Corrientes
🧾 Unidad militar.
🎯 Funcionó como centro clandestino en el nordeste argentino.
`;

const lines = places.trim().split('\\n').map(l => l.trim()).filter(l => l);
const data = [];
for (let i = 0; i < lines.length; ) {
    if (lines[i].startsWith('#')) {
        const name = lines[i].replace(/^#\d+\s*/, '');
        const link = lines[i+1].replace('📍 ', '');
        const desc1 = lines[i+2].replace('🧾 ', '');
        const desc2 = lines[i+3].replace('🎯 ', '');
        data.push(\`    { name: "\${name}", desc: "\${desc1} \${desc2}", link: "\${link}", img: "" }\`);
        i += 4;
    } else {
        i++;
    }
}

fs.writeFileSync('lugares.js', \`const lugaresData = [\\n\${data.join(',\\n')}\\n];\\n\`, 'utf8');
