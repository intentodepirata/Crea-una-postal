# Crea-una-postal

Esto es un ejercicio de clase mientras realizaaba el bootcamp en Releevant situado en el Polo de Contenidos Digitales de Malaga.

Tegnologias usadas:

React con Vite. (utilizamos los Hooks 'useState y useEffect para la conexion a la API)
Mui 5 para la interfaz
Random image API de API-Ninjas!


Documentacion de la API:

Random Image API
The Random Image API generates random images for all your placeholder and design needs. It supports custom sizes as well as custom image categories.

/v1/randomimage
HTTP GET
Returns a random, base64-encoded image in JPEG format.

Parameters
category (optional) - image category. If set, must be one of the following: nature, city, technology, food, still_life, abstract, wildlife.
width (optional) - width of the image to generate. Must be between 1 and 5000. Default value is 640.
height (optional) - height of the image to generate. Must be between 1 and 5000. Default value is 480.
Headers
X-Api-Key (required) - API Key associated with your account.
Accept (required) - header indicating the content type to accept in the result. Must be set to the following:image/jpg
