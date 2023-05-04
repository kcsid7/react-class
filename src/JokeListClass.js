import React, { Component } from "react";
import axios from "axios";

import "./JokeList.css";
import JokeClass from "./JokeClass";


class JokeListClass extends Component {

    static defaultProps = {
        numJokes: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }

        this.generateNewJokes = this.generateNewJokes.bind(this);
        this.vote = this.vote.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length < this.props.numJokes) this.getJokes();
    }

    async generateNewJokes() {
        await this.setState(st => ({jokes: []}));
        this.getJokes();
    }

    vote(jokeId, num) {
        this.setState(i => ({
            jokes: i.jokes.map(j => j.id === jokeId ? {...j, votes: j.votes + num} : j)
        }))
    }

    async getJokes() {
        try {
            console.log("Getting Jokes!")
            let allJokes = this.state.jokes;
            let seenJokes = new Set(allJokes.map(i => i.id));

            while (allJokes.length < this.props.numJokes) {
                let res = await axios.get("https://icanhazdadjoke.com", {
                headers: { Accept: "application/json" }
                });
                let { status, ...jokeObj } = res.data;
        
                if (!seenJokes.has(jokeObj.id)) {
                seenJokes.add(jokeObj.id);
                allJokes.push({ ...jokeObj, votes: 0 });
                } else {
                console.error("duplicate found!");
                }
            }
            this.setState(({jokes: allJokes}));
        } catch (e) {
            console.log(e);
        }
      } 

    render() {
        let sortedJokes = [...this.state.jokes].sort((a,b) => b.votes - a.votes);

        return (
        <div className="JokeList">
            <button className="JokeList-getmore" onClick={this.generateNewJokes}>
                Get New Jokes
            </button>
    
            {sortedJokes.map(j => (
            <JokeClass text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={this.vote} />
            ))}
        </div>
        )
    }
}

export default JokeListClass;