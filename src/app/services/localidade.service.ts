import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../models/ibge/estado';
import { map } from 'rxjs/operators';
import { Municipio } from '../models/ibge/municipio';
import { BuscaMunicipio } from '../models/bolsa-familia/busca-municipio';


const IBGE_ENDPOINT = 'https://servicodados.ibge.gov.br/api';
const BOLSAFAMILIA_ENDPOINT = 'http://www.transparencia.gov.br/api-de-dados';

@Injectable({
    providedIn: 'root'
})
export class LocalidadeService {

    constructor(
        private http: HttpClient
    ) { }

    public getEstados(): Observable<Estado[]>{
        return this.http.get(`${IBGE_ENDPOINT}/v1/localidades/estados`).pipe(
            map((response: Estado[]) => {

                let estados:Estado[] = [];

                // simples casting não transforma subobjetos em classes
                response.forEach(estado => {
                    estados.push(Estado.fromJson(estado));
                });
                
                return estados;
            })
        )
    }

    public getMunicipios(estado:Estado): Observable<Municipio[]>{
        
        return this.http.get(`${IBGE_ENDPOINT}/v1/localidades/estados/${estado.id}/municipios`).pipe(
            map((response: Municipio[]) => {

                let municipios:Municipio[] = [];

                // simples casting não transforma subobjetos em classes
                response.forEach(municipio => {
                    municipios.push(Municipio.fromJson(municipio));
                });
                
                return municipios;
            })
        )
    }

    public getBolsaFamilia(municipio:Municipio, data:string): Observable<BuscaMunicipio>{
        
        return this.http.get(`${BOLSAFAMILIA_ENDPOINT}/bolsa-familia-por-municipio`, {
            params: new HttpParams()
                .set('mesAno', data)
                .set('codigoIbge', municipio.id.toString())
        }).pipe(
            map((response: BuscaMunicipio[]) => {
                return BuscaMunicipio.fromJson(response.shift());
            })
        )
    }
}