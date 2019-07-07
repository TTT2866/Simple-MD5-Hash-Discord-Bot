const Discord = require("discord.js");
const client = new Discord.Client();
var md5 = require('md5');

client.login('123456789'); //Bot login token goes here
console.log("Bot running..");


//catch message here
client.on('message', message => {
	if (message.author.bot) return;
    var x = message.content.substring(0, 4);
	
	if (x == ".md5") {
		var string = message.content.substring(5);
	console.log("Detected md5 call");
	message.channel.send("The MD5 hash of ``" + string + "`` is..");
	message.channel.send(md5(string));
	}})
