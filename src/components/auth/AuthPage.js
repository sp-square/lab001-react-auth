import React, { useState, useRef } from 'react';
import { signup, login } from '../../dummy-api/auth-api';

function AuthPage() {
	const [isLoggingIn, setIsLoggingIn] = useState(true);
	const [error, setError] = useState(null);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	function switchAuthModeHandler() {
		setIsLoggingIn((wasLoggingIn) => !wasLoggingIn);
	}

	async function submitFormHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		let authenticate = isLoggingIn ? login : signup;
		try {
			await authenticate(enteredEmail, enteredPassword);
		} catch (err) {
			setError(err);
		}
	}

	return (
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
				<button className="btn">{isLoggingIn ? 'Log In' : 'Sign Up'}</button>
			</form>
			<button className="btn-alt" onClick={switchAuthModeHandler}>
				{isLoggingIn ? 'Create a new user' : 'Log in'}
			</button>
		</section>
	);
}

export default AuthPage;
