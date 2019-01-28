const restify = require('restify');
const builder = require('botbuilder');

// Configuração do server via Restify:
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log('%s Aplicação está executando na porta %s',
    server.name,
    server.url);
});

const connector = new builder.ChatConnector({
  appId: '',
  appPassword: '',
});

server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector, (session) => {
  session.send('Você disse....: %s', session.message.text);
});
