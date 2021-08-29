import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';



export default function App() {

  const [NIC, setNIC] = useState('');


  function getDetails() {

        const detailsOP = [];
        let stringNIC = NIC;

        var lenght = stringNIC.length;

        switch (lenght) {
          case 10:

                var Y = "19" + stringNIC.substr(0, 2)
                NICDetails(stringNIC,Y)
                break;
          case 12: 

                var Y = stringNIC.substr(0,4);
                NICDetails(stringNIC,Y);
                break;
        
          default:
                alert("Please Enter a Valid NIC");
            break;
        }

        function NICDetails(stringNIC,y) {
                      var year=y;
                      var days;
                      var month;
                      var gender;

            
                      var mon =
                              {
                                  "1": ["Jan", 31],
                                  "2": ["Feb", 29],
                                  "3": ["Mar", 31],
                                  "4": ["Apr", 30],
                                  "5": ["May", 31],
                                  "6": ["Jun", 30],
                                  "7": ["Jul", 31],
                                  "8": ["Aug", 31],
                                  "9": ["Sep", 30],
                                  "10": ["Oct", 31],
                                  "11": ["Nov", 30],
                                  "12": ["Dec", 31]
                              };

                      if (stringNIC.length >= 5)
                      {
                          
                          days = parseInt(stringNIC.substr(2, 3));

                          if (days > 500)
                          {
                              gender = "Female";
                              days = days - 500;
                          }
                          else
                          {
                              gender = "Male";
                          }
                          var key;
                          for (key in mon)
                          {
                              if (days > mon[key][1])
                              {
                                  days = days - mon[key][1];
                              }
                              else
                              {
                                  break;
                              }
                          }
                          if (days < 10)
                          {
                              days = "0" + days;
                          }
                          month = mon[key][0];
                      }

                      var index = (stringNIC.length-1);
                      var votestates = stringNIC.charAt(index);
                      
                      switch (votestates) {
                        case "V":
                              var vote = " And you are a Voter";
                          break;
                        case "X":
                            var vote = " And you are not a Voter";
                          break;
                        default:
                              var vote = " Voting States is Not Valid ";
                          break;
                      }

                      alert("You were born in "+year+"."+month+"."+days+"        And you are " + gender+"       "+vote);
                    


          
        }
  }

  
  return (
    <View style={styles.container}>
    
      <Input
                placeholder="Enter your NIC Number "
                type="number"
                label="NIC"
                //leftIcon={{type:'materisl',name:'NIC'}}
                value={NIC}
                onChangeText={text=>setNIC(text)}
       />
      
      <StatusBar style="auto" />

      <Button title="Search" style={styles.button} onPress= { getDetails} />

    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 200,
    marginTop: 20,
    backgroundColor:"black",
    
  },

  Input: {
    marginTop:150,
    alignItems:'center',
    width:700
  },
  container: {
    flex: 1,
    alignItems:'center',
    padding: 10

  }
});
