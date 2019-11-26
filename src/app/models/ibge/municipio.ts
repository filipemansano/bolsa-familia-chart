import { Localidade } from './localidade';
import { MicroRegiao } from './microregiao';

export class Municipio extends Localidade {

    microRegiao:MicroRegiao

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: Municipio): Municipio {

        if (jsonData == null) {
            return null;
        }

        let obj = Object.assign(new Municipio(), jsonData);
        obj.microRegiao = MicroRegiao.fromJson(obj.microRegiao);

        return obj;
    }
}