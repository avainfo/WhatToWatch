import {Text, View} from "react-native";
import {Rating} from "react-native-ratings";

export function Notation(props) {
	return (
		<View>
			<Rating
				type={"star"}
				readonly={true}
				style={{ paddingVertical: 10 }}
				startingValue={props.rate}
			/>
			<Text>
				{props.rate + "/5"}
			</Text>
		</View>
	);
}