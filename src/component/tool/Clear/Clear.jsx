import React from 'react'
import {Button} from '../../page-element/ActionBar/ActionBar'
import {elementsCopy} from '../../../page/Scrapbook/Scrapbook'

let clearButton = Button;


clearButton.addEventListener('click', () => {
    elementsCopy.length = 0; 

});
