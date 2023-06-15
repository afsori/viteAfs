import {
	Link,
	Route,
	Routes
} from "react-router-dom";
import LayoutHomePage from "../../layout/home";
import Chart from "./Chart";

function Home() {
	return (
		<div>
			<LayoutHomePage>
				<h1>home page</h1>
				<Link to="/">Home page</Link>
				<Link to="/about">about</Link>
				<Link to="/chart">chart</Link>
				<Routes>
						<Route path="/chart" exact={true} element={<Chart />} />
				</Routes>
			</LayoutHomePage>


		</div>
	);
}

export default Home;