import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
	return (
		<>
			<BrowserRouter>
				<Projects />
        <Experience />
			</BrowserRouter>
		</>
	);
}

export default App;
