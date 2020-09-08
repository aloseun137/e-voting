import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { ActivatedRoute } from '@angular/router';
import { Contestants } from '../model/interface';


@Component({
  selector: 'app-election-result',
  templateUrl: './election-result.component.html',
  styleUrls: ['./election-result.component.css']
})
export class ElectionResultComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  election_id: number;
  electionContestants: Contestants[];
  winner: boolean;

  constructor(private endpointsService: EndpointsService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.election_id = this.actRoute.snapshot.params.id;
    this.endpointsService.result(this.election_id).subscribe(data => {
      this.electionContestants = data.data;
    });
  }
  checkValue(myIndex: number, i: number) {
    // tslint:disable-next-line: ban-types
    const myArray = [];
    this.electionContestants[myIndex].contestants.forEach((item) => {
      myArray.push(item.votes);
    });
    function max( array ) {
      return Math.max.apply( Math, array );
    }
    function findDuplicates(arr: any[]) {
      // tslint:disable-next-line: variable-name
      const sorted_arr = arr.slice().sort();
      const results = [];
      // tslint:disable-next-line: no-shadowed-variable
      for (let i = 0; i < sorted_arr.length - 1; i++) {
        // tslint:disable-next-line: triple-equals
        if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i]);
        }
      }
      return max(results);
    }
    // tslint:disable-next-line: max-line-length
    if (this.electionContestants[myIndex].contestants[i].votes === findDuplicates(myArray) && this.electionContestants[myIndex].contestants[i].votes === max(myArray)) {
      return 'TIE!!!';
    }
    // return 'WINNER!!';
    if (this.electionContestants[myIndex].contestants[i].votes === max(myArray)) {
      return 'WINNER!!!';
    }



  }

}
