const getPieceColor = (id: string) => id.substring(0, id.indexOf('-'));

const getPieceType = (id: string) =>
	id.substring(id.indexOf('-') + 1, id.lastIndexOf('-'));

export { getPieceColor, getPieceType };
