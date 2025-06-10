var name = prompt("Please, Enter your name");
var partnerName = prompt("Please, Enter your partners name");
var firstname = name.slice(0, 1).toUpperCase();
var pName = partnerName.slice(0, 1).toUpperCase();
var lastName = name.slice(1, name.length).toLowerCase();
var pLname = partnerName.slice(1, partnerName.length).toLowerCase();
var Yname = firstname + lastName;
var yPname = pName + pLname;
partnerName.slice(0, 1);
var l = Math.random();
// console.log(l);
var number = l * 100 + 1;
// console.log(number);
var wholeNumber = Math.round(number);
// console.log(wholeNumber);

if (wholeNumber > 70) {
  alert(
    Yname +
      " Loves " +
      yPname +
      " " +
      wholeNumber +
      "% Like Shajahan loves Mumthaz ."
  );
} else {
  alert(Yname + " Loves " + yPname + " " + wholeNumber + " % .");
}
