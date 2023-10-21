# Rick y Morty

WebApp para ver información de los personajes de Rick y Morty.

![Ejemplo](/public/screenshot.png)

## Tech stack

NextJS, vanilla CSS.

He optado por usar NextJS ya que mi framework favorita es React.

## Iniciar el proyecto localmente

Si aún no has clonado el proyecto, usa el siguiente comando:

`git clone git@github.com:darioaladuz/rickandmorty.git`

Una vez clonado:

`cd rickandmorty`

`npm install && npm run dev`

Ahora tendrás el proyecto disponible en
[http://localhost:3000](http://localhost:3000).

## Demo

Hay una demo disponible en
[rickandmorty.darioaladuz.com](https://rickandmorty.darioaladuz.com)

## Siguientes pasos

Si fuera un proyecto que tuviera que mantener en el futuro, extraería aún más
trozos de funcionalidad y los transformaría en componentes.

Miraría de guardar o cachear el estado de los personajes cuando no hay ninguna
búsqueda para evitar que desaparezca el progreso que llevamos de la "carga
infinita" o "load more".

A parte, extraería toda la lógica de API y la metería en rutas para separarla
del cliente (así no dependeríamos del "use client", mejoraría la performance y
habría una capa extra de seguridad).

### Autor

Dario Aladuz

[Github](https://github.com/darioaladuz)
[LinkedIn](https://www.linkedin.com/in/darioaladuz/)
