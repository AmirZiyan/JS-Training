var colors = {
  primary: "red",
  secondary: "blue",
  tertiary: "gold",
};

for (var name in colors) {
  console.log("Keys are -> "+name);
  
}


//Using an Array

var cars=['Toyota','Hyundai','Honda'];


for(var CarName in cars)
{
    console.log(CarName+"->"+cars[CarName]);
}