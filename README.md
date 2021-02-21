# Prueba Fronted Developer

### Link de acceso

https://react-testing-project-5c0b1.web.app/

### Documentación solicitada

Utilice ReactJS, además de axios para consumir datos del api, firebase hosting para 
subir el build de la app. También implementé una librería para hacer el inicio de sesión con Google, guardando en LocalStorage el objeto del usuario para saber el estado de autenticación.


##### Las librerías usadas son las siguientes:

- react-router-dom: que se utiliza para establecer rutas en la aplicación, que pueden ser públicas o privadas.

- axios: para consumir el api, utilizando lo básico de axios.

- react-google-login: se usó para hacer Login y Logout de Google.

- styled-components: se utilizó para los estilos de cada componente. Personalmente también me gusta esta librería porque puedo utilizar CSS directo. 

- react-modal: para facilitar y agilizar el proceso de creación del modal que se utiliza para crear un nuevo post.


##### El proyecto está estructurado de la siguiente manera:

Carpeta src:

- components: contiene las carpetas de cada componente que se puede utilizar en la app. Cada una de las carpetas contiene el archivo del componente y un styles.js para mantener los estilos separados.

- api: contiene el archivo api.js en donde se hacen los llamados el endpoint de la api.

- routes: donde se definen los componentes que se van a usar en las rutas.

Decidí crear la estructura de las carpetas y los archivos en minúsculas porque personalmente pienso que se puede leer de mejor forma, y disminuye los errores al momento de importar los archivos, sin dejar de lado que es considerado una buena práctica el uso de PascalCase, y que es obligatorio al momento de nombrar un componente.
