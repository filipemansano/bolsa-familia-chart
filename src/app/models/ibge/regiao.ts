import { Localidade } from './localidade';

export class Regiao extends Localidade {

    sigla: string;

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: Regiao): Regiao {

        if (jsonData == null) {
            return null;
        }

        return Object.assign(new Regiao(), jsonData);
    }
}