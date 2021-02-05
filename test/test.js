const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
// Cool import - destructuring
const { rome, age, isCool, object, add, array, multiply } = require('../index');

// describe what the test is

// How do I know what to test?
// What to look for when testing?

// What should I be looking for when testing
// 1 - test the datatype
// 2 - test the equality (what is it equal to)
// 3 - probably test length (needs to make sense to test)
// 4 - testing an object (testing property - key/value)


describe('Rome', function() {
    it('should return a string as a type', function() {
        // typeOf will let me know what datatype I'm testing
        assert.typeOf(rome, 'string'); 
    })

    it('should return Rome as a result', function() {
        // check to what rome is equal to
        // assert.equal(rome, 'Rome');
        expect(rome).to.equal('Rome');
    })

    it('should have length of 4', function() {
        // check the length
        assert.lengthOf(rome, 4);
    })
})

describe('Age', function() {
    it('should be a number', function() {
        assert.typeOf(age, 'number');
    });

    it('should return 33 as a result', function() {
        assert.equal(age, 33);
    })
})

describe('isCool', function() {
    it('should be a boolean', function() {
        assert.typeOf(isCool, 'boolean');
    });

    it('should return true because it is true', function() {
        assert.equal(isCool, true);
    });
})

describe('Object', function() {
    it('should be a object', function() {
        assert.typeOf(object, 'object');
    });

    it('should equal SEI-111', function() {
        assert.equal(object.class, 'SEI-111');
    });
})

describe('add Function', function() {
    // When I have a function, what should I test?
    // 1. Make sure it is a function
    // 2. Make sure that it gives the right output
    // 3. Whatever the output is, it is the right datatype?

    it('should be a function', function(){
        expect(add).to.be.a('function');
    })

    it('should return 4', function() {
        let myFavoriteNumber = add(1, 8);
        expect(add(2,2)).to.equal(4);
        expect(myFavoriteNumber).to.equal(9);
    })

    it('should have number type as output', function() {
        expect(add(2,2)).to.be.a('number');
    })
})

describe('Array', function() {
    it('should be an array', function() {
        expect(array).to.be.a('array');
    })

    it('should have 4 different datatypes', function() {
        // set up a variable that will give me back a result
        let result = 0;
        // iterate through the array and check each datatype
        for (let i = 0; i < array.length; i++) {
            let ele = array[i];
            
            if (typeof ele === 'boolean') {
                result += 1;
            } else if (typeof ele === 'string') {
                result += 1;
            } else if (typeof ele === 'number') {
                result += 1;
            } else if (typeof ele === 'object') {
                result += 1;
            }
        }
        // do my official check
        expect(result).to.equal(4);
    })
})

// Start TDD (Test Driven Development)

// Write a function multiply return a number that's multiplied
// 1. Write the test
// 2. Go to the file where we want the actual code
// 3. IMPORTANT: Write the code in a way that passes the test
// 4. Export that function
// 5. Import that function into my test module (file)
// 6. Run the TEST (mocha) (npm run test)

describe('Multiply function', function() {
    it('should be a function', function() {
        assert.typeOf(multiply, 'function')
    })

    it('should return 9', function() {
        expect(multiply(3,3)).to.equal(9);
        assert.equal(multiply(-1, 3), -3);
    })

    it('should have output with a datatype of number', function() {
        expect(multiply(2,3)).to.be.a('number');
    })
})