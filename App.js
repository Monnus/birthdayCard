
import { StyleSheet, Text, View ,SafeAreaView,Alert,ImageBackground,Image} from 'react-native';
import bgImage from "./Images/balloon-drawing-16.jpg";
import { Avatar, Button, Card, Title} from 'react-native-paper';

import "./"

export default function App() {
  const hello="world"

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage}  style={styles.image}>

   <Card style={{left:"15%",width:"70%",height:"80%" ,backgroundColor:"rgba(0, 153, 0,0.9)"}} >
    <Card.Title color="coral" title="Happy Birthday" subtitle="Happy 23 birthday Monnus"/>
  
    <iframe src="https://giphy.com/embed/8FBCOSYErFjmDoaxeG" width="auto" height="auto" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-birthday-pig-hbd-8FBCOSYErFjmDoaxeG" style={{textDecoration:"none",color:"orange"}}>via GIPHY</a></p>    <Card.Content>
      <Title> Happy Birthday</Title>
      <Text style={{textAlign:"center", color:"white"}}>You are an amazing person and I'm incredibly lucky to call you my friend! May this year bring you all the 
        happiness you want and deserve.
      </Text>
      <Text style={{textAlign:"center", color:"coral"}}>Welcome to your Early twenties </Text>
    </Card.Content>
    <Card.Actions>
<Image/>
    </Card.Actions>
   </Card>
      </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
 maxWidth:600,
    backgroundColor:"black",
      alignContent:'center',
      margin:37
  },
  image:{
   flexGrow:3,
    justifyContent:"center"
  }
})