// Components/Search.js
import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList , Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
// import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import FilmList from './FilmList'
// Components/Search.js
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js
import { connect } from 'react-redux'

class Search extends React.Component {

  // _displayDetailForFilm = (idFilm) => {
  //    console.log("Display film with id " + idFilm)
  //    this.props.navigation.navigate("FilmDetail",{ idFilm:idFilm})
  //  }

  constructor(props) {
    super(props)
    this._loadFilms = this._loadFilms.bind(this)
    this.searchedText = ""
    this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false
    }
    // this._films = []

  }
  //Old search using state (wrong)
  // _searchTextInputChanged(text) {
  //       this.setState({ searchedText: text })
  //   }

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
    // console.log(this.searchedText)
    if (this.searchedText.length > 0){
      this.setState({isLoading:true})
       getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          // this._films = data.results
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [...this.state.films,...data.results],
            isLoading: false
           })
      })
    }
 }

 _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: []
    },() => {
      this._loadFilms()
   })
 }

 _searchTextInputChanged(text) {
     this.searchedText = text
   }

_checkIfFavorite(index){
  var isFilmFavorite = false
  if (this.props.favoritesFilm.findIndex(item => item.id === index) !== -1) {
    isFilmFavorite = true
  }
  return isFilmFavorite
}

_displaySearchImage() {
    var sourceImage = require('../Images/iconfinder_search_1608826.png')
    return (
      <Image
        style={styles.search_image}
        source={sourceImage}
      />
    )
}

  render() {
        // console.log(this.props)
        return (
          <View style={styles.main_container}>
                  <View style={styles.view2}>
                   <TextInput
                          style={styles.textinput}
                          placeholder='Titre du film'
                          onChangeText={(text) => this._searchTextInputChanged(text)}
                          onSubmitEditing={() => this._searchFilms()}
                          borderBottomWidth={1}
                          borderBottomColor='lightblue'
                          selectionColor='lightblue'
                          />
                          <TouchableOpacity
                               style={styles.search_container}
                               onPress={() => this._searchFilms()}>
                               {this._displaySearchImage()}
                           </TouchableOpacity>{
                       // <Button title='Rechercher' type="outline" onPress={() => this._searchFilms()}/>
                     }</View>
                     <FilmList
             films={this.state.films}
             navigation={this.props.navigation}
             loadFilms={this._loadFilms}
             page={this.page}
             totalPages={this.totalPages}
           />{this._displayLoading()}
          </View>
        )
    }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  view2:{
    flexDirection:'row'
  },
  textinput: {
    flex:1,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    fontSize: 20 ,
    // borderWidth: 1,
    paddingLeft: 20
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  search_container: {
    marginTop:8,
    marginRight:5,
    // backgroundColor:`#e6e6fa`,
     alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
},
  search_image: {
      width: 33,
      height: 33
  }
});



//FLEXBOX TEST:
/*
<View style={{ flex: 1,height: 335, backgroundColor: 'red' }}></View>
<View style={{ flex: 1,height: 335, backgroundColor: 'green' }}></View>
*/



//EQUIVALENT REACT
/*
React.createElement(View, {},
  	React.createElement(TextInput, {placeholder: "Titre du film"}),
    React.createElement(Button, {title: "Rechercher", onPress: () => {}})
)
*/
const mapStateToProps = (state) => {
  return {favoritesFilm: state.toggleFavorite.favoritesFilm}
}

export default connect(mapStateToProps)(Search);
