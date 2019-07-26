import React from "react";

const SinglePost = post => {
	return (
		<div className="text-center">
			<h4>{post.title}</h4>
			<p>{post.body}</p>
		</div>
	);
};

const Posts = props => {
	const posts = props.posts;
	console.log(posts);
	return <div />;
};

export default Posts;
