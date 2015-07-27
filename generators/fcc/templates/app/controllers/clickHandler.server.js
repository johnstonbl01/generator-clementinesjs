'use strict';

var Click = require('../models/clicks');

function ClickHandler () {

	this.getClicks = function (req, res) {
		Click
			.findOne({}, { '_id': false })
			.exec(function (err, result) {

					if (err) { throw err; }

					var clickResults = [];

					if (result) {
						clickResults.push(result);
						res.json(clickResults);

					} else {
						var newDoc = new Click({ 'clicks': 0 });
						newDoc.save(function (err, doc) {
							if (err) { throw err; }

							var newRecord = { 'clicks': doc.clicks };

							clickResults.push(newRecord);
							res.json(clickResults);
						});

					}
				});
	};

	this.addClick = function (req, res) {
		Click
			.findOneAndUpdate({}, { $inc: { 'clicks': 1 } },
				function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

	this.resetClicks = function (req, res) {
		Click
			.findOneAndUpdate({}, { 'clicks': 0 },
				function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

}

module.exports = ClickHandler;
