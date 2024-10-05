import {
    Uno,
    Dos,
    Tres,
    Cuatro,
    Cinco,
    logo1,
    logo2,
    logo3,
    number1,
    number2,
    number3,
    image1,
    image2,
    image3,
} from '$lib/IMAGES/todas';

export let courses = [
    { title: 'Historia del Arte', description: 'Aprende técnicas de pintura.', link: '../Curso/1/Nivel/1/Historia_Arte.html' },
    { title: 'Dibujo Simple (Básico)', description: 'Domina el arte de dibujar en varios estilos.', link: '#' },
    { title: 'Puntillismo', description: 'Domina el arte del puntillismo.', link: '../HTML/puntillismo.html' },
    { title: 'Pixel Art', description: 'Aprende a dibujar con Pixeles.', link: '../HTML/tamgram.html' },
    { title: 'Perspectiva', description: 'Domina el arte de dibujar con perspectiva.', link: '../HTML/perspetiva.html' },
    { title: 'Anatomía', description: 'Domina el arte de dibujar cuerpos humanos.', link: '../HTML/anatomia.html' },
    { title: 'Libera tu Creatividad', description: 'Dibuja lo que quieras', link: '../HTML/colorear.html' }
];

export const slides = [
    { id: 's1', image: Uno },
    { id: 's2', image: Dos },
    { id: 's3', image: Tres },
    { id: 's4', image: Cuatro },
    { id: 's5', image: Cinco }
];

export const advantageCards = [
    {
        logo: logo1,
        title: "Expresión personal y creatividad",
        description: "El dibujo es una forma de expresión artística que permite a las personas transmitir sus pensamientos, sentimientos y experiencias de manera visual."
    },
    {
        logo: logo2,
        title: "Alivio del estrés y mejora del bienestar emocional",
        description: "Dibujar puede servir como una forma de escape, permitiendo a las personas desconectarse del estrés diario y enfocarse en la creación artística."
    },
    {
        logo: logo3,
        title: "Estimulación cognitiva",
        description: "Dibujar implica la coordinación entre la mano y el ojo, lo que ayuda a desarrollar y mejorar habilidades motoras finas, fomentando la concentración y la percepción visual."
    }
];

export const offerCards = [
    {
        number: number1,
        title: "Lecciones Accesibles:",
        description: "La plataforma ofrece una biblioteca de lecciones en video que cubren una amplia gama de técnicas y conceptos de dibujo. Están diseñadas para facilitar el aprendizaje de los estudiantes de manera flexible y adaptada a sus necesidades.",
        image: image1
    },
    {
        number: number2,
        title: "Ejercicios Prácticos:",
        description: "Actividades y proyectos diseñados para poner en práctica lo aprendido en las lecciones. Estos ejercicios pueden incluir instrucciones detalladas y ejemplos para que los estudiantes sigan y aprendan más a fondo.",
        image: image2
    },
    {
        number: number3,
        title: "Materiales Didácticos Descargables:",
        description: "Guías paso a paso, hojas de trabajo, plantillas y referencias visuales que los estudiantes pueden descargar e imprimir para complementar las lecciones en video.",
        image: image3
    }
];

export const futureImplementations = [
    {
        title: "Inicio de Sesión con Google",
        description: "En Draw This planteamos la posibilidad de que los usuarios puedan iniciar en Draw This con su cuenta de Google, es decir, su gmail o Correo Electrónico."
    },
    {
        title: "Sección de Preguntas",
        description: "Cualquier duda posible que tenga el usuario pensamos resolverla por medio de preguntas frecuentes que tenga la página de Draw This. Estas preguntas serán preescritas y <b>no será posible</b> que los usuarios la pongan por ellos mismos."
    },
    {
        title: "Ajustes",
        description: "Se desea una sección en donde se implementen ajustes a la página, esto con el objetivo de tener más versatilidad en Draw This, un ejemplo es agregar el Modo Oscuro."
    }
];