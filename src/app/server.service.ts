import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";

var url = 'http://dmwgiscalib.southcentralus.cloudapp.azure.com/dmwgis';

@Injectable()
export class ServerService {
    constructor(private httpClient: Http) { }


    checkPing() {
        // return this.http.get(url + "api/chart/months", { headers: headers });
        return this.httpClient.get(url);
    }
}



