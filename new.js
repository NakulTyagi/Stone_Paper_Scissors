import React, { Component } from "react";
//import { Input } from "antd";
import { Button } from "antd";
import { Input, Select, Icon } from "antd";
import "./paperscissorsstoneimage.jpg";
import "./paper.jpg";
import "./stone.jpg";
import "./scissors.jpg";
import "./New.css";

class New extends Component {
  state = { arr: [{ stone: 1 }, { paper: 2 }, { scissor: 3 }] };

  sps = (p1, p2) => {
    var array = ["stone", "paper", "scissors"];
    var player1;
    var player2;
    var count1 = 0;
    var count2 = 0;

    //while ((button = "clicked")) {
    // while (count1 != 2 && count2 != 2) {
    //   console.log(count1);
    //   console.log(count2);
    player1 = array[Math.floor(Math.random() * 3)];
    console.log(player1);

    player2 = array[Math.floor(Math.random() * 3)];
    console.log(player2);
    if (player1 == "stone" && player2 == "paper") {
      // console.log("player2 wins");
      count2++;
      document.getElementById("p1").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("p2").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("h2").innerHTML =
        document.getElementById("player2").value + " Won";
      //aaaaaaaaa document.getElementById("h3").innerHTML = "player1 lost";
    }
    if (player1 == "stone" && player2 == "scissors") {
      count1++;
      // console.log("player1 wins");
      document.getElementById("p1").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("p2").src =
        "https://clipground.com/images/hand-game-clipart-20.jpg";
      document.getElementById("h2").innerHTML =
        document.getElementById("player1").value + " Won";
      // document.getElementById("h3").innerHTML = "player2 lost";
    }
    if (player1 == "stone" && player2 == "stone") {
      document.getElementById("p1").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("p2").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("h2").innerHTML = "Draw";
    }
    if (player1 == "paper" && player2 == "paper") {
      document.getElementById("p1").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("p2").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("h2").innerHTML = "Draw";
    }
    if (player1 == "paper" && player2 == "scissors") {
      count2++;
      document.getElementById("p1").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("p2").src =
        "https://clipground.com/images/hand-game-clipart-20.jpg";
      document.getElementById("h2").innerHTML =
        document.getElementById("player2").value + " Won";
      //  document.getElementById("h3").innerHTML = "player1 lost";
    }
    if (player1 == "paper" && player2 == "stone") {
      count1++;
      document.getElementById("p1").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("p2").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("h2").innerHTML =
        document.getElementById("player1").value + " Won";
      // document.getElementById("h3").innerHTML = "player2 won";
    }
    if (player1 == "scissors" && player2 == "scissors") {
      document.getElementById("p1").src =
        "https://clipground.com/images/hand-game-clipart-20.jpg";
      document.getElementById("p2").src =
        "https://clipground.com/images/hand-game-clipart-20.jpg";

      document.getElementById("h2").innerHTML = "Draw";
      // document.getElementById("h3").innerHTML = "player2 won";
    }
    if (player1 == "scissors" && player2 == "paper") {
      count1++;
      document.getElementById("p1").src =
        "https://clipground.com/images/hand-game-clipart-20.jpg";
      document.getElementById("p2").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("h2").innerHTML =
        document.getElementById("player1").value + " Won";
      //document.getElementById("h3").innerHTML = "player2 lost";
    }
    if (player1 == "scissors" && player2 == "stone") {
      count2++;
      document.getElementById("p1").src =
        "https://clipground.com/images/hand-game-clipart-20.jpg";
      document.getElementById("p2").src =
        "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg";
      document.getElementById("h2").innerHTML =
        document.getElementById("player2").value + "  Won";
      // document.getElementById("h3").innerHTML = "player1 lost";
    }
  };

  // if (count1 == 2) {
  //   console.log("player1 wins");
  //   document.getElementById("p2").innerHTML = "Player1 won the series";
  // } else {
  //   console.log("player2 wins");
  //   document.getElementById("p2").innerHTML = "Player2 won the series";
  // }

  render() {
    const Search = Input.Search;
    return (
      <div className="contain">
        <div className="header">
          <img
            height="350px"
            width="1500px"
            src="https://www.live.org.uk/sites/default/files/styles/lt_event_banner_crop/public/images/paperscissorsstoneimage.jpg?h=161b6971&itok=PhMgQjH3"
            alt=""
          />
        </div>

        <div id="input">
          <div style={{ marginBottom: 16 }}>
            <Search
              id="player1"
              placeholder="Player1 enter name"
              enterButton="Submit"
              size="large"
              onSearch={value => console.log(value)}
            />
            <br />
            <br />
            <Search
              id="player2"
              placeholder="Player2 enter name"
              enterButton="Submit"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        </div>
        <div className="start">
          <Button type="danger" onClick={() => this.sps()} block>
            LET THE WAR BEGIN
          </Button>
        </div>
        <div id="moves">
          <p id="input" />
          <h1 id="h1" />
          <h2 id="h2" />
          {/* <h2 id="h3" /> */}
          <img height="200px" width="200px" id="p1" />
          <img height="200px" width="200px" id="p2" />

          <Button type="primary" id="again" onClick={() => this.sps()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }
}

export default New;
