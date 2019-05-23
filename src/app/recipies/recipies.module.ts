import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipiesPage } from './recipies.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { PipesPipe } from '../pipes/pipes.pipe';
import { CategoryButtonsComponent } from './category-buttons/category-buttons.component';

const routes: Routes = [
  {
    path: '',
    component: RecipiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipiesPage, RecipeItemComponent, CategoryButtonsComponent, PipesPipe]
})
export class RecipiesPageModule { }
