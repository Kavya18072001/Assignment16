import { Component} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  name = '';   
  receivename(event: string) {  
  this.name = event;  
  }  

  registerForm=new FormGroup({
    firstname:new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
    age:new FormControl('',[Validators.required,Validators.maxLength(3)]),
    Username:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]+([._]?[.-]?[a-zA-Z0-9]+)*$")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phnno:new FormControl('',[Validators.pattern("^[0-9]+$"),Validators.minLength(10),Validators.maxLength(10)]),
    additionaldata:new FormControl(''),
  })
  validatefristname="*Fristname is Required";
  validatelastname="*laststname is Required";
  validateemail="*Enter the valid email";
  validatephnno="Enter the 10 digit number ";
  validateusername="*please enter valid Username";
  validateage="*please enter age"
  labeldata:string="";
  addtoparent="";
  submittedData:any;

  constructor(private router: Router){}
   onsubmit(){
    console.log(this.registerForm)
      //on clicking the submit button this button will be triggered
      // console.log(this.formData);
      this.submittedData = this.registerForm.value; //sending the values of the forms which contains the data
      //routing to the other component with the data
      this.router.navigate(['display'],{
        state: { submittedData : this.submittedData, AdditionalValue : this.labeldata }
        
      })
      console.log("iugyu",this.submittedData)
  }
  addtolabel(eventdata:Event){
    this.labeldata=(<HTMLInputElement>eventdata.target).value
  }
   datafromchild:string="";
   toaddvalue(data:string){
     this.datafromchild=data;
    // console.log(this.datafromchild)
     this.addtoparent=this.datafromchild
   }
}
