import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //define the default start route. Was home but we deleted that so now its recipies.
  { path: '', redirectTo: 'recipies', pathMatch: 'full' },
  {
    path: 'recipies', /* this loads the recipies page and links to the recipie details ID */
    //https://www.youtube.com/watch?v=r2ga-iXS5i4 2hr:50min
    children: [
      {
        path: '',
        loadChildren: './recipies/recipies.module#RecipiesPageModule'
      },
      {
        path: ':recipeId', // dynmamic path
        loadChildren: './recipies/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
