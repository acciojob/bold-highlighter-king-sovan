function highlight() {
    //Write your code here
	const boldWords = document.querySelectorAll('strong');

	boldWords.forEach(function(word) {
		word.style.color ='green';
	})
}


function return_normal() {
    //Write your code here
	const boldWords = document.querySelectorAll('strong');

	boldWords.forEach(function(word) {
		word.style.color = 'black';
	})
}
