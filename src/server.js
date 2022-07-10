const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const macrames = [
	{
		id: 0,
		title: 'Macrame 1',
		price: 20.50,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg'
	},
	{
		id: 1,
		title: 'Macrame 2',
		price: 15.29,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/51Jj12iMZnL._SX331_BO1,204,203,200_.jpg'
	},
	{
		id: 2,
		title: 'Macrame 3',
		price: 29.99,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg'
	},
	{
		id: 3,
		title: 'Macrame 4',
		price: 40.00,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/61uUPXbhMxL._SX397_BO1,204,203,200_.jpg'
	},
];

app.get('/api/macrames', (req, res) => {
	res.send(macrames);
});

app.get('/api/macrames/:id', (req, res) => {
	const macrame = macrames.filter(macrame => macrame.id.toString() === req.params.id)[0];
	res.status(200).json(macrame);
});

app.post('/api/macrames', (req, res) => {
	if (req.body.id !== undefined) macrames.push(req.body);
	res.status(201).json(macrames);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});