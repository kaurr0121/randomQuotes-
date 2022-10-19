/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
// Decaring empty quotes array
var quotes=[];

// declaring quotes objects with properties and value
var  quoteObj1 = {
    quote: 'By thought, the thing you want is brought to you; by action you receive it.',
    source:'Wallace D. Wattles',
    citation: 'The Science of getting rich ',
    year : '1910'    
};

var  quoteObj2 = {
    quote: 'There is nothing either good or bad, but thinking makes it so.',
    source:'William Shakespeare' 
};
var  quoteObj3 = {
    quote: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
    source:'Marcus Aurelius',
    citation: 'Meditations'    
};
var  quoteObj4 = {
    quote: 'The “Success-type” personality is composed of: S-ense of direction U-nderstanding' +
     'C-ourage C-harity E-steem S-elf-Confidence S-elf-Acceptance.',
    source:'Maxwell Maltz',
    year: 'Psycho-Cybernetics'    
};
var  quoteObj5 = {
    quote: 'Anyone who has never made a mistake has never tried anything new.',
    source:'Albert Einstein'
        
};


quotes.push(quoteObj1);
quotes.push(quoteObj2);
quotes.push(quoteObj3);
quotes.push(quoteObj4);
quotes.push(quoteObj5);


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {

    var randomNumberGenerator = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomNumberGenerator];
	
	return randomQuote;
}

// function randomStore(){ 

//     var localValue = getRandomQuote()
//     var status = false;
//     for(i=1;i<quotes.length; i++){
//     var aa = storeArray[i];
//         if(aa!=localValue){
//            // console.log(storeArray[i]+ localValue); 
//             if(i==quotes.length){
//                 status=true;        
//             }

//         }   
//         else
//         break;

//     }

//     if(status==true){

//         storeArray.push(localValue);    
//     }
//     if(storeArray.length!=quotes.length){
//         randomStore();
//     }   

//     return storeArray;
// }




/*** 
 * `printQuote` function
***/
function printQuote() {
     // 1. Create a variable that calls the getRandomQuote() function
	var quote = getRandomQuote();

     // 2. Create a variable that initiates your HTML string with
	var html = ""
	html += '<p class="quote">' + quote.quote + '</p>'
	html += '<p class="source">' + quote.source

    // 3. Use an if statement to check if the citation property exists
	if (quote.citation!= undefined) {
		html += '<span class="citation">' + quote.citation + '</span>'
	}

     // 4. Use an if statement to check of the year property exists

	if (quote.year!= undefined) {
		html += '<span class="year">' + quote.year + '</span>'
	}

     // 5. After the two if statements, concatenate the closing </p>  tag to the HTML string
	html += '</p>'

     // 6. set the innerHTML of the quote-box div to equal the complete HTML string}
	document.getElementById("quote-box").innerHTML=html;
}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);