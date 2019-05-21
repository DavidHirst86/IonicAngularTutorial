import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service'


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {
  recipes: Recipe[]; //this gets connected to the recipes array via the recipesService in ngOnInit. 

  constructor(private recipesService: RecipesService) { } //injects into page contents of the recipe service file. (which holds the list of recipes)

  ngOnInit() { //when it starts 
    //this.recipes = this.recipesService.getAllRecipies(); //Bring in the data
  }

  // this was created to solve the problem with it not updating. The alternative is to put an observable in the services file.
  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipies(); //Bring in the data
  }

}
