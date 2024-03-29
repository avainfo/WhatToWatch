import {Component} from "react";
import {FlatList, ScrollView, Text, View, Image} from "react-native";
import {getRecommendations} from "../api/Requests";

class Recommendations extends Component {

	loaded = false;
	BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w300"

	constructor() {
		super();
		this.state = {
			listOfRecommendations: []
		}
		getRecommendations().then(data => {
			if(!this.loaded) {
				this.loaded = true;
				let resultArray = []
				for(const result of data.results) {
					resultArray.push(
						{
							key: result.id,
							item:
								<View style={{
									backgroundColor: '#f9c2ff',
									padding: 20,
									marginVertical: 8,
									marginHorizontal: 16,
								}}>
									<Image source={{
										uri: `${this.BASE_URL_IMAGE}${result.poster_path}`
									}}
									       style={{height: 100, width: 100}}
									/>
									<Text style={{fontSize: 16, color:"white", position: "absolute", top: 20, left: 10}}>{result.name}</Text>
								</View>
						}
					)
				}
				this.setState({listOfRecommendations: resultArray})
			}
		})
	}


	render() {
		return (
			<View>
				<Text>Vous aimerez peut être</Text>
				<ScrollView horizontal={true}>
					<FlatList
						data={this.state.listOfRecommendations}
						renderItem={({item}) => item.item}
						keyExtractor={item => item.key}
						horizontal={true}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default Recommendations;