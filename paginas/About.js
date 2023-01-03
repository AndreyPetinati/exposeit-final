import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';

export default function About() {
 return (
   <View style={styles.container}>
        <Text style={{marginBottom:20,fontSize:30,fontWeight:'bold',width:270}}>Quem somos nós ?</Text>
       
        <View>
            <Text style={{fontSize:22}}>
            Somos dois jovens de São Paulo que tomaram à decisão de criar um aplicativo para mostrar de forma clara e sem viés ideológico, as principais notícias da América Latina.
</Text>
    
    <Text style={{marginTop:20,fontSize:22}}>
    Nosso objetivo é manter as pessoas informadas.
E sempre estaremos abertos à novas opiniões e feedbacks!
    </Text>
        
        </View>
        
        
          <Image style={{marginTop:50,width:'100%',height:'30%'}}source={require("../assets/Design_sem_nome_1.png")}/>
        
        
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:80,
      marginRight:80
      
    },
   
  });
  