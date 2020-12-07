import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Titre extends React.Component{
  render(){
      const film=this.props.film
    return(
      <View style={styles.titre}>
        <Text style={styles.title_text}>{film.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titre:{
   flex:3,
   // backgroundColor:'maroon'
 },
 title_text:{
   fontWeight: 'bold',
   fontSize: 13,
   flexWrap: 'wrap',
   paddingRight: 5
 }

})

export default Titre;
