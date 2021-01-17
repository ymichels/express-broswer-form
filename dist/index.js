"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFormRouter = exports.prepareAppForForms = void 0;
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const formGenerator_1 = require("./formGenerator/formGenerator");
function prepareAppForForms(app) {
    app.use(body_parser_1.default.urlencoded({
        extended: true
    }));
    app.use(body_parser_1.default.json());
    app.set('views', path_1.default.join(__dirname, '/views/'));
    app.engine('hbs', express_handlebars_1.default({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
    app.set('view engine', 'hbs');
    app.use('/', express_1.default.static(path_1.default.join(__dirname, './views')));
}
exports.prepareAppForForms = prepareAppForForms;
function generateFormRouter(fields, route, resultHandler) {
    const form = formGenerator_1.formGenerator(fields, route);
    const formName = route.replace('/', '');
    fs_1.default.writeFile(`${path_1.default.join(__dirname, './views')}/${formName}.hbs`, form, () => { console.log('successfuly generated form'); });
    const router = express_1.default.Router();
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
exports.generateFormRouter = generateFormRouter;
//# sourceMappingURL=index.js.map