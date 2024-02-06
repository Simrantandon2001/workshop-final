const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Rajiv:Rajiv_786@fosterreads.mz6qku2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

const upload = multer({
	limits: {
	  fieldSize: 10 * 1024 * 1024, // Increase the field size limit to accommodate larger files
	},
  });
// Define MongoDB Schema
const fileSchema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer, // The actual file data as a buffer
});
const workshopFormSchema = new mongoose.Schema({
  workshopName: String,
  date: String,
  time: String,
  earlyBirdFee: String,
  regularFee: String,
  agenda: Object,
  keyPoints: Object,
  aboutTheTrainer: Object,
	workshopoverview: Object,
	photos: {
        photo1: fileSchema,
        photo2: fileSchema,
        photo3: fileSchema,
    },
});

const WorkshopForm = mongoose.model('WorkshopForm', workshopFormSchema);

// API endpoint for form submission


// ... (previous code)

// API endpoint to get all forms
app.get('/api/getAllForms', async (req, res) => {
    try {
		const allForms = await WorkshopForm.find({});
		const formsWithBase64Photos = allForms.map(form => {
            return {
                ...form.toObject(),
                photos: {
                    photo1: form.photos.photo1.buffer.toString('base64'),
                    photo2: form.photos.photo2.buffer.toString('base64'),
                    photo3: form.photos.photo3.buffer.toString('base64'),
                },
            };
        });
      res.status(200).json(formsWithBase64Photos);
    } catch (error) {
      console.error('Error getting forms:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // API endpoint to get a form by workshop name
  app.get('/api/getForm/:workshopName', async (req, res) => {
	try {
	  const workshopName = req.params.workshopName;
	  const form = await WorkshopForm.findOne({ workshopName });
  
	  if (!form) {
		return res.status(404).send('Form not found');
	  }
  
	  const photosBase64 = {
		photo1: form.photos.photo1.buffer.toString('base64'),
		photo2: form.photos.photo2.buffer.toString('base64'),
		photo3: form.photos.photo3.buffer.toString('base64'),
	};

	// Create a new object with base64-encoded photos
	const formWithBase64Photos = { ...form.toObject(), photos: photosBase64 };

	res.status(200).json(formWithBase64Photos);
	} catch (error) {
	  console.error('Error getting form:', error);
	  res.status(500).send('Internal Server Error');
	}
  });
  
  
  // ... (remaining code)
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
