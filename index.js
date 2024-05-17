const PORT = 8000
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import mongoose from './mongo.js'
import CodeEditor from './models/CodeEditor.js'

mongoose
config()

const app = express()
app.use(express.json())

app.use(cors())

app.get('/api/code/:link', (req,res) => {
    const link = req.params.link; 

    CodeEditor.find({link : link }).sort({ date: -1 }).limit(1).then( boards => {
        res.json(boards)
    }).catch(error => {
        console.error('Error fetching boards:', error)
        res.status(500).json({ error: 'Internal server error' })
    })
})

app.post('/api/code', (req,res) => {

    const {link, code, date } = req.body

    const newCode = new CodeEditor({
        link,
        code,
        date
    })

    newCode.save()
    .then(savedCode => {
        res.status(201).json(savedCode)
    })
    .catch(error => {
        console.error('Error saving board:', error)
        res.status(500).json({ error: 'Internal server error' })
    })
})

app.listen(PORT, ()=> console.log(`Server task-manager is running on ${PORT}`))
