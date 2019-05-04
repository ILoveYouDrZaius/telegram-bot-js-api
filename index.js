import { Bot } from './Bot';
import { Behaviour } from './Behaviour';

import token from './token';

const bot = new Bot(token.token);

const behaviourObject = new Behaviour([ 'haha', 'no', 'maybe' ], [ 'omggggggg' ], 1);
bot.addBehaviour(behaviourObject);
