import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/auth";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
// import About from "./components/About";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Page404 from "./components/Page404";
import Navbar from "./components/Navbar";
const LazyAbout = React.lazy(() => import("./components/About"));

const App = () => {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="about"
					element={
						<React.Suspense fallback="Loading ....">
							<LazyAbout />
						</React.Suspense>
					}
				/>
				<Route path="order-confirmed" element={<OrderSummary />} />
				<Route path="products" element={<Products />}>
					<Route index element={<FeaturedProducts />} />
					<Route path="featured" element={<FeaturedProducts />} />
					<Route path="new" element={<NewProducts />} />
				</Route>
				<Route path="users" element={<Users />}>
					<Route path=":userId" element={<UserDetails />} />
					<Route path="admin" element={<Admin />} />
				</Route>
				<Route
					path="profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route path="login" element={<Login />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</AuthProvider>
	);
};

export default App;
