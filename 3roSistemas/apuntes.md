# Apuntes Programacion Basica
Al iniciar el tercer periodo comenzamos repasando algo de JavaScript y HTML para poder contextualizarlos nuevos conocimientos.

## JavaScript

### Generalidades

Es un lenguaje interpretado diseñado inicialmente para usar en el navegador.
Es un lenguaje usado prioritariamente en desarrollo web inicialmente en Front end, pero desde lacreacion de Mode.js se posibilito su uso en Back End.

### Tipos de Datos
En JavaScript hay diverso tipos de datos. Entre los cuales encontramos:

1. Entero (Integer)
2. Decimal (coma flotante - Float)
3. Cadena (Texto - String)
4. Objeto (object)
5. Arreglo (Array)
6. Boolean
7. NULL
   **Primitivos**
-Number
-String
-Boolean

javascript es un tipo de lenguajes con un tipado debil y dinamico. loque significa ue una variabes puede tomar un tipo de dato y luego cambiar a otro sin necesidad de ser estricto en su creacion o su tipo de dato.
**array (arreglo)**
Es un tipo de estructura de datos que permite organizar valores en una variables. puede contener diferentes tipos de datos, tales como: numeros, cadenas, booleanos, objetos y otros arrays.
object

### valores en javascript

20 =numero
"Nicolás" = string o cadena de caracteres
true = boolean o booleano


### Operadores

En JavaScript existen operadores aritmeticos, los cuales son:

1. Adicion (+)
2. Sustraccion (-)
3. Multiplicacion (*)
4. Divicion (/)

## Variables

En JavaScrpt se pueden crear variables de 3 maneras, cada una con efectos especificos:

1. Con la palabra **var** (No es recomendable usarla debido a que la crea de manera global)
2. Con la palabra reservada **let** (Se limita a su hambitode creacion)
3. Con la palabra reservada **const** (El objetivo es que su contenido no varie en su tipo)

Las variables tienen 2 estados:

**Declaradas**
let nombre;
**inicializadas**
nombre ="Anastasia";

Para inicializar  una variables se usa el signo '=' (llamado operador de asignacion)
pero en javascript puedo utilizar ambas cosas (Declaracion e inicializacion) en una sola linea
let numero = 45;

## HTML

Para insertar de manera automatica el codigo basico para iniciar una pagina web podemos utilizar el comando **html:5**.

Para insertar un script de JavaScript debemos usar la etiqueta **script**, la cual nos permite insertar codigo JavaScript dentro de la pagina o le podemos indicar la ubicacion de un archivo externo