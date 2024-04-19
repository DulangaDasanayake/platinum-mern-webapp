<div align="center">

# MERN SHOP

Remember to give me your generous ⭐ Thanks you so much !!!

🛒🚀 Full-stack E-commerce web application built with the MERN stack(MongoDB,Express,React & Node), Bootstrap, Firebase Auth, and hosted on Render.com Browse, shop, and checkout with ease!

</div>

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🔧 Installation](#-installation)
- [💻 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## 🚀 Features

- User authentication and authorization.
- Browse products by category.
- Add products to the shopping cart.
- Update and remove items from the cart.
- Secure checkout process with payment integration.
- User profile with order history.

## 🛠️ Technologies Used

- **Frontend:**

  - React.js
  - Redux for state management
  - React Router for navigation
  - Bootstrap for styling

- **Backend:**

  - Node.js
  - Express.js for middleware
  - Mongoose for object modeling
  - JSON Web Tokens (JWT) for authentication

- **Database** 📊

  - MongoDB for product & user detail storing
  - Firebase for authentication

- **Authentication:**

  - Firebase Authentication for Google authentication

- **Hosting:**
  - Render.com for deployment and hosting
  - Web App Demo Link:
  - I'm Sending My Regards for the Render.com for providing free hosting feature.
  - It is so much helpful for teachers and students work with IT Industry.

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DulangaDasanayake/proshop.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd proshop
   ```

3. **Install dependencies for both frontend and backend:**

   ```bash
   cd client
   npm install
   cd ..
   npm install
   ```

4. **Set up environment variables:** ⚙️

   Create a `.env` file in the `backend` directory and add the following variables:

   ```plaintext
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your mongoDB uri
   JWT_SECRET='your jwt secret key'
   PAYPAL_CLIENT_ID=your paypal slient id
   PAGINATION_LIMIT=8
   ```

   Replace `your_mongodb_uri` with your MongoDB connection string and `your_jwt_secret` with a secret key for JWT.

## 💻 Usage

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**

   ```bash
   cd frontend
   npm start
   ```

3. **Open your browser and navigate to `http://localhost:3000` to view the application.**

## 🤝 Contributing

Contributors are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
