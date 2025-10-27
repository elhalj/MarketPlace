import 'dotenv/config'
import { startServer } from "./infrastructure/server/app"
// import userRoutes from "@adapters/routes/userRoutes"
// import merchantRoutes from "@adapters/routes/merchantRoutes"
// import restaurantRoutes from "@adapters/routes/restaurantRoutes"
// import productRoutes from "@adapters/routes/productRoutes"
// import orderRoutes from "@adapters/routes/orderRoutes"
// import reviewRoutes from "@adapters/routes/reviewRoutes"

(async () => {
    const app = startServer(/*[
        userRoutes,
        merchantRoutes,
        restaurantRoutes,
        productRoutes,
        orderRoutes,
        reviewRoutes,
    ]*/)

    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})()