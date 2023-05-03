import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F4F4F4',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
	},
	slider: {
		flexDirection: 'row',
		width: '40%',
		marginBottom: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 32,
	},
	inputContainer: {
		width: '100%',
		marginBottom: 16,
	},
	input: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
		fontSize: 16,
	},
	button: {
		backgroundColor: '#FFA500',
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginLeft: 5,
		marginRight: 5,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'bold',
	},
	invertedButton: {
		backgroundColor: '#F4F4F4',
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginLeft: 5,
		marginRight: 5,
	},
	invertedButtonText: {
		color: '#FFA500',
		fontSize: 16,
		fontWeight: 'bold',
	},
	canvasBorder: {
		borderColor: 'red',
		borderStyle: 'solid',
		width: '90%',
		height: '90%',
	},
	islandNavigation: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: 'red',
		borderStyle: 'solid',
		width: '90%',
		height: '5%',
	},

	shopItem: {
		display: 'flex',
		borderColor: 'blue',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		width: '90%',
		height: '400px',
	},
	shopItemImage: {
		// borderColor: 'blue',
		// borderStyle: 'solid',
		height: '50%',
		width: '50%',
		margin: '5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	shopItemDescription: {
		// borderColor: 'blue',
		// borderStyle: 'solid',
		height: '10%',
		margin: '5px',
		fontSize: '15px',
		width: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	shopItemBuy: {
		borderColor: 'blue',
		borderStyle: 'solid',
		height: '10%',
		width: '90%',
		marginTop: '30px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	spaceDown:{
		marginBottom: '4300px'
	}


});