import { Localidade } from './localidade';
import { Regiao } from './regiao';

export class Estado extends Localidade {

    sigla: string;
    regiao: Regiao

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: Estado): Estado {

        if (jsonData == null) {
            return null;
        }

        let obj = Object.assign(new Estado(), jsonData);
        obj.regiao = Regiao.fromJson(obj.regiao);

        return obj;
    }
}
