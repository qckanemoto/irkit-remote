const React = require('react');
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;
const Input = require('react-bootstrap').Input;
const FormControls = require('react-bootstrap').FormControls;
const Tooltip = require('react-bootstrap').Tooltip;
const OverlayTrigger = require('react-bootstrap').OverlayTrigger;

module.exports = React.createClass({
    PropTypes: {
        icon: React.PropTypes.string,
        label: React.PropTypes.string,
        signal: React.PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {
            icon: '',
            label: '',
            signal: ''
        };
    },

    getInitialState: function () {
        return {
            isOpen: false,
            icon: this.props.icon,
            label: this.props.label,
            signal: this.props.signal
        };
    },

    open: function () {
        this.setState({
            isOpen: true
        });
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
        this.setState({
            isOpen: false
        });
    },

    handleIconChange: function () {
        this.setState({
            icon: this.refs.icon.getValue()
        });
    },

    handleLabelChange: function () {
    },

    handleSignalChange: function () {
    },

    render: function () {
        var faLink = (
            <OverlayTrigger overlay={<Tooltip id="search-icons-from-fontawesome">Search icons from fontawesome</Tooltip>} placement="top">
                <a href="http://fontawesome.io/icons/" target="_blank"><i className='fa fa-search'></i></a>
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
                                    onChange={this.handleIconChange}
                                />
                            </Col>
                            <Col xs={4}>
                                <FormControls.Static label="Preview"><i className={'fa fa-' + this.state.icon}></i></FormControls.Static>
                            </Col>
                        </Row>
                        <Input type="text" label="Label" placeholder="TV Power" onChange={this.handleLabelChange} />
                        <Input type="textarea" rows={3} label="IR Signal" placeholder='{"format":"raw",...}' onChange={this.handleSignalChange} />
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
