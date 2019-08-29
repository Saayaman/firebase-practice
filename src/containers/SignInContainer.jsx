import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignInContainer extends React.Component {

}

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInContainer);