import React, { Component } from "react";

class JokeClass extends Component {
    constructor(props) {
        super(props);
    }

    upVote() {
        this.props.vote(this.props.id, +1);
    }

    downVote() {
        this.props.vote(this.props.id, -1);
    }

    render() {
        return (
            <div className="Joke">
                <div className="Joke-votearea">
                    <button onClick={this.upVote.bind(this)}>
                        <i className="fas fa-thumbs-up" />
                    </button>
            
                    <button onClick={this.downVote.bind(this)}>
                        <i className="fas fa-thumbs-down" />
                    </button>
                {this.props.votes}
                </div>
                <div className="Joke-text">{this.props.text}</div>
            </div>
        )
    }
}

export default JokeClass;