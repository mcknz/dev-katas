describe("FizzBuzzer", function() {
    var fizzBuzzer = new FizzBuzzer();

    it("Return Fizz for 3", function() {
        expect(fizzBuzzer.getValue(3)).toBe("Fizz");
    })

    it("Return Buzz for 5", function() {
        expect(fizzBuzzer.getValue(5)).toBe("Buzz");
    })

    it("Return FizzBuzz for 15", function() {
        expect(fizzBuzzer.getValue(15)).toBe("FizzBuzz");
    })

    it("returns Fizz for 6", function() {
        expect(fizzBuzzer.getValue(6)).toBe("Fizz");
    })

    it("returns FizzBuzz for 30", function() {
        expect(fizzBuzzer.getValue(30)).toBe("FizzBuzz");
    })
})