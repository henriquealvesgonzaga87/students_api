import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listening the port ${port}`);
  console.log(`CTRL + click http://localhost:${port}`);
})
