const React = require('react');
const LinkedStateMixin = require('react-addons-linked-state-mixin');
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
const FormControls = require('react-bootstrap').FormControls;
const Tooltip = require('react-bootstrap').Tooltip;
const OverlayTrigger = require('react-bootstrap').OverlayTrigger;

module.exports = React.createClass({
    mixins: [
        LinkedStateMixin   // to use two-way binding
    ],

    PropTypes: {
        onSave: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
    },

    getInitialState: function () {
        return {
            isOpen: false,
            icon: '',
            label: '',
            signal: '',
        };
    },

    close: function () {
        this.setState({
            isOpen: false,
            icon: '',
            label: '',
            signal: ''
        });
    },

    save: function () {
        this.props.onSave({
            icon: this.state.icon,
            label: this.state.label,
            signal: this.state.signal
        });

        this.setState({
            isOpen: false
        });
    },

    render: function () {
        var faLink = (
            <OverlayTrigger overlay={<Tooltip id="search-icons-from-fontawesome">Find icons from fontawesome</Tooltip>} placement="top">
                <a href="http://fontawesome.io/icons/" target="_blank" tabIndex={-1}><i className='fa fa-search'></i></a>
            </OverlayTrigger>
        );

        return (
            <Modal show={this.state.isOpen} onHide={this.close}>
                <Modal.Header>
                    <Modal.Title><i className="fa fa-pencil"></i> Edit button</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Row>
                            <Col xs={8}>
                                <Input
                                    ref="icon"
                                    type="text"
                                    label="Icon id"
                                    placeholder="power-off"
                                    autoFocus
                                    addonAfter={faLink}
                                    valueLink={this.linkState('icon')}
                                />
                            </Col>
                            <Col xs={4}>
                                <FormControls.Static label="Preview"><i className={'fa fa-' + this.state.icon}></i></FormControls.Static>
                            </Col>
                        </Row>
                        <Input type="text" label="Label" placeholder="TV Power" valueLink={this.linkState('label')} />
                        <Input type="textarea" rows={3} label="IR Signal" placeholder='{"format":"raw",...}' valueLink={this.linkState('signal')} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}><i className="fa fa-times"></i> Cancel</Button>
                    <Button bsStyle="primary" onClick={this.save}><i className="fa fa-check"></i> OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});
