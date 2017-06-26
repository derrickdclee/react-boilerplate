var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/*
var Route = require('react-router').Route;
would have accomplished the same
*/

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')
);
