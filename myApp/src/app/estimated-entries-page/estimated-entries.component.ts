import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Entries } from './estimated-entries.model';
import { EstimatedEntriesService } from './estimated-entries.service';

/**
 * The Estimated Entries
 *
 * The component provides list of estimated entries.
 */
 
@Component({
  selector: 'app-estimated-entries-page',
  templateUrl: 'estimated-entries.component.html',
  styleUrls: ['estimated-entries.component.scss']
})
 
export class EstimatedEntriesComponent implements OnInit {
  
  /**
   * Entries Array
   */
  entries : Entries[] = [];
  
  /**
   * The "constructor"
   *
   * @param {EstimatedEntriesService} estimatedEntriesService gets entries
   */
  constructor( public estimatedEntriesService: EstimatedEntriesService) {}

  ngOnInit() {
      this.estimatedEntriesService.getEntries().subscribe(data => {
          this.entries = data.data.estimated_entries;
      });
  }
}
