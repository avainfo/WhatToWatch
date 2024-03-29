import {Dimensions, Image, StyleSheet, View} from "react-native-web";

const Header = (props) => {
	let logo = require("../../assets/images/logo.png");
	return (
		<View style={styles.header}>
			<Image source={logo} style={styles.logo}/>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: Dimensions.get("window").height / 10,
		backgroundColor: "red",
	},
	logo: {
		height: Dimensions.get("window").height / 12,
		width: Dimensions.get("window").height / 12,
		justifyContent: "center",
	},
	input: {
		width: Dimensions.get("window").width / 2,
	}
})

export default Header;
