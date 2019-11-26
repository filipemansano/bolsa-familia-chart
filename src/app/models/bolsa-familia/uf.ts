export class Uf {
    public sigla:string;
    public nome:string

    /**
     * Cria a instância da classe atráves do json retornado do backend
     * @param jsonData classe generica retornada do httpcliente
     */
    static fromJson(jsonData: Uf): Uf {

        if (jsonData == null) {
            return null;
        }

        return Object.assign(new Uf(), jsonData);
    }
}