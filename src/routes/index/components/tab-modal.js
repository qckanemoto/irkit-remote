const React = require('react');
const LinkedStateMixin = require('react-addons-linked-state-mixin');
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
const deepcopy = require('deepcopy');
const _ = require('lodash');

module.exports = React.createClass({
    mixins: [
        LinkedStateMixin   // to use two-way binding
    ],

    PropTypes: {
        tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
            index: React.PropTypes.string,
            name: React.PropTypes.string
        })),
        onSave: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            tabs: []
        };
    },

    getInitialState: function () {
        return {
            isOpen: false,
            tabs: this.props.tabs
        };
    },

    componentDidMount: function () {
    },

    close: function () {
        this.setState({
            isOpen: false
        });
    },

    save: function () {
        this.props.onSave(this.state.tabs);

        this.setState({
            isOpen: false
        });
    },

    handleMoveDown: function (index) {
        var index1 = _.findIndex(this.state.tabs, 'index', index);
        var index2 = index1 + 1;
        if (this.state.tabs[index1] && this.state.tabs[index2]) {
            var buf = deepcopy(this.state.tabs);
            buf[index1] = this.state.tabs[index2];
            buf[index2] = this.state.tabs[index1];
            this.setState({
                tabs: buf
            });
        }
    },

    render: function () {
        var sortableItems = [];
        var that = this;
        _.forEach(this.state.tabs, function (tab) {
            sortableItems.push(
                <SortableItem key={tab.index} id={tab.index} value={tab.name} onMoveDown={that.handleMoveDown} />
            );
        });

        return (
            <Modal show={this.state.isOpen} onHide={this.close}>
                <Modal.Header>
                    <Modal.Title><i className="fa fa-pencil"></i> Edit tab</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{paddingBottom: '0'}}>
                    {sortableItems}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}><i className="fa fa-times"></i> Cancel</Button>
                    <Button bsStyle="primary" onClick={this.save}><i className="fa fa-check"></i> OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

const SortableItem = React.createClass({
    PropTypes: {
        id: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        onMoveDown: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            value: '',
            onMoveDown: function () {}
        };
    },

    getInitialState: function () {
        return {
            value: this.props.value
        };
    },

    handleChange: function (e) {
        this.setState({
            value: e.target.value
        });
    },

    moveDown: function () {
        this.props.onMoveDown(this.props.id);
    },

    render: function () {
        var button = (
            <Button onClick={this.moveDown}><i className="fa fa-chevron-down"></i></Button>
        );
        return (
            <Input type="text" value={this.state.value} onChange={this.handleChange} buttonAfter={button} />
        );
    }
});
