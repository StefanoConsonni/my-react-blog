import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="not-found">
			<h2>Error 404</h2>
			<p>That page cannot be found</p>
			<Link to="/">Go to the Homepage</Link>
		</div>
	);
};

export default NotFoundPage;
