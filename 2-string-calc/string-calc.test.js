describe("String Calculator", () => {
    var calculator = new StringCalculator();
    it("return 0 for empty string", () => {
        expect(calculator.Add("")).toBe(0);
    })
    
    it("return 1 for 1", () => {
        expect(calculator.Add("1")).toBe(1);
    })

    it("returns sum of 1,2", () => {
        expect(calculator.Add("1,2")).toBe(1+2);
    })
})