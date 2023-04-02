import { View, Text } from "react-native";

const Title = ({styles}) =>{
    return(
        <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Text style={styles.header}>Discount Calculator</Text>
        </View>
    )
}

export default Title;