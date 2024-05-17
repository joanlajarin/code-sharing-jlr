import { Schema, model } from 'mongoose'

const codeEditorSchema = new Schema({
    link: String,
    code: String,
    date: Date
})

const CodeEditor = model('CodeEditor', codeEditorSchema)

export default CodeEditor