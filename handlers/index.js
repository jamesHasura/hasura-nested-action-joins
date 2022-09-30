const express = require('express');
const app = express();

const resBody = {
  name: 'A User',
  favorite_author: {
    id: 2,
  },
};

app.use(express.json());

app.post('/user', (req, res) => {
  console.log('/users hit');
  res.status(201).json(resBody);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
