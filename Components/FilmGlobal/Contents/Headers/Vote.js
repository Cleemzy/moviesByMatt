import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Vote extends React.Component{
  render(){
    const film=this.props.film
    return(
      <View style={styles.vote}>
        <Text style={styles.vote_text}>{film.vote_average}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  vote:{
   flex:1,
   // backgroundColor:'navajowhite'
 },
 vote_text:{
   fontWeight: 'bold',
   fontSize: 16,
   color: '#666666'
 }

})

export default Vote;
