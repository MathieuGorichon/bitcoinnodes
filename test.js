var _ = require('lodash');

var nodes = {"timestamp": 1452256649, "total_nodes": 5682, "latest_height": 392321, "nodes": {"180.210.34.58:9801": [70002, "/Satoshi:0.11.0/", 1452143342, 1, 392321, "180.210.34.58", "Seoul", "KR", 37.5985, 126.9783, "Asia/Seoul", "AS38661", "HCLC"], "[2605:6400:20:57e::d06]:8333": [70012, "/Satoshi:0.12.99/", 1452117635, 4, 392321, "dog.vps.ad64.net", null, "US", 38.0, -97.0, null, "AS53667", "FranTech Solutions"], "104.155.13.126:8333": [70010, "/Bitcoin XT:0.11.0D/", 1451907505, 3, 392197, "126.13.155.104.bc.googleusercontent.com", "Mountain View", "US", 37.4192, -122.0574, "America/Los_Angeles", "AS15169", "Google Inc."], "144.76.244.19:8333": [70002, "/Satoshi:0.11.1/", 1451907505, 1, 392321, "oxygen.pond.sub.org", null, "DE", 51.0, 9.0, "Europe/Berlin", "AS24940", "Hetzner Online GmbH"], "176.86.146.229:8333": [70002, "/Satoshi:0.11.2/", 1452216442, 1, 392321, "229.Red-176-86-146.dynamicIP.rima-tde.net", "Fuengirola", "ES", 36.54, -4.6247, "Africa/Ceuta", "AS3352", "TELEFONICA DE ESPANA"], "76.28.154.232:8333": [70002, "/Satoshi:0.11.2/", 1452238112, 1, 392321, "c-76-28-154-232.hsd1.wa.comcast.net", "Tacoma", "US", 47.1316, -122.4068, "America/Los_Angeles", "AS7922", "Comcast Cable Communications, Inc."]}};

_.keys(nodes.nodes).forEach(function(n) {
  console.log(n);
});
