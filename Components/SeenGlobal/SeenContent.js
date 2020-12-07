import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class SeenContent extends React.Component {



  _displayDate(film){
    if(this.props.isLongPressed){
      return(
          <Text style={styles.date}>Sorti le {film.release_date}</Text>
      )
    }else{
      return(
          <Text style={styles.title} >{film.title}</Text>
      )
    }
  }

  _displayFavoriteImage() {
      var sourceImage = require('../../Images/ic_favorite.png')
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

  render(){
    // const isFilmFavorite=this.props.isFilmFavorite
    const film=this.props.film
    return(
      <View style={styles.content}>
        {this._displayFavoriteImage()}
        {this._displayDate(film)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flex: 2,
    margin:5,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  date:{
    fontStyle: 'italic',
    fontSize:20
  },
  title:{
    fontStyle:'italic',
    fontWeight: 'bold',
    fontSize: 18,
  },
  favorite_image: {
      alignItems:'center',
      width: 20,
      height: 20,
      marginRight:5
  }
})
export default SeenContent;
