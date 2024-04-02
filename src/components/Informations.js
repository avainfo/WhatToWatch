import {StyleSheet, Text, View} from "react-native";
import {Notation} from "./Notation";
import {Dimensions} from "react-native-web";
import {LinearGradient} from "expo-linear-gradient";


const Informations = ({data}) => {
	return (
		<View>
			<LinearGradient
				colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0)"]}
				style={styles.mainContent}>
				<Text style={styles.title}>
					{data.title}
				</Text>
				<Notation rate={4}/>
				<Text style={styles.overview}>
					{data.overview}
				</Text>
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContent: {
		paddingTop: Dimensions.get("window").height / 15,
		paddingBottom: Dimensions.get("window").height / 15,
		paddingLeft: Dimensions.get("window").width / 20,
		paddingRight: Dimensions.get("window").width / 20,
	},
	title: {
		color: "#FFFFFF",
		fontSize: 32,
	},
	overview: {
		color: "#FFFFFF",
		fontSize: 18,

	}
})

export default Informations;