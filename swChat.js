self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (e) => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener("message", async (e) => {

    const clientes = await self.clients.matchAll({
        type: "window"
    });

    clientes.forEach(cliente => {
        cliente.postMessage(e.data);
    });
});
