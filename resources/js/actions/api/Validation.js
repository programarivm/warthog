export const nice = (errors) => {
	let messages = [];
	Object.values(errors).forEach(error => {
		error.forEach(message => {
			messages.push(message);
		});
	});
	return messages;
}
