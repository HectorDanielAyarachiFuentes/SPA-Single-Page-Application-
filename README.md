# Single Page Application (SPA)

Una **Single Page Application (SPA)** es una aplicación web que se carga como una sola página en el navegador del usuario y, en lugar de recargar la página completa cada vez que el usuario navega a una nueva vista o realiza una acción, solo actualiza la parte de la página que cambia. Esto se logra a través de tecnologías como JavaScript y AJAX, que permiten cargar y renderizar contenido dinámicamente sin requerir una solicitud completa al servidor web.

![Ejemplo de SPA](https://github.com/HectorDanielAyarachiFuentes/SPA-Single-Page-Application-/blob/main/Fotos%20Readme/Opera%20Instant%C3%A1nea_2023-10-04_100443_hectordanielayarachifuentes.github.io.png?raw=true)

En una SPA, la mayoría de las interacciones del usuario se gestionan dentro del navegador, lo que proporciona una experiencia más fluida y rápida, similar a una aplicación de escritorio. Las SPAs son populares en aplicaciones web modernas, como aplicaciones de correo electrónico, redes sociales y herramientas de productividad, debido a su capacidad para ofrecer una experiencia de usuario más interactiva y receptiva.

## Ejemplo de SPA

![Ejemplo de SPA](https://github.com/HectorDanielAyarachiFuentes/SPA-Single-Page-Application-/blob/main/Fotos%20Readme/mobile.gif?raw=true)

En este ejemplo, puedes notar que cuando el usuario navega por diferentes secciones de la aplicación, como "Aviones", "Barcos" y "Armas", la página no se recarga por completo. En su lugar, solo se actualiza el contenido relevante en la pantalla, lo que proporciona una experiencia de usuario más suave y rápida.

## Uso de JSON para Datos Variables

Una característica común en las SPAs es el uso de archivos JSON para almacenar y recuperar datos variables. Esto permite que la aplicación cargue datos de manera eficiente sin requerir solicitudes al servidor para cada acción del usuario. Aquí hay un ejemplo en formato .md de cómo se puede utilizar un archivo JSON en una SPA:

Supongamos que estamos desarrollando una aplicación de lista de tareas. Podemos utilizar un archivo JSON llamado `tasks.json` para almacenar la lista de tareas:

```json
[
  {
    "id": 1,
    "task": "Comprar víveres",
    "completed": false
  },
  {
    "id": 2,
    "task": "Hacer ejercicio",
    "completed": true
  },
  {
    "id": 3,
    "task": "Llamar a mamá",
    "completed": false
  }
]
