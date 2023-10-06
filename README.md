# Scenario

Even though it's still some time until we'll launch our new web app, we want you to support our work on the React frontend. Our new single-page-application should support user authentication (i.e. login, signup, logout) and we want you to implement the basic authentication flow and features into a first basic prototype page that is provided to you by the main frontend team. It's very important to us that users can sign up and login easily and that authentication status is accessible across the entire frontend and also after page reloads. Also make sure that users can't reach pages that require authentication, if they haven't logged in yet.

The provided prototype app comes with three main pages (welcome, authentication & user profile) and you should gather the user input and send it to the provided dummy API. In detail, you should implement these core features:

- Check whether the user is logging or signing up and gather the user input on the AuthPage to send it to the provided dummy API for login and signup
- Use the response of the dummy API to either show an error message in the AuthPage or to store the provided token and manage the user's auth state globally in the React app
- Update the Navigation component to reflect the current auth status (i.e. show "Logout" button) if the user is authenticated
- Add "route guards" and make sure unauthenticated users can't reach the UserProfilePage route whilst authenticated users shouldn't be able to reach the AuthPage route
- Store the auth token in browser storage and initialize the web app with the token and appropriate user auth status, if a stored token is found on app startup
  <br>
  <br>

# Tasks

### Task 1: Gather and use the user credentials

You need to collect the user input in the AuthPage upon form submission. Also, manage the auth mode and let users switch between login and signup. Thereafter, send the collected data to the appropriate dummy API "endpoint" (i.e., call the appropriate dummy API function). No client-side validation must be added, but you should check for API response errors and show the error message below the inputs if necessary.

1. Go to the `AuthPage.js` file and **add two state slices** (i.e., two `useState()` calls) to it: **one for the chosen auth mode** (_logging in_ vs _signing up_) and **one for potential error messages** that should be displayed. The default auth mode can be _logging in_, the default error should be `null` (i.e., no error):

   ```
   const [isLoggingIn, setIsLoggingIn] = useState(true);
   const [error, setError] = useState(null);
   ```

2. Add two refs (via `useRef()`) that will be connected to the _email_ and _password_ input elements. These refs will be used for **reading the values** upon form submission. Alternatively, you could also use `useState()` with two-way-binding for gathering user input:

   ```
   const emailInputRef = useRef();
   const passwordInputRef = useRef();
   ```

3. **Connect** the two created refs to the **respective input elements** via the `ref` prop:

   ```
   <input type="email" id="email" ref={emailInputRef} required />
   ```

   and

   ```
   <input
   type="password"
   id="password"
   ref={passwordInputRef}
   minLength={6}
   required
   />
   ```

4. **Add a `switchAuthModeHandler` function** to the `AuthPage` component function. This function sets the `isLoggingIn` state to the opposite of what it was before (i.e., the state is **toggled** between `true` and `false`). Use the function form of updating the state, since the new state depends on the previous state:

   ```
   function switchAuthModeHandler() {
    setIsLoggingIn((wasLoggingIn) => !wasLoggingIn);
   }
   ```

5. **Update the caption** of the form submission button to **reflect the currently chosen auth mode**. The caption should say _Log in_ if `isLoggingIn` is `true` and _Create user_ otherwise. Also, update the auth mode switching button at the end of the form. It should say _Create a new user_ if if `isLoggingIn` is `true` and _Log in_ with existing user otherwise:

   ```
   ...

    <button className="btn">
      {isLoggingIn ? 'Log in' : 'Create user'}
    </button>
   </form>

   <button className="btn-alt" onClick={switchAuthModeHandler}>
    {isLoggingIn ? 'Create a new user' : 'Log in with existing user'}
   </button>
   ```

6. Add a `submitFormHandler` function to the `AuthPage` component function. This function will **extract the entered email and password values and call either the `login()` or `signup()`** dummy API functions (based on the selected auth mode => `isLoggingIn`). Use `async` + `await`, since the dummy API uses `Promise`s:

   ```
   async function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let authenticate = isLoggingIn ? login : signup;
    await authenticate(enteredEmail, enteredPassword);
   }
   ```

7. **Add error handling** to `submitFormHandler` and set the **error state to the error message** returned by the dummy API if an error was returned:

   ```
   async function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let authenticate = isLoggingIn ? login : signup;
    try {
      await authenticate(enteredEmail, enteredPassword);
    } catch (error) {
      setError(error);
    }
   }
   ```

8. **Output the error message** (if an error exists) below the input elements in the form:
   ```
   <section id="auth-form">
      <form onSubmit={submitFormHandler}>
       <div className="form-control">
         <label htmlFor="email">Email</label>
         <input type="email" id="email" ref={emailInputRef} required />
       </div>
       <div className="form-control">
         <label htmlFor="password">Password</label>
         <input
           type="password"
           id="password"
           ref={passwordInputRef}
           minLength={6}
           required
         />
       </div>
       {error && <p>{error}</p>}
       <button className="btn">
         {isLoggingIn ? 'Log in' : 'Create user'}
       </button>
      </form>
      <button className="btn-alt" onClick={switchAuthModeHandler}>
      {isLoggingIn ? 'Create a new user' : 'Log in with existing user'}
      </button>
   </section>
   ```

### Task 2: Manage the user auth state globally

### Task 3: Update & connect the UI to the app-wide auth state

### Task 4: Protect routes against unauthenticated access

### Task 5: Redirect the user after authentication state changes

### Task 6: Store the auth state in browser storage & auto-initialize authentication state

<br>
<br>
  
# Resources

- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [useState](https://react.dev/reference/react/useState)
