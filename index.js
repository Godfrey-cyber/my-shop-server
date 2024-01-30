import express from 'express'
import cors from 'cors'
import nodemon from 'nodemon'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
	origin: process.env.CLIENT_URL,
	credentials: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Success 💯! server running on port: ${PORT} 👍`)
})