
import express, { Application, Response, NextFunction } from 'express'
const app: Application = express()
const port = 5000

// Application routing
app.use('/', (req, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello from Auth App', message: '', req: req })
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
