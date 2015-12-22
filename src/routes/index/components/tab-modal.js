const React = require('react');
const LinkedStateMixin = require('react-addons-linked-state-mixin');
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
const deepcopy = require('deepcopy');
const _ = require('lodash');

module.exports = React.createClass({
    PropTypes: {
        tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
            name: React.PropTypes.string,
            buttons: React.PropTypes.array
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
            tabs: this.props.tabs,
            isOpen: false
        });
    },

    save: function () {
        this.props.onSave(this.state.tabs);

        this.setState({
            isOpen: false
        });
    },

    handleChangeValue: function (index, value) {
        var buf = deepcopy(this.state.tabs);
        buf[index].name = value;
        this.setState({
            tabs: buf
        });
    },

    handleMoveDown: function (index) {
        var index1 = index;
        var index2 = index1 + 1;
        var buf = deepcopy(this.state.tabs);
        if (this.state.tabs[index1] && this.state.tabs[index2]) {
            buf[index1] = this.state.tabs[index2];
            buf[index2] = this.state.tabs[index1];
        }
        this.setState({
            tabs: buf
        });
    },

    render: function () {
        var sortableItems = [];
        var that = this;
        _.forEach(this.state.tabs, function (tab, i) {
            sortableItems.push(
                <SortableItem key={i} index={i} tab={tab} onChangeValue={that.handleChangeValue} onMoveDown={that.handleMoveDown} />
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
        index: React.PropTypes.number.isRequired,
        tab: React.PropTypes.object.isRequired,
        onMoveDown: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            onMoveDown: function () {}
        };
    },

    getInitialState: function () {
        return {
            tab: this.props.tab
        };
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({
            tab: nextProps.tab
        })
    },

    handleChange: function (e) {
        var buf = deepcopy(this.state.tab);
        buf.name = e.target.value;
        this.setState({
            tab: buf
        });
        this.props.onChangeValue(this.props.index, e.target.value);
    },

    moveDown: function () {
        this.props.onMoveDown(this.props.index);
    },

    render: function () {
        var button = (
            <Button onClick={this.moveDown}><i className="fa fa-chevron-down"></i></Button>
        );
        return (
            <Input type="text" value={this.state.tab.name} onChange={this.handleChange} buttonAfter={button} />
        );
    }
});
