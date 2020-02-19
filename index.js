const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/mailing', async (req, res) => {
  const { email } = req.body;
  fs.appendFile('mailing.csv', `${email},\n`, err => {
    if (err) throw err;
  });
  res.send({ message: 'Arquivo atualizado!', email });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor online em http://localhost:${process.env.PORT}`);
});
