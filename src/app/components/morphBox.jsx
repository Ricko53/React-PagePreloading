let React = require('react');

var MorphBox = React.createClass({
	
	getInitialState() {
		return {
			left : 0,
			top : 0,
			width : 0,
			image : "img/landscape.jpg",
			boxClass : "box"
		};
	},

	changeOpen() {
		this.setState({
			boxClass : "box action open"
		});
	},

	changeClose() {
		this.setState({
			boxClass : "box"
		});
	},

	componentDidMount() {
	    let button = this.refs.imgPosition.getDOMNode();
	    let buttonPos = button.getBoundingClientRect();
	    console.log(buttonPos);
	    this.setState({
	      left : buttonPos.left,
	      top : buttonPos.top
	    });
	    window.addEventListener('scroll', this.handleScroll);
	  },

	  componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	  },

	render() {

		var styles = {
	      left: this.state.left,
	      top: this.state.top,
	      backgroundImage: 'url(img/landscape.jpg)'
	    };

		return (
			<div className={this.state.boxClass}>
				<div onClick={this.changeOpen} className="box-main">
					<div ref="imgPosition" className="box-img">
						<img alt="alt text" src={this.state.image} />
					</div>
					<div className="box-inner">
						<p>Lorem ipsum dolor sit amet.<br/>Consectetur adipiscing elit.</p>
					</div>
				</div>
				<div style={styles} className="box-content">
					<div>
						<div className="content-style-overlay">
							<span onClick={this.changeClose} className="icon-close">close</span>
							<h2>About Parsley</h2>
                			<p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                		</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MorphBox;