const { MethodType, createServer } = require("the-fake-backend");

const server = createServer();

server.routes([
  {
    path: "/api/items",
    methods: [
      {
        type: MethodType.GET,
        data: {
          autor: {
            name: "Erick",
            lastname: "Silva",
          },
          categories: [
            {
              id: "MLA1051",
              name: "Celulares y Teléfonos",
            },
          ],
          items: [
            {
              id: "MLA1127715651",
              title: "Apple iPhone 12 (128 Gb) - Azul",
              price: {
                currency: "BRL",
                amount: 8781,
                decimals: 58,
              },
              picture:
                "http://http2.mlstatic.com/D_839818-MLA45719894955_042021-I.jpg",
              condition: "new",
              free_shipping: true,
            },
            {
              id: "MLA1127715651",
              title: "Apple iPhone 12 (128 Gb) - Azul",
              price: {
                currency: "BRL",
                amount: 8781,
                decimals: 58,
              },
              picture:
                "http://http2.mlstatic.com/D_839818-MLA45719894955_042021-I.jpg",
              condition: "new",
              free_shipping: true,
            },
            {
              id: "MLA1127715651",
              title: "Apple iPhone 12 (128 Gb) - Azul",
              price: {
                currency: "BRL",
                amount: 8781,
                decimals: 58,
              },
              picture:
                "http://http2.mlstatic.com/D_839818-MLA45719894955_042021-I.jpg",
              condition: "new",
              free_shipping: true,
            },
            {
              id: "MLA1127715651",
              title: "Apple iPhone 12 (128 Gb) - Azul",
              price: {
                currency: "BRL",
                amount: 8781,
                decimals: 58,
              },
              picture:
                "http://http2.mlstatic.com/D_839818-MLA45719894955_042021-I.jpg",
              condition: "new",
              free_shipping: true,
            },
            {
              id: "MLA1127715651",
              title: "Apple iPhone 12 (128 Gb) - Azul",
              price: {
                currency: "BRL",
                amount: 8781,
                decimals: 58,
              },
              picture:
                "http://http2.mlstatic.com/D_839818-MLA45719894955_042021-I.jpg",
              condition: "new",
              free_shipping: true,
            },
          ],
        },
      },
    ],
  },
]);

server.listen(8080);
