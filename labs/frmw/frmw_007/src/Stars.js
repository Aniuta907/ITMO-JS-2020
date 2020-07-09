import React from 'react';
import Icon from '@material-ui/core/Icon';

const Stars = ({ starsCount }) =>
	[ ...Array(starsCount).keys() ].map((index) => (
		<Icon color="primary" key={index}>
			star
		</Icon>
	));

export default Stars;
