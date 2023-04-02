import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const CalcButton = (props) =>{
    return(
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={props.btnColors}
            style={props.styles.btn}
        >
            <TouchableOpacity onPress={props.onCalculateResult}>
                <Text style={{ color: 'white' }}>Calculate</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CalcButton;