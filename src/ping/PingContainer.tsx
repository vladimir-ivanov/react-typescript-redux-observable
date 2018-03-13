import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getIsPinging } from './pingSelectors';
import { createPingAction } from './pingActions';

interface PingProps {
    isPinging: boolean;
    ping: () => void;
}

class PingContainer extends Component<PingProps> {
    render() {
        const { isPinging, ping } = this.props;

        return (
            <div>
                <h1>is pinging: {JSON.stringify(isPinging)}</h1>
                <button onClick={ping}>Start PING</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({isPinging: getIsPinging(state)});

const mapDispatchToProps = (dispatch) => ({
    ping: () => dispatch(createPingAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PingContainer);