export interface SignInFormEmailInputProps {
	value: string;
	onValueChange: (value: string) => void;
	emailRecognized: boolean;
}

export function SignInFormEmailInput(props: SignInFormEmailInputProps) {
	const popover = !props.emailRecognized && renderPopover();
	const hint = !props.emailRecognized && <div className="sign-in-form--input-hint">Email not recognized.</div>;

	return (
		<div className="sign-in-form--input -email -wrapper">
			<input
				className={"sign-in-form--input -email" + (props.emailRecognized ? "" : " -error")}
				type="email"
				placeholder="Email"
				value={props.value}
				onChange={(e) => props.onValueChange(e.target.value)}
			/>
			{popover}
			{hint}
		</div>
	);
}

function renderPopover() {
	return (
		<div className="sign-in-form--input-popover">
			<svg
				className="sign-in-form--input-popover-background-image"
				width="212"
				height="80"
				viewBox="0 0 212 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="m 29.9705 0 c -8.8366 0 -16 7.1634 -16 16 v 7.0001 l -11.3136 11.3136 c -3.1242 3.1242 -3.1242 8.1895 0 11.3137 l 11.3136 11.3136 v 7.059 c 0 8.8366 7.1634 16 16 16 h 165.9995 c 8.837 0 16 -7.1634 16 -16 v -48 c 0 -8.8366 -7.163 -16 -16 -16 h -165.9995 z"
					fill="#9574CD"
				/>
			</svg>
			<div className="sign-in-form--input-popover-content">
				<strong>Email not recognized.</strong>
				<br />
				Do you need to create an account?{" "}
				<a className="sign-in-form--link" href="#">
					Click here
				</a>
			</div>
		</div>
	);
}
