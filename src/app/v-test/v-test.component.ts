import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VTestService } from './v-test.service';
// import { SessionUserService } from '../services/session-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'v-test',
  templateUrl: './v-test.component.html',
  styleUrls: ['./v-test.component.css']
})
export class VTestComponent {
  /* The work_id inputted from url */
  work_id;
  /* If work exists */
  exists = false;
  /* The work */
  work;
  /* Index of selected file */
  selectedFile;
  /* Reviews this user needs to review. */
  reviews; 
  /* The selected review */
  selectedReview = 1;
  /* Feedbacks this user has got from others */
  feedbacks;

  x = "VC";
  file = "abc";
  
  constructor(private _testAPI: VTestService,
    private route: ActivatedRoute) {}

  ngOnInit(){
    console.log("hereeee");
    // this._testAPI.getTest({
    //   1:2
    // }).subscribe(res => {
    //   this.x = res + "ggggg";
    // });

    this.reviews = [{1:2}, {1:2}, {1:2}, {1:2}];
  }

}
