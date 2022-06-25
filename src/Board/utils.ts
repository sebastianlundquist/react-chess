const getColumnName = (columnIndex: number) =>
	String.fromCharCode(columnIndex + 65);

const getRowName = (rowIndex: number) => (rowIndex + 1).toString();

export { getColumnName, getRowName };
