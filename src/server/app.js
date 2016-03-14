import express from 'express';
import {dataSourceRoute} from 'falcor-express';
import {Router} from './router';
import {render} from './renderer';

const app = express();
app.use('/model.json', dataSourceRoute((req, res) => new Router()));
app.use('/serverRender', render);
app.use(express.static(__dirname + '/../../'));

app.listen(4000);

