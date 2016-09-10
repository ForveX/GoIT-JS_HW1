/**
 * Created by rtur on 10.09.2016.
 */
var a=prompt("Введите число для возведения в степень:")
var b=prompt("укажите степень для возведения:")



	var result = a;

	for (var i=1; i<b; i++) {
		result=result*a;
	}

	alert(result);
