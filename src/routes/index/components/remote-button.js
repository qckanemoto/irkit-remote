const React = require('react');
const Col = require('react-bootstrap').Col;
const Button = require('react-bootstrap').Button;
const _ = require('lodash');

module.exports = React.createClass({
    PropTypes: {
        isEditing: React.PropTypes.bool,
        config: React.PropTypes.object.isRequired
    },

    getDefaultProps: function () {
        return {
            isEditing: false,
        };
    },

    handleClick: function () {
        this.props.onClick(this.props.config);
    },

    render: function () {
        var buttonStyle = {height: '5.5em', padding: '.1em', marginBottom: '1em'};
        var labelStyle = {fontSize: '.8em', marginTop: '.5em'};

        var config = this.props.config;
        if (_.isEmpty(config)) {
            if (!this.props.isEditing) {
                buttonStyle.visibility = 'hidden';
            }
            buttonStyle.opacity = '.3';
            buttonStyle.borderStyle = 'dashed';
            config = {
                icon: 'plus',
                label: 'Empty',
                signal: null
            };
        }

        return (
            <Col xs={3} style={this.props.style}>
                <Button bsStyle="default" block style={buttonStyle} onClick={this.handleClick}>
                    <i className={'fa fa-2x fa-' + config.icon}></i>
                    <div style={labelStyle}>{config.label}</div>
                </Button>
            </Col>
        );
    }
});
