import * as budgetController from './models/BudgetController';
import * as budgetView from './views/BudgetView';
import {strings} from './views/base';

// GLOBAL APP CONTROLLER

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 
    }

    const setupEventListeners = () => {
        document.querySelector(strings.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', e => {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })
    }


const ctrlAddItem = () => {
    console.log('works!');
    // 1. Get the field input data

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI




};

setupEventListeners();



/*
const ctrlAddItem = () => {
        console.log('click!');
        // 1. Get the field input data
        const input = budgetView.getInput();        
    
        //if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            
            //newItem = budgetController.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            //UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            //UICtrl.clearFields();

            // 5. Calculate and update budget
            //updateBudget();
            
            // 6. Calculate and update percentages
            //updatePercentages();
        
};

*/
 