function makeDish() {
    // Get input items
    const itemsInput = document.getElementById('items');
    const items = itemsInput.value.split(',').map(item => item.trim().toLowerCase());

    // Perform logic to determine dish based on available items
    const dishInfo = determineDish(items);

    // Display the result
    const dishOutput = document.getElementById('dishOutput');
    if (dishInfo) {
        const { dish, ingredients, instructions } = dishInfo;
        dishOutput.innerHTML = `
            <p>You can make ${dish}!</p>
            <p><strong>Ingredients:</strong> ${ingredients.join(', ')}</p>
            <p><strong>Procedure:</strong> ${instructions}</p>
        `;
    } else {
        dishOutput.innerHTML = "Sorry, no dish found with the provided items.";
    }
}

function determineDish(items) {
    // Example logic - you can customize this based on your requirements

    if (items.includes('potato') && items.includes('tomato') && items.includes('onion')) {
        return {
            dish: 'Vegetable Curry',
            ingredients: ['Potato', 'Tomato', 'Onion', 'Spices'],
            instructions: 'Saute onions, add potatoes and tomatoes, season with spices, and simmer until cooked.'
        };
    } else if (items.includes('chicken') && items.includes('garlic') && items.includes('lemon')) {
        return {
            dish: 'Garlic Lemon Chicken',
            ingredients: ['Chicken', 'Garlic', 'Lemon', 'Herbs'],
            instructions: 'Marinate chicken with garlic, lemon, and herbs. Roast or grill until fully cooked.'
        };
    } else if ((items.includes('Tomato') && items.includes('Bell Pepper')) || (items.includes('tomato') && items.includes('bell pepper'))) {
        return {
            dish: 'Tomato and Bell Pepper Salad',
            ingredients: ['Tomatoes', 'Bell Peppers', 'Olive Oil', 'Balsamic Vinegar', 'Salt', 'Pepper'],
            instructions: 'Dice tomatoes and bell peppers, mix in a bowl. Add olive oil, balsamic vinegar, salt, and pepper. Toss for a refreshing salad.'
        };
    } else if (items.includes('pasta') && items.includes('tomato sauce') && items.includes('cheese')) {
        return {
            dish: 'Cheesy Pasta',
            ingredients: ['Pasta', 'Tomato Sauce', 'Cheese', 'Herbs'],
            instructions: 'Boil pasta, mix with tomato sauce, top with cheese, and bake until cheese is melted.'
        };
    } else if ((items.includes('Potatoes') && items.includes('Onions')) || (items.includes('potatoes') && items.includes('onions'))) {
        return {
            dish: 'Sauteed Potatoes with Onions',
            ingredients: ['Potatoes', 'Onions', 'Cooking Oil', 'Salt', 'Pepper', 'Herbs'],
            instructions: 'Slice potatoes and onions, sauté in a pan with oil until golden brown. Season with salt, pepper, and herbs.'
        };
    } else if ((items.includes('Carrots') && items.includes('Broccoli')) || (items.includes('carrots') && items.includes('broccoli'))) {
        return {
            dish: 'Steamed Carrots and Broccoli',
            ingredients: ['Carrots', 'Broccoli', 'Olive Oil', 'Salt'],
            instructions: 'Cut carrots and broccoli into bite-sized pieces. Steam until tender. Drizzle with olive oil and sprinkle with salt.'
        };
    } else if ((items.includes('Mushrooms') && items.includes('Garlic')) || (items.includes('mushrooms') && items.includes('garlic'))) {
        return {
            dish: 'Garlic Mushroom Stir-Fry',
            ingredients: ['Mushrooms', 'Garlic', 'Soy Sauce', 'Salt', 'Pepper', 'Cooking Oil'],
            instructions: 'Slice mushrooms, sauté with minced garlic. Season with soy sauce, salt, and pepper for a quick stir-fry.'
        };
    } else if ((items.includes('Cucumbers') && items.includes('Red Onions')) || (items.includes('cucumbers') && items.includes('red onions'))) {
        return {
            dish: 'Cucumber and Red Onion Salad',
            ingredients: ['Cucumbers', 'Red Onions', 'Olive Oil', 'Lemon Juice', 'Salt', 'Sugar'],
            instructions: 'Slice cucumbers and red onions, toss in a bowl. Add a dressing of olive oil, lemon juice, salt, and a pinch of sugar.'
        };
    } else if ((items.includes('Spinach') && items.includes('Tomatoes')) || (items.includes('spinach') && items.includes('tomatoes'))) {
        return {
            dish: 'Sautéed Spinach with Tomatoes',
            ingredients: ['Spinach', 'Tomatoes', 'Garlic', 'Olive Oil', 'Salt', 'Pepper'],
            instructions: 'Sauté spinach and diced tomatoes in a pan with garlic and olive oil. Season with salt and pepper.'
        };
    } else if ((items.includes('Zucchini') && items.includes('Bell Peppers')) || (items.includes('zucchini') && items.includes('bell peppers'))) {
        return {
            dish: 'Grilled Zucchini and Bell Pepper Skewers',
            ingredients: ['Zucchini', 'Bell Peppers', 'Olive Oil', 'Herbs', 'Salt', 'Pepper'],
            instructions: 'Cut zucchini and bell peppers into chunks, thread onto skewers. Grill until tender. Season with herbs, salt, and pepper.'
        };
    } else if ((items.includes('Cabbage') && items.includes('Carrots')) || (items.includes('cabbage') && items.includes('carrots'))) {
        return {
            dish: 'Coleslaw',
            ingredients: ['Cabbage', 'Carrots', 'Mayonnaise', 'Vinegar', 'Sugar', 'Salt', 'Pepper'],
            instructions: 'Shred cabbage and carrots, mix in a bowl. Prepare a dressing with mayonnaise, vinegar, sugar, salt, and pepper for a classic coleslaw.'
        };
    } else if (items.includes('potato') && items.includes('cumin seeds') && items.includes('salt')) {
        return {
            dish: 'Jeera Aloo (Cumin Potatoes)',
            ingredients: ['Potatoes', 'Cumin Seeds', 'Salt'],
            instructions: 'Boil and cube potatoes. In a pan, heat cumin seeds, add potatoes, and sauté. Season with salt.'
        };
    } else if (items.includes('yellow lentils') && items.includes('cumin seeds') && items.includes('ghee')) {
        return {
            dish: 'Tadka Dal',
            ingredients: ['Yellow Lentils (Dal)', 'Cumin Seeds', 'Ghee'],
            instructions: 'Cook dal, temper with cumin seeds in ghee, and mix well. Add salt to taste.'
        };
    } else if (items.includes('potatoes') && items.includes('fenugreek leaves') && items.includes('salt')) {
        return {
            dish: 'Aloo Methi',
            ingredients: ['Potatoes', 'Fenugreek Leaves (Methi)', 'Salt'],
            instructions: 'Boil and cube potatoes. Sauté fenugreek leaves with potatoes. Season with salt.'
        };
    } else if (items.includes('chickpea flour') && items.includes('water') && items.includes('salt')) {
        return {
            dish: 'Besan Chilla',
            ingredients: ['Chickpea Flour (Besan)', 'Water', 'Salt'],
            instructions: 'Mix besan with water to make a batter. Cook like a pancake on a griddle. Sprinkle with salt.'
        };
    } else if (items.includes('eggs') && items.includes('onions') && items.includes('green chilies')) {
        return {
            dish: 'Egg Bhurji',
            ingredients: ['Eggs', 'Onions', 'Green Chilies'],
            instructions: 'Scramble eggs in a pan, add finely chopped onions and green chilies. Cook until eggs are done. Add salt to taste.'
        };
    } else if (items.includes('red lentils') && items.includes('onions') && items.includes('ghee')) {
        return {
            dish: 'Masoor Dal Fry',
            ingredients: ['Red Lentils (Masoor Dal)', 'Onions', 'Ghee'],
            instructions: 'Cook masoor dal, temper with sliced onions in ghee. Season with salt.'
        };
    } else if (items.includes('spinach') && items.includes('eggs') && items.includes('salt')) {
        return {
            dish: 'Palak Anda Curry',
            ingredients: ['Spinach (Palak)', 'Eggs', 'Salt'],
            instructions: 'Sauté spinach, add boiled eggs, and cook together. Season with salt.'
        };
    } else if (items.includes('cucumber') && items.includes('yogurt') && items.includes('cumin powder')) {
        return {
            dish: 'Kheera Raita',
            ingredients: ['Cucumber (Kheera)', 'Yogurt', 'Cumin Powder'],
            instructions: 'Grate cucumber, mix with yogurt, and sprinkle cumin powder. Add salt to taste.'
        };
    } else if (items.includes('tomatoes') && items.includes('tamarind') && items.includes('rasam powder')) {
        return {
            dish: 'Tomato Rasam',
            ingredients: ['Tomatoes', 'Tamarind', 'Rasam Powder'],
            instructions: 'Boil tomatoes and tamarind, add rasam powder, and season with salt.'
        };
    } else if (items.includes('chickpeas') && items.includes('onions') && items.includes('chaat masala')) {
        return {
            dish: 'Chana Chaat',
            ingredients: ['Chickpeas (Chana)', 'Onions', 'Chaat Masala'],
            instructions: 'Mix boiled chickpeas with chopped onions, sprinkle chaat masala, and add salt to taste.'
        };
    } else {
        return null; // No matching dish found
    }
}



