// Display in console
console.log("Dianka")

// Variables in ES5
// es5 returns bool
function es5() {
  console.log("Function es5()")

  console.log(variable)

  var variable = "Test"

  console.log(variable, "2")

  // undefined = zmienna nie ma przypisanej wartości
  // null = zmienna typu null (wskazuje na null)
  // 0 lub '' lub false

  for (var i = 0; i < 10; i++) {
    var counter = (counter || 0) + i
  }

  console.log(counter)
}

function es6() {
  let dianka1 = "test"
  const kubus2 = "test"

  dianka1 = "kocham Diane"
  // kubus2 = "kocham Adriana"

  let testBezWartosci
  // const testBezWartsoci2;

  // console.log(variable)

  // const variable = "test"

  for (let i = 0; i < 10; i++) {
    const counter = i
  }
  // console.log(counter)

  // let i const - zasięg blokowy
  // var - zasięg globalny
}

function types() {
  let dianka
  console.log(dianka, typeof dianka)
  dianka = "test"
  console.log(dianka, typeof dianka)
  dianka = 3
  console.log(dianka, typeof dianka)
  dianka = { x: "abc" }
  console.log(dianka, typeof dianka)

  let obiekt = { a: "abc" }
  let numer = 3
  let string = "3"

  console.log(obiekt + numer)
  console.log(string + numer)
  console.log(numer + string)
  console.log(numer + numer)
  console.log(string + string)
  console.log(string + obiekt)
}

// es5()
// es6()
types()
