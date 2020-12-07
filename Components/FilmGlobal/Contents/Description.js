import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Description extends React.Component{
  render(){
    const film=this.props.film
    return(
      <View style={styles.description}>
        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description:{
   flex:5,
   // backgroundColor:'lightcoral'
 },
  description_text:{
    fontStyle: 'italic',
    color: '#666666'
  }
})

export default Description;
