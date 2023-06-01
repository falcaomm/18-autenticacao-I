import express from 'express'
import cors from 'cors'
import { productRouter } from './router/productRouter'
import { userRouter } from './router/userRouter'
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const porta = Number(process.env.PORT) || 3003

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

app.use("/users", userRouter)
app.use("/products", productRouter)
