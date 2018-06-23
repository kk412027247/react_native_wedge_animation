import React from 'react';
import {View, Button, StyleSheet, ART, Animated, Easing,} from 'react-native';
import Wedge from 'react-native-wedge';
const {Surface} = ART;
const AnimatedWedge = Animated.createAnimatedComponent(Wedge);

class WedgeExample extends React.Component {

  constructor(){
    super();
    this.state = {
      radius: new Animated.Value(0)
    };

    this.increase = () =>{
      Animated.timing(
        this.state.radius,{
          duration:1000,
          toValue:240,
          easing: Easing.out(Easing.ease),
          //useNativeDriver: true // <-- after adding useNativeDriver, the animation doesn't work
        }
      ).start();
    };

    this.decrease = () =>{
      Animated.timing(
        this.state.radius,{
          duration:1000,
          toValue:0,
          easing: Easing.out(Easing.ease) ,
          //useNativeDriver: true // <-- after adding useNativeDriver, the animation doesn't work
        }
      ).start();
    }
  }
  
  componentDidMount(){
    this.increase();
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.wedgeContainer}>
          <Surface width={120} height={120}>
            <AnimatedWedge
              outerRadius={60}
              startAngle={0}
              endAngle={this.state.radius}
              originX={0}
              originY={0}
              fill="#eef1fb"
            />
          </Surface>
        </View>
        <Button
          title={'increase'}
          onPress={this.increase}
        />
        
        <Button
          title={'decrease'}
          onPress={this.decrease}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({

  container:{
    backgroundColor:'#fff',
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  wedgeContainer:{
    marginTop:29.1,
    marginBottom:14.3,
    backgroundColor:'#61d3c4',
    width:120,
    height:120,
    borderRadius:60
  },
});

export default WedgeExample
