
import { View, Text, TextInput } from "react-native"
import { styles } from "../styles/styles";

const TextFields = (props) => {
    return (
        <>
            <View >
                <View style={styles.amount_container}>
                    <Text style={styles.form_title}>Amount</Text>
                    <TextInput
                        style={styles.input} onChangeText={props.onChangeAmount} value={props.amount} />
                </View>
                <View style={{ marginHorizontal: 40 }}>
                    <Text style={styles.form_title}>Discount (%)</Text>
                    <TextInput
                        style={styles.input} onChangeText={props.onChangeDiscount} value={props.discount} />
                </View>
            </View>

        </>
    )
}

export default TextFields;