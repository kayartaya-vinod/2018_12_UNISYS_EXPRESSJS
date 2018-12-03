import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'view-all-categories',
  templateUrl: './view-all-categories.component.html',
  styleUrls: ['./view-all-categories.component.css']
})
export class ViewAllCategoriesComponent implements OnInit {

  categories: Array<any>;

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getAllCategories()
      .subscribe(data => this.categories = data);
  }

}
