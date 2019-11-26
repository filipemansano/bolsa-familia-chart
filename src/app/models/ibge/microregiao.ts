import { Localidade } from './localidade';
import { MesoRegiao } from './mesoregiao';

export class MicroRegiao extends Localidade{
    mesoRegiao:MesoRegiao

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: MicroRegiao): MicroRegiao {

        if (jsonData == null) {
            return null;
        }

        let obj = Object.assign(new MicroRegiao(), jsonData);
        obj.mesoRegiao = MesoRegiao.fromJson(obj.mesoRegiao);

        return obj;
    }
}