import { env } from './env/index.js'
import app from './src/app.js'

const port = env.PORT

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
