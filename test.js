
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
  
    let total = sum(14, 9);

    
    expect(total).toBe(23);

});


test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

   
    const expected = 3.5 * 1.07;

    
    expect(fromEuroToDollar(3.5)).toBe(3.75); 

test("One dollar should be yen", function () {
    const { fromDollarToYen } = require('./app.js');

 
    const yen = fromDollarToYen(1);

    const expected = 1 / 1.07;
    const expected2 = expected * 156.5;

    expect(fromDollarToYen(1)).toBe(146.26);

})

test("One yen should be Pound", function () {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(1);

    const expected = 1 / 1.07;
    const expected2 = expected * 156.5;

    expect(fromDollarToYen(1)).toBe(146.26);

})