import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    public sendGetRequest(ifsc1: string) {
        return this.httpClient.get(' https://ifsc.razorpay.com/' + ifsc1);
    }
}