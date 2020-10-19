const mongoose = require('mongoose');
// const validator = require('validator'); //next, validate address, phone no, etc

const restaurantSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	ratings: {
		type: String,
		required: true,
		trim: true,
	},
	cuisines: [
		{
			cuisine: {
				type: String,
				required: true,
			},
		},
	],
	menus: [
		{
			item: {
				type: String,
				required: true,
			},

			price: {
				type: String,
				required: true,
			},

			desc: {
				type: String,
				required: true,
			},
		},
	],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
