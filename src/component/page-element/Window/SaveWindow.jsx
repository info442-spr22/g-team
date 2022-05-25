import React from 'react'
import Button from '../../page-element/Button/Button'
import {Link} from "react-router-dom";
import { GALLERY } from '../../../resources/constants/url-endpoints';

export default function SaveWindow(props) {

    return(
        <div>
        <div class="window active" id="window">
        <div class="window-header">
        <div class="title">
          Saved!
        </div>
        <button data-close-button class="close-button" id="closeId" onClick={props.closePopup}>&times; </button>
        </div>
        <div class="window-body">
          Looks great :)
          </div>
          <div class="window-buttons">
          <Link to={'/' + GALLERY}>
            <Button save>View Gallery</Button>
          </Link>
          </div>
          </div>
          <div id="overlay" class="overlay"></div>
          </div>
    )
}