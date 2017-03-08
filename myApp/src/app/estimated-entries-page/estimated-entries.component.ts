import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Entries } from './estimated-entries.model';
import { EstimatedEntriesService } from './estimated-entries.service';

@Component({
  moduleId: module.id,
  selector: 'app-estimated-entries-page',
  templateUrl: 'estimated-entries.component.html',
  styleUrls: ['estimated-entries.component.css']
})
 
export class EstimatedEntriesComponent implements OnInit {
  
  entries : Entries[] = [];
  
  constructor( public estimatedEntriesService: EstimatedEntriesService) {}

  ngOnInit() {
      this.estimatedEntriesService.getEntries().subscribe(data => {
          this.entries = data.data.estimated_entries;
      });
  }
}
