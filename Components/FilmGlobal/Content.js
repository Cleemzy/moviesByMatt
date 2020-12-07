import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from './Contents/Header'
import Description from './Contents/Description'
import Date from './Contents/Date'

class Content extends React.Component{
  render(){
    const isFilmFavorite=this.props.isFilmFavorite
    const isFilmSeen=this.props.isFilmSeen
    const film=this.props.film
    return(
      <View style={styles.content}>
        <Header film={film} isFilmFavorite={isFilmFavorite} isFilmSeen={isFilmSeen}/>
        <Description film={film}/>
        <Date film={film}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flex: 2,
    margin:5,
    flexDirection:'column',
    // backgroundColor:'lightgreen'
  }
})

export default Content;
