import { footer, generateField, header } from "./templates";
import { Field } from './fieldType';
export function formGenerator(fields:Field[], route:string){
    let result = header(route);
    fields.forEach((field:Field) => {
        result += generateField(field);
    });
    return result + footer;
}