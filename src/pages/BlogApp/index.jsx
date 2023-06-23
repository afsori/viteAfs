import {
	Link,
} from "react-router-dom";

function BlogApp() {
	return (
		<div>
			<h1>BlogApp</h1>
			<Link to="/">Home page</Link>
			<Link to="/blog">BlogApp</Link>
			<Link to="/blog/users">Blog User</Link>
		</div>
	);
}

export default BlogApp;