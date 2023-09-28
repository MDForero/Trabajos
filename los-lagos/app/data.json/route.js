import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            id: 'piscina',
            title: 'Piscina al aire libre',
            subtitle:'Diversión acuática para toda la familia.',
            items: ['Abierta todo el año',
                'Piscina con vistas',
                'Parque acuático para niños (tobogán)',
                'Tobogán para adultos ',
                'Jacuzzi',
                'Zona poco profunda',
                'Sillas de playa',
                'Valla alrededor de la piscina',],
            description: 'Disfruta de nuestra piscina al aire libre durante todo el año. Con impresionantes vistas y un parque acuático para niños que incluye un emocionante tobogán, así como un tobogán para adultos, seguro encontrarás diversión para toda la familia. Relájate en el jacuzzi, o si prefieres una zona poco profunda, también la tenemos. Nuestras cómodas sillas de playa y una valla alrededor de la piscina garantizan tu comodidad y seguridad.',
            gallery: [
                {
                    img: '/Images/piscina1.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina2.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina4.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'juegos',
            title: 'Zona de juegos',
            subtitle:'Entretenimiento para todas las edades.',
            items: ['Mesa de ping pong ',
                'Mesa de billar pool',
                'Mesa de billar',
                'Rana electrónica',
                'Cancha de mini tejo',
                'Cancha de futbol ',
                'Mesa de futbolito',],
            description: 'Nuestra zona de juegos es perfecta para los amantes de la diversión. Puedes desafiarte en una partida de ping pong o billar pool, disfrutar de una partida de rana electrónica, probar tus habilidades en la cancha de mini tejo o en la cancha de fútbol, o simplemente relajarte con una partida de futbolito. Tenemos opciones para todos los gustos.',
            gallery: [
                {
                    img: '/Images/juegos1.jpg',
                    alt: 'zona de juegos'
                },
                {
                    img: '/Images/juegos2.jpg',
                    alt: 'zona de juegos'
                },
                {
                    img: '/Images/juegos1.jpg',
                    alt: 'zona de juegos'
                },
                {
                    img: '/Images/juegos2.jpg',
                    alt: 'zona de juegos'
                },


            ]
        },
        {
            id: 'descanso',
            title: "ZONA DE DESCANSO",
            subtitle:'Relajación y tranquilidad bajo el sol.',
            items: [
                'Hamacas ',
                'Sillas de playa',
                'Zona de camping',
                'Zona de picnic',
                'Zona de fogata',
                'Zona de asados',
            ],
            description: 'Relájate y disfruta del sol en nuestras cómodas hamacas, el lugar perfecto para desconectar y recargar energías.',
            gallery: [
                {
                    img: '/Images/piscina1.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina2.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina4.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'bar',
            title: 'SERVICIO DE BAR 24 HORAS',
            subtitle:'Bebidas y snacks disponibles en todo momento.',
            items: ['Bebidas alcohólicas ',
                'Gaseosa',
                'Jugos',
                'Helados',
                'Snap ',],
            description: 'Nuestro bar está abierto las 24 horas y ofrece una amplia variedad de bebidas, desde bebidas alcohólicas hasta refrescantes gaseosas y jugos. También tenemos una selección de helados y opciones de snacks para saciar tus antojos en cualquier momento. ¡No te pierdas nuestro exclusivo cóctel "Snap"!',
            gallery: [
                {
                    img: '/Images/bar1.jpg',
                    alt: 'bar'
                },
                {
                    img: '/Images/bar2.jpg',
                    alt: 'bar'
                },
                {
                    img: '/Images/bar3.jpg',
                    alt: 'bar'
                },
                {
                    img: '/Images/bar4.jpg',
                    alt: 'bar'
                },
                {
                    img: '/Images/bar5.jpg',
                    alt: 'bar'
                },
            ]
        },
        {
            id: 'BBQ',
            title: 'ZONA DE BBQ',
            subtitle:'Disfruta de la parrilla de manera ecoamigable.',
            items: ['Zona libré de plástico, icopor y desechables.Sólo se permite el uso de platos, vasos y utensilios biodegradables o menaje traído por el grupo(no vidrio).',],
            description: 'En nuestra zona de BBQ, promovemos la sostenibilidad. Solo se permite el uso de platos, vasos y utensilios biodegradables o menaje traído por el grupo (no vidrio). Disfruta de una experiencia al aire libre mientras cuidamos el medio ambiente.',
            gallery: [
                {
                    img: '/Images/piscina1.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina2.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina4.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'restaurante',
            title: 'RESTAURANTE',
            subtitle:'SSabores para todos los gustos.',
            items: [
                'Desayuno',
                'Almuerzo',
                'Cena',
                'Comida a la carta',
                'Comida para niños',
                'Menú para dietas especiales (bajo petición)',
                'Snack-bar',
            ],
            description: 'Nuestro restaurante ofrece una deliciosa selección de platos para satisfacer todos los paladares. Desde sabores locales hasta opciones internacionales, tenemos algo para todos los gustos. Nuestro equipo de chefs te sorprenderá con su creatividad culinaria.',
            gallery: [
                {
                    img: '/Images/piscina1.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina2.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina4.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'empresarial',
            title: 'ALQUILER ZONAS COORPORATIVAS(FECAS ESPECIALES)',
            subtitle:'Espacios versátiles para tus eventos.',
            items: ['Capacitaciones',
                'Ley 50',
                'Dia del trabajador ',
                'Dia de la familia ',
                'Amor y amistad ',
                'Cumpleaños ',],
                description: '¿Necesitas un espacio para tus eventos corporativos o celebraciones especiales? Tenemos la solución. Ofrecemos alquiler de espacios para capacitaciones, eventos relacionados con la Ley 50, días del trabajador, días de la familia, celebraciones de amor y amistad, cumpleaños y más. Nuestro equipo de profesionales te ayudará a organizar tu evento y a hacer que sea un éxito.',
            gallery: [
                {
                    img: '/Images/piscina1.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina2.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina4.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'eventos',
            title: 'SALON DE EVENTOS',
            subtitle:'Celebraciones inolvidables en un entorno elegante.',
            items: ['Quince años ',
                'Matrimonios ',
                'Grados',
                'Fiestas fin de año',],
            description: 'Celebra momentos importantes en nuestro salón de eventos. Ya sea para quinceañeras, bodas, graduaciones o fiestas de fin de año, nuestro salón ofrece un ambiente elegante y versátil para hacer que tu evento sea inolvidable.',
            gallery: [
                {
                    img: '/Images/eventos1.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos2.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos3.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos4.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos5.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos6.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos7.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos8.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos9.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos10.jpg',
                    alt: 'eventos'
                },
            ]
        },
        {
            id: 'capilla',
            title: 'CAPILLA',
            subtitle:'Un lugar para la espiritualidad.',
            items: ['Bautizos',
                'Misas especiales',
                'Matrimonios',],
                description:'Nuestra capilla está a tu disposición. Puedes realizar bautizos y misas especiales para que puedas celebrar tus momentos con tranquilidad y serenidad.',
            gallery: [
                {
                    img: '/Images/capilla1.jpg',
                    alt: 'capilla'
                },
                {
                    img: '/Images/capilla2.jpg',
                    alt: 'capilla'
                },
                {
                    img: '/Images/capilla1.jpg',
                    alt: 'capilla'
                },
                {
                    img: '/Images/capilla2.jpg',
                    alt: 'capilla'
                },
            ]
        }

    ]);
}









