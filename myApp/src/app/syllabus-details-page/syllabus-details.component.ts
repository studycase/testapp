import { Component, OnInit } from '@angular/core';
import { PDF_Model } from './syllabus-details-pdf.model';
import { Syllabus_Model } from './syllabus-details.model';
import { SyllabusDetailsService } from './syllabus-details.service';

declare  var $:any;

@Component({
  moduleId: module.id,
  selector: 'app-syllabus-details',
  templateUrl: 'syllabus-details.component.html',
  styleUrls: ['syllabus-details.component.scss']
})

export class SyllabusDetailsComponent implements OnInit {
 
  syllabus_details: Syllabus_Model[] = [];
  syllabus_entries: any;
  syllabus_pdf: PDF_Model[] = [];
  syllabus_release_material: any;
 
  constructor( public syllabusDetailsService: SyllabusDetailsService ) { }

  ngOnInit() {
    
    this.syllabusDetailsService.getSyllabus().subscribe(data => {
        this.syllabus_details = data.data.syllabus_details;
        this.syllabus_entries = data.data.syllabus_entries;
    });
    
    this.syllabusDetailsService.getSyllabusPDF().subscribe(data => {
        this.syllabus_pdf = data.data.syllabus_pdf;
    });
    
    this.syllabusDetailsService.getReleaseMaterial().subscribe(data => {
        this.syllabus_release_material = data.data.release_material;
    });
    
  }
  
  //tabClick(e) {
    //e.preventDefault();
    //$(e.target).tab('show');
 // }
  
}
