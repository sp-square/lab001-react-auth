# Scenario

Even though it's still some time until we'll launch our new web app, we want you to support our work on the React frontend. Our new single-page-application should support user authentication (i.e. login, signup, logout) and we want you to implement the basic authentication flow and features into a first basic prototype page that is provided to you by the main frontend team. It's very important to us that users can sign up and login easily and that authentication status is accessible across the entire frontend and also after page reloads. Also make sure that users can't reach pages that require authentication, if they haven't logged in yet.

The provided prototype app comes with three main pages (welcome, authentication & user profile) and you should gather the user input and send it to the provided dummy API. In detail, you should implement these core features:

- Check whether the user is logging or signing up and gather the user input on the AuthPage to send it to the provided dummy API for login and signup
- Use the response of the dummy API to either show an error message in the AuthPage or to store the provided token and manage the user's auth state globally in the React app
- Update the Navigation component to reflect the current auth status (i.e. show "Logout" button) if the user is authenticated
- Add "route guards" and make sure unauthenticated users can't reach the UserProfilePage route whilst authenticated users shouldn't be able to reach the AuthPage route
- Store the auth token in browser storage and initialize the web app with the token and appropriate user auth status, if a stored token is found on app startup

<br>

# Tasks

### Task 1: Gather and use the user credentials

### Task 2: Manage the user auth state globally

### Task 3: Update & connect the UI to the app-wide auth state

### Task 4: Protect routes against unauthenticated access

### Task 5: Redirect the user after authentication state changes

### Task 6: Store the auth state in browser storage & auto-initialize authentication state

<br>

# Resources
