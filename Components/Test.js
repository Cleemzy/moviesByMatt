import React from 'react';
import { StyleSheet, View, Platform, Text, Animated, Easing, PanResponder, Dimensions } from 'react-native';
import HelloWorld from './Tests/HelloWorld'

class Test extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        topPosition: 0,
        leftPosition: 0,
      }

      var {height, width} = Dimensions.get('window');
      this.panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onPanResponderMove: (evt, gestureState) => {
              let touches = evt.nativeEvent.touches;
              if (touches.length == 1) {
                  this.setState({
                    topPosition: touches[0].pageY - height/2,
                    leftPosition: touches[0].pageX - width/2
                  })
              }
          }
      })
    }

    render() {
      return (
        <View style={styles.main_container}>
          <View
            {...this.panResponder.panHandlers}
            style={[styles.animation_view, { top: this.state.topPosition, left: this.state.leftPosition }]}>
          </View>
        </View>
      )
    }
}
// ANIMATIONS
          //PARALLEL
                        // Animated.parallel([
                        //     Animated.spring(
                        //       this.state.topPosition,
                        //       {
                        //         toValue: 100,
                        //         tension: 8,
                        //         useNativeDriver: false,
                        //         friction: 3
                        //       }
                        //     ),
                        //     Animated.timing(
                        //       this.state.leftPosition,
                        //       {
                        //         toValue: 100,
                        //         duration: 1000,
                        //         useNativeDriver: false,
                        //         easing: Easing.elastic(2)
                        //       }
                        //     )
                        //   ]).start()
          //SEQUENCE
                       //  Animated.sequence([
                       //   Animated.spring(
                       //     this.state.topPosition,
                       //     {
                       //       toValue: 100,
                       //       tension: 8,
                       //       friction: 3,
                       //       useNativeDriver: false
                       //     }
                       //   ),
                       //   Animated.timing(
                       //     this.state.topPosition,
                       //     {
                       //       toValue: 0,
                       //       duration: 1000,
                       //       easing: Easing.elastic(2),
                       //       useNativeDriver: false
                       //     }
                       //   )
                       // ]).start()
          //DECAY (USED IN FLATLIST TO KEEP SCROLLING SLOWLY WHEN THE USERS LEAVES )
                      // Animated.decay(
                      // this.state.topPosition,
                      // {
                      // velocity: 0.8,
                      // deceleration: 0.997,
                      // }
                      // ).start();
          //SPRING
                    // Animated.spring(
                    //       this.state.topPosition,
                    //       {
                    //         toValue: 100,
                    //         speed: 4,
                    //         bounciness: 30
                    //       }
                    //     ).start();
          //TIMING
                        // Animated.timing(
                        //        this.state.topPosition,
                        //        {
                        //          toValue: 100,
                        //          duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
                        //          easing: Easing.linear,
                        //        }
                        //      ).start() // N'oubliez pas de lancer votre animation avec la fonction start()





//useNativeDriver: false,
//We use the component attribute flexDirection:'column' or flexDirection:'row' to decide which of col or row will be main axis
//TEST FLEXBOX ON SECONDARY AXIS (X)
// <View style={{ flex: 1,alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'yellow' }}>
//   <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
//   <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
//   <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
// </View>


//TEST FLEXBOX ON MAIN AXIS (Y)
/*
<View style={{ flex: 1, justifyContent: 'space-around', backgroundColor: 'yellow' }}>
  <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
  <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
  <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
</View>
*/
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        height: 100,
        width: 50
      },
      android: {
        backgroundColor: 'blue',
        height: 50,
        width: 100
      }
    })
  },
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  }
})
export default Test;
