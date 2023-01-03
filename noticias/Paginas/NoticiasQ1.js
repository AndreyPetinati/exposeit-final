import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function NoticiasQ1() {
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
    <View style={{height:1750,backgroundColor:'black'}}>
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/covid.jpg')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>China e Covid: Pequim critica regras 'políticas' para seus turistas</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white',marginBottom:20}}>O governo chinês sugeriu que as restrições de viagem impostas por vários países às chegadas de chineses têm motivação política - e alertou que pode retaliar.

Os EUA, a Índia e o Reino Unido estão entre os países que introduziram testes obrigatórios para chegadas da China.

O país viu recentemente um aumento nos casos de Covid após a flexibilização de seus controles rígidos.

E há temores de que casos e mortes estejam sendo muito subnotificados.

A última atualização diária da Covid na China, em 24 de dezembro, relatou menos de 5.000 casos - mas alguns analistas afirmam que o número diário de casos já é superior a dois milhões e pode chegar a quase quatro milhões neste mês.</Text>
          <Text style={{fontSize:22,alignItems:'center',color:'white',marginBottom:20}}>A falta de dados - e o anúncio da China de que estava diminuindo as restrições às viagens a partir de 8 de janeiro - levou mais de uma dúzia de países a anunciar testes de Covid nas chegadas da China.

A Organização Mundial da Saúde (OMS) pediu à China que compartilhe mais informações em tempo real e uma porta-voz do Ministério das Relações Exteriores disse na terça-feira que Pequim está disposta a "melhorar a comunicação com o mundo".

No entanto, a porta-voz Mao Ning disse que o governo "se opõe firmemente às tentativas de manipular as medidas de prevenção e controle da epidemia para fins políticos e tomará as medidas correspondentes... de acordo com o princípio da reciprocidade".</Text>
         
        
        
           
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

