import React from 'react'
 

export default function Window(props) {
    // const openWindowButtons = document.querySelectorAll('[data-window-target]');
    // const closeWindowButtons = document.querySelectorAll('[data-close-button]');
    // const overlay = document.getElementById('overlay');

    // openWindowButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const window = document.querySelector(button.dataset.windowTarget)
    //         openWindow(window);
    //     })
    // });
    //
    // function openWindow(window) {
    //   if(window == null) return
    //   window.classList.add('active')
    //   overlay.classList.add('active')
    // };
    //
    // closeWindowButtons.forEach(button => {
    //   button.addEventListener('click', () => {
    //       const window = button.closest('.window')
    //       closeWindow(window);
    //   })
    // });
    //
    // function closeWindow(window) {
    //   if(window == null) return
    //   window.classList.remove('active')
    //   overlay.classList.remove('active')
    // };
    //
    //
    // overlay.addEventListener('click', () => {
    //   const windows = document.querySelectorAll('.window.active');
    //   windows.forEach(window => {
    //       closeWindow(window)
    //   })
    // });
  
return(
    <div>
    {/*<div>*/}
    {/*<button data-window-target="#window" id="shareButton" type="button" class="btn share">*/}
    {/*    Share*/}
    {/*</button>*/}
    {/*</div>*/}
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
