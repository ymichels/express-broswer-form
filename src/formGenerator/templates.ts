export const header = (route: string) => `<h3>{{viewTitle}}</h3><form action="${route}" method="POST" autocomplete="off">`;

export const footer = `<div class="form-group">
    <button type="submit" class="btn btn-info"> Submit</button>
    </div></form>`;

function typeToInputType(type: string) {
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

export const generateField = (field: Field) => {
    return `<div class="form-group">
    <label>${field.description}</label>
    <input type="${typeToInputType(field.fieldType)}" class="form-control" name="${field.fieldName}" placeholder="${field.fieldName}" ${field.isRequired ? 'required' : ''}>
    </div>`;
}