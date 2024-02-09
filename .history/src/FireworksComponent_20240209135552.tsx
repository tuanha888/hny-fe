class FireworksComponent extends React.Component {
  componentDidMount() {
    this.initializeFireworks();
  }

  initializeFireworks() {
    const container = document.getElementById("fireworks-container");
    const fireworks = new Fireworks(container, {});

    fireworks.start();
  }

  render() {
    return (
      <div id="fireworks-container" style={{ width: "100%", height: "100%" }} />
    );
  }
}

export default FireworksComponent;
