import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc   Fetch all products
// @route  GET/api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {};

  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc   Fetch a products
// @route  GET/api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc   Create a product
// @route  POST/api/products
// @access Private
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

// @desc   Update a product
// @route  PUT/api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const productId = req.params.id;

  const errors = {};

  // Validation for name
  if (!name) {
    errors.name = 'Name is required';
  }

  // Validation for price
  if (!price) {
    errors.price = 'Price is required';
  } else if (isNaN(price) || price <= 0) {
    errors.price = 'Price must be a positive number';
  }

  // Validation for description
  if (!description) {
    errors.description = 'Please add a Description';
  }

  // Validation for image
  if (!image) {
    errors.image = 'Image is required';
  }

  // Validation for brand
  if (!brand) {
    errors.brand = 'Please add the Brand of Product';
  }

  // Validation for category
  if (!category) {
    errors.category = 'Please add the Category of Product';
  }

  // Validation for countInStock
  if (!countInStock) {
    errors.countInStock = 'Count in Stock is required';
  } else if (isNaN(countInStock) || countInStock < 0) {
    errors.countInStock = 'Count in Stock must be a non-negative number';
  }

  // Check if there are any validation errors
  if (Object.keys(errors).length > 0) {
    res.status(400).json({ errors });
    return;
  }

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updateProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc   Delete a product
// @route  DELETE/api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc   Create a new review
// @route  POST/api/products/:id/reviews
// @access Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  // Check if rating is provided
  if (!rating) {
    res.status(400);
    throw new Error('Please add the Star Rating');
  }

  // Check if comment is provided
  if (!comment) {
    res.status(400);
    throw new Error('Please add the Comment');
  }

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc   Get top rated products
// @route  GET/api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json(products);
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};
