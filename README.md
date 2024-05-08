# Este es un template de un proyecto creado con Vite + React + Typescript + Storybook

# Objetivo
El objetivo de este template, es tener una plantilla de un proyecto vacío creado con Vite + React + Storybook + CCS y con Storybook implementado para la creación de proyectos frontend.

## Por qué storybook implementado?
La idea de incluir Storybook es poder desarrollar los componentes del proyecto utilizando Storybook para su renderizado y poder modificarlos sin estar modificando en el renderizado del archivo html directamente.

## Como instalar el proyecto y sus dependencias
Al ser un proyecto Vite, se debe clonar el repo y ejecutar los siguientes comandos:

`npm install` Este comando instalará todas las dependecias, incluyendo Storybook

Luego para correr el proyecto ejecutar el comando `npm run dev`

## Como ejecutar Storybook?
Para ejecutar Storybook se debe ejecutar:

`npm run storybook` Esto levantara el wizard de storybook en su puerto por defecto

# Usando storybook

Se debe crear un componente de React dentro de la carpeta `components` o cualquier subcarpeta dentro de la carpeta `src`. No es necesario crear los componentes dentro de la carpeta `stories`. En esta última carpeta SI se deben guardar los archivos historias de storybook

El estilado se debe hacer con CSS puro importando la hoja de estilos al componente a traves de la linea:
```javascript
import './styles.css'
```
Nota: la hoja de estilos puede tener cualquier nombre, solo se debe verificar la correcta importacion

### Creando una historia
Las historias son archivos con con un nombre similar a `componente.stories.ts` y se deben crear dentro de la carpeta `stories`. NO ES NECESARIO CREAR LOS COMPONENTES DENTRO DE ESTA CARPETA!

Dentro del proyecto se dejan componentes generados por Storybook a modo de ejemplo. Deben ser borrados posteriormente en el desarrollo del proyecto.