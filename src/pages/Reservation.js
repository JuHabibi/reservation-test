import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { retrievePrestations } from "../actions/actions";


const Reservation = ({ retrievePrestations, prestations }) => {
    const { categories } = prestations
    const listCat = categories.map((cat) =>
        <li>{cat.title}</li>
    );
    useEffect(() => {
        let mounted = true

        if (mounted)
            retrievePrestations()

        return () => {
            mounted = false
        };
    }, [retrievePrestations]);

    return (
        <ul>{listCat}</ul>
    )
}

const mapStateToProps = (state) => {
    return {
        prestations: state.prestations,
    };
};
export default connect(mapStateToProps, { retrievePrestations })(Reservation);