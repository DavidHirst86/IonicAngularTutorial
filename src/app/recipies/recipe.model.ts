//a template for the recipies to define what content it should output. This isnt the styling or DOM of the element but the content which will go inside that. This is more the controler than the view.
// this is a typescript feature an interface. Ensures our data's always the same structure.

export interface Recipe {
    id: string;
    title: string;
    chance: number;
    category: string;
    distance: number;
    imageUrl: string;
    ingredients: string[];
}