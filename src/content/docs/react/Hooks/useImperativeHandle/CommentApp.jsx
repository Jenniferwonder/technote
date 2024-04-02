import { forwardRef, useRef, useImperativeHandle } from "react";
import "./style.css";

export default function CommentApp() {
	const postRef = useRef(null);

	function handleClick() {
		postRef.current.scrollAndFocusAddComment();
	}

	return (
		<>
			<h2>Comment App</h2>
			<button onClick={handleClick}>Write a comment</button>
			<Post ref={postRef} />
		</>
	);
}

const Post = forwardRef(function Post(props, ref) {
	const commentsRef = useRef(null);
	const addCommentRef = useRef(null);

	useImperativeHandle(
		ref,
		() => {
			return {
				scrollAndFocusAddComment() {
					commentsRef.current.scrollToBottom();
					addCommentRef.current.focus();
				},
			};
		},
		[]
	);

	return (
		<>
			<article>
				<p>Welcome to my blog!</p>
			</article>
			<CommentList ref={commentsRef} />
			<AddComment ref={addCommentRef} />
		</>
	);
});

const CommentList = forwardRef(function CommentList(props, ref) {
	const divRef = useRef(null);

	useImperativeHandle(
		ref,
		() => {
			return {
				scrollToBottom() {
					const node = divRef.current;
					node.scrollTop = node.scrollHeight;
				},
			};
		},
		[]
	);

	let comments = [];
	for (let i = 0; i < 50; i++) {
		comments.push(<p key={i}>Comment #{i}</p>);
	}

	return (
		<div className="CommentList" ref={divRef}>
			{comments}
		</div>
	);
});

const AddComment = forwardRef(function AddComment(props, ref) {
	return <input placeholder="Add comment..." ref={ref} />;
});
