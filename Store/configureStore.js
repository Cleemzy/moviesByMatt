import { createStore, combineReducers } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
import toggleSeen from './Reducers/seenReducer'
import setAvatar from './Reducers/avatarReducer'
import { persistCombineReducers } from 'redux-persist'
 import AsyncStorage from '@react-native-community/async-storage'
// export default createStore(combineReducers({toggleFavorite, setAvatar}))
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage
}

 const Store = createStore(persistCombineReducers(rootPersistConfig,{toggleFavorite,setAvatar,toggleSeen}))
 export {Store}
