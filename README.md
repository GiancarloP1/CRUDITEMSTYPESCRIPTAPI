
# 🛠️ CRUD API - Items Management

¡Bienvenido a la API de gestión de Items! 🎉 Este proyecto está desarrollado con **Node.js**, **Express** y **MongoDB**, proporcionando un conjunto de endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre items.

## 📦 Características

- 🌟 **Crear, Leer, Actualizar y Eliminar** items.
- 🔄 **API basada en JSON** para facilitar la integración con otros sistemas.
- 💻 **MongoDB** como base de datos NoSQL.
- 🚀 **Rutas dinámicas** para mejorar la estructura de la API.

## 🚀 Guía de Inicio

Sigue estos pasos para clonar el repositorio, instalar las dependencias y ejecutar la API en tu máquina local.

### 1. Clona este repositorio 🖥️

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

### 2. Instala las dependencias 📦

Navega a la carpeta del proyecto e instala todas las dependencias ejecutando:

```bash
npm install
```

### 3. Configura las variables de entorno 🔐

Crea un archivo **`.env`** en la raíz del proyecto con las siguientes variables:

```env
PORT=3004
MONGO_URI=mongodb://localhost:27017/nombre-de-tu-base
```

Esto configurará el puerto en el que correrá la API y la URI de MongoDB.

### 4. Inicia el servidor 🏃‍♂️

Una vez que hayas configurado todo, inicia el servidor ejecutando:

```bash
npm start
```

El servidor estará disponible en **`http://localhost:3004`**.

---

## 🌐 Endpoints de la API

Aquí tienes la lista de endpoints disponibles para interactuar con los items.

### 1. **Obtener todos los items** - `GET /api/items` 📄

Obtiene una lista de todos los items almacenados en la base de datos.

```bash
curl -X GET http://localhost:3004/api/items
```

📄 **Respuesta de ejemplo**:

```json
[
  {
    "_id": "64fbb3f9c8a4d9408c8fdeb5",
    "name": "Item 1",
    "description": "Description of Item 1",
    "price": 100
  },
  {
    "_id": "64fbb3fac8a4d9408c8fdeb6",
    "name": "Item 2",
    "description": "Description of Item 2",
    "price": 200
  }
]
```

---

### 2. **Obtener un item por ID** - `GET /api/items/:id` 🔍

Obtiene un item específico por su ID.

```bash
curl -X GET http://localhost:3004/api/items/64fbb3f9c8a4d9408c8fdeb5
```

📄 **Respuesta de ejemplo**:

```json
{
  "_id": "64fbb3f9c8a4d9408c8fdeb5",
  "name": "Item 1",
  "description": "Description of Item 1",
  "price": 100
}
```

---

### 3. **Crear un nuevo item** - `POST /api/items` ➕

Crea un nuevo item en la base de datos.

```bash
curl -X POST http://localhost:3004/api/items -H "Content-Type: application/json" -d '{
  "name": "Item 3",
  "description": "Description of Item 3",
  "price": 300
}'
```

📄 **Respuesta de ejemplo**:

```json
{
  "_id": "64fbb3f9c8a4d9408c8fdeb7",
  "name": "Item 3",
  "description": "Description of Item 3",
  "price": 300
}
```

---

### 4. **Actualizar un item** - `PUT /api/items/:id` 📝

Actualiza un item existente en la base de datos.

```bash
curl -X PUT http://localhost:3004/api/items/64fbb3f9c8a4d9408c8fdeb5 -H "Content-Type: application/json" -d '{
  "name": "Item Updated",
  "description": "Updated Description",
  "price": 150
}'
```

📄 **Respuesta de ejemplo**:

```json
{
  "_id": "64fbb3f9c8a4d9408c8fdeb5",
  "name": "Item Updated",
  "description": "Updated Description",
  "price": 150
}
```

---

### 5. **Eliminar un item** - `DELETE /api/items/:id` 🗑️

Elimina un item existente de la base de datos.

```bash
curl -X DELETE http://localhost:3004/api/items/64fbb3f9c8a4d9408c8fdeb5
```

📄 **Respuesta de ejemplo**:

```bash
204 No Content
```

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**

## 🙌 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir issues o pull requests. 

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.
