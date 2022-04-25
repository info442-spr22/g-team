# Testing Plan

## Types of Testing
- Unit (automated) - stretch goal
- Integration (automated, from user's perspective)
- Acceptance testing (manual, from user’s perspective)
Automated tests will not achieve full code coverage, because certain elements of our functionality are not supported by our testing frameworks. Our stretch goal will be to achieve full coverage of test cases that do not utilize tracking of the user's cursor

## Testing Environments
- Jest, @testing-library for automated testing
- When acceptance testing each feature after having completed them, we will test on only one OS/Browser combination
- When acceptance testing all features in a milestone, we will test on all supported OS/Browser combinations

## Supported OS/Browser Combinations
- Chrome Browser on MacOS (tested on a MacBook Pro Laptop + MacBook Air Laptop)
- Chrome Browser on Windows 10 (tested on Dell G5 Desktop)
- Firefox Browser on Windows 11 (tested on an ideapad 5 laptop)
Notably, this product will not support touch input due to the nature of sticker placement.

## Process
After completing a GitHub task, developers will do an acceptance test of the task on their respective browser windows and operating systems. After developers finish implementing a milestone, all team members will do a complete acceptance test of all the features that are included in that milestone.

Each team member will develop on their own branch, merging to main after each GitHub task is completed. Before starting a task, each member will pull main into their branch to keep up to date on recent changes to the code base. Each member will only merge their branch into main after passing all automated tests and manually acceptance testing the new feature. We will only manually test new features before each merge into main. This is because our extensive milestone acceptance testing will be sufficient to catch regression bugs uncaught by automated tests.

When a GitHub task is completed and the above testing criteria are met, its developer will close the issue and inform the project manager. When a milestone is completed, and all members of the team have completed their acceptance test of its features, then the final member to complete their testing will close the milestone.


## User Acceptance Testing Script
- Since user authentication will be implemented in this product, multiple test accounts will be made. Test will be run on supported browsers and OS combinations.
- For testing for content sharing on social media, test accounts will be made for Twitter and Instagram


### Landing page
- Visit the landing page of the application. Expect to see the product name, description of the product and key features, and call to action for the Scrapbook feature.
- Click on the call to action button and expect to be redirected to an empty Scrapbook page (Landing page 4)


### Navigation Bar
- On every page, expect to see a navigation bar with links on the right and product name on the left
- While not logged in, expect to see the navigation bar links to be “Scrapbook” and “Log in” (Landing page 3b)
- While logged in, expect to see the navigation bar links to be “Scrapbook” and “Profile” (Landing page 3a)
- Clicking any of those links will redirect to its respective page


### Scrapbook
- When first directed to the Scrapbook page, expect to see a blank canvas with the tool selection bar on the left side of the screen. (Scrapbook 3)
  - On the tool selection bar, expect to see the “select + move” tool selected. (Scrapbook 2)
- Click on the background color square and expect the color selection tool to open. (Scrapbook 3a)
  - When a new color is selected, expect the canvas to change to the respective color. (Scrapbook 3b)
- Select the text box, expect it to become highlighted. (Scrapbook 7a/7b)
- With the text box selected, click anywhere on the Canvas and expect a text box to appear where clicked with editing beginning immediately. Additionally, expect the sidebar to be replaced with the text box properties sidebar. (Scrapbook 7c/7d)
  - Click the dropdown arrow next to the font, expect a list of fonts to appear. (Scrapbook 7di1)
    - Select any of the fonts, expect the font of the text box to change and all current text to change to that font. (Scrapbook 7di2)
  - Click the dropdown arrow next to the font-style, expect a list of styles to appear. (Scrapbook 7dii1)
    - Select any of the font-styles, expect the font-style of the text box to change and all current text to change to that font-style. (Scrapbook 7dii2)
  - Click on the number next to the font, type a new number, and hit enter. Expect the font-size of the text box to change to whatever value is typed here. (Scrapbook 7diii1)
  - Click on the font-color square, expect the color selection tool to open. (Scrapbook 7e)
    - Select a new color and expect the font-color to change to the respective color.
- When not signed-in, click the save button, expect to be prompted to create an account. (Scrapbook 11ai)
  - Return after signing in, expect their art piece to still be there to save.
- When signed-in, click the save button, see expectations in #Save to Gallery. (Scrapbook 11aii)
- Click the clear button, expect a warning to appear asking for confirmation for all the art work to be removed. (Scrapbook 12a)
  - Click the no button, expect the work to remain and the pop up will close. (Scrapbook 12aii).
  - Click the yes button, expect all work to be removed and the pop up will close. (Scrapbook 12ai)
- Select the selection + move tool and click an object on the canvas. Expect that object's properties to be opened in the object properties sidebar. (Scrapbook 13c)
- Select an object on the canvas, expect changes made to the object’s properties in the object properties sidebar to be reflected on the canvas. (Scrapbook 13di)
- Select an object on the canvas, expect a delete button to appear (Scrapbook 13dii)
  - When the delete button is clicked, expect the object to be removed from the canvas. (Scrapbook 14a)
- Click somewhere on the canvas where there is no object, expect the object to be deselected and the properties bar to revert to normal. (Scrapbook 13diii)
- Select an object on the canvas, click and drag that object and expect the object to be moved to where it is when the mouse is released. (Scrapbook 13e)


### Pre-Created Stickers
- Click on the “Stickers” tab in “object properties” sidebar on Scrapbook page, expect to choose from circle, ellipse, square, rectangle, line, arrow, triangle, star, and heart (Pre-created Stickers 1, 2)
  - Click on one of the stickers, expect to see square outline appearing around it and the background color of this square changing color (Pre-created Stickers 3)
    - When sticker is selected, expect to be able to click, hold, and release on canvas to place the sticker (Pre-created Stickers 4, 5)
    - After sticker is placed onto canvas, expect to be able to click on it to access select + move tool in order to edit the sticker’s width, height, rotation (Pre-created Stickers 7)
      - Stickers that are clicked on should be outlined in a rectangle with squares on the corners which can be clicked and dragged on to adjust the size of the sticker (Pre-created Stickers 8)


### Save to Gallery
- When finished with scrapbook piece, expect to press the save button to save work (Save to Gallery 2)
- Upon click of that button, expect to see a pop up that will indicate whether or not the work was saved correctly (Save to Gallery 2ai)
- After saving, expect to be able to access gallery to see newly saved work, either through the Go to Gallery button or Profile Page (Save to Gallery 2ai3)
- When the work is unable to be saved (due to disconnection etc.), expect to see a pop up that prompts to retry (Save to Gallery 2aii)
- Exit out of pop up screen by pressing the “X” button (Save to Gallery 2ai2, 2aii2)


### Profile Page
- When first entering this page before signing in, users are expected to see a Sign up & Login prompt. After signing in, users are expected to see their profile information and past created works. (Landing page 3a & 3b)
When on the profile page, expect to see the user’s profile picture, email, and display name to be displayed on the page (Profile page 2)
- Expect to see an “edit profile” button on the top right corner. When that button is clicked on, expect a pop up to appear that lets users change their profile picture and display name. (Profile page 3)
  - Hovering over profile picture in pop up will bring up a edit icon and clicking it will let users change their profile picture (Profile page 3b)
  - Clicking on the form their display name is in, users can type in a new display name (Profile page 3c)
  - Pressing save changes will save their new profile and exit out of the edit profile pop up (Profile page 3d)
  - Pressing the “X” button, expect no changes to profile to be saved and exit out of the edit profile pop up (Profile page 3e)
- Expect to see the gallery under the profile information (Profile page 4; more detailed in Gallery section)


### Log in/Sign up
- When first visiting the website, click on the Sign up button to create an account. After using email addresses or signing up with other credentials, click the login button to enter account information and log in. Expect to have access to personal gallery after this. This feature requires Firebase authentication. (Landing page 3a & 3b)

### Gallery
- After signed in, access profile page, expect to see artwork cards in rows of three
  - Expect to see empty page if no artwork has been saved (Gallery 2)
- Expect the artwork cards to be ordered from newest to oldest (Gallery 6)
- Change filter menu to sort by oldest, expect the gallery to sort work from oldest to newest (Gallery 7ai)
- Change filter menu to sort by newest, expect the gallery to sort work from newest to oldest (Gallery 7aii)


### Sharing Content
- After signed-in, save artwork to personal gallery (on the “saved” pop up), expect to see a share button on pop-up window with social media icons
  - Expect to be redirected to different social media platform in accordance to the icon selected
  - Pressing the Twitter icon, expect to be redirected to Twitter. An image of the artwork will be attached to the tweet
  - Pressing the Instagram icon, expect to be redirected to Instagram. Users can then choose to use that image either as a post, story, or message.


## Defect Management
If any defects are found, developers should include a screenshot of the error message and a specific description of the module where the defect can be found. Any defects will be documented and messaged to each team member in the group chat. It will also be documented as an issue (opened when one is found). Developers then will include reference of where in the requirements and specification does the defect locate to help understand the defect. Then developers should categorize the defect, refer to the milestones & tasks in order to review documents, example code, and tutorials to troubleshoot.

To report defects:
- Screenshot error
- OS version
- Expected result
- Actual result
- Report as issue on Github
