import { footer, generateField, header } from "./templates";

export function formGenerator(fields:Field[], route:string){//TODO add types
    let result = header(route);
    fields.forEach((field:Field) => {//TODO add types
        result += generateField(field);
    });
    return result + footer;
}