import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  userdetails:any;
  AdditionalValue;

  constructor(private router: Router, private route:ActivatedRoute){
    this.userdetails = this.router.getCurrentNavigation()?.extras.state?.['submittedData'];
    this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    console.log("efag",this.userdetails,this.router.getCurrentNavigation());
  }

}
