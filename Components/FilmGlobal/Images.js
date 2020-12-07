import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'
import { getImageFromApi } from '../../API/TMDBApi'

class Images extends React.Component{
  render(){
    // console.log(this.props.film.poster_path)
    const film=this.props.film
    return(
      <View>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  image:{
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor:'gray'
  }
})

export default Images;
