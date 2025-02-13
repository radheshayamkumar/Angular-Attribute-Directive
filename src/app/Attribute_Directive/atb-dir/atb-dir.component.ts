import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atb-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './atb-dir.component.html',
  styleUrl: './atb-dir.component.css'
})
export class AtbDirComponent {
    div1BgColor :string ="bg-primary";
    isDiv2Active:boolean=true
    num1:string = "";
    num2:string="";
    isActive : boolean = false;

    addRed(){
      this.div1BgColor ="bg-danger"
    }
    addBlue(){
      this.div1BgColor ="bg-primary"
    }
    toggle(){
      this.isDiv2Active = !this.isDiv2Active
    }
    

    studentList: any[] =[
      {studentId :1 , totalMarks:25, gender:"female", name:"AA", city : "Pune", isActive:false},
      {studentId :2 , totalMarks:55, gender:"male", name:"BB", city : "Patna", isActive:false},
      {studentId :3 , totalMarks:65, gender:"female", name:"CC", city : "Bengluru", isActive:true},
      {studentId :4 , totalMarks:95, gender:"male", name:"DD", city : "Hyderabad", isActive:false},
      {studentId :5 , totalMarks:45, gender:"male", name:"EE", city : "Bhopal", isActive:true}
    ]
}
