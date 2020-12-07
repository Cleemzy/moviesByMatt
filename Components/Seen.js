import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import SeenList from './SeenList'

class Seen extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <View style={styles.main_container}>
      <SeenList
        films={this.props.seenFilm}
        navigation={this.props.navigation}
        fromFavorite={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    seenFilm: state.toggleSeen.seenFilm
  }
}

export default connect(mapStateToProps)(Seen)
