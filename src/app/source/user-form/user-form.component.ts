import { Component, Inject, OnInit } from '@angular/core';
import { UserData } from '../models/ContactData';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  /**init userForm */
  userForm!: FormGroup

  /**user Data store  */
  user: UserData[] = []

  /**
   *
   */
  constructor(
    private dataService: UserService,
    private fb:FormBuilder,
    private dialogRef:MatDialogRef<UserTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.userForm = this.fb.group({
      name: '',
      email: '',
      dob: '',
      gender: '',
      mobile:''
    })
  }



  /**component init configurations  */
  ngOnInit(): void {
    this.userForm.patchValue(this.data)
  }


  /**
   * Create new user
   */

  OnSubmitData(): void {
    console.log("form ",this.userForm)
    //start the loader
    if(this.userForm.valid){
      if(this.data){
        //service call
        this.dataService.creatUser(this.userForm).subscribe(
          {
            next: (response) => {

              if (response == 'SUCCESS') {
                //log the response and check 
                //if success call the listUser
                console.log(response)
                this.dialogRef.close(true);
                //stop the loader
              }
            },
            error: (message: any) => {
              console.log("error message ", message.error)
              //stop the loder
            }
          }
        )
      }else{
        //service call
        this.dataService.editUser(this.userForm.value).subscribe(
          {
            next: (response) => {

              if (response == 'SUCCESS') {
                //log the response and check 
                //if success call the list user function
                console.log(response)
                //stop the loader
                this.dialogRef.close(true);
              }
            },
            error: (message: any) => {
              console.log("error message ", message.error)
              //stop the loder
            }
          }
        )
      }
    }

  }


}


