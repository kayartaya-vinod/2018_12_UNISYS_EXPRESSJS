import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'view-all-categories',
  templateUrl: './view-all-categories.component.html',
  styleUrls: ['./view-all-categories.component.css']
})
export class ViewAllCategoriesComponent implements OnInit {

  categories: Array<any>;

  constructor(public service: CategoryService) { }

  ngOnInit() {
    this.service.getAllCategories()
      .subscribe(data => this.categories = data);
  }

  deleteCategory(cat) {
    if (!confirm('Are you sure?')) return;

    this.service.deleteCategory(cat.id)
      .subscribe(() => {
        let index = this.categories.findIndex(c => c === cat);
        this.categories.splice(index, 1);
      }, err=>{
        alert('There was an error: ' + err.message)
      })
  }
}
