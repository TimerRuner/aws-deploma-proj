import {config} from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload'
import router from './src/routes/index.js';

config();

const app = express();
app.use(express.json())
app.use(fileUpload())
app.use('/', router)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`));