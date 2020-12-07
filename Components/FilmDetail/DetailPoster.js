import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {getImageFromApi} from '../../API/TMDBApi'

class DetailPoster extends React.Component{
  render(){
    const film=this.props.film
    return(
      <View>
      <Image
        style={styles.image}
        source={{uri:getImageFromApi(film.backdrop_path)}}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
      height: 169,
      margin: 5,
      // backgroundColor: 'gray',
    },
})
// source={{uri: getImageFromApi(film.backdrop_path)}}
export default DetailPoster;
