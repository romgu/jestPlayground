const googleSearch = require('./script');

dbMock = [
	'dog.com',
	'cheesepuff.com',
	'disney.com',
	'dogpictures.com'
];

describe('googleSearch', () => {
	it('is a silly test', () => {
	expect('hello').toBe('hello');
	})

	it('it is searching google', () => {
		expect(googleSearch('testest', dbMock)).toEqual([]);
		expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
	})

	it('work with undefined and not input', () => {
		expect(googleSearch(undefined, dbMock)).toEqual([]);
		expect(googleSearch(null, dbMock)).toEqual([]);
	})

	it('does not return more than three matches', () => {
		expect(googleSearch('.com', dbMock).length).toEqual(3);
	})
})

