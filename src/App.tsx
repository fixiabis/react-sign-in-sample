import { useEffect } from "react";
import "./App.scss";
import { SignInForm } from "./components/sign-in-form";
import { SignInPage } from "./components/sign-in-page";

function App() {
	useEffect(() => {
		document.title = "Sign In";
	}, []);

	return (
		<SignInPage>
			<SignInForm />
		</SignInPage>
	);
}

export default App;
