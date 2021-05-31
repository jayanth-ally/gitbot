const SlackBot = require('slackbots');
const cron = require('node-cron');
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'github-bot'
})

const params = {
    icon_emoji: ':robot_face:'
}

// bot.on('start', () => {

//     bot.postMessageToChannel(
//         'github-bot',
//         'Hello',
//         params
//     );
// })

bot.on('error', (err) => {
    console.log(err);
})

cron.schedule('*/2 * * * *', () => {
    console.log('running a task every two minutes');
    // sendMessageToUser();
});
  
const sendMessageToUser = () => {
    bot.postMessageToUser(
        'jayanth',
        'Testing',
        params
    )
    bot.getChatId
}
