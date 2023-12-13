import { useEffect, useState } from "react";
import { View,Text,TextInput,Button } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../../styles";
import { addCategory, deleteCategory, listCategory, updateCategory } from "../../sagasapp/actions";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddCategory = () => {
    const [category,setCategory] = useState({CategoryId:'0', CategoryName:'',BasePrice:'0'});
    const dispatch = useDispatch();
    const route = useRoute();
    const { data } = route.params;
    
  
    useEffect(()=>{
        if(data.category){
            setCategory(data.category)
        }
    },[data])

    const navigation=useNavigation()
    const addProductData =() =>{
        /* Dispatch Action */
        if(data?.type=="Delete"){
            dispatch(deleteCategory(category.CategoryId))
        }

        if(data?.type=="Update"){
            dispatch(updateCategory(category))
        }
        else{
            dispatch(addCategory(category))
        }
        dispatch(listCategory())
        navigation.navigate("ProductsScreen")
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>{data?.type=="Update" ? "Update Category List" : data?.type=="Delete" ? "Delete Category List" : "Add Category List"}</Text>
            <Text style={styles.text}>Category Id:</Text>
            <TextInput value={category.CategoryId.toString()} style={data?.type == "Delete" || data?.type == "Update"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setCategory({...category, CategoryId:text})} editable={data?.type == "Delete" ? false : true} 
            />
              <Text style={styles.text}>Category Name:</Text>
            <TextInput value={category.CategoryName.toString()} style={data?.type == "Delete"  ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setCategory({...category, CategoryName:text})} editable={data?.type == "Delete" ? false : true}
            />
              <Text style={styles.text}>Base Price:</Text>
            <TextInput value={category.BasePrice.toString()} style={data?.type == "Delete" ?  styles.disableTextInput : styles.textInput}
              onChangeText={text=>setCategory({...category, BasePrice:text})} editable={data?.type == "Delete" ? false : true}
            />
            <Button title={data?.type ?? "Save"} onPress={addProductData}/>
        </View>
    );
};

export default AddCategory;
