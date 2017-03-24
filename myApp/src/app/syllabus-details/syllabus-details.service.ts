import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class SyllabusDetailsService {
    
    constructor(public http: Http) {}
    
    getSyllabus() : Observable<any> {
     return this.http.get('mock/syllabus_details.json')
                     .map((res:Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    
    getSyllabusPDF() : Observable<any> {
     return this.http.get('mock/syllabus_moredetail.json')
                     .map((res:Response) =>  res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    
    getReleaseMaterial() : Observable<any> {
     return this.http.get('mock/syllabus_release_material.json')
                     .map((res:Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}

