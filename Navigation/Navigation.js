import React from 'react'
import { StyleSheet, Image } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'
import News from '../Components/News'
import SeenItem from '../Components/SeenItem'
import SeenList from '../Components/SeenList'
import Seen from '../Components/Seen'
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail:{
    screen: FilmDetail,
    navigationOptions:{
      title:'Detail'
    }
  }
})

const FavoriteStackNavigator = createStackNavigator({
  Search: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail'
    }
  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail',
    },
  }
})

const SeenStackNavigator = createStackNavigator({
  Seen: {
    screen: Seen,
    navigationOptions: {
      title: 'Les films déjà vus',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail',
    }
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: () => {
              return <Image
                    source={require('../Images/ic_search.png')}
                    style={styles.icon}/>
          }
    }
  },
  Favorites: {
    screen: FavoriteStackNavigator,
    navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: () => {
              return <Image
                    source={require('../Images/ic_favorite.png')}
                    style={styles.icon}/>
          }

    }

  },
  New:{
    screen: NewsStackNavigator,
    navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: () => {
              return <Image
                    source={require('../Images/ic_fiber_new.png')}
                    style={styles.icon}/>
          }

    }

  },
  Seen:{
    screen: SeenStackNavigator,
    navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: () => {
              return <Image
                    source={require('../Images/seenIcon.png')}
                    style={styles.icon}/>
          }

    }

  }
})


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
/*
Test: {
    screen: Test
  },
*/
export default createAppContainer(MoviesTabNavigator)
