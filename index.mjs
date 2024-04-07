import express from 'express';
import bodyParser from 'body-parser';
import clipboardy from 'clipboardy';

const app = express();
const port = 3000;

app.use(bodyParser.json());

let data = '';

app.post('/super-secret-domain-trust-yes-beans', async (req, res) => {
    if (req && req.body && req.body.signature === "hello_im_an_executor") {
        // console.log("Request allowed!");

        try {
            const c = await clipboardy.read();

            data = c;

            console.log('Success:', c);
            res.status(200)
        } catch (error) {
            // console.error('Error:', error);
            res.sendStatus(500);
        }
    }
});

app.get('/super-secret-domain-trust-yes-beans', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server @ :${port}`);
});