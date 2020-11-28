import { Component } from 'react';

export const withLogger = (WrappedComponent, logger) =>
    class extends Component {
        state = {
            logs: []
        };

        componentDidMount() {
            const { logs } = this.state;

            logger(logs);
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };
