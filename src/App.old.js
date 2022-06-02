import { connect } from "react-redux";
import { Child } from "./Child";
import "./styles.css";

function App({ count, incrementar }) {
  function handleAumentarClick() {
    incrementar();
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleAumentarClick}>Aumentar</button>
      <Child />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementar: () => dispatch({ type: "INCREMENTAR" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
