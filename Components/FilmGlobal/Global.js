import React from 'react'
import { StyleSheet, View } from 'react-native'
import Images from './Images'
import Content from './Content'

class Global extends React.Component {
  render(){
    const isFilmFavorite=this.props.isFilmFavorite
    const isFilmSeen=this.props.isFilmSeen
    const film=this.props.film
    return(
      <View style={styles.glob}>
        <Images film={film}/>
        <Content film={film} isFilmFavorite={isFilmFavorite} isFilmSeen={isFilmSeen}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  glob:{
    flex:1,
    flexDirection:'row'
  }
})
export default Global;
