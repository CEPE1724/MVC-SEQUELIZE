# MVC-SEQUELIZE

## Actividad 2 – Configuración e implementación básica con Sequelize

Proyecto Node.js que implementa un API REST con patrón **MVC** usando **Sequelize** como ORM. Incluye operaciones CRUD completas para la entidad **Producto**.

---

## Tecnologías

| Herramienta | Versión |
|-------------|---------|
| Node.js     | ≥ 18    |
| Express     | ^4.19   |
| Sequelize   | ^6.37   |
| SQLite3     | ^5.1 (desarrollo por defecto) |
| MySQL2 / pg | opcional (producción) |

---

## Estructura del proyecto

```
MVC-SEQUELIZE/
├── index.js                       # Punto de entrada
├── package.json
├── .env.example                   # Variables de entorno de ejemplo
└── src/
    ├── app.js                     # Configuración de Express + sync BD
    ├── config/
    │   └── database.js            # Instancia de Sequelize
    ├── models/
    │   └── producto.js            # Modelo Producto
    ├── controllers/
    │   └── productoController.js  # Lógica CRUD
    └── routes/
        └── productoRoutes.js      # Rutas REST
```

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CEPE1724/MVC-SEQUELIZE.git
cd MVC-SEQUELIZE

# Instalar dependencias
npm install

# Copiar y ajustar las variables de entorno
cp .env.example .env
```

### Configuración de la base de datos

**SQLite (por defecto, sin configuración adicional):**

```env
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
```

**MySQL:**

```env
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=mvc_sequelize
DB_USER=root
DB_PASSWORD=tu_contraseña
```

> Para MySQL también se requiere instalar el driver: `npm install mysql2`

**PostgreSQL:**

```env
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mvc_sequelize
DB_USER=postgres
DB_PASSWORD=tu_contraseña
```

> Para PostgreSQL también se requiere instalar el driver: `npm install pg pg-hstore`

---

## Ejecución

```bash
# Producción
npm start

# Desarrollo (con recarga automática)
npm run dev
```

El servidor inicia en `http://localhost:3000` (o el puerto configurado en `PORT`).

---

## Endpoints – Producto

| Método | Ruta                     | Descripción                  |
|--------|--------------------------|------------------------------|
| GET    | `/api/productos`         | Listar todos los productos   |
| GET    | `/api/productos/:id`     | Obtener un producto por id   |
| POST   | `/api/productos`         | Crear un nuevo producto      |
| PUT    | `/api/productos/:id`     | Actualizar un producto       |
| DELETE | `/api/productos/:id`     | Eliminar un producto         |

### Ejemplo de cuerpo (JSON) para POST / PUT

```json
{
  "nombre": "Laptop",
  "precio": 1299.99,
  "descripcion": "Laptop de alto rendimiento",
  "stock": 10
}
```

---

## Modelo – Producto

| Campo       | Tipo    | Restricción      |
|-------------|---------|------------------|
| id          | INTEGER | PK, autoincrement|
| nombre      | STRING  | NOT NULL         |
| precio      | FLOAT   | NOT NULL         |
| descripcion | TEXT    | opcional         |
| stock       | INTEGER | default 0        |
| createdAt   | DATE    | automático       |
| updatedAt   | DATE    | automático       |
