import express, { Express, Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import compression from 'compression';


export function startServer(/*routes: Router[]*/): Express {

    const app = express()

    app.use(express.json())

    app.use(express.urlencoded({}))
    app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }))

    app.use(compression())
    app.use(cookieParser())

    app.use(helmet({
        crossOriginResourcePolicy: false,
    }))

    app.use(morgan("dev"))

    app.get("/", (req, res) => {
        res.send("Hello World")
    })

    app.get("/health", (req, res) => {
        res.status(200).json({ message: "OK" })
    })

    // routes.forEach(route => {
    //     app.use("/api/v1", route)
    // })

    return app
}