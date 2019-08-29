import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpPage from '../components/SignUpPage';

class SignUpContainer extends React.Component {
    render() {
        return (
            <SignUpPage />
        )
    }
}

function mapStateToProps(state) {
    console.log(state);

    return { ...state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpContainer);