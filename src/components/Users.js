import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const showActiveUsers = searchParams.get("filter") == "active";
	return (
		<>
			<h1>User 1</h1>
			<h1>User 2</h1>
			<h1>User 3</h1>
			<Outlet />
			<button onClick={() => setSearchParams({ filter: "active" })}>
				Active User
			</button>
			<button onClick={() => setSearchParams({})}>Reset Filter</button>
			{showActiveUsers ? <h2>Show Active Users</h2> : <h2>Show All Users</h2>}
		</>
	);
};

export default Users;
