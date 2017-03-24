import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import { Entries } from 'estimated-entries.model';

@Injectable()

export class EstimatedEntriesService {
    
   // public mockUrl = 'mock/estimated_entries.json';
    public mockUrl = 'mock/estimated_entries_snap.json';
    constructor(public http: Http) {} 
    
    getEntries() : Observable<any> {
     return this.http.get(this.mockUrl)
                     .map((res:Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}

