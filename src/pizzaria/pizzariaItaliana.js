/**
 * Arquivo: pizzaria/pizzariaItaliana.js
 * Data: 27/01/2019
 * Descrição: Desenvolvimento de um ChatBot de pedido de pizzas integrado com o Luis.ai
 * Author: Glaucia Lemos
 * 
 */

require('dotenv-extended').load({
    path: "../.env"
});

const restify = require('restify');
const builder = require('botbuilder');
const moment = require('moment');

const server = restify.createServer();

// Configuração do ChatBot:
let connector = new builder.ChatConnector({
    appId: "",
    appPassword: ""
});

let bot = new builder.UniversalBot(connector);

// Configuração do LUIS:
let recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
let intents = new builder.IntentDialog({ recognizers: [recognizer] });

// Configuração dos 'Intents' (Intenções):

// Endpoint - Saudar:
intents.matches('Saudar', (session, results) => {
    session.send('Oi! Tudo bem? Em que posso ajudar?');
});

// Endpoint - Pedir:
intents.matches('Pedir', [
    (session, args, next) => {
        var pizzas = [
            "Quatro Queijos",
            "Calabreza",
            "Frango Catupiri",
            "Portuguesa",
            "Mussarela",
            "Especial da Casa",
            "Romeo e Julieta",
            "Baiana"
        ];

        let entityPizza = builder.EntityRecognizer.findEntity(args.entities, 'Pizza');

        // Fazer um match da escolha da pizza que o usuário fez:
        if (entityPizza) {
            var match = builder.EntityRecognizer.findBestMatch(pizzas, entityPizza.entity);
        }

        if (!match) {
            builder.Prompts.choice(session, 'No momento só temos essas pizzas disponíveis! Qual que você gostaria de pedir?', pizza);
        } else {
            next({ response: match });
        }
    },
    (session, results) => {
        // Aqui é para indicar em quanto tempo chegará o pedido da pizza do usuário:
        if (results.response) {
            var time = moment().add(30, 'm');

            session.dialogData.time = time.format('HH:mm');
            session.send("Perfeito! Sua pizza de **%s** chegará às **%s**", results.response.entity, session.dialogData.time);
        } else {
            session.send('Sem problemas! Se não gostarem, podem pedir numa próxima vez!');
        }
    }
]);

// Endpoint - Cancelar:
intents.matches('Cancelar', (session, results) => {
    session.send('Pedido cancelado com sucesso! Muito Obrigada(o)');
});

// Endpoint - Verificar:
intents.matches('Verificar', (session, results) => {
    session.send('Sua pizza chegará às **%s**', session.dialogData.time);
});

// Endpoint - Default:
let teste = intents.onDefault(
    builder.DialogAction.send('Desculpe! Mas, não entendi o que você quis dizer/pedir!')
);

bot.dialog('/', intents);

// Configuração do Servidor via restify:
server.post('/api/messages', connector.listen());

server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('Aplicação está sendo executada na porta %s', server.name, server.url);
});