import React from 'react'
import { StyleSheet, View } from 'react-native'
import SeenImages from './SeenImages'
import SeenContent from './SeenContent'

class Global extends React.Component {
  render(){
    // const isFilmFavorite=this.props.isFilmFavorite
    const isLongPressed=this.props.isLongPressed
    const film=this.props.film
    const isFilmFavorite=this.props.isFilmFavorite
    return(
      <View style={styles.glob}>
        <SeenImages film={film}/>
        <SeenContent isFilmFavorite={isFilmFavorite} film={film} isLongPressed={isLongPressed}/>
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
