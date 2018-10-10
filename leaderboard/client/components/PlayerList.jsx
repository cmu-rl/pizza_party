
PlayerList = React.createClass({
  propTypes: {
    timeframe: React.PropTypes.array.isRequired,
    players: React.PropTypes.array.isRequired,
    selectedId: React.PropTypes.string.isRequired
  },

  render() {
    if (!this.props.players.length) {
      return (
        <ul className="leaderboard">
          <h2>No players here yet..</h2>
        </ul>
      );
    }

    var name = "Total";
    var players;
    if(this.props.timeframe == "all"){
      name = "Total";
      players = this.props.players;
    } else if(this.props.timeframe == "hour") {
      const curDate = new Date();
      curDate.setHours(curDate.getHours() - 10);
        
      name = "Past Hour (" + (
        (curDate.getHours() % 24) + ":" + 
        ("0" + curDate.getMinutes()  % 60 ).slice(-2) + ":" + 
        ("0" +curDate.getSeconds() % 60).slice(-2)
         ) + ")";
      // Get the total score count in the past hour!
      players = this.props.players.map((player) => {

        const scoresDeltas = player.scores.filter(score => {
          return score.time > curDate;
        });
        if(scoresDeltas.length !== 0){
          const score = scoresDeltas.map(sd => sd.points).reduce((a,b) => a+b);
          return {
            _id: player._id,
            name: player.name,
            score: score,
          } 
        }
        else return;
      });
      players = players.filter(player => !!player);
    } else {
       return (
        <ul className="leaderboard">
          <h2>Timeframe unsupported.</h2>
        </ul>);
    }


    players.sort((p1,p2) => p2.score - p1.score);

    return (
    <div>
       <h2> { name } </h2>
       <ul className="leaderboard">
         {
           players.map((player, nummer) => {
             return (
               <PlayerItem
                 key={ player._id }
                 rank={ nummer }
                 selectedPlayerId={ this.props.selectedId }
                 player={ player } />
             );
           })
         }
       </ul>
    </div>
    );
  }
});
