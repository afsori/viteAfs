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
				<div>
					<Link style={{marginRight:'10px'}} to="/">Home page</Link>
					<Link style={{marginRight:'10px'}} to="/about">About Page</Link>
					<Link style={{marginRight:'10px'}} to="/blog">Blog App Page</Link>
				</div>
				<Routes>
						<Route path="/chart" exact={true} element={<Chart />} />
				</Routes>
			</LayoutHomePage>


		</div>
	);
}

export default Home;