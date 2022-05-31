import { MethodType, createServer } from "the-fake-backend";

const server = createServer({
  proxies: [
    {
      name: "Meli BFF",
      host: "http://localhost:8000",
    },
  ],
  throttlings: [
    { name: "Fast", values: [0, 500] as [number, number] },
    { name: "Medium", values: [500, 1500] as [number, number] },
    { name: "Slow", values: [1500, 3000] as [number, number] },
    { name: "Slowest", values: [3000, 6000] as [number, number] },
  ],
});

server.routes([
  {
    path: "/api/items",
    methods: [
      {
        type: MethodType.GET,
        file: "data/meli-bff/items/index.json",
      },
    ],
  },
  {
    path: "/api/items/:id",
    methods: [
      {
        type: MethodType.GET,
        file: "data/meli-bff/items/:id/index.json",
      },
    ],
  },
]);

server.listen(8080);
