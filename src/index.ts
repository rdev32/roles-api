import app from './app'

app.listen(app.get('port'), () => {
  console.log(`Server started on http://localhost:${app.get('port')}/`)
})
