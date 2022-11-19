const {VK, Keyboard} = require('vk-io');
const vk = new VK();
const commands = [];
const path = require('path')
const fs = require(`fs`);
const { createCanvas, loadImage } = require('canvas');
// process.on('uncaughtException', function(err) {
//     //console.log('uncaughtException caught the error');
// });
// process.on('ExecuteError', function(err) {
//     //console.log('uncaughtException caught the error');
// });

vk.setOptions({
    token: '',
});
const { updates, snippets } = vk;
console.log(`start`)
updates.start();





updates.on('message', async (message) => {
console.log(message.attachments);
console.log(`hello`);
if(message.text.startsWith('/')) { message.text = message.text.replace(/^\//i, '') }

 if (message.is("message") && message.isOutbox) return;
    const bot = (text, params) => {
        return message.send(`${message.senderId}, ${text}`, params);
    }

    const command = commands.find(x => x[0].test(message.text));

    if (!command) {
    }

    message.args = message.text.match(command[0]);
    await command[1](message, bot);

});

const cmd = {
    hear: (p, f) => {
        commands.push([p, f]);
    }
}


cmd.hear(/^(?:скажи)\s([^]+)$/i, async (message) => {
    message.send(message.args[1]);
    
    
    });   

const potencial_user = {profile:`test`,head:`/valeroid.png`,body:`privet`,legs:`privet`,lhead:`privet`,phead:`privet`,glass:`privet`}
    




    
cmd.hear(/^(?:чатид)$/i,async (message) => { 

        const canvas = createCanvas(600, 300);

        // какашки для идентификации холста 600 - x / 300 - y
        const ctxx = canvas.getContext('2d');    
        

        const dolbayob = await loadImage(__dirname+`/gleb_nosov.jpg`)
        const telo = await loadImage(__dirname+potencial_user.head);

        //в этой консте -> кукует подгруженный хуй, с которым будем работать
//__dirname+`/gleb_nosov.jpg` -> путь к нашему бамжу
// telo -> путь к файлам
        ctxx.drawImage(dolbayob, 0, 0, 600, 300);
        ctxx.fillStyle = "#000000"; 
        ctxx.font = "33px Tahoma";
        ctxx.fillText(`dolbayob`, 0, 0); 

        //на холст срётся наш потенциальный педуард с кордами на весь хохолст, алёша


ctxx.drawImage(telo,226,143,102,79) 
//226 - x , 143 - Y / 102 - ширина - 79 высота

/*с потенциальной базы данных берутся названия файлов и выкакиваются на фон

что бы не ебатся потом с кордами а запилить их навсегда, можешь наделать шаблов себе под сраку, что бы потом по ним делать недокостюмчеки олег
*/
//грузим говно в вк

        vk.api.photos.getMessagesUploadServer
        const foto = await vk.upload.messagePhoto({
                           source: canvas.toBuffer()
                       });
       return  message.send(`на смари,билять\n`, {attachment: foto,random_id:Math.random(0,100000000)});

        });   
    
