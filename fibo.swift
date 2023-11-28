// Nevermind this file, this is me being an unintelligent idiot.

func fibo(_ iterations: Int) {
    var a:Int = 0
    var b:Int = 1
    var c:Int
    for _ in 1...iterations {
        c = a + b
        print(c)
        a = b
        b = c
    }
}

fibo(91)