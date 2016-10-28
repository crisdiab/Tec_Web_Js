# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/JS.jpg" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-21`
### Estudiante : `Cristian Raul Lara Balarezo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Indice de contenidos


- <a href="#tema">Introduccion a la WEB</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
    * <a href="#defhtml">Definicion HTML</a>
    * <a href="#defcodhttp">Definicion Codigo HTTP</a>
    * <a href="#defmethttp">Definicion Metodos HTTP</a>
    * <a href="#defw3">Definicion W3Schools</a>
    * <a href="#defcss">Definicion CSS</a>
    * <a href="#defnavegadores">Definicion Navegadores</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 


<a name="tema"></a>

##INTRODUCCION A LA WEB

<a name="objetivos"></a>
## Objetivos
-Aprender acerca de la WEB todos sus elementos.
-Usar tutoriales como W3C School para practicar.
-Conocer la estructura de un sitio WEB y la relacion con CSS.
-Usar herramientas de desarrollador como Ispeccionar
-Conocer los diferentes Tags para html

<a name = "marco-teorico"></a>
##Marco Teorico 

##Definiciones
<a name = "defhtml"></a>
###HTML
<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/http.jpg" width="300" height="200">
</p>
HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. Es un estándar a cargo del World Wide Web Consortium (W3C) o Consorcio WWW, organización dedicada a la estandarización de casi todas las tecnologías ligadas a la web, sobre todo en lo referente a su escritura e interpretación. Se considera el lenguaje web más importante siendo su invención crucial en la aparición, desarrollo y expansión de la World Wide Web (WWW). Es el estándar que se ha impuesto en la visualización de páginas web y es el que todos los navegadores actuales han adoptado.
<a name = "defcodhttp"></a>
###Codigos HTTP
Los métodos HTTP son frases estándares destinadas a dar una descripción intutiva del estatus. Los códigos de estatus están especificados por el RFC 2616 , y algunos fragmentos en los estándares RFC 2518 , RFC 2817 , RFC 2295 , RFC 2774  y RFC 4918 ; otros no están estandarizados, pero son comúnmente utilizados.
<a name = "defmethttp"></a>
###Metodos HTTP
Métodos más usados en arquitecturas RESTful

GET
POST
PUT
DELETE
<a name = "defw3"></a>
###W3Schools
<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/w3.jpg?raw=true" width="300" height="200">
</p>

W3Schools está optimizado para el aprendizaje, pruebas y entrenamiento de diferentes lenguajes WEB. Los ejemplos pueden ser simplificadas para mejorar la lectura y la comprensión básica. Tutoriales, referencias y ejemplos son revisados constantemente para evitar errores, pero no se garantiza la corrección completa de todo el contenido.
<a name = "defcss"></a>
###CSS
<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/html_css.png?raw=true" width="300" height="200">
</p>
Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado . Es muy usado para establecer el diseño visual de las páginas web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcetera. También permite aplicar estilos no visuales, como las hojas de estilo auditivas. 
###Navegadores
<a name = "defnavegadores"></a>
Un navegador web es el software o programa que nos permite ver la información que contiene una página web. Traduce el código HTML en el que está escrita la página y lo muestra en la pantalla, permitiéndonos interactuar con su contenido y navegar hacia otras páginas o sitios de la red, mediante enlaces o hipervínculos.
El seguimiento de los enlaces de una página a otra se llama navegación, que es de donde se origina el nombre de navegador web.

##Desarrollo de la practica
<a name="desarrollo"></a>
###Metodos HTTP
####¿Además de estos métodos cuales otros conoces y para que crees que sirven?
#####HEAD
El HEAD pide una respuesta idéntica a la de una solicitud GET, pero sin el cuerpo de la respuesta.
#####CONNECT
El método CONNECT establece un túnel para el servidor identificado por el recurso de destino.

#####OPTIONS
El método OPTIONS se utiliza para describir las opciones de comunicación para el recurso de destino.
#####TRACE
El método  TRACE lleva a cabo una prueba de bucle de mensajes a lo largo de la ruta de acceso al recurso de destino.

#####PATCH
El método PATCH se utiliza para aplicar modificaciones parciales a un recurso.

###Status code HTTP
####Encuentra otros códigos HTTP y describe para que son utilizados.
#####100 - Continue
El navegador puede continuar realizando su petición (se utiliza para indicar que la primera parte de la petición del navegador se ha recibido correctamente).
#####101 - Switching Protocols
El servidor acepta el cambio de protocolo propuesto por el navegador (puede ser por ejemplo un cambio de HTTP 1.0 a HTTP 1.1).
#####200 - OK
Respuesta estándar para peticiones correctas.
#####201 - Created
La petición ha sido completada y ha resultado en la creación de un nuevo recurso.
#####202 - Accepted
La petición ha sido aceptada para procesamiento, pero este no ha sido completado. La petición eventualmente pudiere no ser satisfecha, ya que podría ser no permitida o prohibida cuando el procesamiento tenga lugar.
#####306 - Switch Proxy
Este código se utilizaba en las versiones antiguas de HTTP pero ya no se usa (aunque está reservado para usos futuros).
#####307 - Temporary Redirect (desde HTTP/1.1)
Se trata de una redirección que debería haber sido hecha con otra URI, sin embargo aún puede ser procesada con la URI proporcionada. En contraste con el código 303, el método de la petición no debería ser cambiado cuando el cliente repita la solicitud. Por ejemplo, una solicitud POST tiene que ser repetida utilizando otra petición POST.
#####308 - Permanent Redirect
El recurso solicitado por el navegador se encuentra en otro lugar y este cambio es permanente. A diferencia del código 301, no se permite cambiar el método HTTP para la nueva petición (así por ejemplo, si envías un formulario a un recurso que ha cambiado de lugar, todo seguirá funcionando bien).


###Navegadores
####Describe otros navegadores en el mercado y revisa cual es su funcionalidad, algunos son especializados en utilizar poca memoria o poco ancho de banda.
#####Swiftfox 
<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/nav1.jpg" width="300" height="200">
</p>

Se trata de un clon de Firefox para Linux, pero mucho más ligero y rápido , (swift significa velóz, rápido). Además está optimizado para ciertos procesadores tanto de 32 como de 64 bits. 

La interfaz de usuario es similar a Firefox, pero más minimalista y fácil de usar. Un detalle importante, Swiftfox no puede ejecutarse mientras Firefox esté en uso, y viceversa. La mayoría de las demás características están, en línea de lo que Firefox puede ofrecer. Si te gusta Firefox, pero quieren algo más rápido y más ligero, entonces Swiftfox puede interesarte. 

#####Maxthon (anteriormente MyIE2) 

<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/nav2.jpg" width="300" height="200">
</p>
Es un navegador para Windows basado en el motor de Internet Explorer (Trident). Pone énfasis en la seguridad. A este respecto, lleva incorporado un potente filtro de popups, spyware, malware, virus y un bloqueador de publicidad para eliminar el contenido presente de la publicidad integrada en las páginas. 

Es completamente configurable, (desde las teclas de acceso rápido y barras de herramientas hasta los gestos de ratón). Además el navegador lleva integradas herramientas tan interesantes como un capturador de pantalla, un lector de feedy un servicio en línea de favoritos. 

Según su página oficial, utiliza un promedio de 65% menos de consumo de memoria RAM que Explorer 7,cuando ambos exploradores tienen abierto el mismo número de páginas.

#####Sleipnir 

<p align="center">
<img src="https://github.com/crisdiab/Tec_Web_Js/blob/informe/imagenes/nav3.jpg" width="300" height="200">
</p>

Sleipnir es un navegador muy popular en Japón, con una cuota de mercado del 6%. Se trata de un navegador profundamente personalizable y muy versátil. Ofrece multitud de opciones al usuario y temas para cambiar la apariencia de forma radical. Además mantiene una buena velocidad y el rendimiento a pesar de las personalizaciones y cuenta con gran cantidad de plugins que amplían sus funcionalidades. 
##Conclusiones y recomendaciones
<a name="conrec"></a>

<a href="#cabecera">Regresar a la cabecera</a>