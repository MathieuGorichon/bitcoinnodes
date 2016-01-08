var request = require('request');
var config = require('./config.js');
var _ = require('lodash');

var stats = {};

var bitnodesUrl = 'https://bitnodes.21.co/api/v1/snapshots/latest/';

var nodesByUserAgentMap = {};

stats.getNodesByUserAgent = () => nodesByUserAgentMap;

var updateStats = function() {
	request({uri: bitnodesUrl,
             proxy: config.proxy}, function (error, response, body) {
        if (error) {
            console.log(error);
        }
        if (!error && response.statusCode == 200) {
            var answer = JSON.parse(body);
			var ret = _(answer.nodes)
			             .groupBy(n => n[1]);
    		console.log(ret);
		}
	});
}

// Timer
updateStats();
setInterval(updateStats, 100000);

module.exports = stats;