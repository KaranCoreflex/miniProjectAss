import { View, Text, FlatList,StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategory } from '../../sagasapp/actions';
import { useNavigation } from '@react-navigation/native';

const CategoryPage = () => {

const dispatch = useDispatch();
const categoryListData=useSelector(state=>state.categories);
const navigation = useNavigation();

useEffect(()=>{
  dispatch(listCategory())
},[])

const handeleUpdatePress=(type,item)=>{
  if(type=="Delete"){
    navigation.navigate('AddCategory',{data:{type:type,category:item}});
  }
  if(type=="Update"){
    navigation.navigate('AddCategory',{data:{type:type,category:item}});
  }

}

const renderItem=({item})=>(
  <View style={styles.container}>
      <Text>{item.CategoryId}</Text>
      <Text>{item.CategoryName}</Text>
      <Text>{item.BasePrice}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={()=>handeleUpdatePress("Update",item)} style={styles.actionButtonUpdate}>
            <Text style={{color:"white"}}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handeleUpdatePress("Delete",item)} style={styles.actionButtonDelete}>
            <Text style={{color:"white"}}>Delete</Text>
        </TouchableOpacity>
      </View>
  </View>
)
  return (
    <View>
        <FlatList
        data={categoryListData}
        keyExtractor={({ CategoryId }) => CategoryId}
        numColumns={2}
        renderItem={renderItem}
        ListFooterComponent={<Button onPress={({item})=>navigation.navigate("AddCategory",{data:{}})} title="Add Category"/>}
        />
        
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    width: "45%"
  },
  buttons:{
    flexDirection:'row',
    gap:5,
  },
  actionButtonUpdate:{
    backgroundColor:'blue',
    padding:5
  },
  actionButtonDelete:{
    backgroundColor:'red',
    padding:5
  }
})
export default CategoryPage