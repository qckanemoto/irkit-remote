const React = require('react');
const Header = require('./header.js');
const ButtonPanel = require('./button-panel.js');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="container">
                    <ButtonPanel />
                </div>
            </div>
        );
    }
});
