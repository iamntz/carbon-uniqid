const randomHash = () => {
	return Date.now().toString() + Math.random().toString(36).substr(2, 5);
};


export default randomHash;
