import { Router } from '@angular/router';
import { Election } from './../model/interface';
import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { ElectionsService } from '../services/elections.service';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {
  elections: Election[];
  // tslint:disable-next-line: variable-name
  election_id: number;

  constructor(private endpointsService: EndpointsService, private router: Router, private electionService: ElectionsService) { }

  ngOnInit(): void {
    this.endpointsService.getElection().subscribe(data => {
      this.elections = data.data;

    });
  }
  voteElection(id: number) {
    this.election_id = id;
    this.router.navigate(['/contestants/', this.election_id]);

  }

}
