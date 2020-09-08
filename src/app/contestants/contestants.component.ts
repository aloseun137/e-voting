import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointsService } from '../services/endpoints.service';
import { Contestants } from '../model/interface';

@Component({
  selector: 'app-contestants',
  templateUrl: './contestants.component.html',
  styleUrls: ['./contestants.component.css']
})
export class ContestantsComponent implements OnInit {
  myObj = {contestants_id: []};
  voted = false;
  votes: number[] = [];
electionContestants: Contestants[];
contestants = [];
isDisabled: boolean;
  // tslint:disable-next-line: variable-name
  election_id: number;
  constructor(private actRoute: ActivatedRoute, private endpointsService: EndpointsService, private router: Router) { }

  ngOnInit(): void {
    this.election_id = this.actRoute.snapshot.params.id;
    this.endpointsService.specificElection(this.election_id).subscribe(data => {
      this.electionContestants = data.data;
      this.contestants = data.data.contestants;
      this.electionContestants.forEach((item) => {
        item.contestants.forEach((items) => {
          items.status = false;
          items.voted = false;
        });

      });

    });

  }
  // tslint:disable-next-line: variable-name
  checkme(id: number, post_id: number, name, index, myIndex) {
    this.electionContestants.forEach((item) => {
      item.contestants.forEach((myitems) => {
        if (myitems.contestant_id === id && item.post_id === post_id) {
          myitems.voted = !myitems.voted;
        }
      });

    });
    if (this.electionContestants[myIndex].contestants[index].voted === true) {
      this.votes.push(id);
    } else {
      for ( let i = 0; i < this.votes.length; i++) { if ( this.votes[i] === id) { this.votes.splice(i, 1); }}
    }
    this.electionContestants.forEach((item) => {
        item.contestants.forEach((myitems) => {
          if (myitems.contestant_id !== id && item.post_id === post_id) {
            myitems.status = !myitems.status;
          }
        });

      });
    this.myObj.contestants_id = this.votes;


  }
  submitVotes() {
    this.myObj.contestants_id = this.votes;
    this.endpointsService.vote(this.election_id, this.myObj).subscribe(data => {
      if (data.status === true) {
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['/thankyou']);
      }
    });
  }

}
