import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
				.then((res) => {
					if (!res.ok) {
						throw Error("Could not fetch the data from that resource");
					}
					return res.json();
				})
				.then((data) => {
					setBlogs(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}, 1000);
	}, []);

	return (
		<div className="home">
			{error && <div className="text-special">{error}</div>}
			{isLoading && <div className="text-special">Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
