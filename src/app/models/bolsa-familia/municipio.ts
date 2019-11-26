import { Uf } from './uf';

export class Municipio {
    public codigoIBGE: string;
    nomeIBGE: string;
    pais: string;
    uf: Uf;

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: Municipio): Municipio {

        if (jsonData == null) {
            return null;
        }

        let obj = Object.assign(new Municipio(), jsonData);
        obj.uf = Uf.fromJson(obj.uf);

        return obj;
    }
}