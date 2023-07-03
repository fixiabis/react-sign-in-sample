import { useEffect, useRef, useState } from "react";
import { SignInFormEmailInput } from "./sign-in-form-email-input";
import "./sign-in-form.scss";

interface SignInFormState {
	email: string;
	password: string;
}

const EMAIL_FORMAT = /.+@.+\..+/;
const RECOGNIZABLE_EMAIL_FORMAT = /.+@waterballsa\.tw/;

export function SignInForm() {
	const [state, setState] = useState<SignInFormState>({ email: "", password: "" });
	const [emailRecognized, setEmailRecognized] = useState(true);
	const submittingRef = useRef(false);
	const buttonActive = emailRecognized && state.password.length >= 6;

	useEffect(() => {
		setEmailRecognized(true);

		if (!EMAIL_FORMAT.test(state.email)) {
			return;
		}

		const timeout = setTimeout(() => {
			setEmailRecognized(RECOGNIZABLE_EMAIL_FORMAT.test(state.email));
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [state.email]);

	const handleSubmit = () => {
		if (!buttonActive || !EMAIL_FORMAT.test(state.email) || submittingRef.current) {
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
			<div className="sign-in-form--social-buttons">
				<button className="sign-in-form--social-button -facebook" type="button">
					<svg
						className="sign-in-form--social-button-icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18.14 7.17C18.046 7.063 17.912 7.002 17.77 7H14V5.59C14 5.31 14.06 4.99 14.51 4.99H17.51C17.643 4.996 17.772 4.941 17.86 4.84C17.948 4.749 17.998 4.627 18 4.5V0.5C18 0.224 17.776 0 17.5 0H13.17C8.37 0 8 4.1 8 5.35V7H5.5C5.224 7 5 7.224 5 7.5V11.5C5 11.776 5.224 12 5.5 12H8V23.5C8 23.776 8.224 24 8.5 24H13.5C13.776 24 14 23.776 14 23.5V12H17.35C17.608 12.001 17.824 11.806 17.85 11.55L18.27 7.55C18.282 7.411 18.235 7.273 18.14 7.17Z"
							fill="#9574CD"
						/>
					</svg>
				</button>
				<button className="sign-in-form--social-button -twitter" type="button">
					<svg
						className="sign-in-form--social-button-icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23.32 6.44C23.532 6.263 23.561 5.948 23.385 5.736C23.317 5.654 23.224 5.596 23.12 5.57L22.33 5.37C22.062 5.303 21.899 5.031 21.966 4.764C21.974 4.731 21.986 4.7 22 4.67L22.44 3.78C22.56 3.531 22.455 3.232 22.207 3.112C22.099 3.06 21.976 3.049 21.86 3.08L19.86 3.64C19.709 3.684 19.546 3.654 19.42 3.56C18.555 2.911 17.502 2.56 16.42 2.56C13.659 2.56 11.42 4.799 11.42 7.56V7.92C11.421 8.047 11.326 8.155 11.2 8.17C8.39001 8.5 5.70001 7.07 2.80001 3.73C2.67201 3.588 2.47501 3.53 2.29001 3.58C2.12401 3.656 2.01301 3.817 2.00001 4C1.59901 5.645 1.76101 7.377 2.46001 8.92C2.52201 9.043 2.47301 9.194 2.35001 9.256C2.30301 9.279 2.25101 9.288 2.20001 9.28L1.08001 9.06C0.807006 9.016 0.551006 9.202 0.507006 9.474C0.498006 9.533 0.499006 9.592 0.510006 9.65C0.685006 11.205 1.55701 12.595 2.88001 13.43C3.00401 13.49 3.05601 13.64 2.99601 13.764C2.97101 13.815 2.93101 13.856 2.88001 13.88L2.35001 14.09C2.09401 14.193 1.96901 14.484 2.07201 14.74C2.07701 14.754 2.08301 14.767 2.09001 14.78C2.68501 16.082 3.88101 17.009 5.29001 17.26C5.42001 17.307 5.48701 17.451 5.44001 17.58C5.41501 17.65 5.36001 17.704 5.29001 17.73C3.93001 18.292 2.47101 18.575 1.00001 18.56C0.724006 18.505 0.455006 18.684 0.400006 18.96C0.345006 19.236 0.524006 19.505 0.800006 19.56C3.34801 20.768 6.12101 21.426 8.94001 21.49C11.419 21.528 13.855 20.832 15.94 19.49C19.424 17.164 21.511 13.249 21.5 9.06V8.19C21.501 8.043 21.567 7.904 21.68 7.81L23.32 6.44Z"
							fill="#9574CD"
						/>
					</svg>
				</button>
				<button className="sign-in-form--social-button -google" type="button">
					<svg
						className="sign-in-form--social-button-icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.10001 7.39999C6.30701 7.56199 6.60401 7.53599 6.78001 7.33999C9.35601 4.45699 13.781 4.20899 16.664 6.78499C16.815 6.91999 16.961 7.06199 17.1 7.20999C17.294 7.40599 17.611 7.40699 17.807 7.21299C17.808 7.21199 17.809 7.21099 17.81 7.20999L20.73 4.46999C20.926 4.27599 20.927 3.95899 20.733 3.76299C20.732 3.76199 20.731 3.76099 20.73 3.75999C16.186 -1.06401 8.59101 -1.29101 3.76701 3.25299C3.46201 3.53999 3.17301 3.84299 2.90001 4.15999C2.72001 4.36999 2.74401 4.68499 2.95401 4.86499C2.96901 4.87799 2.98401 4.88899 3.00001 4.89999L6.10001 7.39999ZM5.24001 14.79C5.38801 14.657 5.44301 14.449 5.38001 14.26C4.88601 12.814 4.88601 11.246 5.38001 9.79999C5.44701 9.60099 5.38301 9.38199 5.22001 9.24999L1.95001 6.63999C1.73401 6.46799 1.41901 6.50399 1.24701 6.71999C1.22501 6.74799 1.20601 6.77799 1.19001 6.80999C-0.434987 10.187 -0.379987 14.131 1.34001 17.46C1.46701 17.705 1.76901 17.801 2.01401 17.674C2.05201 17.654 2.08801 17.629 2.12001 17.6L5.24001 14.79ZM24 10.5C24 10.224 23.776 9.99999 23.5 9.99999H13.5C13.224 9.99999 13 10.224 13 10.5V14.5C13 14.776 13.224 15 13.5 15H18.34C18.045 15.61 17.661 16.173 17.2 16.67C17.028 16.86 17.028 17.15 17.2 17.34L19.87 20.34C20.059 20.542 20.375 20.552 20.577 20.363C20.585 20.356 20.593 20.348 20.6 20.34C22.635 18.258 23.843 15.507 24 12.6V10.5V10.5ZM15.52 18.46C15.374 18.297 15.139 18.249 14.94 18.34C12.176 19.642 8.88501 18.979 6.84001 16.71C6.64601 16.519 6.33401 16.519 6.14001 16.71L3.14001 19.39C2.94401 19.584 2.94301 19.901 3.13701 20.097C3.13801 20.098 3.13901 20.099 3.14001 20.1C6.97201 24.315 13.24 25.256 18.14 22.35C18.377 22.209 18.455 21.902 18.314 21.665C18.298 21.638 18.28 21.613 18.26 21.59L15.52 18.46Z"
							fill="#9574CD"
						/>
					</svg>
				</button>
			</div>
			<SignInFormEmailInput
				value={state.email}
				onValueChange={(email) => setState((state) => ({ ...state, email }))}
				emailRecognized={emailRecognized}
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
