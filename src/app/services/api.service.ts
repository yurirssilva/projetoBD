import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const CURRENT_URL_API = 'https://chamados-andro.herokuapp.com/'

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(
        public http: HttpClient
    ) { }

    post(body, endpoint) {
        return new Promise<any>(done => {
            console.log('body: ', body);
            const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
            let data = null;
            this.http.post(CURRENT_URL_API + endpoint, body, { headers: hdrs }).subscribe(dados => {
                data = dados;
                console.log('dados aleatórios: ', dados);
                done(dados)

            }, err => {
                data = err
                console.log('Error: ', err);
                done(err)
            });
        })
    }

    get(endpoint) {
        return new Promise<any>(done => {
            const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
            let data = null;
            this.http.get(CURRENT_URL_API + endpoint, { headers: hdrs }).subscribe(dados => {
                console.log('dados recebidos', dados);
                data = dados;
                done(data)
            }, err => {
                console.log('Error');
                done(err)
            })
            return data;
        })

    }
}
