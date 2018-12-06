var div = document.getElementById("test");

function osoba(imie, nazwisko, age) {
    this.name = imie;
    this.surname = nazwisko;
    this.age = age;
    this.toString = function() {
        return this.name + " " + this.surname + " ma " + this.age + " lat";
    };
}

var x = new osoba("Jan", "Kowalski", 16);
var y = new osoba("Adrian", "Toja", 20);
var z = new osoba("Marta", "Serek", 4);

x.specifiedValue = 12

div.innerHTML = x + " " + x.specifiedValue + "<br>" + y + "<br>" + z;

//------------------------

var ul = document.getElementById("kursyWWW");
var kursyWWW = ul.getElementsByTagName("li");

kursyWWW[kursyWWW.length] = "SAS";

var rezultat = document.getElementById("rezultat");

var tmp = ["MySQL", "Ajax"];

rezultat.innerHTML = kursyWWW.push("nowy");
rezultat.innerHTML += "<br>---------------<br>";
rezultat.innerHTML += kursyWWW.valueOf();

function newFunction() {
    kursyWWW.push("nowy");
}

