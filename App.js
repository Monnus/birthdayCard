import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Alert} from 'react-native';
import { Avatar, Button, Card, Title} from 'react-native-paper';

import "./"

export default function App() {
  const hello="world"

  return (
    <SafeAreaView style={styles.container}>
   <Card style={{left:"10%",width:"70%",height:"70%" ,backgroundColor:"#ffedcc"}} mode="outlined">
    <Card.Title title="Happy Birthday" subtitle="Happy 23 birthday Monnus"/>
  
    <iframe src="https://giphy.com/embed/Qvns6NmhC1MBLKGbL1" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bill-murray-happy-birthday-to-you-Qvns6NmhC1MBLKGbL1" style={{textDecoration:"none"}}>via GIPHY</a></p>
    <Card.Content>
      <Title> Happy Birthday</Title>
      <Text>You are an amazing person and I'm incredibly lucky to call you my friend! May this yaer bring you all the 
        happiness you want and deserve.
      </Text>
      <Text style={{textAlign:"center"}}>Welcome to your Early twenties </Text>
    </Card.Content>
    <Card.Actions>

    </Card.Actions>
   </Card>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"#ffd280",
      alignContent:'center',
      margin:37
  }
})