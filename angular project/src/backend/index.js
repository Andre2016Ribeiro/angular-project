"use strict";
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const cors = require('cors')

const  app  =  express();
const  router  =  express.Router();

app.use(cors())

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());

router.post('/login', (req, res) => {
  const  email  =  req.body.email;
  const  password  =  req.body.pass;

  console.log("chegou");

  res.status(200).send({ "status": "ok", "email": email, "password": password });
});

app.use(router);
const  port  =  process.env.PORT  ||  3000;
const  server  =  app.listen(port, () => {
  console.log('Server listening at http://localhost:'  +  port);
});
