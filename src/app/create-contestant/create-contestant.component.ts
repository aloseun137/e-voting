import { Component, OnInit } from '@angular/core';
import { createContestant, Election, AllContestants } from '../model/interface';
import { EndpointsService } from '../services/endpoints.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-contestant',
  templateUrl: './create-contestant.component.html',
  styleUrls: ['./create-contestant.component.css']
})
export class CreateContestantComponent implements OnInit {
  dataSuccess: string;
  errorMessage: string;
  loading: boolean = false;
  elections: Election[];
  newContestant: createContestant;
  allElectionContestants: AllContestants[];

  constructor(private endpointsService: EndpointsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //get election_id
    this.endpointsService.getElection().subscribe(data => {
      this.elections = data.data;
    });
    //get post_id
    this.endpointsService.getAllContestants().subscribe(data => {
      this.allElectionContestants = data.data;
    });


    //get user_id



  }
  onSubmit(createForm: NgForm) {
    this.loading = true;
    const randomIndex = Math.floor(Math.random() * 30);
    this.newContestant = new createContestant();
    this.newContestant.election_id = createForm.value.election;
    this.newContestant.post_id = createForm.value.post;
    this.newContestant.user_id = randomIndex;
    this.endpointsService.create(this.newContestant).subscribe(data => {
      if (data.status === true) {
        this.loading = false;
        this.dataSuccess = data.message;
        this.errorMessage = undefined;
        createForm.reset();
      }
      console.log(data);

    }, error => {
      this.errorMessage = error;
      this.dataSuccess = undefined;
      this.loading = false;
      createForm.reset();
    });


  }
}
