import { useEffect } from "react";
import "./App.scss";

function App() {
	useEffect(() => {
		document.title = "Sign In";
	}, []);

	return <div className="sign-in-page"></div>;
}

export default App;
