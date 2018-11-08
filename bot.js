const Dupa = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', (input) => {
  console.log(`Received: ${input}`);
});
const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const bot = new Discord.Client();
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
 
client.login(config.token);
bot.login(config.token);
bot.on('ready', () => {
  bot.user.setActivity('Ich bin Deutscher Hip Hop', { type: 'WATCHING' }, { url: "https://www.youtube.com/watch?v=qLdxs74hL1U" })
  bot.user.setStatus('dnd')
})
console.log(`Pomyślnie wystartowano`);
client.on('message', message => {
    if(message.content.toLowerCase() === 'sentino')

        message.channel.send({
    file: "https://f4.bcbits.com/img/a0381007741_10.jpg"
})
    else if(message.content.toLowerCase().includes('senti'))
    {
        message.channel.send("https://open.spotify.com/track/73Y3T1liCQuaUruFg0yP9b");    }
   if(message.content.toLowerCase().includes('lodz','zlodziej','kurwa'))
	        message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407712474103818/small.png" // Or replace with F
})
else if(message.content.toLowerCase().includes('bałuty'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407757986758687/full.png"
})
else if(message.content.toLowerCase().includes('baluty'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407757986758687/full.png"
})
else if(message.content.toLowerCase().includes('łódź'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407712474103818/small.png" // Or replace with F
})
else if(message.content.toLowerCase().includes('złodziej'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407712474103818/small.png" // Or replace with F
})
else if(message.content.toLowerCase().includes('lks'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407768560336896/lks.jpg"
})
else if(message.content.toLowerCase().includes('łks'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/472165887148032000/475407768560336896/lks.jpg" // Or replace with F
})
else if(message.content.toLowerCase().includes('se ba'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/469539180347654154/489458311725449236/19420532_1930420800550034_5070305695162188535_n.png"
})
else if(message.content.toLowerCase().includes('seba'))
                message.channel.send({
 file: "https://cdn.discordapp.com/attachments/469539180347654154/489458311725449236/19420532_1930420800550034_5070305695162188535_n.png"
})
else if(message.content.toLowerCase().includes('zlew'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/486613763714449418/487349492270497803/22-20-53-dfONz.jpg"
})
else if(message.content.toLowerCase().includes('diho'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/490201614024704020/490426613104640001/unknown.png"
})
else if(message.content.toLowerCase().includes('uhuhuhu'))
		message.channel.send('hahaha')
else if(message.content.toLowerCase().includes('kapovsky'))
		message.channel.send('🗣')
else if(message.content.toLowerCase().includes('🗣'))
		message.channel.send('ZNOWU NADAJE JEBANIEC')
else if(message.content.toLowerCase().includes(':speaking_head:'))
		message.channel.send('ZNOWU NADAJE JEBANIEC')
else if(message.content.toLowerCase().includes('pokój'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/497824872756674560/498471568750673920/kutassdfsdfs.png"
})
else if(message.content.toLowerCase().includes('puszka'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/497824872756674560/498889620919156756/43422196_1857188007735298_7672357555544260608_n.png"
})
else if(message.content.toLowerCase().includes('pokoj'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/497824872756674560/498893033882910720/kutassdfsdfs.png"
})
else if(message.content.toLowerCase().includes('montana'))
		message.channel.send({
 file: "http://pedo.party/ZyBNmB33tqwuc9G.png"
})
else if(message.content.toLowerCase().includes('gdzie jest moj samsung'))
		message.channel.send('dzwoni moj maxcom')
else if(message.content.toLowerCase().includes('kupadupa'))
		message.channel.send('\<@168649104035938305>')
else if(message.content.toLowerCase().includes('@MrNovak'))
		message.channel.send('\<@168649104035938305>')
else if(message.content.toLowerCase().includes('\@<168649104035938305>'))
		message.channel.send('\<@168649104035938305>')
else if(message.content.toLowerCase().includes('!s invite'))
		message.channel.send('https://discordapp.com/oauth2/authorize?client_id=486520953552109568&scope=bot')
else if(message.content.toLowerCase().includes('bingo'))
		message.channel.send({
 file: "https://media.discordapp.net/attachments/151435264764411904/501839435873124352/JPEG_20180609_133619.jpg"
})
else if(message.content.toLowerCase().includes('rose moet'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/314860074759749633/485747828405043227/Cyberfox_2018-09-02_11-47-45.png"
})
else if(message.content.toLowerCase().includes('xenon'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/502129186295775256/509809206086598656/12311058_1205365802824028_7475317206710761741_n.png"
})
else if(message.content.toLowerCase().includes('ksenon'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/502129186295775256/509809206086598656/12311058_1205365802824028_7475317206710761741_n.png"
})
else if(message.content.toLowerCase().includes('gzuz'))
		message.channel.send({
 file: "http://cute.gltdv.club/files/SzcH_coKv.png"
})
else if(message.content.toLowerCase().includes('ufo361'))
		message.channel.send({
 file: "https://cdn.discordapp.com/attachments/502129186295775256/510160487812431875/951904201-schock-ufo361-hoert-mit-musik-auf-fans-haben-dunklen-verdacht-P02HKQAZla7.png"
})
else if(message.content.toLowerCase().includes('optimal'))
		message.channel.send({
 file: "https://pbs.twimg.com/media/Cee4H46WQAMQe7v.jpg"
})
});
client.on('error', console.error);



