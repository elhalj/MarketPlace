marketplace-local/
│
├── backend/                          # API Node.js + Express
│   ├── src/
│   │   ├── domain/                   # Couche Domain (Entités métier)
│   │   │   ├── entities/
│   │   │   │   ├── User.js
│   │   │   │   ├── Merchant.js
│   │   │   │   ├── Restaurant.js
│   │   │   │   ├── Product.js
│   │   │   │   ├── Category.js
│   │   │   │   ├── Order.js
│   │   │   │   └── Review.js
│   │   │   │
│   │   │   ├── repositories/         # Interfaces (contrats)
│   │   │   │   ├── IUserRepository.js
│   │   │   │   ├── IMerchantRepository.js
│   │   │   │   ├── IRestaurantRepository.js
│   │   │   │   ├── IProductRepository.js
│   │   │   │   └── IOrderRepository.js
│   │   │   │
│   │   │   └── value-objects/        # Objets de valeur
│   │   │       ├── Location.js       # Coordonnées GPS
│   │   │       ├── Address.js
│   │   │       ├── Price.js
│   │   │       └── OpeningHours.js
│   │   │
│   │   ├── usecases/                 # Couche Application (Logique métier)
│   │   │   ├── user/
│   │   │   │   ├── RegisterUser.js
│   │   │   │   ├── LoginUser.js
│   │   │   │   ├── UpdateUserProfile.js
│   │   │   │   └── GetUserById.js
│   │   │   │
│   │   │   ├── merchant/
│   │   │   │   ├── RegisterMerchant.js
│   │   │   │   ├── UpdateMerchantProfile.js
│   │   │   │   ├── GetMerchantRestaurants.js
│   │   │   │   └── VerifyMerchant.js
│   │   │   │
│   │   │   ├── restaurant/
│   │   │   │   ├── CreateRestaurant.js
│   │   │   │   ├── UpdateRestaurant.js
│   │   │   │   ├── UpdateLocation.js
│   │   │   │   ├── GetRestaurantById.js
│   │   │   │   ├── GetNearbyRestaurants.js
│   │   │   │   ├── SearchRestaurants.js
│   │   │   │   └── DeleteRestaurant.js
│   │   │   │
│   │   │   ├── product/
│   │   │   │   ├── CreateProduct.js
│   │   │   │   ├── UpdateProduct.js
│   │   │   │   ├── DeleteProduct.js
│   │   │   │   ├── GetProductsByRestaurant.js
│   │   │   │   ├── SearchProducts.js
│   │   │   │   └── UpdateProductStock.js
│   │   │   │
│   │   │   ├── order/
│   │   │   │   ├── CreateOrder.js
│   │   │   │   ├── UpdateOrderStatus.js
│   │   │   │   ├── GetOrderById.js
│   │   │   │   ├── GetUserOrders.js
│   │   │   │   └── GetMerchantOrders.js
│   │   │   │
│   │   │   └── review/
│   │   │       ├── CreateReview.js
│   │   │       ├── GetRestaurantReviews.js
│   │   │       └── DeleteReview.js
│   │   │
│   │   ├── adapters/                 # Couche Adapters (Implémentations)
│   │   │   ├── controllers/          # Controllers Express
│   │   │   │   ├── UserController.js
│   │   │   │   ├── MerchantController.js
│   │   │   │   ├── RestaurantController.js
│   │   │   │   ├── ProductController.js
│   │   │   │   ├── OrderController.js
│   │   │   │   └── ReviewController.js
│   │   │   │
│   │   │   ├── repositories/         # Implémentations MongoDB
│   │   │   │   ├── MongoUserRepository.js
│   │   │   │   ├── MongoMerchantRepository.js
│   │   │   │   ├── MongoRestaurantRepository.js
│   │   │   │   ├── MongoProductRepository.js
│   │   │   │   └── MongoOrderRepository.js
│   │   │   │
│   │   │   ├── services/             # Services externes
│   │   │   │   ├── AuthService.js    # JWT, Hash passwords
│   │   │   │   ├── EmailService.js   # Nodemailer
│   │   │   │   ├── StorageService.js # Cloudinary/S3
│   │   │   │   ├── MapService.js     # Geocoding
│   │   │   │   └── NotificationService.js
│   │   │   │
│   │   │   └── middlewares/
│   │   │       ├── authMiddleware.js
│   │   │       ├── errorHandler.js
│   │   │       ├── validator.js
│   │   │       ├── rateLimiter.js
│   │   │       └── uploadMiddleware.js
│   │   │
│   │   ├── infrastructure/           # Couche Infrastructure
│   │   │   ├── database/
│   │   │   │   ├── mongoose/
│   │   │   │   │   ├── models/      # Schemas Mongoose
│   │   │   │   │   │   ├── UserModel.js
│   │   │   │   │   │   ├── MerchantModel.js
│   │   │   │   │   │   ├── RestaurantModel.js
│   │   │   │   │   │   ├── ProductModel.js
│   │   │   │   │   │   ├── OrderModel.js
│   │   │   │   │   │   └── ReviewModel.js
│   │   │   │   │   │
│   │   │   │   │   └── connection.js
│   │   │   │   │
│   │   │   │   └── redis/
│   │   │   │       └── client.js
│   │   │   │
│   │   │   ├── server/
│   │   │   │   ├── app.js           # Configuration Express
│   │   │   │   └── routes.js        # Définition des routes
│   │   │   │
│   │   │   └── config/
│   │   │       ├── environment.js
│   │   │       ├── database.js
│   │   │       ├── jwt.js
│   │   │       └── cloudinary.js
│   │   │
│   │   └── index.js                 # Point d'entrée
│   │
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── usecases/
│   │   │   └── entities/
│   │   ├── integration/
│   │   │   ├── repositories/
│   │   │   └── controllers/
│   │   └── e2e/
│   │
│   ├── .env.example
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
│
├── frontend-web/                     # Application Web Next.js
│   ├── src/
│   │   ├── app/                     # App Router Next.js 15
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── (merchant)/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── restaurants/
│   │   │   │   └── products/
│   │   │   ├── (customer)/
│   │   │   │   ├── map/
│   │   │   │   ├── restaurants/
│   │   │   │   └── orders/
│   │   │   ├── layout.js
│   │   │   └── page.js
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Modal.jsx
│   │   │   ├── map/
│   │   │   │   ├── MapView.jsx
│   │   │   │   ├── MarkerRestaurant.jsx
│   │   │   │   └── SearchLocation.jsx
│   │   │   ├── restaurant/
│   │   │   │   ├── RestaurantCard.jsx
│   │   │   │   ├── RestaurantList.jsx
│   │   │   │   └── RestaurantDetails.jsx
│   │   │   └── product/
│   │   │       ├── ProductCard.jsx
│   │   │       ├── ProductForm.jsx
│   │   │       └── ProductList.jsx
│   │   │
│   │   ├── lib/
│   │   │   ├── api/                 # Client API
│   │   │   │   ├── axios.js
│   │   │   │   ├── auth.js
│   │   │   │   ├── restaurants.js
│   │   │   │   └── products.js
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.js
│   │   │   │   ├── useRestaurants.js
│   │   │   │   └── useGeolocation.js
│   │   │   └── utils/
│   │   │       ├── format.js
│   │   │       └── validation.js
│   │   │
│   │   └── store/                   # État global (Zustand)
│   │       ├── authStore.js
│   │       ├── cartStore.js
│   │       └── mapStore.js
│   │
│   ├── public/
│   ├── .env.local.example
│   ├── Dockerfile
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── mobile/                           # Application Mobile React Native
│   ├── src/
│   │   ├── screens/
│   │   │   ├── auth/
│   │   │   │   ├── LoginScreen.js
│   │   │   │   └── RegisterScreen.js
│   │   │   ├── home/
│   │   │   │   └── HomeScreen.js
│   │   │   ├── map/
│   │   │   │   └── MapScreen.js
│   │   │   ├── restaurant/
│   │   │   │   ├── RestaurantListScreen.js
│   │   │   │   └── RestaurantDetailScreen.js
│   │   │   ├── merchant/
│   │   │   │   ├── DashboardScreen.js
│   │   │   │   └── ManageProductsScreen.js
│   │   │   └── profile/
│   │   │       └── ProfileScreen.js
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── map/
│   │   │   ├── restaurant/
│   │   │   └── product/
│   │   │
│   │   ├── navigation/
│   │   │   ├── AppNavigator.js
│   │   │   ├── AuthNavigator.js
│   │   │   └── MerchantNavigator.js
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   └── storage.js
│   │   │
│   │   ├── store/                   # Context ou Zustand
│   │   │   └── authContext.js
│   │   │
│   │   └── utils/
│   │       ├── constants.js
│   │       └── helpers.js
│   │
│   ├── assets/
│   ├── app.json
│   ├── App.js
│   ├── package.json
│   └── README.md
│
├── docker/                           # Configuration Docker
│   ├── docker-compose.yml
│   ├── docker-compose.dev.yml
│   ├── docker-compose.prod.yml
│   ├── nginx/
│   │   └── nginx.conf
│   └── scripts/
│       ├── init-mongo.sh
│       └── backup.sh
│
├── .github/                          # CI/CD GitHub Actions
│   └── workflows/
│       ├── backend-ci.yml
│       ├── frontend-ci.yml
│       ├── mobile-ci.yml
│       └── deploy.yml
│
├── docs/                             # Documentation
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   └── DEPLOYMENT.md
│
├── .gitignore
└── README.md