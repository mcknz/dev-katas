FizzBuzzer= function(){
    this.getValue = function(value){
        var results = ""
        if(value % 3 === 0) {
            results += "Fizz";
        } if (value % 5 === 0 ) {
            results += "Buzz";
        }
        return results;
    }
}