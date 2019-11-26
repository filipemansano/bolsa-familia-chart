import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    public number_format (number, decimals, dec_point, thousands_sep) {

        // Strip all characters but numerical ones.
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        let n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
            };

        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        let x = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (x[0].length > 3) {
            x[0] = x[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((x[1] || '').length < prec) {
            x[1] = x[1] || '';
            x[1] += new Array(prec - x[1].length + 1).join('0');
        }

        return x.join(dec);
    }

    public brDateToDateObject(date:string): Date {
        let pieces = date.split("/");
        return new Date(parseInt(pieces[2]), parseInt(pieces[1]), parseInt(pieces[0]));
    }
}
