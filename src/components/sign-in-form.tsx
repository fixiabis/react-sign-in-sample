export function SignInForm() {
	return (
		<form className="sign-in-form">
			<div className="sign-in-form--title">Welcome Back</div>
			<div className="sign-in-form--social-buttons">
				<button className="sign-in-form--social-button -facebook" type="button"></button>
				<button className="sign-in-form--social-button -twitter" type="button"></button>
				<button className="sign-in-form--social-button -google" type="button"></button>
			</div>
			<div className="sign-in-form--input -email -wrapper">
				<input className="sign-in-form--input -email" type="email" placeholder="Email" />
				<div className="sign-in-form--input-popover">
					<strong>Email not recognized.</strong>
					<br />
					Do you need to create an account?{" "}
					<a className="sign-in-form--link" href="#">
						Click here
					</a>
				</div>
			</div>
			<div className="sign-in-form--input -password -wrapper">
				<input className="sign-in-form--input -password" type="password" placeholder="Password" />
				<div className="sign-in-form--password-visibility-toggle"></div>
			</div>
			<button className="sign-in-form--button -active" type="submit">
				Sign In
			</button>
			<div className="sign-in-form--hints">
				<div className="sign-in-form--hint -create-account">
					New here?{" "}
					<a className="sign-in-form--link" href="#">
						Create account
					</a>
				</div>
				<div className="sign-in-form--hint -forget-password">
					<a className="sign-in-form--link" href="#">
						Forgot your password?
					</a>
				</div>
			</div>
		</form>
	);
}
