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
        tabNames: React.PropTypes.array,
        onSave: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            tabNames: [],
            onSave: function () {}
        };
    },

    getInitialState: function () {
        return {
            isOpen: false,
            tabNames: this.props.tabNames
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
        this.props.onSave(this.state.tabNames);

        this.setState({
            isOpen: false
        });
    },

    handleMoveDown: function (id) {
        var index1 = _.findIndex(this.state.tabNames, 'id', id);
        var index2 = index1 + 1;
        if (this.state.tabNames[index1] && this.state.tabNames[index2]) {
            var buf = deepcopy(this.state.tabNames);
            buf[index1] = this.state.tabNames[index2];
            buf[index2] = this.state.tabNames[index1];
            this.setState({
                tabNames: buf
            });
        }
    },

    render: function () {
        var sortableItems = [];
        var that = this;
        _.forEach(this.state.tabNames, function (tab) {
            sortableItems.push(
                <SortableItem key={tab.id} id={tab.id} value={tab.value} onMoveDown={that.handleMoveDown} />
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
            onMoveUp: function () {},
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
