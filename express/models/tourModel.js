const { mongoose } = require('mongoose');

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
  durations: {
    type: Number,
    required: [true, 'Duration alanı zounludur'],
  },
});

// schema üzerinden model tanımlama
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
