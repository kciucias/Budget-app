import {strings} from './base';

// destrukturyzacja

export const getInput = () => {
    return {
        type: document.querySelector(strings.inputType).value,
        description: document.querySelector(strings.inputDescription).value,
        value: parseFloat(document.querySelector(strings.inputValue).value)
    }
};

const {type, description, value} = getInput();

