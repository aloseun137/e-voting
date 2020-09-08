import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { Router } from '@angular/router';
import { ElectionsService } from '../services/elections.service';
import { Election } from '../model/interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  elections: Election[];
  // tslint:disable-next-line: variable-name
  election_id: number;

  constructor(private endpointsService: EndpointsService, private router: Router, private electionService: ElectionsService) { }

  ngOnInit(): void {
    this.endpointsService.getElection().subscribe(data => {
      this.elections = data.data;

    });
  }
  viewResults(id: number) {
    this.election_id = id;
    this.router.navigate(['/election/result', this.election_id]);

  }

}
