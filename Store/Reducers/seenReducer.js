const initialState = { seenFilm: [] }

function toggleSeen(state = initialState, action) {
  let nextState
   switch (action.type) {
     case 'TOGGLE_SEEN':
       const seenFilmIndex = state.seenFilm.findIndex(item => item.id === action.value.id)
       if (seenFilmIndex !== -1) {
         nextState = {
           ...state,
           seenFilm: state.seenFilm.filter( (item, index) => index !== seenFilmIndex)
         }
       }
       else {
         nextState = {
           ...state,
           seenFilm: [...state.seenFilm, action.value]
         }
       }
       return nextState || state
   default:
     return state
   }
}

export default toggleSeen
