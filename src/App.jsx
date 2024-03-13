
const buttons = require ('twilio-buttons');
const twilio = require('twilio');

const {TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER} = process.env;

const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  process.env.TWILIO_NUMBER,
);

const number = process.env.TWILIO_NUMBER;

const welcomeMessage = 'Olá! Seja bem-vindo ao chatbot da Walle. O que você gostaria de saber?';

const options = [
  {
    text: 'Sobre a empresa',
    value: 'sobre',
  },
  {
    text: 'Portfólio',
    value: 'portfolio',
  },
  {
    text: 'Depoimentos',
    value: 'depoimentos',
  },
  {
    text: 'Contato',
    value: 'contato',
  },
];

const sendWelcomeMessage = (to) => {
  client.messages.create({
    body: welcomeMessage,
    from: number,
    to,
  });
};

const sendOptions = (to, imageURL) => {
  client.messages.create({
    body: 'Selecione uma opção:',
    from: number,
    to,
    mediaUrl: [
      imageURL,
      
    ],
  });
};

const imageURL = 'https://drive.google.com/file/d/1t7ocEu6Z14hqhujLhlq3GuXpTnYz3azT/view?usp=drive_link'
('+5562999326411', imageURL);

app.post('/webhook', (req, res) => {
  const { body } = req;
  const { From, Body } = body;

  if (Body === 'oi') {
    sendWelcomeMessage(From);
  } else if (Body === 'sobre: Você tera uma esperiência inesquecivel com nosso RoboCall') {
    // Enviar informações sobre a empresa
  } else if (Body === 'portfolio: Tesla, Toyota e Motorola') {
    // Enviar link para o portfólio
  } else if (Body === 'depoimentos: Teste') {
    // Enviar depoimentos de clientes
  } else if (Body === 'contato: 62 992614510') {
    // Enviar informações de contato
  } else {
    sendOptions(From);
  }

  res.send('OK');
});

app.listen(3000);



