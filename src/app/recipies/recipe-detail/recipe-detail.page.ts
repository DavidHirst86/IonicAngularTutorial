import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe; //is of type recipe. 

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { } //checks the route that was used to get here. Default angular feature. 

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {//subscribe is an observable
      if (!paraMap.has('recipeId')) {//if it doesnt have id.
        //redirect user if no id found.
        this.router.navigate(['/recipies'])
        return;
      }
      //else if it has an id
      const recipeId = paraMap.get('recipeId')
      this.loadedRecipe = this.recipesService.getRecipe(recipeId)
    });
  }

  //called by click - references recipes.service.ts
  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'This will delete the message',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id) //gets the id above. 
          this.router.navigate(['/recipies']) //Once run it calls the Angular router above to redirect as this page wont exist any more. router added in constructor.
        }
      }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
