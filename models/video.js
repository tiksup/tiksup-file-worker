const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  file: String,        
  title: String,      
  genre: [String],
  protagonist: String, 
  director: String,    
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
