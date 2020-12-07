import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Button, TouchableOpacity, Image, Share } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'
import DetailPoster from './FilmDetail/DetailPoster'
import DetailContent from './FilmDetail/DetailContent'
import EnlargeShrink from '../Animations/EnlargeShrink'
import { connect } from 'react-redux'

class FilmDetail extends React.Component {



    // Equals to below without the shitty ES6 Norms

  //   function mapStateToProps = (state) => {
  //   return {
  //     state
  //   }
  // }


  constructor(props) {
   super(props)
   this.state = {
     film: undefined,
     isLoading: true
   }
 }

 _displayFloatingActionButton() {
    const { film } = this.state
    if (film != undefined && Platform.OS === 'android') {
      return (
        <TouchableOpacity
          style={styles.share_touchable_floatingactionbutton}
          onPress={() => this._shareFilm()}>
          <Image
            style={styles.share_image}
            source={require('../Images/shareIcon.png')} />
        </TouchableOpacity>
      )
    }
}

 _shareFilm() {
    const { film } = this.state
    Share.share({ title: film.title, message: film.overview })
}

 componentDidMount() {
   const favoriteFilmIndex = this.props.favoritesFilm.findIndex(item => item.id === this.props.navigation.state.params.idFilm)
    if (favoriteFilmIndex !== -1) {
      this.setState({
        film: this.props.favoritesFilm[favoriteFilmIndex]
      })
      return
    }
      this.setState({ isLoading: true })
     getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
          this.setState({
            film: data,
            isLoading: false
          })
        })
 }
 componentDidUpdate() {
    // console.log("componentDidUpdate : ")
     console.log(this.props.seenFilm)
  }

 _toggleFavorite() {
       const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
       this.props.dispatch(action)
       // console.log(this.props.favoritesFilm)
   }

_toggleSeen() {
  const action = { type: "TOGGLE_SEEN", value: this.state.film }
  this.props.dispatch(action)
  // console.log(this.props.seenFilm)
}

_displaySeenImage() {
    var sourceImage = require('../Images/notSeenIcon.png')
    var shouldEnlarge = false
    if (this.props.seenFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
      sourceImage = require('../Images/seenIcon.png')
      shouldEnlarge = true
    }
    return (
      <EnlargeShrink shouldEnlarge={shouldEnlarge}>
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
      </EnlargeShrink>
    )
}
   _displayFavoriteImage() {
       var sourceImage = require('../Images/ic_favorite_border.png')
       var shouldEnlarge = false
       if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
         sourceImage = require('../Images/ic_favorite.png')
         shouldEnlarge = true
       }
       return (
         <EnlargeShrink shouldEnlarge={shouldEnlarge}>
         <Image
           style={styles.favorite_image}
           source={sourceImage}
         />
         </EnlargeShrink>
       )
   }

 _displayFilm() {
   const film= this.state.film
     if (film != undefined) {
       return (
         <View style={styles.main_container}>
           <DetailPoster film={film}/>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity
                style={styles.favorite_container}
                onPress={() => this._toggleFavorite()}>
                {this._displayFavoriteImage()}
            </TouchableOpacity>
            <TouchableOpacity
                 style={styles.favorite_container}
                 onPress={() => this._toggleSeen()}>
                 {this._displaySeenImage()}
             </TouchableOpacity>
             </View>
           <DetailContent film={film}/>
        </View>

       )
     }
   }

 _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' color="#0000ff"/>
        </View>
      )
    }
  }


  render() {
    // console.log(this.props)
    return (
      <View style={styles.main_container}>
      {this._displayLoading()}
      {this._displayFilm()}
      {this._displayFloatingActionButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor:`#e6e6fa`
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  favorite_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1 
},
favorite_image: {
  flex: 1,
 width: null,
 height: null
},
share_touchable_floatingactionbutton: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: 'white',
    // backgroundColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center'
  },
  share_image: {
    width: 30,
    height: 30
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    seenFilm: state.toggleSeen.seenFilm
  }
}

// <ScrollView style={styles.scrollview_container}>
//   <Text>{film.title}</Text>
// </ScrollView>
// export default FilmDetail
export default connect(mapStateToProps)(FilmDetail)
