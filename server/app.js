
const express = require('express');
const service = require('../server/service');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const http = require('http');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// // app.use(cors());
app.get('/api/productList', (req, res) => {
    service.read(res);
});

app.post('/api/cartData',  (req, res) => {
    service.addtocart(req.body,res);
});
app.get('/api/getCartData', (req, res) => {
    service.getCartData(res);
});
app.get('/api/getCartData', (req, res) => {
    service.getCartData(res);
});
app.get('/api/totalDiscount', (req, res) => {
    service.totalDiscount(res);
});
app.set('port', port);
// module.exports = router;
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
