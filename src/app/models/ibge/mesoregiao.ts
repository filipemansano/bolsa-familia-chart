import { Localidade } from './localidade';
import { Estado } from './estado';

export class MesoRegiao extends Localidade{
    uf: Estado

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: MesoRegiao): MesoRegiao {

        if (jsonData == null) {
            return null;
        }

        let obj = Object.assign(new MesoRegiao(), jsonData);
        obj.uf = Estado.fromJson(obj.uf);

        return obj;
    }
}