import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const ClearButton = (props) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            colors={props.btnColors}
            style={props.styles.btn}
        >
            <TouchableOpacity onPress={props.onClearResult}>
                <Text style={{ color: 'white' }}>Clear</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ClearButton;