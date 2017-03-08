import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import { Entries } from 'estimated-entries.model';

@Injectable()

export class EstimatedEntriesService {
    
    constructor(public http: Http) {}
    
    getEntries() : Observable<any> {
     return this.http.get('https://ang-2app-kkk6020.c9users.io/src/mock/estimated_entries.json')
                     .map((res:Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}

