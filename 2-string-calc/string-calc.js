StringCalculator = function() {
    this.Add = function(number){
        if (number == ""){
            return 0;
        }
        var numbers = number.split(",");
        var sum = 0;
        for(n of numbers) {
            sum += Number.parseInt(n);
        }
        return sum; 
    }
}