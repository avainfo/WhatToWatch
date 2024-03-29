import {Dimensions, Image, StyleSheet, View} from "react-native-web";
import {TextInput} from "react-native";

const Header = (props) => {
	let logo = require("../../assets/images/logo.png");
	return (
		<View style={styles.header}>
			<Image source={logo} style={styles.logo}/>
			<TextInput onChangeText={(text) => console.log(text)} style={styles.input}/>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: Dimensions.get("window").height / 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: Dimensions.get("window").width / 20,
		paddingRight: Dimensions.get("window").width / 20,
	},
	logo: {
		height: Dimensions.get("window").height / 12,
		width: Dimensions.get("window").height / 12,
		justifyContent: "center",
	},
	input: {
		width: Dimensions.get("window").width /1.8,
		height : "calc((100vh / 12) - 100vh / 24)",
		backgroundColor: "rgba(255, 255, 255, 0.35)",
		borderRadius: "50vh",
		paddingLeft: "15px",
	}
})

export default Header;
