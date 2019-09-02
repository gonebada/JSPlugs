'use strict';
	// Pierwszym krokiem jest znalezienie elementu <script> po id (w naszym wypadku "template-hello"). Od razu po znalezieniu tego elementu pobierzemy jego zawartość za pomocą właściwości innerHTML
	
	var templateHello = document.getElementById('template-hello');

	// Następnie opcjonalnie możemy wykonać poniższą linię kodu, która sprawi że nasz szablon będzie działał szybciej. Jest to przydatne, kiedy będziemy wielokrotnie wykorzystywać dany szablon. 
	
	Mustache.parse(templateHello);
	
	/* Powyższe kroki wykonujemy tylko raz i nie ma potrzeby ich powtarzania dla tej samej templatki (szablonu). 
	
	Aby skorzystać z szablonu potrzebujemy obiektu z danymi, które mają być wstawione do szablonu. W naszej templatce używamy "zmiennych" o nazwach firstname i lastname. Napisaliśmy "zmienne" w cudzysłowach, ponieważ po stronie JS będą to właściwości w obiekcie. 
	*/
	
	var dataHello = {firstname: 'John', lastname: 'Smith'};
	
	// Teraz jesteśmy gotowi do wygenerowania kodu HTML na podstawie szablonu oraz danych. 
	
	var generatedHello = Mustache.render(templateHello, dataHello);
	
	// Pozostaje nam dodać wygenerowany kod HTML na naszej stronie, na końcu diva z id="results".
	
	var results = document.getElementById('results');
	
	results.insertAdjacentHTML('beforeend', generatedHello);
	
	// Oczywiście, nasz szablon możemy wykorzystywać wielokrotnie!
	
	dataHello = {firstname: 'Maria', lastname: 'Jones'};
	generatedHello = Mustache.render(templateHello, dataHello);
	results.insertAdjacentHTML('beforeend', generatedHello);
	
	// Korzystamy tutaj ze zmiennych dataHello i generatedHello tylko dla zwiększenia czytelności kodu - kod zadziałalby tak samo, gdybyśmy umieścili wszystkie kroki w jednej linii:

	results.insertAdjacentHTML('beforeend', Mustache.render(templateHello, {firstname: 'Tom', lastname: 'Newman'}));

	/* ĆWICZENIE:
	1. Dodaj do szablonu pole o nazwie "prefix" tuź przed polem "firstname". 
	2. W powyższych przykładach dodaj prefiksy (np. "Mr" czy "Mrs") w obiektach z danymi przekazywanymi do szablonu. 
	
	Zwróć uwagę, że jeśli nie istnieje właściwość o takiej nazwie, szablon nie wstawia żadnej wartości. Dzięki temu nieznane pola nie wyświetlają błędu, lub np. słowa "undefined". 
	*/
