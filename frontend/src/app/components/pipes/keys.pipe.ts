import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "keys",
    pure: false
})

// PIPE QUE DEVUELVE LAS CLAVES DE UN ARRAR
export class KeysPipe implements PipeTransform {
    transform(value: any): any {
        let keys = [];
        for (let key in value) {
            keys.push(key);
        }
        return keys;
    }
}
