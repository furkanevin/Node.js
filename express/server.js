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

//schema tanımlama
const tourSchema = new mongoose.Schema({
  // schema tip ayarları
  name: {
    type: String,
    required: [true, 'İsim alanı zorunlu'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Fiyat alanı zorunlu'],
  },
});

// schema üzerinden model tanımlama
const Tour = mongoose.model('Tour', tourSchema);

// tou modelinden bi instance tanımlama
const testTour = new Tour({
  name: 'Orman Gezisi2',
  rating: 4.7,
  price: 3000,
});

// veritabanına oluşturduğmuz veriyi ekleme
testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log('hata oldu' + err));

// severı ayağa kaldır
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor`);
});
