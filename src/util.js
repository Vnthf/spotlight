export const isMac = () => {
	return navigator && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
};

export const getMaskBackground = (x, y, {radius, dimmedColor}) => {
	return 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent ' + radius + 'px, '+ dimmedColor + ' 0)';
}

export default {
	isMac,
	getMaskBackground
}