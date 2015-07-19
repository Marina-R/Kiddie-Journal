var React = require('react');
var parseSettings = require('../config/parse.js');
var Backbone = require('backparse')(parseSettings);

var GrowthDataModel = require('../models/GrowthDataModel');
var GrowthDataCollection = require('../collections/GrowthDataCollection');

module.exports = React.createClass({
    componentWillMount: function() {
        // this.props.data.on('change', function() {
        //     this.forceUpdate();
        // }, this);
    },
    componentDidMount: function() {
        console.log('componentDidMount');
        var attributes = [
            {"name": 'width', "hex": "#CC0000"},
            {"name": "height", "hex": "#00CC00"}
        ];
        var sample_data = [
            {"value": 3, "name":"weight", "age": 2},
            {"value": 4, "name":"weight", "age": 3},
            {"value": 5, "name":"weight", "age": 4},
            {"value": 6, "name":"weight", "age": 5},
            {"value": 7, "name":"height", "age": 6},
            {"value": 8, "name":"height", "age": 7},
            {"value": 9, "name":"height", "age": 8},
            {"value": 8, "name":"height", "age": 8}
        ];

        // console.log(this.refs.chart.getDOMNode())
        // console.log(d3.select('#chart'))
    
        var visualization = d3plus.viz()
            .container([[this.refs.chart.getDOMNode()]])
            .data(sample_data)
            .type("line")
            .id("name")
            .y("age")
            .x("value")
            .attrs(attributes)
            .color("hex")
            .draw();
    },
    render: function() {
        return(
            <div ref='chart'>
            
            </div>
        );
    }
})

