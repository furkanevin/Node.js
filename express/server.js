const app = require('./app');
const dotnev = require('dotenv');
dotnev.config({ path: './config.env' });

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor`);
});
