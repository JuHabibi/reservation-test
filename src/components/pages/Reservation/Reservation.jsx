import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Counter from '../../atoms/Counter';
import Basket from '../../molecules/Basket';
import { retrievePrestations, addItemPrestations } from "../../../actions/actions";


const Reservation = ({ retrievePrestations, addItemPrestations, universes: { categories = [] } }) => {
    const [count, setCount] = useState({ man: 0, woman: 0, child: 0 })
    useEffect(() => {
        let mounted = true
        if (mounted) {
            retrievePrestations()
        }
        return () => {
            mounted = false
        };
    }, [retrievePrestations]);

    const handleClick = (text) => {
        addItemPrestations(text);
    }


    return (<>
        {!!categories && (
            <div className="container">
                <div className="container-universes">

                    <form>
                        {categories.map((cat, index) => (
                            <>
                                <div onClick={() => handleClick(cat.title)}>{cat.title}</div>
                            </>
                        )
                        )}
                    </form>

                </div>
                <Basket />

            </div>

        )}
    </>
    )

}

const mapStateToProps = (state) => {
    return {
        universes: state.universes,
    };
};
export default connect(mapStateToProps, { retrievePrestations, addItemPrestations })(Reservation);