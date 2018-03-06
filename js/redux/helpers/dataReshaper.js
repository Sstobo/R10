export const formatDataObject = data => {
	const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
	return dataObject[0];
};

export const formatSessionData = sessions => {
	return sessions
		.reduce((acc, curr) => {
			const timeExists = acc.find(section => section.title === curr.start_time);
			timeExists ? timeExists.data.push(curr) : acc.push({
				title: curr.start_time,
				data: [curr]
			});
			return acc;
		}, [])
		.sort((a, b) => a.title - b.title);
};

export const formatUnixDate = date => {
	const newDate = new Date(date * 1000);
	const hours = newDate.getHours();
	const minutes = newDate.getMinutes();
	return `${hours > 12 ? hours - 12 : hours}:${minutes === 0 ? '00' : minutes} ${hours > 12 ? 'PM' : 'AM'}`;
};

function filterFaves(faves, data) {
	return data.filter(event => faves.includes(event.session._id));
}
export const formatFaves = (faves, data) => {
	const arrayOfFaves = Object.values(faves);
	const filteredFaves = formatSessionData(filterFaves(arrayOfFaves, data));
	return filteredFaves;
};