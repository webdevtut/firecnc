import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router : Router,
    private alrtCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = Number(paramMap.get('recipeId'));
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
    
  }
  ngOnDestroy() {
    //Gets Executed here for now as stacked page removed from cache
    console.log('ngOnDestroy');
  }

  deleteRecipe() {
    this.alrtCtrl.create({
      header: "Are you sure?",
      message: "Do you really want to delete recipe",
      buttons: [{
        text: 'Cancel',
        role: 'Cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alerEl => {
      alerEl.present();
    })

  }
  
}
