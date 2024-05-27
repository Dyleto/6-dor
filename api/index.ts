import mongoose from 'mongoose'
import app from './app'

const port = 8000

mongoose
  .connect('mongodb+srv://corentinlemoullec:EAJDhj2ZAkD6Ah3a@6-dor.9d1kmv1.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log('Server running on port', port)
    })
  })
  .catch((error: Error) => {
    console.log('Error connecting to MongoDB', error)
  })
