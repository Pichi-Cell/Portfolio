---
title: "Construyendo un pequeño pipeline de telemetría"
description: "Una mirada práctica a los límites entre sensores, mensajes, almacenamiento y la interfaz que convierte los datos industriales en información útil."
pubDate: 2026-09-10
lang: es
translationKey: telemetry-pipeline
slug: construyendo-un-pequeno-pipeline-de-telemetria
tags:
  - Sistemas embebidos
  - MQTT
  - TypeScript
draft: false
---

La telemetría industrial comienza con una pregunta aparentemente sencilla: **¿qué ocurrió y cuándo?** La respuesta solo se vuelve útil cuando cada capa conserva el contexto suficiente para la siguiente.

## Empezar con un evento claro

Una lectura de sensor debería contener algo más que un número. Un evento compacto podría verse así:

```ts
type TelemetryEvent = {
  deviceId: string;
  metric: string;
  value: number;
  unit: string;
  recordedAt: string;
};
```

Esta estructura mantiene los datos portables. El dispositivo de borde puede publicarlos por MQTT, un worker puede validarlos y la base de datos puede almacenarlos sin conocer nada de la pantalla que finalmente los mostrará.

## Mantener simples los límites

La decisión de diseño más valiosa suele ser la menos emocionante: hacer explícito cada límite. Validá los mensajes al ingresar, usá nombres de tópicos estables y mantené la persistencia separada de la presentación. Cuando un compresor cambia su firmware, el dashboard no debería tener que cambiar con él.

Esa separación también hace que el sistema sea más fácil de probar. Un fixture puede representar un mensaje real, mientras que las pruebas de la aplicación pueden concentrarse en cómo se agrupa y presenta ese mensaje.

## Un sistema pequeño también puede ser cuidadoso

La buena telemetría no consiste en recolectarlo todo. Consiste en recolectar las señales correctas con el contexto suficiente para tomar una decisión después. Empezá con una métrica, un dispositivo y una pregunta útil. La siguiente pregunta te va a indicar cuál es la próxima pieza del sistema.
