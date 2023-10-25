import React from "react";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";

// Comment component
const Comment = (props) => {
  return (
    <div className="">
      <h2 className="font-bold sm:text-2xl text-xl pt-3">{props.author}</h2>
      <p className="opacity-70 sm:text-xl text-base">{props.date}</p>
      <p className="sm:text-xl text-base py-3"> {props.text}</p>
    </div>
  );
};

// CommentList component
const CommentList = (props) => {
  return (
    <div className="py-10">
      {props.data.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          text={comment.text}
          date={comment.date}
        />
      ))}
    </div>
  );
};

// CommentForm component
class CommentForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const authorVal = e.target[0].value.trim();
    const textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    const currentDate = new Date();

    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(
        2,
        "0"
      )} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    this.props.onCommentSubmit({
      author: authorVal,
      text: textVal,
      date: formattedDate,
    });
    e.target[0].value = "";
    e.target[1].value = "";
  };

  render() {
    return (
      <div className="form_container p-10">
        <form className="comment-form form-group" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <p className="font-bold sm:text-3xl text-xl py-2">
              Leave A Comment
            </p>
            <p className="sm:text-lg text-base opacity-70 py-2">
              Sign in to post your comment or sign up if you don't have an
              account.
            </p>
            <div className="text-lg  pt-5 pb-2">Name*</div>
            <Input size="lg" placeholder="Your Name" />
          </div>
          <div className="py-8">
            <Textarea size="lg" minRows={4} placeholder="Your Comment" />
          </div>
          <input
            type="submit"
            value="Post Comment"
            className="download font-bold"
          />
        </form>
      </div>
    );
  }
}

// CommentBox component
class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data || [],
    };
  }

  handleCommentSubmit = (comment) => {
    const newComments = [...this.state.data, comment];
    this.setState({ data: newComments });
  };

  render() {
    return (
      <div className="comment-box">
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
