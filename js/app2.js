/**
 * Created by rtur on 10.09.2016.
 */
var names = [];
var userName;

for (var i=0; i<5; i++) {
	names[i] = prompt("Введите имя " + (i+1) + " для заполнения массива");
}

userName = prompt("Введите ваше имя:");
var autorized='not';

for (var v=0; v<names.length; v++) {
	if (userName==names[v]) {
		autorized=userName
	}
}

if (autorized=='not') {
	alert("error")
}

else {
	alert(autorized + " Вы успешно вошли")
}