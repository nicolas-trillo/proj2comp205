//Lunches recipes provided by ChatGPT
//Edited by Ziad Ewais
//Images references
//https://thewoodenskillet.com/
//https://www.emilieeats.com/
//https://www.thenomadicfitzpatricks.com/
//https://www.acouplecooks.com
//https://www.everylastbite.com/
//https://www.budgetbytes.com/
//https://www.healthygffamily.com/
//https://tastesbetterfromscratch.com
//https://www.thegraciouswife.com

const lunchRecipes = [
    {
        name: "Grilled Chicken Salad",
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "Mixed salad greens",
            "Cherry tomatoes, halved",
            "Cucumber, sliced",
            "Red onion, thinly sliced",
            "Balsamic vinaigrette dressing",
        ],
        instructions:
            "Season chicken breasts with salt and pepper. Grill until fully cooked. Slice the grilled chicken. In a bowl, combine salad greens, cherry tomatoes, cucumber, and red onion. Top with sliced grilled chicken. Drizzle with balsamic vinaigrette dressing and toss.",
        calories: 400,
        prepTime: 20,
        servings: 2,
        image:
            "https://vjcooks.com/wp-content/uploads/2019/02/VJCOOKS_chickensalad_5-1-480x480.jpg",
    },
    {
        name: "Vegetarian Quinoa Bowl",
        ingredients: [
            "1 cup cooked quinoa",
            "Roasted vegetables (bell peppers, zucchini, cherry tomatoes)",
            "Chickpeas, rinsed and drained",
            "Feta cheese, crumbled",
            "Lemon-tahini dressing",
        ],
        instructions:
            "In a bowl, layer cooked quinoa, roasted vegetables, chickpeas, and crumbled feta cheese. Drizzle with lemon-tahini dressing and toss before serving.",
        calories: 380,
        prepTime: 5,
        servings: 1,
        image:
            "https://www.eatingbirdfood.com/wp-content/uploads/2022/11/mediterranean-quinoa-bowl-hero-500x500.jpg",
    },
    {
        name: "Caprese Sandwich",
        ingredients: [
            "Ciabatta bread, sliced",
            "Fresh mozzarella cheese, sliced",
            "Tomato, sliced",
            "Fresh basil leaves",
            "Balsamic glaze",
        ],
        instructions:
            "Layer fresh mozzarella, tomato, and basil leaves on sliced ciabatta bread. Drizzle with balsamic glaze. Grill or press the sandwich until the cheese is melted and the bread is golden brown.",
        calories: 320,
        prepTime: 5,
        servings: 1,
        image:
            "https://thegoodheartedwoman.com/wp-content/uploads/2013/07/caprese-sandwich-f222.jpg",
    },
    {
        name: "Pasta Primavera",
        ingredients: [
            "2 cups cooked pasta",
            "Assorted vegetables (broccoli, bell peppers, cherry tomatoes)",
            "Olive oil",
            "Garlic, minced",
            "Parmesan cheese, grated",
            "Fresh basil, chopped",
        ],
        instructions:
            "In a pan, saut assorted vegetables in olive oil and minced garlic. Toss with cooked pasta. Top with grated Parmesan cheese and chopped fresh basil before serving.",
        calories: 350,
        prepTime: 15,
        servings: 2,
        image:
            "https://www.thereciperebel.com/wp-content/uploads/2023/04/pasta-primavera-TRR-10-of-19.jpg",
    },
    {
        name: "Shrimp Tacos",
        ingredients: [
            "Shrimp, peeled and deveined",
            "Taco seasoning",
            "Corn tortillas",
            "Cabbage, shredded",
            "Avocado, sliced",
            "Cilantro, chopped",
        ],
        instructions:
            "Season shrimp with taco seasoning. Grill or saut until cooked. Warm corn tortillas. Fill tortillas with shredded cabbage, grilled shrimp, sliced avocado, and chopped cilantro.",
        calories: 280,
        prepTime: 15,
        servings: 2,
        image:
            "https://www.mexicoinmykitchen.com/wp-content/uploads/2022/06/Chipotle-Shrimp-Tacos-1hero.jpg",
    },
    {
        name: "Mushroom and Spinach Quesadilla",
        ingredients: [
            "Flour tortillas",
            "Mushrooms, sliced",
            "Baby spinach",
            "Monterey Jack cheese, shredded",
            "Salsa for dipping",
        ],
        instructions:
            "In a pan, saut mushrooms and baby spinach until wilted. Place a tortilla in the pan, sprinkle with shredded Monterey Jack cheese, and add the sautÃ©ed mushrooms and spinach. Top with another tortilla and cook until the cheese is melted. Serve with salsa for dipping.",
        calories: 320,
        prepTime: 10,
        servings: 2,
        image:
            "https://www.foxvalleyfoodie.com/wp-content/uploads/2020/06/spinach-mushroom-quesadillas-feature.jpg",
    },
    {
        name: "Chicken Caesar Wrap",
        ingredients: [
            "Grilled chicken breast, sliced",
            "Romaine lettuce, chopped",
            "Caesar dressing",
            "Parmesan cheese, grated",
            "Whole wheat wrap",
        ],
        instructions:
            "Grill a chicken breast, then proceed to slice. In a whole wheat wrap, layer grilled chicken, chopped Romaine lettuce, Caesar dressing, and grated Parmesan cheese. Roll the wrap tightly and cut in half before serving.",
        calories: 390,
        prepTime: 15,
        servings: 1,
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Caesar-Wraps_EXPS_SDAM19_44899_E12_07_2b-5.jpg",
    },
    {
        name: "Mediterranean Quinoa Salad",
        ingredients: [
            "1 cup cooked quinoa",
            "Cucumber, diced",
            "Cherry tomatoes, halved",
            "Kalamata olives, sliced",
            "Feta cheese, crumbled",
            "Greek vinaigrette dressing",
        ],
        instructions:
            "In a bowl, combine cooked quinoa, diced cucumber, cherry tomatoes, sliced Kalamata olives, and crumbled feta cheese. Drizzle with Greek vinaigrette dressing and toss.",
        calories: 360,
        prepTime: 5,
        servings: 2,
        image:
            "https://plantbasedonabudget.com/wp-content/uploads/2012/12/Lemon-Garlic-Quinoa-4.jpg",
    },
    {
        name: "Teriyaki Chicken Bowl",
        ingredients: [
            "Grilled teriyaki chicken, sliced",
            "Steamed broccoli",
            "Carrots, julienned",
            "Brown rice",
            "Sesame seeds for garnish",
        ],
        instructions:
            "Grill a chicken breast, season to taste, then slice. In a bowl, layer grilled teriyaki chicken, steamed broccoli, and julienned carrots over brown rice. Garnish with sesame seeds before serving.",
        calories: 410,
        prepTime: 15,
        servings: 2,
        image:
            "https://www.wholesomeyum.com/wp-content/uploads/2023/05/wholesomeyum-Teriyaki-Chicken-Bowl-5.jpg",
    },
    {
        name: "Egg Salad Sandwich",
        ingredients: [
            "Hard-boiled eggs, chopped",
            "Mayonnaise",
            "Mustard",
            "Celery, finely chopped",
            "Lettuce leaves",
            "Whole grain bread",
        ],
        instructions:
            "In a bowl, mix chopped hard-boiled eggs with mayonnaise, mustard, and finely chopped celery. Spread the egg salad on whole grain bread, top with lettuce leaves, and close the sandwich.",
        calories: 300,
        prepTime: 15,
        servings: 1,
        image:
            "https://cdn.loveandlemons.com/wp-content/uploads/2019/04/vegan-egg-salad-scaled.jpg",
    },
];
// module.export = lunchRecipes;