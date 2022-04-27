# Requirements

## Create Account / Log-In (Core)
A.
<ol>
  <li>These are two pages that each have a form with the following appearance:</li>
  <ol>
    <li>The form on both pages will be centered in the available space</li>
    <li>Both pages will have input fields for email and password</li>
    <li>The create account page will have a second password input</li>
  </ol>
  <li>These pages will have the following behavior:</li>
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
  <li>If they were redirected to the login/create account pages because they attempted to navigate to a page that requires authentication, then after   successful authentication, the user is redirected to the page they attempted to navigate to</li>
<li>(stretch) There should be an option to reset password if the user forgets their password</li>
     <ol>
       <li>Users that click on “reset password” link will be redirected to password recovery page (stretch)</li>
       <li>Users will need to input their email address to receive a recovery code that they can use to reset their password (stretch)</li>
     </ol>
   </ol>
<li>For the create account page:</li>
  <ol>
  <li>Form validation for the two password entry inputs to contain the same value on submission</li>
  <li>An error message should appear if the email has been used to make an account already</li>
  <li>Once user has filled in forms with acceptable entries (email address, name, and password), clicking on the “Create account” button will lead them to the Scrapbooking page or Gallery page (if they were trying to save work without being logged in)</li>
   </ol>
</ol>

## Landing Page (Core)
B.
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
C.
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
<li>Users can click the save button to save content to gallery</li>
     <ol>
     <li>Users need an account to save to the gallery.</li>
       <ol>
        <li>If the user does not have an account they will instead be prompted to create one</li>
          <ol>
          <li>A pop up will let users know that they need an account</li>
          <li>The pop up will include a sign up button and pressing that will lead them to the sign-up/login page</li>
          </ol>
        <li>If user has account and is signed in, a pop up will appear to let them know their piece has been saved (detailed in Save to Gallery section)</li>
       </ol>
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

## Save to Gallery (Core)
D.
<ol>
<li>Users are signed in</li>
<li>Within the Scrapbook page, users can click on the “Save” button to save a piece</li>
  <ol>
    <li>Clicking the button will prompt a pop up</li>
    <ol>
      <li>Pop up will confirm to user that their work has been saved to gallery</li>
        <ol>
        <li>User can press “OK” to remove pop up</li>
        <li>User can press “X” in top corner to exit pop up</li>
        <li>User can press “Go to gallery” to navigate to profile/gallery</li>
        <li>User can press “Share” to share content (detailed in View Art Pieces/Share Them 8a)</li>
        </ol>
     <li>Pop up will say that an error has occurred and work has not been saved</li>
        <ol>
        <li>User can press “Retry” to try saving again (pops up until success)</li>
        <li>User can press “X” in top corner to exit pop up</li>
        </ol>
    </ol>
   </ol>
</ol>

## Pre-created Stickers (Core)
E.
<ol>
<li>Users can view all pre-created stickers under the “Stickers” section on the 'object properties' sidebar on the Scrapbook page.</li>
<li>Users can select any of the following stickers:</li>
  <ol>
  <li>Circle</li>
    <ol>
    <li>Users can select the circle by clicking the “c” key on their keyboard.</li>
    </ol>
  <li>Ellipse</li>
    <ol>
    <li>Users can select the ellipse by clicking the “e” key on their keyboard.</li>
    </ol>
  <li>Square</li>
    <ol>
    <li>Users can select the square by clicking the “s” key on their keyboard.</li>
    </ol>
  <li>Rectangle</li>
    <ol>
    <li>Users can select the rectangle by clicking the “r” key on their keyboard.</li>
    </ol>
  <li>Line</li>
    <ol>
    <li>Users can select the line by clicking the “l” key on their keyboard.</li>
    </ol>
  <li>Arrow</li>
    <ol>
    <li>Users can select the arrow by clicking the “a” key on their keyboard.</li>
    </ol>
  <li>Triangle</li>
    <ol>
    <li>Users can select the triangle by clicking the “shift + t” key on their keyboard.</li>
    </ol>
  <li>Star</li>
    <ol>
    <li>Users can select the star by clicking the “x” key on their keyboard.</li>
    </ol>
  <li>Heart</li>
    <ol>
    <li>Users can select the heart by clicking the “h” key on their keyboard.</li>
    </ol>
  </ol>
<li>By clicking on a sticker, the user will select that sticker represented by a square outline appearing around it and the background color of this square changing color.</li>
<li>With a sticker selected the user can click and hold on the canvas to begin the sticker placement process.</li>
<li>When the user releases their mouse button while the sticker placement process is undergoing, they will place the sticker on the canvas.</li>
<li>When the user moves their cursor during the sticker placement process, the preview of what the sticker will look like when placed appears.</li>
  <ol>
  <li>If the user’s cursor goes off the canvas, the preview stops.</li>
  <li>If the user’s cursor was off the canvas, during the sticker placement process and returns to the canvas, the preview will resume following the cursor.</li>
  </ol>
<li>When a sticker that is placed on the canvas is selected with the select + move tool, the bar on the left of the canvas is replaced with the sticker information bar</li>
  <ol>
  <li>The user can edit the width of the sticker using numeric values.</li>
  <li>The user can edit the height of the sticker using numeric values.</li>
  <li>The user can edit the rotation of the sticker using numeric values (degrees).</li>
  <li>The user can edit the color of the sticker's fill by clicking on a square labeled “sticker fill” opening the color selection tool.</li>
    <ol>
    <li>See color selection tool requirements in Scrapbook-4.</li>
    </ol>
  <li>The user can edit the color of the sticker's fill by clicking on a square labeled “sticker outline” opening the color selection tool. (stretch)</li>
    <ol>
    <li>See color selection tool requirements in Scrapbook-4.</li>
    </ol>
  </ol>
<li>When a sticker that is placed on the canvas is clicked the sticker will be outlined in a rectangle with squares on the corners.</li>
  <ol>
  <li>The user can click and drag these corners to adjust the size of the sticker</li>
  </ol>
<li>When a sticker that is placed on the canvas is clicked, the user can use the arrow keys on their keyboard to move the sticker a set distance.</li>
<li>The user can click and drag a sticker on the canvas to change its position.</li>
</ol>

## Nav Bar (Core)
F.
<ol>
<li>On left side of nav bar, the name of product will be displayed</li>
  <ol>
  <li>Clicking on the product name will lead users to the About Us page (stretch)</li>
  </ol>
<li>On right side of nav bar, there will be two buttons to help users navigate to different pages. The options will differ depending on whether or not the user is logged in or not</li>
  <ol>
  <li>If logged in:</li>
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
</ol>

## Sharing Content to Social Media (Core)
G.
<ol>
<li>When to prompt sharing:</li>
  <ol>
  <li>When saving gallery</li>
  <li>When looking at art in detail (stretch)</li>
  </ol>
<li>A user can share to social media after being prompted when saving to the gallery (see Save to Gallery 2.a.i.4)</li>
<li>A user can share to social media by clicking the share button on the view art piece preview (see View Art Piece/Share (stretch) page) (stretch)</li>
<li>When a user starts the share process, a medium sized pop-up window appears with social media icons.</li>
<li>When a user clicks on one of these social media icons, they will be redirected to this platform to share their art piece.</li>
<li>If an error occurs during the sharing to social media process, an error message will be displayed  stating “Something went wrong, please try again.”</li>
<li>If the user clicks on the x in the top right corner, they will abort the sharing to social media process and exit the pop-up window.</li>
</ol>

## Gallery (Core)
H.
<ol>
<li>The user should be able to access their personal gallery of scrapbooking artwork after clicking on the account tab in the navigation bar at the top.</li>
  <ol>
  <li>If user somehow tries to access it, they will be redirected to the login page</li>
    </ol>
<li>This feature requires users to have an account, otherwise, they cannot access it</li>
<li>If user has no saved pieces, the gallery will be empty (no cards)</li>
<li>If user has saved piece(s), the gallery will display the piece(s) (3 cards per row)</li>
<li>Under the profile page, users can scroll down and see their saved pieces</li>
<li>User can view art pieces in detail by clicking on the card (detailed in View Art Pieces/Share Them section)</li>
<li>By default, the gallery pieces are sorted by newest (newest on top and oldest on the bottom)</li>
<li>User can sort their pieces</li>
  <ol>
    <li>By clicking on the “Sort by” drop down, a list of filter options will appear</li>
    <ol>
    <li>Sort by: oldest (selecting this option sorts the gallery pieces by oldest on top and newest below)</li>
    <li>Sort by: newest (selecting this option sorts the gallery pieces by newest on top and oldest below)</li>
    </ol>
    <li>Sort by date (would appear in the sort by drop down; stretch)</li>
    <ol>
    <li>A calendar template would appear and each piece would be organized into a cell of the calendar depending on which day it was saved</li>
    </ol>
  </ol>
</ol>

## Profile Page - Personal Gallery Showcase (Core)
I.
<ol>
<li>After finishing each art piece, users can click the finish button. It would then be able to be seen in the personal gallery.</li>
<li>On the top half of the profile page, users’ profile picture, display name, and email address would be displayed.</li>
<li>There is a “Edit Profile” button on the upper right corner</li>
    <ol>
   <li>Upon click of that button, users will bring up a edit profile pop up window that lets them edit their profile</li>
    <li>When users hover over their profile picture, a edit icon will appear</li>
      <ol>
      <li>Users can click on that icon to edit profile picture</li>
      <li>Upon click, a pop up window will appear, revealing photo options for the user to pick from</li>
      <li>They can click on a photo and this will close the pop up window and change the profile pic to what they chose, bringing them back to the edit profile pop up</li>
      </ol>
   <li>In the Edit Profile pop up, users can edit their display name and view their email address</li>
      <ol>
      <li>The text related profile information will be in a form format, allowing users to type</li>
      <li>Clicking the form for their display name will enable users to type in that form, they can delete or type in a new display name</li>
      <li>Email address cannot be changed</li>
      </ol>
    <li>Once they’re done editing, they can press “Save Changes” at the bottom to save their changes and exit the edit profile pop up</li>
    <li>If they don’t want to make changes or discard changes, they can press the “X” at the upper right corner of the pop up</li>
    </ol>
<li>On the bottom half of the profile page, the art piece preview would be displayed in a card form(3 cards per row)</li>
</ol>

## Non-Functional Requirements
J.
<ol>
<li>User data should be encrypted before transmission to the back-end, and also while at rest in the back-end (these both come with the Firebase services we plan to use)</li>
<li>Non-accessible features are removed when screen is being read by a screen reader</li>
</ol>

## View Art Pieces/Share Them (Stretch)
K.
<ol>
<li>The user will be able to click on the artwork in particular that they would like to share to social media.</li>
<li>A medium sized pop-up window will appear in the center of the page that will contain their artwork and the date it was saved.</li>
    <ol>
    <li>If the user accidentally clicked on the artwork or does not want to look at it anymore, there will be a small X in the top right corner that allows the user to click on and close the window.</li>
    </ol>
<li>Underneath the pop-up window, there will be two small-sized buttons that say “discard” and “share.”</li>
    <ol>
    <li>If the user clicks on the “share” button, another medium sized pop-up window will appear that contains multiple different social media icons, such as twitter, facebook, and instagram.</li>
    <li>The user will be able to click on one of the social media icons and will be redirected to the corresponding platform to share their content.</li>
    <li>If an error occurs while attempting to share the artwork, the user will be prompted on the same window to try again, with an error message that says “Something went wrong, please try again.”</li>
    <li>If the user wants to go back because they do not want to share the content, they will be able to click on a small back arrow on the top left corner of the pop-up window.</li>
    <li>There will also be a small X in the top right corner that allows the user to click on and close the window.</li>
    </ol>
</ol>

## Create Own Stickers (Stretch)
L.
<ol>
<li>Users can utilize the same stickers and tools provided in the scrapbook page (all except for text) to create their own stickers</li>
<li>These custom stickers can be used in the scrapbook page and in the creation of new stickers.</li>
<li>They are used in the same way(s) except that they are put in their own section of the 'object properties' sidebar</li>
<li>One user can have a maximum of 12 custom stickers</li>
<li>If the user already has the max number of custom stickers:</li>
  <ol>
  <li>When they create a new sticker, they are prompted before they begin that they will have to replace a sticker if they save this new one</li>
  <li>When they opt to save this new sticker, they are presented with a display of all of their custom stickers, and they choose one to delete and replace with the new sticker</li>
  </ol>
<li>Optionally, these stickers can be viewed on the gallery page, in a separate section from the art pieces, and managed from there</li>
  <ol>
  <li>Users can see a zoomed in view of each of their own stickers from here, individually</li>
  <li>Users can delete specific stickers one at a time from this zoomed in view</li>
  </ol>
</ol>

## About Us Page (Stretch)
M.
<ol>
<li>Users can click the About Us Page button in the top menu. It would bring them to the About Us Page which contains content of our product’s mission statement, information about our team, and a brief introduction of how to use our product.</li>
<li>This page would has access to accessibility features.(voiceover)</li>
</ol>

## Upload Created Stickers to the Public Sticker Set (Stretch)
N.
<ol>
<li>Users should be able to save their sticker art by clicking on a button located to the top right of the canvas.</li>
<li>Users will see a pop-up window after saving their art that asks them if they want to upload their art to the public sticker set.</li>
<li>Users should have the option to click the yes button if they want to upload their sticker to the public sticker set.</li>
    <ol>
    <li>Users will see a pop-up box that tells them that their sticker will be reviewed and then uploaded to the public sticker set</li>
   </ol>
<li>Users should have the option to click the no button if they do not want to upload their sticker to the public sticker set</li>
    <ol>
    <li>Users will see a pop-up box that them that their sticker will be saved to their personal gallery instead</li>
    </ol>
</ol>
