import {
	Link,
} from "react-router-dom";

function UserApp() {
	return (
		<div>
			<h1>UserApp</h1>
			<Link to="/">Home page</Link>
			<Link to="/blog">BlogApp</Link>
			<Link to="/users">UserApp</Link>
		</div>
	);
}

export default UserApp;