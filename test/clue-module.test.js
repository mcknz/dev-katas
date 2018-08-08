// First argument to 'describe' is the testing module that will appear in test reports.
// The second argument is a function containing the individual tests.

describe("Clue", function () {
    // The 'it' function defines an individual test.
    //
    // The first argument is a description of the test that's appended to the module name.
    //
    // Because a module name is typically a noun, like the name of the function being tested,
    // the description for an individual test is typically written in an action-data format. 
	
	var clue = new Clue();
	
	it("should return the solution 'Green, Hall, Candlestick'", function () {
        expect(clue.solve()).toBe('Green, Hall, Candlestick');
    });
});