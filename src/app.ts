import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import fs from 'fs';
import bodyparser from 'body-parser';
import { Field } from './formGenerator/fieldType';
import { formGenerator } from './formGenerator/formGenerator';
export function prepareAppForForms(app: any) {
    app.use(bodyparser.urlencoded({
        extended: true
    }));
    app.use(bodyparser.json());
    app.set('views', path.join(__dirname, '/views/'));
    app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
    app.set('view engine', 'hbs');
    app.use('/', express.static(path.join(__dirname, './views')))
}
export function generateFormRouter(fields: Field[], route: string, resultHandler: (body: any) => any) {
    const form = formGenerator(fields, route);
    const formName = route.replace('/', '');
    fs.writeFile(`${path.join(__dirname, './views')}/${formName}.hbs`, form, () => { console.log('successfuly generated form') });
    const router = express.Router();
    router.get('/', (req, res) => {
        res.render(formName, {
            viewTitle: formName
        });
    });
    router.post('/', (req, res) => {
        res.status(200).send(resultHandler(req.body));
    });

    return router;
}