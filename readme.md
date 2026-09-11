# WeChat 💬

WeChat is a simple chat application built while learning backend development with **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

## 🚀 Features

* View all chats
* Create new chats
* Edit existing messages
* Delete chats
* MongoDB database integration
* RESTful routing
* Dynamic pages using EJS
* Method overriding for PATCH and DELETE requests

## 🛠️ Technologies Used

* **Node.js** — JavaScript runtime
* **Express.js** — Backend framework and routing
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **EJS** — Server-side templating
* **Method-Override** — Used to support PATCH and DELETE requests from HTML forms
* **HTML/CSS** — Frontend

## 📚 What I Learned

Through this project, I learned and practiced:

* Creating an Express.js server
* Creating and handling RESTful routes
* Implementing CRUD operations
* Connecting Express applications to MongoDB
* Creating MongoDB schemas and models using Mongoose
* Using `find()`, `findById()`, `findByIdAndUpdate()`, and `findByIdAndDelete()`
* Working with route parameters using `req.params`
* Handling form data using `req.body`
* Rendering dynamic pages with EJS
* Using HTTP methods such as **GET, POST, PATCH, and DELETE**
* Using `method-override` to perform PATCH and DELETE requests through HTML forms
* Working with asynchronous database operations using `async/await` and Promises

## 📌 Project Structure

```text
wechat-chat-app/
│
├── Models/
│   └── chat.js
│
├── views/
│   ├── home.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── assets/
│
├── index.js
├── package.json
└── README.md
```

## ▶️ Running the Project

Install the dependencies:

```bash
npm install
```

Make sure MongoDB is running locally, then start the server:

```bash
node index.js
```

The application runs on:

```text
http://localhost:3030/chats
```
