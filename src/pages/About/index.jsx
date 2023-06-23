import {
	Link,
} from "react-router-dom";

function About() {
	return (
		<div>
			<h1>ini halaman about</h1>
			<Link to="/">Home page</Link>
			<Link to="/about">about</Link>
			<Link to="/blog">blog</Link>
		</div>
	);
}

export default About;