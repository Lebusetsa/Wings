import { StyleSheet, View,Image ,Text } from 'react-native';
import {useState} from 'react';
import { TouchableOpacity } from 'react-native';

export default function Food({eges,prices,pictures,setAmount,Amount,meal}) {

    const[Item, setItem]= useState(0);
    const[Cost, setCost]= useState(0);
    function Addprice(){
        setAmount(Amount + prices);
        setItem(Item + 1);
       setCost(Item*prices)
        
    
    }
    function Subprice(){
        setAmount(Amount - prices);
        setItem(Item - 1);

    }
 
  return (
    
<View style={styles.mealbox}>
    <Image style={styles.image} source={pictures} />
    <View style={styles.details}>
    <View>
   <Text style={styles.food}>{meal}</Text>
   <View style={styles.tag}>
   <Text style={styles.meal}>Price: M {prices}</Text>
   
   </View>
    </View>
    
        <TouchableOpacity onPress={Addprice}>
        <Text style={styles.button}>+</Text>
        </TouchableOpacity>

 
 
     <TouchableOpacity onPress={Subprice}>
       <Text style={styles.button}>-</Text>
       </TouchableOpacity>
 
 <Text style={styles.item}>X {Item}</Text>

    </View>
</View>


);
}

const styles = StyleSheet.create({



mealbox:{
    width:'100%',
    alignItems:'center',
    padding:1,
    marginTop:30,
},

image:{
    width:'90%',
    height:200,
    borderRadius:50,
},

meal:{
    fontStyle:'italic',
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    
},
details:{
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%',
    padding:8,
    marginTop:10,
},
button:{
    fontWeight:'bold',
   fontSize:40,
   color:'black',
},
tag:{
    backgroundColor:'#f44336',
    width:120,
    borderBottomLeftRadius:20,
  borderTopRightRadius:20,
    alignItems:'center',
    justifyContent:'center',
    elevation:25,
    shadowColor:'gray',
    borderWidth:2,
    borderColor:'#f44336',
},

food:{
    fontStyle:'italic',
    fontSize:22,
    fontWeight:'bold',
    color:'#ff3d00',
},
item:{
    fontStyle:'italic',
    fontSize:18,
    fontWeight:'bold',
    color:'black',
}


});