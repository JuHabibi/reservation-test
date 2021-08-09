import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { retrievePrestations } from "../../../actions/actions";


const Reservation = ({ retrievePrestations, universes: { categories = [] } }) => {

    useEffect(() => {
        let mounted = true
        if (mounted) {
            retrievePrestations()
        }
        return () => {
            mounted = false
        };
    }, [retrievePrestations]);



    const listItems = categories.map((cat, index) =>
        <li key={index}>{cat.title}</li>
    );
    return (<>
        {!!categories && (
            <ul>{listItems}</ul>
        )}
    </>
    )
}


const mapStateToProps = (state) => {
    return {
        universes: state.universes,
    };
};
export default connect(mapStateToProps, { retrievePrestations })(Reservation);