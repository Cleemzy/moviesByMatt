// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Global from './FilmGlobal/Global'
import FadeIn from '../Animations/FadeIn'

class FilmItem extends React.Component {

  render() {
    // console.log(this.props)
    const isFilmFavorite = this.props.isFilmFavorite
    const isFilmSeen = this.props.isFilmSeen
    const {film,displayDetailForFilm} = this.props
    return (
      <FadeIn>
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
        <Global film={film} isFilmFavorite={isFilmFavorite} isFilmSeen={isFilmSeen}/>
      </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({

    main_container: {
     height: 190
   }
})
//<Text style={styles.title_text}>Titre du film</Text>
export default FilmItem;
