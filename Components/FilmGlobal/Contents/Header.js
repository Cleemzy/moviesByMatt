import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'
import Titre from './Headers/Titre'
import Vote from './Headers/Vote'

class Header extends React.Component{
  _displayFavoriteImage() {
      var sourceImage = require('../../../Images/ic_favorite.png')
      const isFilmFavorite = this.props.isFilmFavorite
      if(isFilmFavorite){
        return (
          <Image
            style={styles.favorite_image}
            source={sourceImage}
          />
        )
      }
  }

_displaySeenImage(){
  var sourceImage = require('../../../Images/seenIcon.png')
  const isFilmSeen = this.props.isFilmSeen
  if(isFilmSeen){
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }
}
  render(){
    const film= this.props.film
    return(
      <View style={styles.header}>
        {this._displayFavoriteImage()}
        {this._displaySeenImage()}
        <Titre film={film}/>
        <Vote film={film}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
   flex:1.3,
   flexDirection:'row',
   // backgroundColor:'orange'
 },
 favorite_image: {
     width: 20,
     height: 20,
     marginRight:5
 }
})

export default Header;
