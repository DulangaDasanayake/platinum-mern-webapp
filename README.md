# ProShop

Welcome to ProShop! This is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). ProShop provides a platform for users to browse, search, and purchase a variety of products offered by the store.

## Features

- **User Authentication**: Users can sign up and log in securely to their accounts. Authentication is implemented using JSON Web Tokens (JWT).
- **Product Listings**: The application displays a wide range of products available for purchase, including details such as product images, descriptions, prices, and ratings.
- **Product Reviews**: Users can leave reviews and ratings for products they have purchased, providing valuable feedback for other shoppers.
- **Shopping Cart**: A convenient shopping cart feature allows users to add products to their cart, adjust quantities, and proceed to checkout.
- **Checkout Process**: Seamless checkout process with integration for payment through PayPal.
- **Order Management**: Registered users can view their order history and track the status of their orders.
- **Admin Panel**: Admin users have access to additional functionalities such as managing products, users, orders, and processing payments.

## Technologies Used

- **Frontend**: React.js, Redux (for state management), React Bootstrap (UI components), Axios (HTTP client)
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: PayPal API
- **Deployment**: Heroku (for backend) and Netlify (for frontend)

## Getting Started

To run ProShop locally on your machine, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/DulangaDasanayake/proshop.git
   ```

2. Install dependencies:

   ```
   cd proshop
   npm install
   cd frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory (`proshop`) and add the necessary environment variables. Refer to the `.env.sample` file for the required variables.

4. Start the backend server:

   ```
   npm run server
   ```

5. Start the frontend:

   ```
   npm run client
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to Brad Traversy for the [MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce) course, which served as the foundation for this project.