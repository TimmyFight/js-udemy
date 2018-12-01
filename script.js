//Zmienne

var x = 5;
var y;
var imie = "Adrian";
var a = 1, b = 2, c = 3;

y = 10;

alert("test " + imie + " Masz " + (x+y));

if(a<b) {
    alert("a jest mniejsze od b");
} else if (a>b) {
    alert("a jest większe od b");
} else {
    alert("a nie jest ani większe ani mniejsze od b");
}

(x%2==0) ? alert("Zmeinna X= " + x + "jet parzyta") :  alert("Zmeinna X= " + x + " jet nie parzyta");

var dzienTygodnia = 6;
switch (dzienTygodnia)
{
    case 1: 
    alert("Dzisiaj jest poniedziałek");
    break;

    case 2: 
    alert("Dzisiaj jest wtorek");
    break;

    case 6:
    case 7:
    alert("Weekend!!!!");
    break

    default: 
    alert("Nie ma takiego dnia tygodnia");

}

function test(x, y) {

    if (y===0) {
        alert("Nie dziel przez 0");
        return;
    }
    return x/y;
}

var wynikFunkcji = test(2,0);
alert("Wynik działania Funkcji TEST to: " + wynikFunkcji);


var zmiennaFunkcji = function() {
   
}

zmiennaFunkcji();