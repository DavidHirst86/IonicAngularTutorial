import { Injectable } from '@angular/core';
import { RecipiesPage } from './recipies.page';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root' // means its global.
})
export class RecipesService {
  /* before you can add to these you need to add them to the model.ts file :) */
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Chair',
      chance: 1,
      category: 'home',
      distance: 1,
      imageUrl: 'https://www.weekendsonly.com/media/wysiwyg/images/Living-Room-Accent-Chairs.jpg',
      ingredients: ['French fries', 'Chickens', 'Cat food']
    },
    {
      id: 'r2',
      title: 'Draws',
      chance: 1,
      category: 'home',
      distance: 1,
      imageUrl: 'https://www.rodgersofyork.co.uk/images/products/medium/24985.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r3',
      title: 'Table 1',
      chance: 1,
      category: 'her',
      distance: 1,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQiO0KIQyYz9o51eq3nRRuc9sOhDIBKx0L4H0wBE6dDTSJvSr',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r4',
      title: 'furniture',
      chance: 1,
      category: 'her',
      distance: 1,
      imageUrl: 'https://5.imimg.com/data5/CG/MQ/MY-59179512/wooden-double-bed-250x250.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r5',
      title: 'Table',
      chance: 1,
      category: 'him',
      distance: 1,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhgDNwV-vyhmxVzPUwcvMXFnH2wNgbOHjnCcg_8NeXtyDdMCg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r6',
      title: 'Bed 2',
      chance: 1,
      category: 'him',
      distance: 1,
      imageUrl: 'https://5.imimg.com/data5/CG/MQ/MY-59179512/wooden-double-bed-250x250.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r7',
      title: 'Draws',
      chance: 1,
      category: 'her',
      distance: 1,
      imageUrl: 'https://www.rodgersofyork.co.uk/images/products/medium/24985.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r8',
      title: 'Draws2',
      chance: 1,
      category: 'child',
      distance: 1,
      imageUrl: 'https://www.rodgersofyork.co.uk/images/products/medium/24985.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r9',
      title: 'Draws3',
      chance: 1,
      category: 'child',
      distance: 1,
      imageUrl: 'https://www.rodgersofyork.co.uk/images/products/medium/24985.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    },
    {
      id: 'r10',
      title: 'Draws4',
      chance: 1,
      category: 'child',
      distance: 1,
      imageUrl: 'https://www.rodgersofyork.co.uk/images/products/medium/24985.jpg',
      ingredients: ['French fries', 'Beef', 'dog food']
    }
  ]

  constructor() { }


  getAllRecipies() {
    return [...this.recipes] //creates a copy of the above array and returns it. Copies it esentailly. 
  }

  //method for getting single recipe.
  getRecipe(recipeId: string) {
    return { //loops though above array 
      ...this.recipes.find(recipe => {//loops till it finds correct recipe.
        return recipe.id === recipeId
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId; // We want to drop the item where the ID's dont match. So returning not true instead of true works. We're dropping on false not true. So if they come up as true it wont work.
    });
  }
}
