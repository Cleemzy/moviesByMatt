import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Date extends React.Component{
  render(){
    const film=this.props.film
    return(
      <View style={styles.date}>
        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  date:{
   flex:1,
   // backgroundColor:'mediumorchid'
 },
 date_text:{
    textAlign: 'right',
    fontSize: 14
 }
})

export default Date;
