# ***Front End***

<br>

## **Issues**

<br>

> ### #1 - Implementación template general responsive
> ---
>    - **Header:**
>
>        1. Creación de un header al 100% de la pantalla y de posición fija al tope de la página que, se verá en todas las pantallas de la aplicación, siguiendo el modelo de referencia.
>        2. Dentro del header armar un bloque alineado a la izquierda que incluya el logotipo y el lema de la empresa. Ambos deben ser clickeables por las personas usuarias y dirigir a la Home del sitio.
>        3. Dentro del header armar un bloque alineado a la derecha que contenga (según el caso) un botón de inicio de sesión y/o un botón de registro en el caso de que el usuario no esté logueado y de caso contrario mostrar el nombre de usuario, un avatar de letras con las iniciales del nombre de usuario y un link de cierre de sesión.
>
>    - **Body:** Representar un body general con el color de background elegido que ocupe el 100% del alto de la pantalla.
>
>    - **Footer:**
>
>        1. Creación de un footer al 100% del ancho de la pantalla y al pie de la misma que, se verá en todas las pantallas de la aplicación, siguiendo el modelo de referencia.
>        2. Dentro del footer armar un bloque alineado a la izquierda que incluya el isologotipo, el año y el copyright.
>        3. Dentro del footer armar un bloque alineado a la derecha que incluya íconos de redes sociales. Los íconos no necesitan ser vinculados a ninguna página.


> ### #2 - Implementación template Login y registro
> ---
>    - **Bloque general:** Creación de un bloque que se muestre a pantalla completa sin scroll, dejando visible en la parte superior de la pantalla sólo el header y el bloque de búsqueda. Que pueda contener en su centro un formulario. Además debe incluir en su extremo superior derecho un ícono para cerrar el bloque.
>
>    - **Login:** Creación de un formulario de inicio de sesión que contenga los siguientes inputs y labels:
>
>       - Email (de type=”email”)
>       - Password (de type=”Password”)
>       - Además debe tener un botón que debe decir "Iniciar sesión".
>       - Debajo del botón debe haber un texto que redireccione al registro.
>
>   - **Registro:** Creación de un formulario de registro que contenga los siguientes inputs:
>
> # Según GitLab
>       - Nombre (de type=”text”)
>       - Apellido (de type=”text”)
>       - Email (de type=”email”)
>       - Repetir email (de type=”email”) 
>       - Password (de type=”password”)
>       - Además debe tener un botón que debe decir "Registro".
> # Según PlayGround
>       - Nombre (de type=”text”)
>       - Apellido (de type=”text”)
>       - Email (de type=”email”)
>       - Password (de type=”password”)
>       - Repetir Password (de type=”password”)
>       - Además debe tener un botón que debe decir "Crear Cuenta / Registro".
> ---
>       - Debajo del botón debe haber un texto que redireccione al login.
>


> ### #3 - Implementación template bloque categorías
> ---
>    - **Categorías:** Creación de un bloque que incluya un heading < h2 / > cómo título, un párrafo < p / > y debajo 4 imágenes con sus correspondientes captions. Deben respetarse los efectos visuales tales como bordes, sombras, etc.


> ### #4 - Implementación template bloque listado
> ---
>   - Cards: 
>       1. **Card:** Creación de una card en la que se representará cada producto.
>       2. **Card:** Dentro de la card incluir un bloque alineado a la izquierda que incluya una imagen centrada.
>       3. **Card:** Dentro de la card incluir un bloque alineado a la derecha que incluya la categoría del producto, el nombre, ubicación, la descripción. Y un botón que diga "Ver detalle".
>
>   - Listas:
>       1. **Lista:** Crear un JSON con un array que contenga 8 elementos. Estos serán objetos con los siguientes atributos:
>           - **img:** (string) que contenga una dirección a una imagen de banco de fotos.
>           - **category:** (string) con una de las 4 categorías brindadas por backend deben ser incluídas al menos 2 veces cada categoría en el Json.
>           - **title:** (string) Título del producto a elegir.
>           - **Location:** (string) Ciudad.
>           - **Description:** (string) Ver catipsum.com.
>       2. **Lista:** Crear una función map que permita iterar el JSON y representar 8 cards. Una por cada objeto del JSON.
>       3. **Lista:** Retornar la función en un bloque debajo del bloque de categorías.


> ### #5 - Implementación template bloque buscador
> ---
>
> # Según GitLab
>   - **Buscador 1:** Creación de un bloque que incluya un heading < h1 / > cómo título, un párrafo < p / >.
>
> # Según PlayGorund
>   - **Buscador 1:** Creación de un bloque que incluya un heading < h1 / > cómo título.
> ---
>   - **Buscador 2:** Creación de un formulario que incluya:
>       - Select: Ciudad
>       - Fecha de inicia y fin: Doble calendar
>       - Botón


> ### #6 - Evento de Header
> ---
>
> # Según PlayGorund
> En el caso de mobile estos botones serán accesibles cuando el usuario haga click en el burguer.
>
>   - **Clic Botón de ir a Login:** Deberá mostrarse el header, el buscador y el bloque de login en la pantalla.
>   - **Clic Botón de ir a Registro:** Deberá mostrarse el header, el buscador y el bloque de registro en la pantalla.


> ### #7 - Evento de login de usuario
> ---
>   - **Validaciones en inputs:** El formulario debe validar que el campo de email sea un email válido y que la password tenga más de 6 caracteres.
>   - **Botón:** Al dar click que funcione la validación de ser correcta que compare los datos con un email y una password de prueba creadas en un objeto.
>   - **Credenciales inválidas:** El formulario indique “Por favor, vuelva a intentarlo sus credenciales son inválidas”.
>   - **Credenciales válidas:** Se simulará que el usuario está logueado desaparecerá el formulario de login volveremos a la Home inicial pero en el header a la derecha, en vez de ver los botones de inicio de sesión y registro veremos: Hola [ nombre_de_usuario ], un link de cerrar sesión y un avatar circular con las iniciales del usuario.
