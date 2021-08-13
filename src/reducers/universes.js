import {
  RETRIEVE_UNIVERSES,
} from "../actions/types";

const initialState = {
  reference: "haircut",
  title: "Coiffure",
  categories: [
    {
      reference: "man",
      title: "Homme",
      prestations: [
        {
          reference: "",
          title: "",
          duration: "",
          price: 0
        }
      ]
    },
    {
      reference: "woman",
      title: "Femme",
      prestations: [
        {
          reference: "",
          title: "",
          duration: "",
          price: 0
        }
      ]
    },
    {
      reference: "child",
      title: "Enfant",
      prestations: [
        {
          reference: "",
          title: "",
          duration: "",
          price: 0
        }
      ]
    }
  ]
}

function prestationsReducer(universes = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_UNIVERSES:
      return payload.data;
    default:
      return universes;
  }
};

export default prestationsReducer;