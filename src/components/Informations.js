import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import { Notation } from "./Notation";


class Informations extends Component {

	title = "Halo";
	description = "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.";

	render() {
		return (
			<View style={styles.mainContent}>
				<Text>
					{this.title}
				</Text>
				<Notation rate={4}/>

				<Text>
					{this.description}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContent: {
		backgroundColor: "blue",
		paddingLeft: "20px",
		paddingRight: "20px",
	}
})

export default Informations;