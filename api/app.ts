import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Express } from 'express'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import jwt from 'jsonwebtoken'
import routes from './routes'

const app: Express = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())

app.use('', routes)

export default app
