// alert("f")

// CLOSURES BASIC 
function add() {
  let price = 3;

  function inc() {
    console.log("add -> price", price);
    return price++;
  }

  return inc;
}

let addddd = add();

console.log(addddd());
console.log(addddd());
console.log(addddd());
console.log(addddd());

// ERROR HANDLES
function greetWorld() {
  try {
    var greeting = "Hello world!";
    aler(greeting);
  } catch (err) {
    alert(err);
  }
}

greetWorld();

// CLOSURES
var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex == "string" &&
        (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

console.log(pet.setName("Oliver"));
console.log(pet.setSex("male"));
console.log(pet.getSex()); // male
console.log(pet.getName());
