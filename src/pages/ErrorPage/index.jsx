import {
	Link,
} from "react-router-dom";

function ErrorPage() {
	return (
		<div>
			<h1>this error page. please return to home page</h1>
			<Link to="/">Home page</Link>
		</div>
	);
}

export default ErrorPage;