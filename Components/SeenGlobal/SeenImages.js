import React from 'react'
import { StyleSheet, View,Image } from 'react-native'
import { getImageFromApi } from '../../API/TMDBApi'

class SeenImages extends React.Component {
  render(){
    // const isFilmFavorite=this.props.isFilmFavorite
    const film=this.props.film
    return(
      <View>
      <Image
        style={styles.image}
        source={{uri:getImageFromApi(film.poster_path)}}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    width: 90,
    height: 90,
    margin: 5,
    borderRadius: 50,
    borderWidth:2,
    borderColor: '#9B9B9B'

  }
})
export default SeenImages;
