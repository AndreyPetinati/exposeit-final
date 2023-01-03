import React from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';


export default function Donate() {
 return (
   <View style={{margin:40,alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:19}}> Não possuimos anúncios para criar uma melhor experiência ao usuário. Se nós
        te ajudamos de alguma forma, ajude a manter o aplicativo ativo. </Text>
        <Text style={{fontWeight:'bold',fontSize:19,marginTop:30}}>Chave PIX - exposeitofc@gmail.com</Text>
        
        <View style={{marginTop:100,margin:20}}>
          <Image resizeMode='cover'style={styles.qrcode}source={require("../assets/dasda.png")}/>
        </View>
        <Image style={{height:"20%",width:'45%',}} source={require("../assets/Design_sem_nome_1.png")}/>
        
        
        
   </View>
  );
}

const styles = StyleSheet.create({
  qrcode:{
    width:300,
    height:300,
    
    
  }
})