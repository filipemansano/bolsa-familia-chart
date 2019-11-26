export class Tipo {
    public id: number;
    public descricao: string
    public descricaoDetalhada: string;

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: Tipo): Tipo {

        if (jsonData == null) {
            return null;
        }

        return Object.assign(new Tipo(), jsonData);
    }
}