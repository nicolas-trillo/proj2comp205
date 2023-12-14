//Breakfast recipes provided by ChatGPT
//Edited by Ziad Ewais
//Images references
//https://feelgoodfoodie.net/
//https://foolproofliving.com/
//https://dishingouthealth.com/
//https://thenutfreevegan.net/
//https://asimplepalate.com/
//https://www.veggiessavetheday.com/
//https://www.woolworths.com.au/shop/recipes
//https://meganvskitchen.com/
//https://downshiftology.com/

const breakfastRecipes = [
    {
        name: "Scrambled Eggs with Avocado Toast",
        ingredients: [
            "2 eggs",
            "1 avocado, mashed",
            "2 slices of whole-grain bread, toasted",
            "Salt and pepper to taste",
            "Chopped chives for garnish",
        ],
        instructions:
            "Scramble the eggs in a pan over medium heat until cooked to your liking. Spread mashed avocado on toasted bread slices. Top with scrambled eggs, season with salt and pepper, and garnish with chopped chives.",
        calories: 320,
        prepTime: 10,
        servings: 2,
        image:
            "https://twohealthykitchens.com/wp-content/uploads/2018/08/Breakfast-Avocado-Toast-with-Egg-Recipe-horiz-720x720.jpg",
    },
    {
        name: "Greek Yogurt Parfait",
        ingredients: [
            "1 cup Greek yogurt",
            "1/2 cup granola",
            "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
            "Honey for drizzling",
        ],
        instructions:
            "In a glass, layer Greek yogurt, granola, and mixed berries. Repeat the layers. Drizzle honey on top. Serve chilled.",
        calories: 250,
        prepTime: 5,
        servings: 1,
        image:
            "https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-Recipe.jpg",
    },
    {
        name: "Vegetarian Breakfast Burrito",
        ingredients: [
            "1 large tortilla",
            "2 eggs, scrambled",
            "1/4 cup black beans, cooked",
            "1/4 cup diced bell peppers",
            "1/4 cup shredded cheese",
            "Salsa for serving",
        ],
        instructions:
            "Fill a tortilla with scrambled eggs, black beans, diced bell peppers, and shredded cheese. Roll it up. Heat in a pan until the cheese melts. Serve with salsa.",
        calories: 380,
        image: "https://dishingouthealth.com/wp-content/uploads/2021/06/VegetarianBurritos_Square.jpg",
    },
    {
        name: "Blueberry Banana Smoothie Bowl",
        ingredients: [
            "1 frozen banana",
            "1/2 cup blueberries",
            "1/2 cup Greek yogurt",
            "1/4 cup almond milk",
            "Granola and sliced banana for topping",
        ],
        instructions:
            "Blend frozen banana, blueberries, Greek yogurt, and almond milk until smooth. Pour into a bowl. Top with granola and sliced banana.",
        calories: 280,
        prepTime: 2,
        servings: 1,
        image:
            "https://www.eatingwell.com/thmb/ZQrLhPC_RxCEhJwAHhayjBHXDV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7010038_CL_Bowls_ingredients_049-cf9ba6805e5f4c1593044106bec217d7.jpg",
    },
    {
        name: "Oatmeal with Almond Butter and Banana",
        ingredients: [
            "1/2 cup rolled oats",
            "1 cup almond milk",
            "1 banana, sliced",
            "1 tablespoon almond butter",
            "Honey for drizzling",
        ],
        instructions:
            "Cook rolled oats with almond milk. Top with sliced banana and a dollop of almond butter. Drizzle with honey before serving.",
        calories: 310,
        prepTime: 15,
        servings: 2,
        image:
            "https://www.fivehearthome.com/wp-content/uploads/2023/09/Peanut-Butter-Banana-Oatmeal-Recipe-by-FiveHeartHome_1200pxFeatured-1.jpg",
    },
    {
        name: "Avocado and Tomato Toast",
        ingredients: [
            "2 slices of whole-grain bread, toasted",
            "1 avocado, sliced",
            "1 tomato, sliced",
            "Salt and pepper to taste",
            "Chopped cilantro for garnish",
        ],
        instructions:
            "Place sliced avocado and tomato on toasted bread. Season with salt and pepper. Garnish with chopped cilantro.",
        calories: 280,
        prepTime: 50,
        servings: 2,
        image:
            "https://www.veggiessavetheday.com/wp-content/uploads/2021/09/Tomato-Avocado-Toast-FI-1200x1200-1.jpg",
    },
    {
        name: "Pancakes with Mixed Berries",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "1/2 teaspoon salt",
            "1 cup milk",
            "1 large egg",
            "2 tablespoons unsalted butter, melted",
            "Mixed berries for topping",
        ],
        instructions:
            "In a bowl, whisk together flour, sugar, baking powder, and salt. In another bowl, whisk together milk, egg, and melted butter. Pour the wet ingredients into the dry ingredients and stir until just combined. Heat a griddle or non-stick skillet over medium heat. Pour 1/4 cup of batter for each pancake onto the griddle. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve with mixed berries on top.",
        calories: 350,
        prepTime: 20,
        servings: 5,
        image:
            "https://www.ocado.com/cmscontent/recipe_image_large/30629010.jpg?Z8nr",
    },
    {
        name: "Spinach and Feta Omelette",
        ingredients: [
            "3 eggs, beaten",
            "1 cup fresh spinach, chopped",
            "1/4 cup feta cheese, crumbled",
            "1 tablespoon olive oil",
            "Salt and pepper to taste",
        ],
        instructions:
            "In a pan, saut fresh spinach in olive oil until wilted. Pour beaten eggs over the spinach. Sprinkle feta cheese on top. Cook until the eggs are set. Season with salt and pepper. Fold the omelette and serve.",
        calories: 320,
        prepTime: 15,
        servings: 3,
        image: "https://freshapron.com/wp-content/uploads/2023/08/Spinach-and-Feta-Omelet-12.jpg",
    },
    {
        name: "Apple Cinnamon Overnight Oats",
        ingredients: [
            "1/2 cup rolled oats",
            "1/2 cup Greek yogurt",
            "1/2 cup almond milk",
            "1 apple, diced",
            "1/2 teaspoon cinnamon",
            "1 tablespoon honey",
        ],
        instructions:
            "In a jar, combine rolled oats, Greek yogurt, almond milk, diced apple, and cinnamon. Stir well. Refrigerate overnight. In the morning, drizzle honey on top and enjoy.",
        calories: 290,
        prepTime: 500,
        servings: 3,
        image:
            "https://www.eatingwell.com/thmb/2g4AlQ8fXrFmDK7DIr9RUWPb8j0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5761597-aa213e58be424b1dba68d4d04c8f5178.jpg",
    },
    {
        name: "Banana Nut Muffins",
        ingredients: [
            "1 cup all-purpose flour",
            "1/2 cup sugar",
            "1 teaspoon baking powder",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "2 ripe bananas, mashed",
            "1/4 cup unsalted butter, melted",
            "1/4 cup chopped nuts (walnuts or pecans)",
        ],
        instructions:
            "Preheat the oven to 350°F (175°C). In a bowl, combine flour, sugar, baking powder, baking soda, and salt. In another bowl, mix mashed bananas and melted butter. Add the wet ingredients to the dry ingredients and stir until just combined. Fold in chopped nuts. Spoon the batter into muffin cups. Bake for 20-25 minutes or until a toothpick inserted comes out clean.",
        calories: 240,
        prepTime: 20,
        servings: 6,
        image:
            "https://thebusybaker.ca/wp-content/uploads/2019/01/best-ever-banana-nut-muffins-fb-ig-2.jpg",
    },
];

