"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateField = exports.footer = exports.header = void 0;
exports.header = (route) => `<h3>{{viewTitle}}</h3><form action="${route}" method="POST" autocomplete="off">`;
exports.footer = `<div class="form-group">
    <button type="submit" class="btn btn-info"> Submit</button>
    </div></form>`;
function typeToInputType(type) {
    switch (type) {
        case 'string':
            return 'text';
        case 'integer':
            return 'number';
        case 'boolean':
            return 'checkbox';
        case 'date':
            return 'date';
        default:
            return 'text';
    }
}
exports.generateField = (field) => {
    return `<div class="form-group">
    <label>${field.description}</label>
    <input type="${typeToInputType(field.fieldType)}" class="form-control" name="${field.fieldName}" placeholder="${field.fieldName}" ${field.isRequired ? 'required' : ''}>
    </div>`;
};
//# sourceMappingURL=templates.js.map