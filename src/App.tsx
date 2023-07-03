import { useEffect } from "react";
import "./App.scss";
import { SignInForm } from "./components/sign-in-form";

function App() {
	useEffect(() => {
		document.title = "Sign In";
	}, []);

	return (
		<div className="sign-in-page">
			<SignInForm />
		</div>
	);
}

export default App;
