// import { useState } from 'react'
import "./App.css";
import {
	Route,
	BrowserRouter,
	Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BlogApp from "./pages/BlogApp";
import ErrorPage from "./pages/ErrorPage";
import UserApp from "./pages/UserApp";
import LayoutHomePage from "./layout/home";
import Chart from "./pages/Home/Chart";
import LayoutBlogPage from './layout/LayoutBlogPage'
import BlogUser from "./pages/BlogApp/BlogUser";


export default function App() {
	return (
		<BrowserRouter>
      <Routes>
				<Route element={<LayoutHomePage />}>
					<Route path="/" element={<Home />} />
					<Route path="/chart" element={<Chart />} />
				</Route>
				<Route element={<LayoutBlogPage />}>
					<Route path="/blog" element={<BlogApp />} />
					<Route path="/blog/users" element={<BlogUser />} />
				</Route>
        <Route path="/users/*" element={<UserApp />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
	)
}

// function Root() {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<Home />} />
// 		</Routes>
// 	);
// }




