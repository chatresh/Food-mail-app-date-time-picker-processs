import React,{Component}from 'react';
import {View,Text,TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,
Alert, ScrollView, Image,} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import {Input,CheckBox} from 'react-native-elements'
import {Header} from 'react-native-elements';
import {DateTimePicker} from 'react-native-modal-datetime-picker'


export default class DonateFormScreen extends React.Component{
    constructor(){
        super()
        this.state={
        // userId:firebase.auth().currentUser.email,

         foodName:'',
         place:'',
         type:'',
         quantity:'',
         timeOfCooked:'',
         suitable:'',
         usableDuration:'',
         description:'',
         address:'',
         pickUpTime:'', 

         checked1:false,
         checked2:false, 

         isDateTimePickerVisible:false,
         duration:'',
      }
    }

    showDateTimePicker=()=>{
      this.setState({isDateTimePickerVisible:true})
    }
    hideDateTimePicker=()=>{
      this.setState({isDateTimePickerVisible:false})
    }
    handleDatePicked= date =>{
      console.log("A date has been picked",date)
      this.setState({duration:date})
      this.hideDateTimePicker() 
    }

    SubmitDetails=()=>{
        db.collection("DonationDetails").add({
         userId:this.state.userId,
        })
    }
    render(){
        return(
            <View>
            <Header
          centerComponent={{
                  text:"Food Mail",
                  style:{
                  color:"#03bcff",
                  fontSize:20,
                  fontWeight:"bold",
                  width:1200,
                  textAlign:"center"
                  }
              }}
            backgroundColor="#ffffff"  
       />
             <Text style={styles.buttonText}>1.Name of the food</Text>
             <Input style={styles.input} placeHolder="food Name"
            onChangeText={(text)=>{
              this.setState({foodName:text})
             }}
            value={this.state.foodName}
            />
            <Text style={styles.buttonText}>2.Restaurant or home</Text>
            <CheckBox 
             title="Restaurant"
             checkedIcon='dot-circle-o'
             uncheckedIcon='circle-o'
             checked={this.state.checked1}
             onPress={()=>{this.setState({
               checked1:!this.state.checked1,
               place:"Restaurant",
               })
               console.log(this.state.place)
               }}
            />
            <CheckBox 
             title="Home"
             checkedIcon='dot-circle-o'
             uncheckedIcon='circle-o'
             checked={this.state.checked1}
             onPress={()=>{this.setState({checked1:!this.state.checked2,
             place:"Home",
             })
             console.log(this.state.place)
             }}
            />
            <Text style={styles.buttonText}>3.Veg or non-veg</Text>
            <Text style={styles.buttonText}>4.What is the quantity of food approximately</Text>
            <Input style={styles.input} placeHolder="Quantity"
            onChangeText={(text)=>{
              this.setState({quantity:text})
             }}
            value={this.state.quantity}
            />
            <Text style={styles.buttonText}>5.How long has it be since cooked or brought</Text>
           
            <View>
              <TouchableOpacity onPress={()=>{
                this.showDateTimePicker()
              }}>
              <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              isConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              />
              </TouchableOpacity>
            </View>

            <Text style={styles.buttonText}>6.Is the food suitable for both , children and adults</Text>
            <Input style={styles.input} placeHolder="Children or adults"
            onChangeText={(text)=>{
              this.setState({suitable:text})
             }}
            value={this.state.suitable}
            />
            <Text style={styles.buttonText}>7.What is usable duration</Text>
            <Text style={styles.buttonText}>8.Enter a brief discription</Text>
            <Input style={styles.input} placeHolder=""
            onChangeText={(text)=>{
              this.setState({description:text})
             }}
            value={this.state.description}
            />
            <Text style={styles.buttonText}>9.Enter pick up address</Text>
            <Input style={styles.input} placeHolder="Address"
            onChangeText={(text)=>{
              this.setState({address:text})
             }}
            value={this.state.address}
            />
            <Text style={styles.buttonText}>10.Enter pick up time</Text>
            <Input style={styles.input} placeHolder="Time"
            onChangeText={(text)=>{
              this.setState({pickUpTime:eight})
             }}
            value={this.state.pickUpTime}
            />

            <View>
            <TouchableOpacity style={styles.button}>
            <Text style={{color:"#ffff",textAlign:"center"}}>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
     button:{
     backgroundColor:"#03bcff",
     width:100,
     height:50,
     justifyContent:"center",
     alignCenter:"center",
     alignSelf:"flex-end",
     marginTop:RFValue(30),
     marginRight:RFValue(15),
     marginBottom:RFValue(10),
     borderRadius:17,
     borderWidth:2,
     borderColor:"#ffff"
    },
    buttonText:{
        fontSize:RFValue(15),
        fontWeight:"Bold",
        marginTop:RFValue(10),
        marginLeft:RFValue(10)
    },
    input:{
      width:"75%",
    height:RFValue(35),
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    marginTop:RFValue(20),
    padding:RFValue(10),
    }
    
})