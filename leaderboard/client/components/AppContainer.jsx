// AppContainer is responsible for fetching data from the store and
// listening for changes. In a larger app you would have a container
// for each major component.

AppContainer = React.createClass({
// you can also use mixins to eliminate this boisdasdte
  getInitialState() {
    return PlayerStore.getState();
  },

  componentDidMount() {
    PlayerStore.listen(this.onChange);
    this.interval = setInterval(() => {
      this.setState({ players: Player.findLeaders() });
    }, 1000);
  },

  componentWillUnmount() {
    PlayerStore.unlisten(this.onChange);
    clearInterval(this.interval);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    // passes each key of this.state to App as a prop
    return (<App {...this.state} />);
  }
});
