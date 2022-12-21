import express from 'express';
import config from './Configuration/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const dataBase = () => {
	mongoose
		.connect(config.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log(`Success Granted for Database`);
		})
		.catch((error) => {
			console.log(error.message);
		});
};
dataBase();

// IMPLEMENTIG ROUTES
import router from './Routes/messagrRoutes';
app.use('/', router);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
});

app.listen(config.PORT, () => {
	console.log(`Files Are serve at http://localhost:${config.PORT}`);
});
