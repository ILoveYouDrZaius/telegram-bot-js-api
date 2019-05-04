import TelegramBot from 'node-telegram-bot-api';

export class Bot {
    constructor(token) {
        if (!Bot.instance) {
            this.behaviours = [];
            this.bot = new TelegramBot(token, {polling: true});
            Bot.instance = this;
        }

        return this.instance;
    }

    addBehaviour(behaviour) {
        this.bot.onText(behaviour.getRegex(), (msg) => {
            const repplie = behaviour.replies[Math.floor(Math.random() * behaviour.replies.length)];
            this.bot.sendMessage(msg.chat.id, repplie);
        });
        this.behaviours.push(behaviour);
    }
    
    removeBehaviour(id) {
        const behaviourToRemove = this.behaviours.find(behaviour => behaviour.id === id);
        const regexToRemove = behaviourToRemove.getRegex();
        
        behaviourToRemove.restart();
        this.bot.removeTextListener(regexToRemove);
        this.behaviours = this.behaviours.filter(behaviour => behaviour.id !== id);
    }

}
