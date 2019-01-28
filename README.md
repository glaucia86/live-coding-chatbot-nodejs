# Live Coding Twitch.tv: Desenvolvendo um ChatBot em Node.js com Microsoft Bot Framework v.3 - Pizzaria Italiana

[![Evento-Twitch-Glaucia-Lemos.jpg](https://i.postimg.cc/hvyt5yXy/Evento-Twitch-Glaucia-Lemos.jpg)](https://postimg.cc/K3TbK5rB)

## Recursos Utilizados no Desenvolvimento da Aplicação: :rocket:

* Visual Studio Code - **[DOWNLOAD AQUI](https://code.visualstudio.com/)**
* Node.JS - **[DOWNLOAD AQUI](https://nodejs.org/en/)**
* Microsoft Bot Framework Emulator - **[DOWNLOAD AQUI](https://github.com/Microsoft/BotFramework-Emulator/releases
)**
* Instalar a versão Python 2.x - **[DOWNLOAD AQUI](https://www.python.org/downloads/)**
* Instalar globalmente o node-gyp - **[DOCUMENTAÇÃO PARA INSTALAÇÃO DE MANEIRA CORRETA AQUI](https://github.com/nodejs/node-gyp)**

* Cadastro no site LUIS: **https://www.luis.ai/**

* Cadastro no site Azure: **https://azure.microsoft.com/pt-br/services/bot-service/**

OBS.: Quando seguir o passo da instalação do **node-gyp** é de suma importância que façam o seguinte:

**Passo 1:** criar manualmente o arquivo **binding.gyp** dentro do diretório do node_modules do appData, conforme o exemplo abaixo:

```

> C:\users\UserName\appdata\roaming\npm\node_modules\node-gyp

```

**Passo 2:** incluir no arquivo **binding.gyp** o seguinte bloco de código e salve:

```

{
    "targets": [{
    "target_name": "binding",
    "sources": [ "build/Release/binding.node" ]
    }]
}

```

**Passo 3:** feito isso, agore execute os seguintes comandos abaixo, dentro do mesmo diretório do appData:

```

> node-gyp configure

```

```

> node-gyp configure --msvs_version=2015

```

```

> node-gyp build

```

Seguindo todos esses passos, vocês estarão prontos para instalar as depedências na pasta do projeto! ;)


## Dúvidas?! :triangular_flag_on_post:

Se tiverem alguma dúvida referente ao código feito ou para configurar o ambiente bastam criar uma Issue aqui no GitHub que estarei respondendo a vocês!! :heart: :heart: :heart: :blush:

<p align="center">
    <img src="https://i.imgur.com/dLSzYDT.gif"/>  
</p>
