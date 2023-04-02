import { useState } from 'react';
import { SafeAreaView, Text, View  } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Title from './src/components/Title';
import { styles } from './src/styles/styles';
import CalcButton from './src/components/Buttons/CalcButton';
import ClearButton from './src/components/Buttons/ClearButton';
import TextFields from './src/components/TextFields';


export default function App() {

  const [amount, setAmount] = useState();
  const [discount, setDiscount] = useState();
  const [result, setResult] = useState(null);
 
  const changeAmount = (value) => {

    setAmount(value)
  }
  const changeDiscount = (value) => {

    setDiscount(value)
  }

  const calculateResult = () => {
    if (amount > 0 && discount > 0 && discount < 100) {
      setResult(amount - (amount * (discount / 100)))
    } else {
      setResult("Please insert valid numbers")
      setTimeout(() => {
        setResult(null)
      }, 3000);
    }
  }

  const clearResult = () => {
    setResult(null)
    setAmount(null)
    setDiscount(null)
  }

  // const resultStyle = { color: typeof (result) === 'number' ? 'green' : typeof (result) === 'string' ? 'red' : 'black' };
  const backgrColors = ['#4158D0', '#C850C0', '#FFCC70']
  const btnColors = ['#77A1D3', '#79CBCA', '#77A1D3']


  // useEffect(() => {

  // }, [result, amount, discount])

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={backgrColors}
        style={styles.background}
      >
        <Title styles={styles}/>
        <TextFields 
        styles={styles} 
        onChangeAmount={changeAmount} 
        onChangeDiscount={changeDiscount} 
        amount={amount} 
        discount={discount}/>
        <View 
        style={{ 
          alignItems: 'center', 
          flexDirection: 'row', 
          justifyContent: 'space-around'}}>
          <CalcButton 
          styles={styles} 
          onCalculateResult={calculateResult} 
          btnColors={btnColors}/>
          <ClearButton 
          styles={styles} 
          onClearResult={clearResult} 
          btnColors={btnColors}/>
        </View>
        <Text style={styles.result}>The amount after discount is: </Text>
        <Text style={styles.result}>{result}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}


// <SafeAreaView style={styles.container}>
//   <View style={styles.avatar_container} >
//     <View style={{
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//       <Image style={{ marginBottom: 10 }} source={require('./assets/batman-avatar.png')} />
//       <Text style={{ maxWidth: 200 }}>"It's not who I am underneath, but what I do that that defines me"</Text>
//     </View>
//   </View>
//   <View style={styles.details_container}>
//     <View style={styles.item}>
//       <Text style={styles.label}>Name: </Text>
//       <Text style={styles.data}>Batman </Text>
//     </View>
//     <View style={styles.item}>
//       <Text style={styles.label}>City: </Text>
//       <Text style={styles.data}>Gotham </Text>
//     </View>
//     <View style={styles.item}>
//       <Text style={styles.label}>Fav Color: </Text>
//       <Text style={styles.data}>Black </Text>
//     </View>
//     <View style={styles.item}>
//       <Text style={styles.label}>Job: </Text>
//       <Text style={styles.data}>Battling </Text>
//     </View>
//   </View >
// </SafeAreaView>
