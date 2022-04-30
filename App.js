
import { StyleSheet, View,Text,Image,TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { Ionicons,AntDesign,FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';
import {useState} from 'react';
import Food from './Food';

export default function App() {
 
  const [Amount , setAmount] = useState(0);

  var eges=require('./break.webp');
  var meat=require('./meat.jpg');
  var drink=require('./drink.jpg');
  var burger=require('./burger.webp');
  var snack=require('./snack.jpg');
  
  return (
    <View style={styles.container}>
     <View style={styles.stabar}>

<Text style={styles.wings}>WINGS CAFE</Text>

<Image 
   style={styles.logo}
     source={require('./wings.png')}
     />
     

</View>


<View style={styles.icons}>
  <TouchableOpacity>
<Ionicons name="arrow-back" size={24} color="gray" />
</TouchableOpacity>
<TouchableOpacity>
<FontAwesome name="shopping-cart" size={24} color="gray" />
</TouchableOpacity>
<TouchableOpacity>
<MaterialCommunityIcons name="food-fork-drink" size={24} color="orange" />
</TouchableOpacity>
<TouchableOpacity>
<AntDesign name="bars" size={24} color="gray" />
</TouchableOpacity>



</View>

<View style={styles.searview}>
<TextInput 
style={styles.search} 
 
 placeholder="Search Meal"
 onChangeText={(Text)=>(Text)}
 />
 </View>
 
 

<View style={styles.foodDasplay}>
<Image style={styles.pictures} source={require('./1.jpg')} />
<Image style={styles.pictures} source={require('./2.jpg')} />
<Image style={styles.pictures} source={require('./3.jpg')}  />
</View>

<ScrollView style={{width:'100%'}}>
<Food pictures={eges} meal="Break Fast"  prices= {25}  Amount={Amount} setAmount = { setAmount} />
<Food pictures={meat} meal="Pork and Rice " prices={35}  Amount={Amount} setAmount = { setAmount} />
<Food pictures={drink} meal="Soft Drink" prices={10}  Amount={Amount} setAmount = { setAmount} />
<Food pictures={burger} meal="Burger" prices={30}   Amount={Amount} setAmount = { setAmount} />
<Food pictures={snack} meal="Doritos" prices={18}   Amount={Amount} setAmount = { setAmount} />



</ScrollView>
<View style={styles.totabox}>
  <View style={styles.T}>
  <Text style={styles.totalPrice}>Total price:</Text>
  </View>
  <View style={styles.P}>
    <Text style={styles.totalPrice}>M {Amount}</Text>
    </View>

</View>

</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',

},

icons:{
  width:'80%',
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:15,
},

stabar:{
  backgroundColor:'#fff',
  width:'100%',
  flexDirection:'row',
  padding:1,
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:10,
  
  
  },
  
  wings:{
  fontSize:25,
  color:'#ff3d00',
  fontWeight:'bold',
  marginLeft:10,
  },
  logo:{
  height:100,
  width:100,
  },
  searview:{
      width:'100%',
      alignItems:'center',
  },
  search:{
  height:35,
  width:'80%',
  borderRadius:10,
  color:'red',
  borderColor:'orange',
  borderWidth:2,
  fontSize:18,
  marginBottom:10,
  },
  foodDasplay:{
  flexDirection: 'row',
  width:390,
marginBottom:20,


},
totalPrice:{
  fontSize:25,
  fontWeight:'bold',
  color:'red',
  marginBottom:10,
},

pictures:{
  width:'100%',
  height:200,
  margin:5,
},
totabox:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  padding:30,
  borderRadius:20,
},
T:{
  backgroundColor:'#f57f17',
  borderBottomLeftRadius:30,
  borderTopRightRadius:30,
  width:150,
  alignItems:'center',
  justifyContent:'center',
  fontStyle:'italic',
  
},
P:{
  backgroundColor:'#f57f17',
  borderRadius:10,
  width:100,
  alignItems:'center',
  justifyContent:'center',
  fontStyle:'italic',
  borderBottomLeftRadius:30,
  borderTopRightRadius:30,
  
}

});
