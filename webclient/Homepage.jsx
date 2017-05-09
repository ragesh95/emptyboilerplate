import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Route, Router, Redirect} from 'react-router';
class MainComp extends React.Component {
 render() {
  return (
   <h1>hai</h1>
  );
 }
}
ReactDOM.render(
	<Router history={hashHistory}>
	</Router>, document.getElementById('mountapp')
);
