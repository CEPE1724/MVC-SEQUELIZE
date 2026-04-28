# MVC Sequelize - API de Donaciones

Aplicacion backend construida con Node.js, Express, Sequelize y SQLite para gestionar donaciones con operaciones CRUD.

## Requisitos

- Node.js 18 o superior
- npm

## Tecnologias

- Node.js
- Express
- Sequelize
- SQLite
- Nodemon

## Instalacion

1. Clona el repositorio:

```bash
git clone https://github.com/CEPE1724/MVC-SEQUELIZE.git
cd MVC-SEQUELIZE
```

2. Instala las dependencias:

```bash
npm install
```

## Ejecucion

Inicia la aplicacion con:

```bash
npm start
```

El servidor se levanta en:

```text
http://localhost:3977
```

## Base de datos

La aplicacion usa SQLite y crea automaticamente el archivo local:

```text
db-portafolio.sqlite
```

Al arrancar, Sequelize sincroniza la tabla `donaciones` automaticamente.

## Estructura del proyecto

```text
mvc-sequelize/
|-- controllers/
|   |-- donaciones.js
|-- database/
|   |-- connection.js
|-- models/
|   |-- donaciones.js
|-- routes/
|   |-- donaciones.js
|-- index.js
|-- package.json
```

## Endpoints

Base URL:

```text
http://localhost:3977/api/donaciones
```

### Crear donacion

```http
POST /save
```

Body JSON:

```json
{
  "id_categoria": 1,
  "titulo": "Arroz disponible",
  "descripcion": "Donacion de arroz en buen estado",
  "cantidad": 25.5,
  "unidad_medida": "kg",
  "fecha_disponible": "2026-04-27",
  "estado": "disponible"
}
```

### Listar donaciones

```http
GET /buscar-donaciones
```

### Obtener una donacion por ID

```http
GET /buscar-donacion/:id
```

Ejemplo:

```http
GET /buscar-donacion/1
```

### Actualizar una donacion

```http
PUT /actualizar-donacion/:id
```

Ejemplo de body:

```json
{
  "titulo": "Arroz integral disponible",
  "estado": "reservado"
}
```

### Eliminar una donacion

```http
DELETE /eliminar-donacion/:id
```

## Ejemplo con curl

Crear una donacion:

```bash
curl -X POST http://localhost:3977/api/donaciones/save \
  -H "Content-Type: application/json" \
  -d '{
    "id_categoria": 1,
    "titulo": "Leche en caja",
    "descripcion": "Donacion de 12 unidades",
    "cantidad": 12,
    "unidad_medida": "unidad",
    "fecha_disponible": "2026-04-27",
    "estado": "disponible"
  }'
```

## Respuestas esperadas

- `200`: operacion realizada correctamente
- `400`: faltan datos por enviar
- `404`: recurso no encontrado
- `500`: error interno del servidor

## Notas

- La propiedad `fecha_registro` se genera automaticamente.
- La clave primaria de la tabla es `id_donacion`.
- La tabla usada en SQLite es `donaciones`.
