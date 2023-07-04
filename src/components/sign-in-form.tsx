import { useRef, useState } from "react";
import { SignInFormEmailInput } from "./sign-in-form-email-input";
import { useEmailRecognition } from "./sign-in-form-email-recognition";
import { SignInFormSocialButtons } from "./sign-in-form-social-buttons";
import "./sign-in-form.scss";

interface SignInFormState {
	email: string;
	password: string;
}

export function SignInForm() {
	const [state, setState] = useState<SignInFormState>({ email: "", password: "" });
	const { emailRecognizing, emailRecognized } = useEmailRecognition(state.email);
	const submittingRef = useRef(false);
	const buttonActive = emailRecognized && state.password.length >= 6;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!buttonActive || submittingRef.current) {
			return;
		}

		submittingRef.current = true;

		setTimeout(() => {
			alert("登入完成！");
			submittingRef.current = false;
		}, 500);
	};

	return (
		<form className="sign-in-form" onSubmit={handleSubmit}>
			<div className="sign-in-form--title">Welcome Back</div>
			<SignInFormSocialButtons />
			<SignInFormEmailInput
				value={state.email}
				onValueChange={(email) => setState((state) => ({ ...state, email }))}
				emailRecognized={emailRecognized}
				emailRecognizing={emailRecognizing}
			/>
			<div className="sign-in-form--input -password -wrapper">
				<input
					className="sign-in-form--input -password"
					type="password"
					placeholder="Password"
					value={state.password}
					onChange={(e) => setState((state) => ({ ...state, password: e.target.value }))}
				/>
				<div className="sign-in-form--password-visibility-toggle">
					<svg
						className="sign-in-form--password-visibility-toggle-icon"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.4667 7.03268C14.6227 6.10801 13.6587 5.30068 12.6 4.63268L15.2667 1.96935C15.5313 1.71335 15.5387 1.29135 15.2833 1.02668C15.0273 0.762013 14.6053 0.754679 14.3407 1.01001C14.3353 1.01535 14.3293 1.02068 14.324 1.02668L14.312 1.03868C14.2893 1.11135 14.2493 1.17801 14.1967 1.23268L1.19668 14.2327C1.19134 14.2373 1.18468 14.2387 1.17934 14.244C1.03934 14.5847 1.20268 14.974 1.54268 15.114C1.79068 15.216 2.07601 15.1587 2.26668 14.9693L5.03068 12.2053C5.93801 12.6013 6.91401 12.814 7.90401 12.8313H8.10401C10.9413 12.8313 13.7633 10.842 15.4713 8.96468C15.9627 8.41401 15.9607 7.58135 15.4667 7.03268ZM10.8753 8.84668C10.5813 9.80735 9.83334 10.5627 8.87534 10.8653C8.19468 11.082 7.45801 11.0367 6.80868 10.7387C6.72468 10.698 6.69001 10.5973 6.73068 10.5133C6.73868 10.496 6.75001 10.4807 6.76334 10.4673L10.47 6.76135C10.5347 6.69535 10.6413 6.69401 10.7073 6.75868C10.7213 6.77201 10.7327 6.78801 10.7413 6.80601C11.0353 7.44668 11.0833 8.17335 10.8753 8.84668ZM5.07668 8.93335C5.11801 8.89135 5.13401 8.83001 5.11734 8.77335C5.04334 8.52201 5.00401 8.26201 5.00001 8.00001C5.00001 6.34335 6.34334 5.00001 8.00001 5.00001C8.26201 5.00268 8.52201 5.04135 8.77334 5.11535C8.83001 5.13201 8.89134 5.11601 8.93334 5.07401L10.2273 3.77935C10.2933 3.71335 10.2933 3.60601 10.2273 3.54001C10.2087 3.52135 10.186 3.50735 10.1607 3.49868C9.46268 3.27468 8.73334 3.16268 8.00001 3.16668C5.13334 3.12801 2.26668 5.13335 0.54201 7.03268C0.040677 7.57868 0.038677 8.41735 0.537344 8.96601C1.22601 9.72001 1.99468 10.3973 2.82934 10.986C2.89668 11.0327 2.98868 11.0247 3.04668 10.9667L5.07668 8.93335Z"
							fill="#90A4AE"
						/>
					</svg>
				</div>
			</div>
			<button className={"sign-in-form--button" + (buttonActive ? " -active" : "")} type="submit">
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
