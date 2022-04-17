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



