import { connect } from "react-redux";
import { addItemPrestations } from "../../../actions/actions";

const Basket = ({ updateUniverses: { addItem } }) => {

    return (
        <aside>
            <span>Panier</span>
            {addItem.map((item) => {
                return <span>{`${item}`}</span>
            })}

        </aside>)
}


const mapStateToProps = (state) => {
    return {
        updateUniverses: state.updateUniverses,
    };
};

export default connect(mapStateToProps, { addItemPrestations })(Basket);
