import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Andrea");
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsLoading(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsLoading(false);
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
				<label>Blog body:</label>
				<textarea required onChange={(e) => setBody(e.target.value)}></textarea>
				<label>Blog author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="andrea">Andrea</option>
					<option value="barbara">Barbara</option>
					<option value="francesco">Francesco</option>
					<option value="luca">Luca</option>
					<option value="sabrina">Sabrina</option>
				</select>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
