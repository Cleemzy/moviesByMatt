import React from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'
import moment from 'moment'
import numeral from 'numeral'

class DetailContent extends React.Component{
  render(){
    const film=this.props.film
    return(
       <ScrollView style={styles.scrollview_container}>
       <Text style={styles.title_text}>{film.title}</Text>
       <Text style={styles.description_text}>{film.overview}</Text>
       <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
       <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
       <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
       <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
       <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
             return genre.name;
           }).join(" / ")}
         </Text>
         <Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
             return company.name;
           }).join(" / ")}
         </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollview_container: {
    // position:'absolute',
    // marginTop: 180,
    // marginBottom:18,
    flex: 1
  },
  title_text: {
   fontWeight: 'bold',
   fontSize: 35,
   flex: 1,
   flexWrap: 'wrap',
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10,
   marginBottom: 10,
   color: '#000000',
   textAlign: 'center'
 },
 description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
   marginLeft: 5,
   marginRight: 5,
   marginTop: 5,
 }
})
// source={{uri: getImageFromApi(film.backdrop_path)}}
export default DetailContent;
