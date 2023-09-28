import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        [
            {
                category: "CABAÑA 100",
                id: '100',
                gallery: [
                    {
                        img: '/Images/habitaciones/room1/_DSC9730.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9734.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9732.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                ],
                description: "Disfruta de la comodidad de nuestras habitaciones en la Cabaña 100. Todas nuestras habitaciones, incluyendo la Habitación 101 y las Habitaciones 102-103-104-105, están equipadas con una cama doble, TV con Directv, aire acondicionado, baño privado y un closet. Algunas habitaciones adicionales también tienen camas sencillas para mayor capacidad.",
                rooms: [
                    {
                        id: '101',
                        title: "HABITACION 101",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (2)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '102',
                        title: "HABITACION 102-103-104-105",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    }
                ]
            },


            {
                category: "CABAÑA 200",
                id: '200',
                gallery: [
                    {
                        img: '/Images/habitaciones/room1/_DSC9730.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9734.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9732.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                ],
                description: 'En la Cabaña 200, nuestras habitaciones, como la 201, 202 y 203, ofrecen una experiencia de lujo. Cada habitación cuenta con una cama doble, TV con Directv, aire acondicionado, baño privado, closet y minibar para tu comodidad.',
                rooms: [
                    {
                        id: '201',
                        title: "HABITACION 201",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet",
                            "Minibar"
                        ]
                    },
                    {
                        id: '202',
                        title: "HABITACION 202",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet",
                            "Minibar"
                        ]
                    },
                    {
                        id: '203',
                        title: "HABITACION 203",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet",
                            "Minibar"
                        ]
                    },
                    {
                        id: '204',
                        title: "HABITACION 204",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet",
                            "Minibar"
                        ]
                    }
                ]
            },

            {
                category: "CABAÑA 300",
                gallery: [
                    {
                        img: '/Images/habitaciones/room1/_DSC9730.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9734.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9732.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                ],
                description: 'Para grupos más grandes, la Cabaña 300 es perfecta. Las habitaciones como la 301, 302, 303, 304 y 305 ofrecen una variedad de configuraciones de camas, desde una cama doble y tres camas sencillas hasta dos camas dobles y una cama sencilla. Todas incluyen TV con Directv, aire acondicionado, baño privado y closet.',
                id: '300',
                rooms: [
                    {
                        id: '301',
                        title: "HABITACION 301",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (3)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado",
                            "Closet"
                        ]
                    },
                    {
                        id: '302',
                        title: "HABITACION 302",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Camas Dobles (2)",
                            "Camas Sencillas (2)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '303',
                        title: "HABITACION 303",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (3)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '304',
                        title: "HABITACION 304",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Camas Dobles (2)",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '305',
                        title: "HABITACION 305",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '306',
                        title: "HABITACION 306",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '307',
                        title: "HABITACION 307",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado",
                            "Closet"
                        ]
                    },
                    {
                        id: '308',
                        title: "HABITACION 308",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '309',
                        title: "HABITACION 309",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '310',
                        title: "HABITACION 310",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado",
                            "Closet",
                            "Minibar"
                        ]
                    }
                ]
            },

            {
                category: "CABAÑA 400",
                gallery: [
                    {
                        img: '/Images/habitaciones/room1/_DSC9730.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9734.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9732.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                ],
                description: 'En la Cabaña 400, nuestras habitaciones, como la 401, 402, 403 y 404, ofrecen una experiencia acogedora. Cada habitación cuenta con una cama doble, TV con Directv, baño privado y closet. Algunas habitaciones también tienen aire acondicionado para tu comodidad.',
                id: '400',
                rooms: [
                    {
                        id: '401',
                        title: "HABITACION 401",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '402',
                        title: "HABITACION 402",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '403',
                        title: "HABITACION 403",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '404',
                        title: "HABITACION 404",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    }
                ]
            },
            {
                category: "CABAÑA 500",
                gallery: [
                    {
                        img: '/Images/habitaciones/room1/_DSC9730.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9734.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                    {
                        img: '/Images/habitaciones/room1/_DSC9732.jpg',
                        alt: 'imagen por defecto para las habitaciones'
                    },
                ],
                description: 'En la Cabaña 500, nuestras habitaciones, como la 500, 501, 502 y muchas más, están diseñadas para tu confort. Cada habitación incluye una cama doble, TV con Directv, aire acondicionado, baño privado y closet. Algunas habitaciones tienen camas sencillas adicionales para mayor capacidad.',
                id: '500',
                rooms: [
                    {
                        id: '501',
                        title: "HABITACION 501",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado",
                            "Closet"
                        ]
                    },
                    {
                        id: '502',
                        title: "HABITACION 502",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado"
                        ]
                    },
                    {
                        id: '503',
                        title: "HABITACION 503",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado"
                        ]
                    },
                    {
                        id: '504',
                        title: "HABITACION 504",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado"
                        ]
                    },
                    {
                        id: '505',
                        title: "HABITACION 505",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado"
                        ]
                    },
                    {
                        id: '506',
                        title: "HABITACION 506",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Aire Acondicionado",
                            "Baño Privado"
                        ]
                    },
                    {
                        id: '507',
                        title: "HABITACION 507",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '508',
                        title: "HABITACION 508",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '509',
                        title: "HABITACION 509",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '510',
                        title: "HABITACION 510",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '511',
                        title: "HABITACION 511",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '512',
                        title: "HABITACION 512",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '513',
                        title: "HABITACION 513",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '514',
                        title: "HABITACION 514",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (2)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '515',
                        title: "HABITACION 515",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Cama Doble",
                            "Camas Sencillas (1)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '516',
                        title: "HABITACION 516",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Camas Dobles (2)",
                            "Camas Sencillas (3)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '517',
                        title: "HABITACION 517",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Camas Dobles (4)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    },
                    {
                        id: '518',
                        title: "HABITACION 518",
                        gallery: [
                            {
                                img: '/Images/habitaciones/room1/_DSC9730.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9734.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                            {
                                img: '/Images/habitaciones/room1/_DSC9732.jpg',
                                alt: 'imagen por defecto para las habitaciones'
                            },
                         ],
                        items: [
                            "Camas Dobles (2)",
                            "Camas Sencillas (2)",
                            "TV",
                            "Directv",
                            "Baño Privado",
                            "Aire Acondicionado"
                        ]
                    }
                ]
            }

        ]
    );
}