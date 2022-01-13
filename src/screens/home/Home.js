import React, {Component} from "react";
import Header from "../../common/header/header";
import "./Home.css";
import SingleLineGridList from "./gridList";

class Home extends Component {
    
    render() {
        return (
            <div style={{margin: 0}}>
                <Header />
                <div className="upcoming">
                    <span>Upcoming Movies</span>
                </div>
                <SingleLineGridList />
            </div>
        );
    }
}

export default Home;