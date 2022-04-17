## Create Account / Log-In (Core)
<ol>
  <li>These are two pages that each have a form with:</li>
  <ol>
    <li>Form validation for the email to be in valid email format</li>
    <li>Form validation for the password to be at least 6 characters</li>
    <li>If any form validation fails, then a message describing the failure will be shown to the user, and the portion(s) of the form that are in error will be highlighted red</li>
  </ol>
<li>For the login page:</li>
  <ol>
  <li>Authenticate the user with Firebase when the form is submitted with valid input</li>
  <li>When the Log In button is clicked, it is disabled and a loading icon is displayed inside of the button while the information is being submitted</li>
  <li>By default, the user is brought to the scrapbook page after successful authentication</li>
  <li>If they were redirected to the login/create account pages because they attempted to take an action that requires authentication, then after successful authentication, the user is redirected to the page they were on when they attempted that action</li>
  <li>If they were redirected to the login/create account pages because they attempted to navigate to a page that requires authentication, then after   successful authentication, the user is redirected to that page</li>
  <li>The 'create account' link should direct the user to the 'create account' page</li>
(stretch) There should be an option to reset password if the user forgets their password
   </ol>
<li>For the create account page:</li>
  <ol>
  <li>Form validation for the two password entry inputs to contain the same value on submission</li>
  <li>An error message should appear if the email has been used to make an account already</li>
  <li>The 'log in' link should direct the user to the 'log in' page</li>
   </ol>
</ol>

## Landing Page (Core)
<ol>
<li>Should be the first page users see</li>
<li>User must be able to scroll through landing page</li>
  <ol>
  <li>Product name and description</li>
  <li>Information about the product</li>
  </ol>
<li>User can access navigation bar at the top of the page</li>
  <ol>
  <li>If signed in:</li>
      <ol>
    <li>Click on “Scrapbook” to enter Scrapbook page</li>
    <li>Click on “Profile” to enter Profile page</li>
      </ol>
  <li>If not signed in or no account:</li>
      <ol>
    <li>Click on “Scrapbook” to enter Scrapbook page</li>
    <li>Click on “Sign in” to enter Sign-In/Log-In page</li>
      </ol>
   </ol>
<li>Users can use “Start Scrapbooking” button to enter “Scrapbook” page</li>
<li>Users can read about features about product</li>
  <ol>
     <li>There will be a section underneath the Product name and description that introduces the main features about the product</li>
     <ol>
       <li>Will be in a row of 3 items, each item will have the feature + description</li>
     </ol>
    </ol>
<li>Users can read about how product works (stretch)</li>
<li>Users can click the “About us” button (or click the product name in the nav bar) to access About us page (stretch)</li>
</ol>

## Scrapbook (Core)
<ol>
<li>This page consists of a canvas, an 'object properties' sidebar, and an action bar</li>
<li>By default, the select + move tool is highlighted with a change of color and an outline around the symbol.</li>
<li>By default, the background color of the canvas is white.</li>
  <ol>
      <li>Users can click on a square with the label “background color” in the action bar to open a color selection tool. Using this tool, the user can choose a new background color for the canvas.</li>
      <li>When a new color is chosen, the square the user clicked on will change to that color as well.</li>
  </ol>
<li>Color selection tool requirements:</li>
      <ol>
      <li>When the user opens the color selection tool in any way, it will appear beneath the trigger as a medium-sized rectangle.</li> 
      <li>The user can use their cursor to create a different shade of the primary color they have currently selected in the rectangle in the center of the color selection tool.</li>
      <li>The user can change the primary color using their cursor on the primary color slider second from the right of the color selection tool.</li>
      <li>The user can change the opacity using the opacity slider on the far right of the color selection tool.</li> 
      <li>The user can see the new color they have created in the bottom half of the rectangle on the left of the color selection tool.</li>
      <li>The user can see the color most recently selected in the top half of the rectangle on the left of the color selection tool.</li>
      <li>The user confirms the color by clicking the save button.</li>
      <li>The user cancels the change of color by clicking the clear button.</li>
      <li>This tool is accessible in the 'object properties' sidebar to…</li>
          <ol>
          <li>edit the color of a sticker's fill</li>
          <li>edit the color of a sticker's outline (stretch)</li>
        </ol>
        </ol>
<li>Users can use pre-created stickers on the canvas (see pre-created stickers section for more requirements)</li>
<li>Users can place self-created stickers on canvas (stretch goal, see create own stickers section)</li>
<li>Users can write text on canvas</li>
      <ol>
      <li>By clicking the Text icon, users will select the text box tool.</li>
      <li>By clicking the “t” key on the keyboard, users will select the text box tool.</li>
      <li>While the text box tool is selected, users can click on the canvas to place a text box.</li>
      <li>While editing the text box, the 'object properties' sidebar has its contents replaced with the text box properties editor</li>
            <ol>
            <li>Users can change font</li>
              <ol>
              <li>By pressing on the drop down arrow where the current font is displayed, a drop down with font options will appear</li>
              <li>Users can use drop down to change font of text by selecting a font from the drop down</li>
              </ol>
            <li>Users can change the text style</li>
              <ol>
              <li>By pressing the drop down arrow where the current text style is displayed, a drop down with text type will appear</li>
              <li>Users can use the drop down to change the text style (bold, normal, italicized)</li>
              </ol>
            <li>Users can change the font size with a numeric value</li>
              <ol>
              <li>By pressing the number that displays the font size, users can delete and type in a new number for the font size</li>
              </ol>
            </ol>
          <li>Change font color</li>
            <ol>
            <li>While still on the text box tool, users can use the sidebar to access colors and change the color of the text by clicking on a color</li>
            </ol>
        </ol>
<li>Users can copy the following objects using the shortcut ctrl/cmd + c</li>
      <ol>
      <li>Pre-created stickers</li>
      <li>Text boxes</li>
      <li>Custom stickers (Stretch)</li>
      </ol>
<li>Users can cut the following objects using the shortcut ctrl/cmd + x</li>
      <ol>
      <li>Pre-created stickers</li>
      <li>Text boxes</li>
      <li>Custom stickers (Stretch)</li>
      </ol>
<li>Users can paste the following objects using the shortcut ctrl/cmd + v</li>
      <ol>
      <li>Pre-created stickers</li>
      <li>Text boxes</li>
      <li>Custom stickers (Stretch)</li>
      </ol>
<li>Users can save content to gallery</li>
     <ol>
     <li>Users need an account to save to the gallery.</li>
       <ol>
        <li>If the user does not have an account they will instead be prompted to create one</li>
          <ol>
          <li>A pop up will let users know that they need an account</li>
          <li>The pop up will include a sign up button and pressing that will lead them to the sign-up/login page</li>
          </ol>
        <li>If user has account and is signed in, a pop up will appear to let them know their piece has been saved (detailed in Save to Gallery section)</li>
       <ol>
     </ol>
<li>Can click the clear button to remove all content from page</li>
    <ol>
    <li>A warning saying “Are you sure…” will be prompted for confirmation</li>
      <ol>
      <li>Pressing “Yes, clear my canvas” will close the pop up and restart the canvas back to its default state</li>
      <li>Pressing “No, don’t clear my canvas” will close the pop up</li>
      </ol>
    </ol>
<li>Select + move tool</li>
      <ol>
      <li>In the action bar, there will be a select + move tool</li>
      <li>This tool is 'in use' after having been clicked in the action bar</li>
      <li>When the selection tool is in use, clicking on any object on the canvas will bring up that object's properties in the sidebar</li>
      <li>While an object is selected,</li>
        <ol>
        <li>editing the properties in the sidebar will change that object's properties</li>
        <li>there is a delete button revealed in the action bar</li>
        <li>if a portion of the canvas with no object is clicked, the object is de-selected</li>
        <li>(stretch) Using the arrow keys, the user is able to move a selected object in small increments</li>
        </ol>
      <li>The user can move an object by clicking and dragging with the select + move tool</li>
      </ol>
<li>Object deletion</li>
        <ol>
       <li>A sticker or text box can be deleted by selecting the object with the select + move tool and clicking the delete button in the action bar</li>
       <li>(stretch) When deleted, up to 20 objects will be saved in memory in a stack, and pressing the 'undo deletion' button in the action bar will take a deleted object out of the stack and restore it on the canvas</li>
       <li>(stretch) The 'undo deletion' button will only show when there are deleted objects in the stack</li>
       <li>(stretch) If an object is deleted and the stack is full, then the oldest deleted object is removed from the bottom of the stack, permanently deleting it</li>
       </ol>
</ol>



