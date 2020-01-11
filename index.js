var mineflayer = require('mineflayer');
var options = {
  host: "ip",
  port: 25565,
  username: "ANTICLOSE"
};

var bot = mineflayer.createBot(options);

bindEvents(bot);

function bindEvents(bot) {
    bot.on('login', function() {
      console.log("I logged in");
      console.log("settings", bot.settings);
    });

    bot.on('kicked', function(reason) {
      console.log("I got kicked for", reason);

      bot = mineflayer.createBot(options);
      bindEvents(bot);
    });
}
