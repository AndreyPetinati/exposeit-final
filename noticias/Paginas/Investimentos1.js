import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function Investimentos1() {
  const navigation = useNavigation();
  let animation = React.createRef()
  function startAnimation(){
    animation.current.play()
  }
  
  let [fontsLoaded] = useFonts({
   
    'playefair':require('../../assets/fonts/playefair.ttf'),
    'Lora':require('../../assets/fonts/Lora-Regular.ttf')
    
})



if (!fontsLoaded){
  return null
}
 
  
  return (
    <ScrollView style={{height:670}} showsVerticalScrollIndicator='false'>
    <View style={{height:1700,backgroundColor:'black'}}>
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/renner.jpg')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>Renner, Cielo e Sul América vão pagar proventos em janeiro de 2023</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white'}}>Lojas Renner (LREN3)
O que faz a empresa? É uma varejista brasileira, com atuação no mercado de vestuário e utilidades domésticas. 
Tipo de provento: juros sobre capital próprio
Valor total bruto: R$ 178,598 milhões
Valor por ação: R$ 0,184
Data de corte: 21 de dezembro de 2022
Data de pagamento: a partir de 06 de janeiro</Text>
<Text style={{fontSize:22,alignItems:'center',color:'white',marginTop:20}}>
Cielo (CIEL3)
O que faz a empresa? Ex-Visanet Brasil, é uma empresa brasileira focada em meios de pagamentos. Atua como adquirente multi-bandeira e é uma das responsáveis pela captura, transmissão e liquidação financeira de transações com cartões de crédito e débito. 
Tipo de provento: juros sobre capital próprio
Valor total bruto: R$ 239 milhões
Valor por ação: R$ 0,175
Data de corte: 23 de dezembro de 2022
Data de pagamento: 27 de janeiro
</Text>
<Text style={{fontSize:22,alignItems:'center',color:'white',marginTop:20}}>
SulAmérica (SULA11)
O que faz a empresa? É a maior seguradora independente do Brasil, com mais de 30 mil corretores e 7 milhões de clientes. Com sede em São Paulo, atua em várias linhas de seguros, como saúde, odontológico e previdenciário
Tipo de provento: juros sobre capital próprio
Valor total bruto: R$ 24 milhões
Valor por ação: R$ 0,019 por ação ordinária ou preferencial e R$ 0,059 por unit
Data de corte: 20 de dezembro de 2022
Data de pagamento: 02 de janeiro
</Text>
        
        
           
           <View style={{flexDirection:'row'}}>
            
              <Image style={{height:64,width:64,marginTop:36}} source={require("../../assets/Design_sem_nome_1.png")}/>
            
            <TouchableOpacity  style={{marginLeft:25,marginTop:36}}onPress={() => navigation.navigate('Donate')}>
              <FontAwesome5  name='donate' text='Apoio'color='lightgreen'size={40}/>

              <Text style={{marginTop:5,color:'white'}}>Apoio</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={startAnimation} style={{alignItems:'center',marginLeft:90}}>
    
             
             <AnimatedLottieView
             
              source={require('../../assets/check.json')}
              style={{
                width:100,
                height:100,
                
                
              }}
              loop={false}
              ref={animation}
              />
              <Text style={{color:'white'}}>Gostei</Text> 
              
          </TouchableOpacity>
         
          
          
         
          
          </View>
        
        </View>
      
      
    </View>
  </ScrollView>
    );
}

