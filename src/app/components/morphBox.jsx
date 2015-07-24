let React = require('react');

var MorphBox = React.createClass({
	
	getInitialState() {
		return {
			image : "landscape.jpg"
		};
	},

	render() {

		return (
			<div className="box">
				<div className="box-main">
					<div className="box-img">
						<img alt="alt text" src={"img/" + this.state.image} />
					</div>
					<div className="box-inner">
						<p>Lorem ipsum dolor sit amet.<br/>Consectetur adipiscing elit.</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MorphBox;