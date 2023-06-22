import axios from "../api/axios";
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS
} from "./actions";

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";
import swal from "sweetalert";
let amagwinya = [{
    dateModified:null, 
    idMeal:"52799", 
    strArea:"South Africa",
    strCategory:"Dessert",
    strCreativeCommonsConfirmed:null,
    strDrinkAlternate:null,
    strImageSource: null,
    strIngredient1:"Flour",
    strIngredient2: "Dry yeast",
    strIngredient3:"Baking Powder",
    strIngredient4: "Sugar",
    strIngredient5: "Salt",
    strIngredient6: "Warm Water",
    strIngredient7: "Fish Oil",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strInstructions: "Sift SASKO CAKE WHEAT FLOUR into a bowl and add the sugar, salt & yeast and heat the oil in it. Make a well in the center of the mixture and add some warm water. Start mixing it together, adding a little water when needed until you have a soft dough. Dust your counter with SASKO CAKE WHEAT FLOUR and transfer the dough onto the counter. Knead until smooth for approximately 10 minutes. Let the dough rest for 30 minutes in a dish that is lightly floured and cover with a clean tea towel or cling wrap. After 30 minutes, knock down the dough and cover again to let it rise for about 90 minutes or until double in size. Break the dough into smaller pieces and shape into balls. Fry until golden brown on both sides. Approximately 10 minutes.",
    strMeal: "Amagwinya",
    strMealThumb:"https://ilove2bake.co.za/wp-content/uploads/2019/06/vetkoek-1.jpg",
    strMeasure1:"500 g SASKO CAKE WHEAT FLOUR",
    strMeasure2: "1 packet dry yeast",
    strMeasure3: "1/2 cup sugar",
    strMeasure4: "8 cloves chopped",
    strMeasure5: "1 tsp salt",
    strMeasure6: "1/4 litre of warm water",
    strMeasure7: "Oil for frying",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12:"",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strSource: "https://sasko.co.za/recipes/sasko-amagwinya-vetkoek/",
    strTags: null,
    strYoutube: "https://www.youtube.com/watch?v=u53U6R5pRbM"}]
    let naan = [{
        dateModified:null, 
        idMeal:"52788", 
        strArea:"Asia",
        strCategory:"Dessert",
        strCreativeCommonsConfirmed:null,
        strDrinkAlternate:null,
        strImageSource: null,
        strIngredient1:"Self-Rising Flour",
        strIngredient2: "whole-milk Greek yogurt",
        strIngredient3:"",
        strIngredient4: "",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "",
        strIngredient11: "",
        strIngredient12: "",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strInstructions: "Mix self-rising flour and Greek yogurt together in a large bowl until combined. Transfer to a lightly floured work surface and knead until smooth, adding more flour as necessary to keep dough from sticking, 2 to 3 minutes. Pat dough into a rough 9x7-inch rectangle. Divide into 8 equal pieces. Lightly dust each piece with flour and flatten into a semi-rectangular shape, about 1/4 inch thick. Lightly grease a large skillet and place it over medium heat. Add 1 or 2 of the flattened dough pieces to the skillet. Cook until they begin to bubble and brown, 2 to 4 minutes. Flip over and cook an additional 2 to 4 minutes. Remove from heat and repeat with remaining dough until all pieces are cooked. Serve warm.",
        strMeal: "Naan",
        strMealThumb:"https://earlsgrocery.com/wp-content/uploads/2022/09/naan-leavened-indian-flatbread-1957348-final-08-116a2e523f6e4ee693b1a9655784d9b9-scaled.jpg",
        strMeasure1:"1 ¼ cups self-rising flour, or more as needed",
        strMeasure2: "1 cup whole-milk Greek yogurt",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: "",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: "",
        strMeasure9: "",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12:"",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "https://www.allrecipes.com/recipe/280310/two-ingredient-naan/",
        strTags: null,
        strYoutube: "https://www.youtube.com/watch?v=qnzBkCkv9gs"}]

        let potatoe = [{
            dateModified:null, 
            idMeal:"52777", 
            strArea:"South Africa",
            strCategory:"Vegan",
            strCreativeCommonsConfirmed:null,
            strDrinkAlternate:null,
            strImageSource: null,
            strIngredient1:"Water",
            strIngredient2: "Potatoes",
            strIngredient3:"",
            strIngredient4: "",
            strIngredient5: "",
            strIngredient6: "",
            strIngredient7: "",
            strIngredient8: "",
            strIngredient9: "",
            strIngredient10: "",
            strIngredient11: "",
            strIngredient12: "",
            strIngredient13: "",
            strIngredient14: "",
            strIngredient15: "",
            strIngredient16: "",
            strIngredient17: "",
            strIngredient18: "",
            strIngredient19: "",
            strIngredient20: "",
            strInstructions: "Pour water into the bottom of a pressure cooker (such as Presto). Place a trivet into the pressure cooker and turn the heat on high. Place potatoes in a single layer in the pressure cooker and lock the lid. Cook over high heat until the pressure regulator reaches 15 psi, 5 to 10 minutes. Remove from heat. Allow pressure to drop naturally, 10 minutes. Unlock and remove lid.",
            strMeal: "Potatoe",
            strMealThumb:"https://www.alphafoodie.com/wp-content/uploads/2022/09/How-to-boil-potatoes-square-1.jpeg",
            strMeasure1:"2 cups water",
            strMeasure2: "8 russet potatoes, scrubbed",
            strMeasure3: "",
            strMeasure4: "",
            strMeasure5: "",
            strMeasure6: "",
            strMeasure7: "",
            strMeasure8: "",
            strMeasure9: "",
            strMeasure10: "",
            strMeasure11: "",
            strMeasure12:"",
            strMeasure13: "",
            strMeasure14: "",
            strMeasure15: "",
            strMeasure16: "",
            strMeasure17: "",
            strMeasure18: "",
            strMeasure19: "",
            strMeasure20: "",
            strSource: "https://www.allrecipes.com/recipe/261107/easy-pressure-cooker-potatoes/",
            strTags: null,
            strYoutube: "https://www.youtube.com/watch?v=YGzTwH5lQhc"}]

            
        let peanutButterBiscuits = [{
            dateModified:null, 
            idMeal:"527000", 
            strArea:"South Africa",
            strCategory:"Dessert",
            strCreativeCommonsConfirmed:null,
            strDrinkAlternate:null,
            strImageSource: null,
            strIngredient1:"Peanut butter",
            strIngredient2: "Golden caster sugar",
            strIngredient3:"Fine table salt",
            strIngredient4: "",
            strIngredient5: "",
            strIngredient6: "",
            strIngredient7: "",
            strIngredient8: "",
            strIngredient9: "",
            strIngredient10: "",
            strIngredient11: "",
            strIngredient12: "",
            strIngredient13: "",
            strIngredient14: "",
            strIngredient15: "",
            strIngredient16: "",
            strIngredient17: "",
            strIngredient18: "",
            strIngredient19: "",
            strIngredient20: "",
            strInstructions: "STEP 1 Heat oven to 180C/160C fan/gas 4 and line 2 large baking trays with baking parchment. STEP 2 Measure the peanut butter and sugar into a bowl. Add ¼ tsp fine table salt and mix well with a wooden spoon. Add the egg and mix again until the mixture forms a dough. STEP 3 Break off cherry tomato sized chunks of dough and place, well spaced apart, on the trays. Press the cookies down with the back of a fork to squash them a little. The cookies can now be frozen for 2 months, cook from frozen adding an extra min or 2 to the cooking time. STEP 4 Bake for 12 mins, until golden around the edges and paler in the centre. Cool on the trays for 10 mins, then transfer to a wire rack and cool completely. Store in a cookie jar for up to 3 days.",
            strMeal: "Peanut butter cookies",
            strMealThumb:"https://www.simplyrecipes.com/thmb/n5B_bYXWicM8aM-SAe2trDtkveg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Peanut-Butter-Cookies-LEAD-05-e3caaf60a5624313b15b28d429c41d9c.jpg",
            strMeasure1:"200g peanut butter (crunchy or smooth is fine)",
            strMeasure2: "175g golden caster sugar",
            strMeasure3: "¼ tsp fine table salt",
            strMeasure4: "1 large egg",
            strMeasure5: "",
            strMeasure6: "",
            strMeasure7: "",
            strMeasure8: "",
            strMeasure9: "",
            strMeasure10: "",
            strMeasure11: "",
            strMeasure12:"",
            strMeasure13: "",
            strMeasure14: "",
            strMeasure15: "",
            strMeasure16: "",
            strMeasure17: "",
            strMeasure18: "",
            strMeasure19: "",
            strMeasure20: "",
            strSource: "https://www.bbcgoodfood.com/recipes/peanut-butter-cookies",
            strTags: null,
            strYoutube: "https://www.youtube.com/watch?v=ED7ZFDvPy4U"}]

            let BasicOmeletteRecipe = [{
                dateModified:null, 
                idMeal:"527333", 
                strArea:"South Africa",
                strCategory:"Dessert",
                strCreativeCommonsConfirmed:null,
                strDrinkAlternate:null,
                strImageSource: null,
                strIngredient1:"Eggs,",
                strIngredient2: "Oil",
                strIngredient3:"Butter",
                strIngredient4: "",
                strIngredient5: "",
                strIngredient6: "",
                strIngredient7: "",
                strIngredient8: "",
                strIngredient9: "",
                strIngredient10: "",
                strIngredient11: "",
                strIngredient12: "",
                strIngredient13: "",
                strIngredient14: "",
                strIngredient15: "",
                strIngredient16: "",
                strIngredient17: "",
                strIngredient18: "",
                strIngredient19: "",
                strIngredient20: "",
                strInstructions: "STEP 1 Season the beaten eggs well with salt and pepper. Heat the oil and butter in a non-stick frying pan over a medium-low heat until the butter has melted and is foaming, STEP 2 Pour the eggs into the pan, tilt the pan ever so slightly from one side to another to allow the eggs to swirl and cover the surface of the pan completely. Let the mixture cook for about 20 seconds then scrape a line through the middle with a spatula. STEP 3 Tilt the pan again to allow it to fill back up with the runny egg. Repeat once or twice more until the egg has just set. STEP 4 At this point you can fill the omelette with whatever you like – some grated cheese, sliced ham, fresh herbs, sautéed mushrooms or smoked salmon all work well. Scatter the filling over the top of the omelette and fold gently in half with the spatula. Slide onto a plate to serve.",
                strMeal: "Basic omelette recipe",
                strMealThumb:"https://downshiftology.com/wp-content/uploads/2021/12/How-to-Make-an-Omelette-main-1.jpg",
                strMeasure1:"3 eggs, beaten",
                strMeasure2: "1 tsp sunflower oil",
                strMeasure3: "1 tsp butter",
                strMeasure4: "",
                strMeasure5: "",
                strMeasure6: "",
                strMeasure7: "",
                strMeasure8: "",
                strMeasure9: "",
                strMeasure10: "",
                strMeasure11: "",
                strMeasure12:"",
                strMeasure13: "",
                strMeasure14: "",
                strMeasure15: "",
                strMeasure16: "",
                strMeasure17: "",
                strMeasure18: "",
                strMeasure19: "",
                strMeasure20: "",
                strSource: "https://www.bbcgoodfood.com/recipes/basic-omelette",
                strTags: null,
                strYoutube: "https://www.youtube.com/watch?v=y-Wr401Bio4"}]

                let CrispyHashBrowns= [{
                    dateModified:null, 
                    idMeal:"527444", 
                    strArea:"South Africa",
                    strCategory:"Dessert",
                    strCreativeCommonsConfirmed:null,
                    strDrinkAlternate:null,
                    strImageSource: null,
                    strIngredient1:"Potatoe",
                    strIngredient2: "Oil",
                    strIngredient3:"Butter",
                    strIngredient4: "",
                    strIngredient5: "",
                    strIngredient6: "",
                    strIngredient7: "",
                    strIngredient8: "",
                    strIngredient9: "",
                    strIngredient10: "",
                    strIngredient11: "",
                    strIngredient12: "",
                    strIngredient13: "",
                    strIngredient14: "",
                    strIngredient15: "",
                    strIngredient16: "",
                    strIngredient17: "",
                    strIngredient18: "",
                    strIngredient19: "",
                    strIngredient20: "",
                    strInstructions: "Cook the potatoes in a saucepan of boiling water for 10 mins then drain and set aside until cool enough to handle, Coarsely grate the potatoes into a bowl discarding any skin that comes off in your hand as you grate. Season well with salt and pepper and pour over half the butter. Mix well then divide the mix into 8 and shape into patties or squares. The hash browns can be prepared a day ahead and chilled until ready to cook or frozen for up to a month. To cook, heat the oil and the remaining butter in a frying pan until sizzling and gently fry the hash browns, in batches if needed, for 4-5 mins on each side until crisp and golden. Serve straight away or leave in a low oven to keep warm.",
                    strMeal: "Crispy hash browns",
                    strMealThumb:"https://www.allrecipes.com/thmb/3FXvOnlaER8gcmZA2X-SyjyU9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57783-emilys-famous-hash-browns-DDMFS-4x3-ce2a6ec1178640258faf601d6848ff11.jpg",
                    strMeasure1:"3 medium-sized potatoes (approx. 370g",
                    strMeasure2: "50g butter, melted",
                    strMeasure3: "4 tbsp sunflower oil",
                    strMeasure4: "",
                    strMeasure5: "",
                    strMeasure6: "",
                    strMeasure7: "",
                    strMeasure8: "",
                    strMeasure9: "",
                    strMeasure10: "",
                    strMeasure11: "",
                    strMeasure12:"",
                    strMeasure13: "",
                    strMeasure14: "",
                    strMeasure15: "",
                    strMeasure16: "",
                    strMeasure17: "",
                    strMeasure18: "",
                    strMeasure19: "",
                    strMeasure20: "",
                    strSource: "https://www.bbcgoodfood.com/recipes/basic-omelette",
                    strTags: null,
                    strYoutube: "https://www.youtube.com/watch?v=DNXNIf7Dm-Y"}]

                    let Shortbreadbiscuits= [{
                        dateModified:null, 
                        idMeal:"527555", 
                        strArea:"South Africa",
                        strCategory:"Dessert",
                        strCreativeCommonsConfirmed:null,
                        strDrinkAlternate:null,
                        strImageSource: null,
                        strIngredient1:"Potatoe",
                        strIngredient2: "Oil",
                        strIngredient3:"Butter",
                        strIngredient4: "",
                        strIngredient5: "",
                        strIngredient6: "",
                        strIngredient7: "",
                        strIngredient8: "",
                        strIngredient9: "",
                        strIngredient10: "",
                        strIngredient11: "",
                        strIngredient12: "",
                        strIngredient13: "",
                        strIngredient14: "",
                        strIngredient15: "",
                        strIngredient16: "",
                        strIngredient17: "",
                        strIngredient18: "",
                        strIngredient19: "",
                        strIngredient20: "",
                        strInstructions: "Heat the oven 170C/150C fan/gas 3. Put the flour, butter and sugar into a mixing bowl. Use your hands to combine the ingredients until the mixture looks like breadcrumbs, then squeeze until it comes together as a dough. On a lightly floured surface, use a rolling pin to roll out the dough to ½ cm thick. Cut the dough into fingers and place on a lined baking tray. Use a fork to create imprints, then sprinkle with the remaining caster sugar. Chill the dough in the fridge for 20 mins, then bake for 15-20 mins until golden brown. Remove the shortbread fingers from the oven and leave to cool on the tray for 10 mins.",
                        strMeal: "Crispy hash browns",
                        strMealThumb:"https://hips.hearstapps.com/hmg-prod/images/delish-shortbread-cookies-horizontal-1541977640.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*",
                        strMeasure1:"150g plain flour, plus extra for dusting",
                        strMeasure2: "100g butter, chilled and cubed",
                        strMeasure3: "50g caster sugar, plus 1 tbsp for sprinkling",
                        strMeasure4: "",
                        strMeasure5: "",
                        strMeasure6: "",
                        strMeasure7: "",
                        strMeasure8: "",
                        strMeasure9: "",
                        strMeasure10: "",
                        strMeasure11: "",
                        strMeasure12:"",
                        strMeasure13: "",
                        strMeasure14: "",
                        strMeasure15: "",
                        strMeasure16: "",
                        strMeasure17: "",
                        strMeasure18: "",
                        strMeasure19: "",
                        strMeasure20: "",
                        strSource: "https://www.bbcgoodfood.com/recipes/shortbread-biscuits",
                        strTags: null,
                        strYoutube: "https://www.youtube.com/watch?v=5NDJ6uuVFA4"}]

                        let CheatsRealchips= [{
                            dateModified:null, 
                            idMeal:"527666", 
                            strArea:"South Africa",
                            strCategory:"Vegan",
                            strCreativeCommonsConfirmed:null,
                            strDrinkAlternate:null,
                            strImageSource: null,
                            strIngredient1:"Potatoe",
                            strIngredient2: "Oil",
                            strIngredient3:"Salt",
                            strIngredient4: "",
                            strIngredient5: "",
                            strIngredient6: "",
                            strIngredient7: "",
                            strIngredient8: "",
                            strIngredient9: "",
                            strIngredient10: "",
                            strIngredient11: "",
                            strIngredient12: "",
                            strIngredient13: "",
                            strIngredient14: "",
                            strIngredient15: "",
                            strIngredient16: "",
                            strIngredient17: "",
                            strIngredient18: "",
                            strIngredient19: "",
                            strIngredient20: "",
                            strInstructions: "To cook the chips, put them in a sturdy saucepan that holds them in a double layer and still has plenty of space above them. Pour over enough cold oil to cover them by about 2cm. Put the pan on a high heat and bring the oil to the boil, stirring the chips with a wooden spoon occasionally so they don’t stick. After about 20 mins the oil will clear and the chips will look like they are frying. Keep an eye on them, stirring with the spoon occasionally until golden and crisp. Scoop them out with a slotted spoon into a dish lined with kitchen paper, and season with flaky sea salt. Serve with the steak.",
                            strMeal: "Crispy hash browns",
                            strMealThumb:"https://images.food52.com/9m7_LoeOZbwcDZhqKoyU3yf1atk=/1200x675/ec8ee48e-c77a-48c3-a9e0-d2191111bc9a--2021-0723_food52-12th-birthday_homemade-potato-chips_3x2_ty-mecham.jpg",
                            strMeasure1:"450g Maris Piper potatoes, cut into chunky chips",
                            strMeasure2: "sunflower oil, for frying (about 300ml/1/2pt)",
                            strMeasure3: "Flaky sea salt",
                            strMeasure4: "",
                            strMeasure5: "",
                            strMeasure6: "",
                            strMeasure7: "",
                            strMeasure8: "",
                            strMeasure9: "",
                            strMeasure10: "",
                            strMeasure11: "",
                            strMeasure12:"",
                            strMeasure13: "",
                            strMeasure14: "",
                            strMeasure15: "",
                            strMeasure16: "",
                            strMeasure17: "",
                            strMeasure18: "",
                            strMeasure19: "",
                            strMeasure20: "",
                            strSource: "https://www.bbcgoodfood.com/recipes/cheats-real-chips",
                            strTags: null,
                            strYoutube: "https://www.youtube.com/watch?v=FvKuG1SggGk"}]
export const startFetchCategories = async(dispatch) => {
    try{
        dispatch({ type: FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`);
        dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories});
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message});
    }
}

export const startFetchSingleMeal = async(dispatch, id) => {
    console.log(id,amagwinya[0].idMeal)
    try{

        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN});
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);

        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message});
      
    }
    if(amagwinya[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: amagwinya});
    }
    if(naan[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: naan});
    }
    if(potatoe[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: potatoe});
    }
    if(peanutButterBiscuits[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: peanutButterBiscuits});
    } 
    if(Shortbreadbiscuits[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: Shortbreadbiscuits});
    }
    if(BasicOmeletteRecipe[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: BasicOmeletteRecipe});
    }
    if(CheatsRealchips[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: CheatsRealchips});
    }
    if(CrispyHashBrowns[0].idMeal==id){
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: CrispyHashBrowns});
    }
}

export const startFetchMealByCategory = async(dispatch, category) => {
    try{
        dispatch({type: FETCH_CATEGORY_MEALS_BEGIN});
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
        dispatch({type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data.meals})
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message});
    }
   
}

export const startFetchMealsBySearch = async(dispatch, searchTerm) => {

    let newId=  searchTerm.split(" ")
    console.log(newId)
    let data=[]
    try{
        console.log(searchTerm)
        if(searchTerm.toLowerCase().includes("flour")){
            const merged = [...amagwinya, ...naan, ...Shortbreadbiscuits,...peanutButterBiscuits];
            dispatch({ type: FETCH_MEALS_SUCCESS, payload: merged});  
        }
        if(searchTerm.toLowerCase().includes("salt")){
            const merged = [...amagwinya, ...naan, ...Shortbreadbiscuits,...peanutButterBiscuits];
            dispatch({ type: FETCH_MEALS_SUCCESS, payload: merged});  
        }
        if(searchTerm.toLowerCase().includes("water")){
            const merged = [...amagwinya, ...naan, ...Shortbreadbiscuits,...peanutButterBiscuits];
            dispatch({ type: FETCH_MEALS_SUCCESS, payload: merged});  
        }
        if(newId.length>1){
            for (let i = 0; i < newId.length; i++) {
                const element = newId[i];
                dispatch({ type: FETCH_MEALS_BEGIN});
                const response = await axios.get(`${SEARCH_URL}${element}`);
                let newRes=response.data.meals.slice(0,5)
              data=  data.concat(newRes)
               
            }
            console.log(data)
            dispatch({ type: FETCH_MEALS_SUCCESS, payload: data});
        }else{
            dispatch({ type: FETCH_MEALS_BEGIN});
          
            const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
            let newRes=response.data.meals.slice(0,5)
            console.log(newRes)
            searchTerm =="potatoe"? dispatch({ type: FETCH_MEALS_SUCCESS, payload: [...response.data.meals,...potatoe,...CrispyHashBrowns]}):dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals});
            
           
        }
       
    } catch(error){
        dispatch({type: FETCH_MEALS_ERROR, payload: error.message});
        console.log(error.message);
        if(error && searchTerm!="water" && searchTerm!="salt" &&searchTerm!="flour"&&searchTerm!="flour salt"&&searchTerm!="flour salt water"&&searchTerm!="flour water"&&searchTerm!="salt water"&&searchTerm!="water salt"){
            swal("Error", "Recipe cannot be found","error")
        }
    }
}