import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import FadeIn from '../Animations/FadeIn'
import SeenGlobal from './SeenGlobal/SeenGlobal'


class SeenItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLongPressed: false
    }
  }

    _longPress = () => {
      this.setState({isLongPressed:true})
    }

    _pressOut = () => {
      this.setState({isLongPressed:false})
    }
  render() {
    // console.log(this.props)
    // const isFilmFavorite = this.props.isFilmFavorite
    // const {film,displayDetailForFilm} = this.props
    // console.log(this.state.isLongPressed)
    const isFilmFavorite = this.props.isFilmFavorite
    const {film,displayDetailForFilm} = this.props
    return (
      <FadeIn>
      <TouchableOpacity onPress={() => displayDetailForFilm(film.id)} activeOpacity={.7} style={styles.main_container} onLongPress={this._longPress} onPressOut={ this._pressOut }>
        <SeenGlobal film={film} isFilmFavorite={isFilmFavorite} isLongPressed={this.state.isLongPressed}/>
      </TouchableOpacity>
      </FadeIn>
    )
  }
}

const styles = StyleSheet.create({

    main_container: {
     height: 100
   }
})
//<Text style={styles.title_text}>Titre du film</Text>
export default SeenItem;
