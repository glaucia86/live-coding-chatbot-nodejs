const restify = require('restify');
const builder = require('botbuilder');

// Configuração do server via Restify:
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("%s Aplicação está executando na porta %s",
        server.name,
        server.url
    );
});

let connector = new builder.ChatConnector({
    appId: "",
    appPassword: ""
});

server.post("/api/messages", connector.listen());

let bot = new builder.UniversalBot(connector, (session) => {
    session.send("Você disse....: %s", session.message.text);
});

