import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from '../models/ContactData';
import { UserService } from '../services/user.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'dob',
    'email',
    'gender',
    'mobileno',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
    /**
   *
   */
    constructor(
      private dataService:UserService,
      private dialog:MatDialog
    ) {
    }

  ngOnInit(): void {
      this.ListUser()
  }

      /**
     * Edit the user data
     */

      EditUser(payload:any):void{

        //start the loader
    
        //service call
        this.dataService.editUser(payload).subscribe(
          {
            next:(response)=>{
    
              if(response=='SUCCESS'){
              //log the response and check 
              //if success call the list user function
              console.log(response)

              //stop the loader
              }
            },
            error: (message: any) => {
              console.log("error message ", message.error)
              //stop the loder
            }
          }
        )
  
      }


      openAddEditEmpForm() {
        const dialogRef = this.dialog.open(UserFormComponent);
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.ListUser()
            }
          },
        });
      }

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }

          /**
 * Get all the  user list 
 */

  ListUser(): void {

    //start the loader
    let data:UserData[]=[
      {id:101,name:'amal',dob:'08/21/1998',email:'amalsankarps0@gmail.com',gender:'male',mobile_no:9656214124}
    ]
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    //service call
    this.dataService.getUsers().subscribe(
      {
        next: (response) => {

          if (response == 'SUCCESS') {
            //log the response and check 
            //if success parse the data into the model
            console.log(response)
            this.dataSource = new MatTableDataSource(response);
            this.dataSource.sort = this.sort
            this.dataSource.paginator = this.paginator

            //stop the loader
          }
        },
        error: (message: any) => {
          console.log("error message ", message.error)
          //stop the loder
        }
      }
    )
  }

  onEditUser(data:any):void{
    const dialogRef = this.dialog.open(UserFormComponent,{
      data
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.ListUser()
        }
      }
    })

  }

}

  

