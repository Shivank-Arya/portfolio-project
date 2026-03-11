        let a = 10
        // const a = 10
        var b = 10
        console.log(b)
        var b = 20
        console.log(b)
        
        console.log(10)
        console.log(a); console.log('a');
        // when multiple expressions are on the same line, then use semicolon to end the expression

        console.log("hello JS")
        a = 20
        console.log(a);
        
        const c = 10
        // c = 20 gives error

        let str = "hello"

        let obj = {
            name : "Shivank",
            age : 27,
            passed : true,
        }

        console.log(obj.name)
        obj.name = "shreyansh"
        console.log(obj)
        console.log(obj.age)
        console.log(obj.name)
        console.log(obj.passed)

        console.log(str)
        console.log(str[0])
        str[0] = "B" // not allowed as string is immutable primitive datatypes, but 
        str = "Belio" // we can change the entire string
        console.log(str[0])

        console.log(str[1])
        console.log(str[2])
        console.log(str[3])
        console.log(str[4])