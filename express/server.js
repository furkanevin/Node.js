const mongoose = require('mongoose');
const app = require('./app');
const dotnev = require('dotenv');
dotnev.config({ path: './config.env' });

// bağlantı linki oluşturma
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASS
);

// veritabanı ile bağlantı kurma
mongoose
  .connect(DB)
  .then((con) => console.log('Verirabanı ile bağlantı kuruldu'));

// severı ayağa kaldır
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor`);
});
