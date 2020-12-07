import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList , Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import FilmList from './FilmList'
import { getNewFilms } from '../API/TMDBApi'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.page = 0
        this.totalPages = 0
        this.state = {
          films: [],
          isLoading: false
        }
        this._loadFilms = this._loadFilms.bind(this)
    }

    _displayLoading(){
      if(this.state.isLoading){
        return(
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' color="#0000ff"/>
          </View>
        )
      }
    }


_loadFilms() {
    this.setState({isLoading:true})
     getNewFilms(this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [...this.state.films,...data.results],
          isLoading: false
         })
    })

}

componentDidMount() {
   this._loadFilms()
 }
// _checkIfFavorite(index){
//   var isFilmFavorite = false
//   if (this.props.favoritesFilm.findIndex(item => item.id === index) !== -1) {
//     isFilmFavorite = true
//   }
//   return isFilmFavorite
// }


render() {
      return (
        <View style={styles.main_container}>

        <FilmList
            films={this.state.films}
            navigation={this.props.navigation}
            loadFilms={this._loadFilms}
            fromFavorite={false}
            page={this.page}
            totalPages={this.totalPages}
            />{this._displayLoading()}
          </View>
      )
  }


}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});



export default News
