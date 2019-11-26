import { Municipio } from './municipio';
import { Tipo } from './tipo';

export class BuscaMunicipio {
    id:number;
    dataReferencia:Date|string;
    municipio:Municipio;
    tipo:Tipo;
    valor:number;
    quantidadeBeneficiados:number;

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: BuscaMunicipio): BuscaMunicipio {

        if (jsonData == null) {
            return null;
        }

        let date = (<string> jsonData.dataReferencia).split("/");


        let obj = Object.assign(new BuscaMunicipio(), jsonData);
        obj.municipio = Municipio.fromJson(jsonData.municipio);
        obj.tipo = Tipo.fromJson(jsonData.tipo);
        obj.dataReferencia = new Date(parseInt(date[2]), parseInt(date[1]), parseInt(date[0]));

        return obj;
    }
}