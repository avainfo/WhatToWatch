import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import Header from "./src/components/Header.js";

let backgroundImage = require("./assets/images/img.png");

export default function App() {

	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<Header />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
})