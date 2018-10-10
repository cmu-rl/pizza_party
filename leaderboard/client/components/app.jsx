/* jshint maxlen: false */

App = React.createClass({
  propTypes: {
    players: React.PropTypes.array,
    selectedId: React.PropTypes.string,
    selectedName: React.PropTypes.string,
  },
  render() {
    console.log('[App] rendering');
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Herobraine AI Leaderboard</h1>
        <div>
          {/*<Countdown { ...this.props } />*/}
        </div>
        
        <div>
          <PlayerList
            timeframe={ "all" }
            players={ this.props.players }
            selectedId={ this.props.selectedId }
            selectedName={ this.props.selectedName } />
            <PlayerList
            timeframe={ "hour" }
            players={ this.props.players }
            selectedId={ this.props.selectedId }
            selectedName={ this.props.selectedName } />
        </div>
      </div>
    );
  }
});
