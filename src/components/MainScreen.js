
import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';



export default function App() {

  const [personajes, setRickApi] = useState([]);

  const fetchPersonajes = () => {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(RickyMorty => setRickApi(RickyMorty.results));
  };

  useEffect(() => {
  fetchPersonajes();
  },[]);

  return (
    <View style={styles.container}>

            <Image
                    style={styles.imagen}
                    source={require("../../assets/morty.png")}
                  />

          <Text style = {styles.txt}>PERSONAJES</Text>

      {
        personajes.map((RyMdata, index)=>{
          return (
                

            <View style = {styles.container1}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      character: RyMdata.name,
                    })
                  }>


                  <Image
                    style={styles.img}
                    source={{
                      uri: RyMdata.image,
                    }}
                  />
                  
                  
                  <Text style = {styles.txt1}>{RyMdata.name}</Text>
                  <Text style = {styles.text2}>Especie: {RyMdata.species}</Text>
                  <Text style = {styles.text2}>Status: {RyMdata.status}</Text>
                
                </TouchableOpacity>
                
                </View>
              );
        })
      }
    </View>
  );


  
}

const styles = StyleSheet.create({
  container: {    
 display: 'flex',    
 flexDirection: 'row',    
 flexWrap: 'wrap',    
 marginTop: 30,
  
},  

container1: {
    width: '97%',
    justifyContent: 'center',    
    backgroundColor: "#040404",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#eee',
    shadowOffset: {
        width: -8,
        height: 7,
    },
    shadowOpacity:  0.05,
    shadowRadius: 3.05,
    elevation: 0
},
card: {    
 display: 'flex',    
 alignItems: 'center',      
 marginHorizontal: 20,    
 marginVertical: 10,  
}, 
txt:{
    marginTop:-2,
    fontSize: 15,
        fontWeight: "bold",
        paddingHorizontal:10,
        color: 'black',
    
},
txt1:{
    marginTop: 5,
    fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal:55,
        color: 'white',
    
},
text2:{
    marginTop: 5,
    fontSize: 15,
        fontWeight: "bold",
        paddingHorizontal:55,
        color: '#19acbf',
    
},
img: {
    width: "100%",
    height: 200 ,
    resizeMode: "contain",
    borderRadius: 5,
    marginBottom: 10,
},
imagen: {
    width:  300,
    height: 100 ,
    marginBottom: 20,
    marginHorizontal: 31,
},
imagen3: {
    width: "12%",
        height: 41 ,
        borderRadius: 100,
        marginBottom: 10,
    resizeMode: "contain",
    
},
});

