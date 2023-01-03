import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function NoticiasQ3() {
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
    <View style={{height:1300,backgroundColor:'black'}}>
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/canada.jpg')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>Estrangeiros agora proibidos de comprar casas no Canadá</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white',marginBottom:20}}>Uma proibição de dois anos para alguns estrangeiros comprarem casas no Canadá entrou em vigor.

A proibição visa ajudar a aliviar um dos mercados imobiliários mais inacessíveis do mundo.

A partir deste verão, o preço médio de uma casa no Canadá é de C$ 777.200 (R$ 3.101.280 ) - mais de 11 vezes a renda familiar média após impostos.</Text>
          <Text style={{fontSize:22,alignItems:'center',color:'white'}}>Alguns criticaram a proibição, dizendo que não está claro o impacto que ela terá no mercado imobiliário do Canadá.

Residentes não canadenses representam menos de 6% dos proprietários de imóveis em Ontário e na Colúmbia Britânica, onde as estatísticas nacionais indicam que os preços das residências são os mais altos.

A partir de 1º de janeiro, a proibição proíbe que pessoas que não sejam cidadãos canadenses ou residentes permanentes comprem imóveis residenciais e impõe uma multa de C$ 10.000 àqueles que a violarem.</Text>
        
        
           
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

