import React from 'react';
import { Image, Text, View,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AnimatedLottieView from 'lottie-react-native';

export default function Politica2() {
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
    <View style={{height:1500,backgroundColor:'black'}}>
      <Image style={{resizeMode:'cover',width:'100%',height:250}}source={require('../../assets/imagens/correio.jpg')}/>
      
   
        <View style={{margin:26}}>
          
          <Text style={{fontSize:25,marginBottom:30,color:'white',fontFamily:'Lora'}}>Lula faz “revogaço” e edita mais de 50 decretos e medidas provisórias</Text>
          
          <View style={{flexDirection:'row',marginBottom:30}}>
            <Text style={{fontSize:14,color:'white'}}>Verificado por especialistas</Text>
            <Image style={{width:20,height:20}}source={require('../../assets/verifica.png')}></Image>
          </View>
          
          
          
          
          <Text style={{fontSize:22,alignItems:'center',color:'white'}}>  Pouco tempo depois de tomar posse como Presidente da República, Luiz Inácio Lula da Silva (PT) assinou 52 decretos presidenciais e pelo menos três medidas provisórias.

As iniciativas tiveram o intuito de estabelecer uma nova estrutura para a administração federal, além de revogar normas editadas pelo governo de Jair Bolsonaro (PT) e tomar providências sobre o programa Auxílio Brasil – que futuramente voltará a se chamar Bolsa Família. As publicações foram divulgadas no Diário Oficial da União desta segunda-feira.</Text>
        
<Text style={{fontSize:22,alignItems:'center',color:'white',marginTop:20}}>  Além disso, um despacho assinado pelo presidente determina a ministros de seu governo a retirada da Petrobras do processo de desestatização iniciado por ex-presidente Jair Bolsonaro. A determinação também prevê barrar a privatização de outras empresas públicas: Correios, Empresa Brasil de Comunicação (EBC), Dataprev, Nuclebrás Equipamentos Pesados (Nuclep), Serviço Federal de Processamento de Dados (Serpro), armazéns e imóveis de domínio da Companhia Nacional de Abastecimento (Conab) e a Pré-Sal Petróleo (PPSA).</Text>
           
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

