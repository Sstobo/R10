import React from 'react';

import { styles } from './styles';
import { formatUnixDate } from './../../redux/helpers/dataReshaper';
import { SectionList, View, Text } from 'react-native';

const Faves = ({ data, loading, error, currentUID, style }) => {
	if (error) {
		return <View />;
	}
	return (
		<SectionList
			renderItem={({ item }) => <ListItem item={item} currentUID={currentUID} style={style} />}
			renderSectionHeader={({ section }) => <Text style={style.header}>{formatUnixDate(section.title)}</Text>}
			sections={data}
			keyExtractor={item => {
				return item.session_id;
			}}
		/>
	);
};

export default Faves;
