import React, { Component } from 'react';
import {
	ActivityIndicator,
	AppRegistry,
	View,
	Text,
	FlatList,
	Image,
	ScrollView,
	LayoutAnimation,
	Animated,
	TouchableOpacity
} from 'react-native';
import { fetchCodeOfConduct } from './../../redux/modules/about';
import About from './About';
import { connect } from 'react-redux';
import LinGradient from '../../components/LinearGradient';
import { styles } from './styles';
class AboutContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchCodeOfConduct());
	}

	static route = {
		navigationBar: {
			title: 'About',
			tintColor: 'white',
			renderBackground: LinGradient
		}
	};

	componentDidMount() {
		this.props.dispatch(fetchCodeOfConduct());
	}

	render() {
		const { loading, data } = this.props;
		if (this.props.loading) {
			return (
				<ActivityIndicator
					animating={true}
					size="large"
					color="black"
					style={{
						marginTop: 44
					}}
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.aboutImageContainer}>
							<Image style={styles.aboutImage} source={require('../../assets/images/r10_logo.png')} />
						</View>
						<Text style={styles.aboutText}>
							R10 is a conference that focuses on just abouut any toipic related to dev.
						</Text>
						<Text style={styles.aboutSubLine}>Date & Venue</Text>
						<Text style={styles.aboutText}>
							The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC
						</Text>
						<Text style={styles.aboutSubLine}>Code of Conduct</Text>

						{data.map((text, i) => {
							return <About key={i} title={text.title} description={text.description} />;
						})}
					</ScrollView>
				</View>
			);
		}
	}
}

const mapStateToProps = state => ({
	loading: state.about.loading,
	data: state.about.data
});

AboutContainer.defaultProps = {
	loading: true,
	data: {},
	dispatch: null
};
export default connect(mapStateToProps)(AboutContainer);
