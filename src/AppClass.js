import React, { Component } from "react";

import JokeListClass from "./JokeListClass.js";

class AppClass extends Component {
    
    render() {
        return (
            <div className="App">
                <JokeListClass />
            </div>
        )
    }
}

export default AppClass;