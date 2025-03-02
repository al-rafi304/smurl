import express from 'express';
import dotevn from 'dotenv';

import connectDB from './configs/database';

dotevn.config();

const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
	res.send('Hello World!')
})

const start = async () => {
    try {
        await connectDB()
        server.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()