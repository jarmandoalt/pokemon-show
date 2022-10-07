import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dbPokemon1: [],
  dbPokemonSelect: {}
};

const crudReducer = createSlice({
  name: "crudReducer",
  initialState,
  reducers: {
    READ_ALL_DATA_1: (state, action) => {
      if (state.dbPokemon1.length === 0) {
        state.dbPokemon1.push(...state.dbPokemon1)

      }
      state.dbPokemon1.push(...action.payload)
    },
    DELETE_ALL_DATA: (state, action) => {
      state.dbPokemon1 = [] 
    },
    READ_ALL_DATA_2: (state, action) => {
      state.dbPokemonSelect = Object.assign(state.dbPokemonSelect, action.payload);
    },
    DELETE_POKEMON: (state, action) => {
      state.dbPokemon1 = state.dbPokemon1.filter((item) => item.name !== action.payload )
    },
  },
});

export const {
  READ_ALL_DATA_1,
  READ_ALL_DATA_2,
  DELETE_ALL_DATA,
  DELETE_POKEMON
} = crudReducer.actions;

export default crudReducer.reducer;
