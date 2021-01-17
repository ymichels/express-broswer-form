"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formGenerator = void 0;
const templates_1 = require("./templates");
function formGenerator(fields, route) {
    let result = templates_1.header(route);
    fields.forEach((field) => {
        result += templates_1.generateField(field);
    });
    return result + templates_1.footer;
}
exports.formGenerator = formGenerator;
//# sourceMappingURL=formGenerator.js.map