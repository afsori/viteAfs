// import { useState } from 'react'
import "./App.css";
import {
	createBrowserRouter,
	// Link,
	// Route,
	RouterProvider,
	// Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BlogApp from "./pages/BlogApp";
import ErrorPage from "./pages/ErrorPage";
import UserApp from "./pages/UserApp";

// 3️⃣ Router singleton created
const router = createBrowserRouter([
	{ path: "/", Component: Home },
	{ path: "about", Component: About },
	{ path: "blog", Component: BlogApp },
	{ path: "user", Component: UserApp },
	{ path: "*", Component: ErrorPage },
]);

// 4️⃣ RouterProvider added
export default function App() {
	return <RouterProvider router={router} />;
}

// function Root() {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<Home />} />
// 		</Routes>
// 	);
// }




