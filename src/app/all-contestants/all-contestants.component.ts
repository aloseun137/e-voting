import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { AllContestants } from '../model/interface';

@Component({
  selector: 'app-all-contestants',
  templateUrl: './all-contestants.component.html',
  styleUrls: ['./all-contestants.component.css']
})
export class AllContestantsComponent implements OnInit {
  allElectionContestants: AllContestants[];

  constructor(private endpointsService: EndpointsService) { }

  ngOnInit(): void {
    this.endpointsService.getAllContestants().subscribe(data => {
      this.allElectionContestants = data.data;
    });
  }

}
