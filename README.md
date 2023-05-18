# 1-Suculentas
Este es el archivo README del portafolio del proyecto Suculentas para optar a la insignia de Talento Digital.

## Introducción
Suculentas Online es una página web dedicada a la compra y venta de suculentas. Proporciona un catálogo en línea donde los usuarios pueden explorar una variedad de suculentas disponibles para la compra. El proyecto se ha desarrollado utilizando el framework Vue, junto con tecnologías como Vue Router, Vuex, Bootstrap y Firebase.

## Requerimientos del usuario
Los usuarios desean explorar y comprar suculentas de manera fácil y conveniente.
El administrador del sitio desea tener acceso a una interfaz de administración para gestionar el catálogo de suculentas.

## Requerimientos del sistema
El sistema debe proporcionar un catálogo de suculentas que muestre información detallada sobre cada producto.
Debe haber una interfaz de administración protegida para que el administrador pueda agregar, editar y eliminar suculentas del catálogo.<br/>
La autenticación de usuarios debe ser segura y solo permitir el acceso del administrador a la interfaz de administración.<br/>
El sistema debe integrar una API externa para mostrar información adicional sobre otras plantas.
Se requiere un carrito de compras funcional que permita a los usuarios agregar productos y recibir un correo con el detalle de su compra.<br/>
La navegación en el sitio debe ser intuitiva y adaptable a diferentes dispositivos y tamaños de pantalla.
Se desea que los usuarios puedan contactar al vendedor a través de WhatsApp para consultas adicionales.

## 1-Experiencia de uso 
La aplicación ofrece a los usuarios una experiencia de compra atractiva y sencilla. Pueden explorar el catálogo de suculentas, ver información detallada sobre cada producto y agregarlos al carrito de compras. El diseño responsivo del sitio garantiza una experiencia óptima en diferentes dispositivos. Además, el administrador tiene acceso a una interfaz de administración protegida donde puede gestionar el catálogo de suculentas de manera fácil y eficiente. 

## 2-Completitud del entregable
El entregable final de Suculentas cumple con todas las funcionalidades descritas en los requerimientos del sistema. Estos son los módulos principales que se han desarrollado: HomePage/Catalogo online/Login y logout/Mantenedor/Carrito de compras. Adicional a esto se ha implementado la funcionalidad de enviar un correo electrónico al usuario con los detalles de su compra. 

## 3-Utilización de tags html
En todos los componentes, se ha seguido el estándar HTML5 utilizando etiquetas semánticas apropiadas, como nav/div/ul/li etc.
![componente:NavBar.vue](src/assets/img/3.png) <br/>
[src/components/NavBar.vue](src/components/NavBar.vue)-- Líneas 3/14 --

## 4-Responsividad
El proyecto es completamente responsivo, adaptándose a diferentes tamaños de pantalla. Se han utilizado media queries y la responsividad de bootstrap para garantizar  una visualización y diseño adecuado para diferentes dispositivos.<br/>
![componente:NavBar.vue](src/assets/img/4.png) <br/>
[src/components/NavBar.vue](src/components/NavBar.vue)-- Líneas 240/243--

## 5-Utilización de un framework de css
Se ha utilizado Bootstrap en la gran mayoría del proyecto, aprovechando sus componentes y estilos predefinidos. Esto ha permitido agilizar el desarrollo y mantener una apariencia visual coherente en todo el proyecto, asegurando una interfaz atractiva y fácil de navegar para los usuarios.
![vista:PlantasView.vue](src/assets/img/5.png) <br/>
[src/views/PlantasView.vue](src/views/PlantasView.vue)-- Líneas 29/36 --

## 6-Código mantenible mediante componentes
El proyecto se ha desarrollado utilizando una estructura basada en componentes en Vue CLI, lo que ha permitido mantener un código mantenible y organizado. Además, al ser una aplicación de una sola página (SPA), los usuarios disfrutan de una experiencia de usuario fluida al navegar por las distintas secciones del proyecto.
![vista:PlantasView.vue](src/assets/img/6.png) <br/>
[src/views/PlantasView.vue](src/views/PlantasView.vue)-- Líneas 70/73 --

## 7-Utilización de los métodos del ciclo de vida de un componente
Se ha utilizado el ciclo de vida mounted en varios componentes del proyecto.
![vista:LoginView.vue](src/assets/img/7.png) <br/>
[src/views/LoginView.vue](src/views/LoginView.vue)-- Líneas 73/85 --

## 9-Utilizacion de buenas practicas en la definicion de rutas
Nombres descriptivos para las rutas. 
![router:index.js](src/assets/img/9a.png)<br/>
[src/router/index.js](src/router/index.js) --Líneas 18/25--<br/>
Parametro por URL  
![router:index.js](src/assets/img/9b.png)<br/>
[src/router/index.js](src/router/index.js) --Líneas 28/31--<br/>

## 10- Utilizacion de sintaxis basica JavaScript
Utilización de declaración de variables y métodos de formateo en javascript.
![componente:SucculentsApi.vue](src/assets/img/10.png)<br/>
[src/components/SucculentsApi.vue](src/components/SucculentsApi.vue) --Líneas 35/46--<br/>

## 11- Utilizacion de Javascript es6/7 para resolver un problema
Se utiliza es6 en el proyecto en la gran mayoría de los componentes.
![vista:PlantasView.vue](src/assets/img/11.png) <br/>
[src/views/PlantasView.vue](src/views/PlantasView.vue)-- Líneas 117/131 --

## 12- Consumo API
Se utiliza el consumo de una API que proporciona información sobre otras plantas
![componente:SucculentsApi.vue](src/assets/img/12.png)<br/>
[src/components/SucculentsApi.vue](src/components/SucculentsApi.vue) --Líneas 47/53--<br/>

## 13-Estados internos de los componentes web
Utilización de estado de objeto data dentro del componente(error)
![vista:LoginView.vue](src/assets/img/13.png) <br/>
[src/views/LoginView.vue](src/views/LoginView.vue)-- Líneas 29/39 --

## 14- Maneja el estado de la aplicación con Vuex
Manejo de estados del CRUD por medio de estructura de Vuex action
![router:index.js](src/assets/img/14.png)<br/>
[src/router/index.js](src/router/index.js) --Líneas 120/134--<br/>