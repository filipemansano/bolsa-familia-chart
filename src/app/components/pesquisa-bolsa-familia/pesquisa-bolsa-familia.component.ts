import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalidadeService } from 'src/app/services/localidade.service';
import { Estado } from 'src/app/models/ibge/estado';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { Municipio } from 'src/app/models/ibge/municipio';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BuscaMunicipio } from 'src/app/models/bolsa-familia/busca-municipio';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-pesquisa-bolsa-familia',
    templateUrl: './pesquisa-bolsa-familia.component.html',
    styleUrls: ['./pesquisa-bolsa-familia.component.scss']
})
export class PesquisaBolsaFamiliaComponent implements OnInit {

    public unsub$: Subject<any> = new Subject;
    public loading$:Subject<boolean> = new Subject;

    public isLoading:boolean = false;;

    public formPesquisa:FormGroup;
    public estados:Estado[] = [];
    public municipios:Municipio[] = [];

    public graficoInfo = {
        data: null,
        columnNames: [
            'Data',
            'Valor'
        ],
        options: {
            chartArea: {
                left: 100,
                top: 10,
                width: "100%",
                height: "70%"
            },
            hAxis: {
                format: 'MM/YYYY',
            },
            vAxis: {
                format: 'R$ #,###',
            },
            pointSize: 15,
            width: "100%",
            colors: [
                '#0080A4'
            ],
            legend: { position: 'none' }
        }
    };

    constructor(
        private formBuilder: FormBuilder,
        private localidadeService: LocalidadeService,
        private utils: UtilsService
    ) { }
    
    ngOnDestroy(): void {
        this.unsub$.next(null);
        this.unsub$.complete();
    }

    ngOnInit() {

        this.formPesquisa = this.formBuilder.group({
            estado: [null, [Validators.required]],
            municipio: [null, [Validators.required]],
        });

        this.loading$.next(true);
        this.localidadeService.getEstados().subscribe(estados => {
            this.estados = estados;
            this.loading$.next(false);
        });

        this.loading$.pipe(
            takeUntil(this.unsub$)
        ).subscribe(value => {
            
            this.isLoading = value;

            if(value){
                this.formPesquisa.disable()
            }else{
                this.formPesquisa.enable();
            }
        })
    }

    public estadoSelecionado(e: TypeaheadMatch){

        let estado:Estado = e.item;
        this.formPesquisa.get('municipio').setValue(null);
        this.graficoInfo.data = null;
        this.municipios = [];

        this.loading$.next(true);
        this.localidadeService.getMunicipios(estado).subscribe(municipios => {
            this.municipios = municipios;
            this.loading$.next(false);
        });
    }


    public municipioSelecionado(e: TypeaheadMatch){

        let municipio:Municipio = e.item;
        this.graficoInfo.data = null;

        this.loading$.next(true);

        var now = new Date();

        let data:any[] = [];
        let periodo = 12;

        for(let i = 0; i < periodo; i++){

            let month = now.getMonth() - 1;

            if(month < 0){
                now.setFullYear( now.getFullYear() - 1);
                now.setMonth( 11 );
                month = 11;
            }else{
                now.setMonth( month );
            }
            
            let finalMonth = (month + 1).toString();

            if(finalMonth.length == 1){
                finalMonth = "0"+finalMonth;
            }

            let date = `${now.getFullYear()}${finalMonth}`;

            this.localidadeService.getBolsaFamilia(municipio,date).subscribe(info => {
                
                if(data.length == (periodo-1)){
                    this.graficoInfo.data = data;
                    this.loading$.next(false);
                }

                data.push([
                    info.dataReferencia,
                    {v: info.valor, f: "R$ " + this.utils.number_format(info.valor,0,",",".")}
                ])
            });
        } 
    }

}
