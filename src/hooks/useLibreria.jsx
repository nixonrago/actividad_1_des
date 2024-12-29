import {useEffect, useState} from "react";


export const useLibreria = () => {


    const [Libros, setLibros] = useState([]);

    useEffect(() => {

        const getImagen = (index) => require(`../imagenes/imagen${index}.PNG`);

        setTimeout(() => {
            setLibros([
                {
                    id: "1",
                    titulo: "El Quijote",
                    autor: "Miguel de Cervantes",
                    paginas: 928,
                    idioma: "Español",
                    calificacion: 4.8,
                    precio: 25.36,
                    imagen: getImagen(1),
                    sinopsis: "El Quijote es una novela escrita por Miguel de Cervantes. La historia sigue las aventuras de un hidalgo llamado Don Quijote que, influenciado por los libros de caballería, decide convertirse en un caballero andante para defender a los oprimidos y corregir injusticias. Acompañado por su fiel escudero Sancho Panza, Don Quijote se embarca en una serie de aventuras que lo llevan a enfrentarse a molinos de viento, rebaños de ovejas y otros desafíos, todo mientras lucha por mantener su idealismo en un mundo que no siempre lo comprende."
                },
                {
                    id: "2",
                    titulo: "El Señor de los Anillos",
                    autor: "J.R.R. Tolkien",
                    paginas: 1200,
                    idioma: "Inglés",
                    calificacion: 4.9,
                    precio: 29.96,
                    imagen: getImagen(2),
                    sinopsis: "El Señor de los Anillos es una épica novela de fantasía escrita por J.R.R. Tolkien. La historia sigue a un joven hobbit llamado Frodo Bolsón, quien recibe la tarea de destruir un anillo mágico que tiene el poder de controlar el destino del mundo. Acompañado por un grupo de amigos y aliados, Frodo debe viajar a través de la Tierra Media, enfrentándose a peligros y enemigos, para llegar al Monte del Destino y destruir el anillo antes de que caiga en manos del malvado Sauron."
                },
                {
                    id: "3",
                    titulo: "Don Juan Tenorio",
                    autor: "José Zorrilla",
                    paginas: 184,
                    idioma: "Español",
                    calificacion: 4.2,
                    precio: 59.00,
                    imagen: getImagen(3),
                    sinopsis: "Don Juan Tenorio es una obra de teatro escrita por José Zorrilla. La historia sigue a Don Juan, un joven noble conocido por su vida libertina y sus conquistas amorosas. A lo largo de la obra, Don Juan se enfrenta a las consecuencias de sus acciones y busca redimirse, especialmente después de enamorarse de Doña Inés. La obra es un clásico de la literatura española y explora temas de amor, honor y redención."
                },
                {
                    id: "4",
                    titulo: "La Celestina",
                    autor: "Fernando de Rojas",
                    paginas: 234,
                    idioma: "Español",
                    calificacion: 4.0,
                    precio: 33.05,
                    imagen: getImagen(4),
                    sinopsis: "La Celestina es una novela escrita por Fernando de Rojas. La historia sigue a Calisto, un joven noble que se enamora de Melibea. Para conquistarla, Calisto recurre a los servicios de la alcahueta Celestina. A través de intrigas y manipulaciones, Celestina logra que Melibea corresponda a los sentimientos de Calisto, pero las consecuencias de sus acciones llevan a un trágico desenlace. La obra es un importante exponente de la literatura renacentista española."
                },
                {
                    id: "5",
                    titulo: "El Padrino",
                    autor: "Francis Ford Coppola",
                    paginas: 175,
                    idioma: "Inglés",
                    calificacion: 4.9,
                    precio: 15.66,
                    sinopsis: "La historia de la familia Corleone, una de las dinastías criminales más poderosas de Estados Unidos, mientras enfrenta traiciones, tragedias y la lucha por mantener su imperio.",
                    imagen: getImagen(5)
                },
                {
                    id: "6",
                    titulo: "El Caballero de la Noche",
                    autor: "Christopher Nolan",
                    paginas: 152,
                    idioma: "Inglés",
                    calificacion: 4.8,
                    precio: 56.25,
                    sinopsis: "Batman enfrenta al villano Joker, quien desata el caos en Gotham City, desafiando al héroe a redefinir los límites de la justicia.",
                    imagen: getImagen(6)
                },
                {
                    id: "7",
                    titulo: "Titanic",
                    autor: "James Cameron",
                    paginas: 195,
                    idioma: "Inglés",
                    calificacion: 4.7,
                    precio: 19.26,
                    sinopsis: "Una trágica historia de amor entre Jack y Rose a bordo del infame barco Titanic durante su fatídico viaje inaugural.",
                    imagen: getImagen(7)
                },
                {
                    id: "8",
                    titulo: "Forrest Gump",
                    autor: "Robert Zemeckis",
                    paginas: 142,
                    idioma: "Inglés",
                    calificacion: 4.8,
                    precio: 51.93,
                    sinopsis: "Forrest Gump, un hombre con un coeficiente intelectual bajo pero un corazón enorme, experimenta una vida extraordinaria mientras marca momentos icónicos de la historia estadounidense.",
                    imagen: getImagen(8)
                },
                {
                    id: "9",
                    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
                    autor: "Peter Jackson",
                    paginas: 178,
                    idioma: "Inglés",
                    calificacion: 4.9,
                    precio: 30.01,
                    sinopsis: "Frodo y un grupo de aliados inician una épica travesía para destruir el Anillo Único, enfrentándose a fuerzas oscuras en la Tierra Media.",
                    imagen: getImagen(9)
                },
                {
                    id: "10",
                    titulo: "Matrix",
                    autor: "Lana Wachowski y Lilly Wachowski",
                    paginas: 136,
                    idioma: "Inglés",
                    calificacion: 4.7,
                    precio: 46.58,
                    sinopsis: "Neo descubre que el mundo que conoce es una simulación controlada por máquinas y se une a la lucha por liberar a la humanidad.",
                    imagen: getImagen(10)
                },
                {
                    id: "11",
                    autor: "Pulp Fiction",
                    director: "Quentin Tarantino",
                    paginas: 154,
                    idioma: "Inglés",
                    calificacion: 4.8,
                    precio: 36.25,
                    sinopsis: "Historias entrelazadas de crimen, redención y humor negro en el submundo criminal de Los Ángeles.",
                    imagen: getImagen(11)
                },
                {
                    id: "12",
                    titulo: "Gladiador",
                    autor: "Ridley Scott",
                    paginas: 155,
                    idioma: "Inglés",
                    calificacion: 4.8,
                    precio: 11.37,
                    sinopsis: "Maximus, un general romano traicionado, busca venganza contra el corrupto emperador que asesinó a su familia y lo condenó a la esclavitud.",
                    imagen: getImagen(12)
                },
                {
                    id: "13",
                    titulo: "La Vida es Bella",
                    autor: "Roberto Benigni",
                    paginas: 116,
                    idioma: "Italiano",
                    calificacion: 4.9,
                    precio: 45.66,
                    sinopsis: "Un padre utiliza su imaginación para proteger a su hijo de los horrores de un campo de concentración durante la Segunda Guerra Mundial.",
                    imagen: getImagen(13)
                },
                {
                    id: "14",
                    titulo: "Inception",
                    autor: "Christopher Nolan",
                    paginas: 148,
                    idioma: "Inglés",
                    calificacion: 4.8,
                    precio: 52.33,
                    sinopsis: "Un ladrón especializado en infiltrarse en los sueños es contratado para realizar un complejo trabajo de 'inception', implantar una idea en la mente de alguien.",
                    imagen: getImagen(1)
                },
                {
                    id: "15",
                    titulo: "Coco",
                    autor: "Lee Unkrich",
                    paginas: 105,
                    idioma: "Español/Inglés",
                    calificacion: 4.8,
                    precio: 24.00,
                    sinopsis: "Miguel, un joven músico, viaja al mundo de los muertos para descubrir los secretos de su familia y cumplir su sueño de convertirse en artista.",
                    imagen: getImagen(2)
                },
                {
                    id: "16",
                    titulo: "La Lista de Schindler",
                    autor: "Steven Spielberg",
                    paginas: 195,
                    idioma: "Inglés",
                    calificacion: 4.9,
                    precio: 44.21,
                    sinopsis: "La historia de Oskar Schindler, un empresario alemán que salvó a más de mil judíos del Holocausto durante la Segunda Guerra Mundial.",
                    imagen: getImagen(3)
                },
                {
                    id: "17",
                    titulo: "Avengers: Endgame",
                    autor: "Anthony y Joe Russo",
                    paginas: 181,
                    idioma: "Inglés",
                    calificacion: 4.7,
                    precio: 17.57,
                    sinopsis: "Los Vengadores restantes se reúnen para enfrentarse a Thanos y revertir las consecuencias de su chasquido devastador.",
                    imagen: getImagen(4)
                },
                {
                    id: "18",
                    titulo: "Interstellar",
                    autor: "Christopher Nolan",
                    paginas: 169,
                    idioma: "Inglés",
                    calificacion: 4.8,
                    precio: 62.79,
                    sinopsis: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
                    imagen: getImagen(5)
                },
                {
                    id: "19",
                    titulo: "Toy Story",
                    autor: "John Lasseter",
                    paginas: 81,
                    idioma: "Inglés",
                    calificacion: 4.7,
                    precio: 37.82,
                    sinopsis: "Las aventuras de Woody, Buzz y otros juguetes cuando enfrentan desafíos mientras intentan mantenerse unidos.",
                    imagen: getImagen(6)
                },

            ]);
        }, 2500);
    }, []);

    return Libros;
}