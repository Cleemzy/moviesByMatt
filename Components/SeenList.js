// Components/FilmList.js

import React from 'react'
import { StyleSheet, FlatList,View, Text } from 'react-native'
import SeenItem from './SeenItem'
import { connect } from 'react-redux'

class SeenList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  _displayDetailForFilm = (idFilm) => {
    // console.log("Display film " + idFilm)
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.films}
          extraData={[this.props.favoritesFilm,this.props.seenFilm]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <SeenItem
            film={item}
            isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
            displayDetailForFilm={this._displayDetailForFilm}
            />
          )}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    seenList: state.toggleSeen.seenFilm
  }
}

export default connect(mapStateToProps)(SeenList)
