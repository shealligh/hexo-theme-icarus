const { Component } = require('inferno');
const Article = require('./common/article');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;
        config.toc = true;
        return <Article config={config} page={page} helper={helper} index={false} />;
    }
};
