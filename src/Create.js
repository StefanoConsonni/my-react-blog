const Create = () => {
	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form>
				<label>Blog title:</label>
				<input type="text" required />
				<label>Blog body:</label>
				<textarea required></textarea>
				<label>Blog author:</label>
				<select>
					<option value="andrea">Andrea</option>
					<option value="barbara">Barbara</option>
					<option value="francesco">Francesco</option>
					<option value="luca">Luca</option>
					<option value="sabrina">Sabrina</option>
				</select>
				<button>Add Blog</button>
			</form>
		</div>
	);
};

export default Create;
