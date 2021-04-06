const chalk = require("chalk");
const moment = require("moment");
const db = require('quick.db');
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
module.exports = client => {

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
/*client.user.setActivity(
'v2 Uptading Loading... | Bakım Çalışması ...');*/
  var oyun = [
    `a?yardım || Sponsor Aranıyor.`,
    `a?yardım || Sistemler Sıfırlandı Tekrar Kurun !`,
    `a?yardım || Web Sitemiz www.airus.cf`,
    `a?sponsor || Sponsor HazalHost`
  ];
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);
    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
