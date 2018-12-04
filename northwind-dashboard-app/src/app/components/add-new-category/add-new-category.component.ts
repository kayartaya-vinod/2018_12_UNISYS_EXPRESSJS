import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {

  category: FormGroup;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.category = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('')
    })
  }

  submitHandler() {
    // console.log(this.category);
    this.categoryService.addNewCategory(this.category.value)
      .subscribe(() => this.router.navigate(['/category/all']),
      (err)=>{
        if(err.status===401) {
          alert('You must login with proper credentials for adding a new category')
        }
      });
  }
}
