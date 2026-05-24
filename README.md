# Chat entre pestañas con Service Workers

**Proyecto desarrollado con JavaScript puro que permite la comunicación de mensajes entre múltiples pestañas del navegador utilizando Service Workers y la API `postMessage()`.
El proyecto simula el comportamiento de un chat en tiempo real dentro del mismo navegador, permitiendo que diferentes pestañas abiertas del sitio intercambien mensajes instantáneamente sin necesidad de un servidor, WebSockets o bases de datos externas.**

![Chat](https://github.com/davidquinterooo/Chat-service-worker/blob/80942a0e7e742bc2367bf7ad58a5a916d8de31bc/Captura%20de%20pantalla%202026-05-24%20155025.png)

## Características

- Comunicación entre pestañas del navegador.
- Uso de Service Workers.
- Envío y recepción de mensajes con `postMessage()`.
- Generación de identificadores únicos con `crypto.randomUUID()`.
- Interfaz simple y minimalista.
- Cambio entre modo claro y oscuro.
- Scroll automático al recibir mensajes.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Service Workers API

## Funcionamiento

1. Cada pestaña genera un identificador único.
2. El usuario escribe un mensaje y lo envía.
3. El mensaje se envía al Service Worker mediante `postMessage()`.
4. El Service Worker obtiene todas las pestañas abiertas del sitio usando `clients.matchAll()`.
5. El mensaje se reenvía a todas las pestañas activas.
6. Cada pestaña muestra el mensaje recibido en pantalla.

## Importante

Este proyecto NO es un chat online real.

La comunicación ocurre únicamente entre pestañas abiertas del mismo navegador y del mismo sitio web. No utiliza:
- servidores,
- WebSockets,
- bases de datos,
- Firebase,
- ni conexión entre diferentes dispositivos.

El objetivo del proyecto es practicar el funcionamiento de:
- Service Workers,
- comunicación entre contextos,
  
- manipulación del DOM,
- y eventos en JavaScript.
