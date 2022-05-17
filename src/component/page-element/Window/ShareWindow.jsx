import React from 'react'
 

export default function ShareWindow(props) {

  
return(
    <div>
    <div class="window active" id="window">
    <div class="window-header">
    <div class="title">
      Example Title  
    </div>
    <button data-close-button class="close-button" id="closeId" onClick={props.closePopup}>&times; </button>
    </div>
    <div class="window-body">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Harum molestias praesentium sit quas ducimus laudantium, 
      velit rerum est. Quo ipsum fugiat deserunt nulla quidem soluta quod aut, 
      harum, veritatis illo vitae voluptates ipsam esse nemo corrupti delectus a 
      ad exercitationem numquam repellat, nostrum maxime! Maxime minima dolor 
      perspiciatis odit aperiam dignissimos. Placeat hic ipsam deleniti blanditiis, 
      molestiae nihil voluptates omnis asperiores, ea debitis tempora sint totam 
      perspiciatis modi vero quod mollitia officiis doloremque fuga? Fugiat, vitae. 
      Quaerat amet nam excepturi.
      </div>
      </div>
      <div id="overlay" class="overlay"></div>
      </div>
)
}
