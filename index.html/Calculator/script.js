const buttons = document.querySelectorAll('button');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
let sayi1 = 0;
let sayi2;
let sonuc;
for(let i = 0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function () {
		 if(currentOperand.textContent == 0){
			currentOperand.innerHTML = "";
		}
		
		let value = buttons[i].textContent;
		let deger = buttons[i].textContent
		
		switch(deger){
			
			case 'AC':
				currentOperand.innerHTML = "0";
				break;
			case '+/-':
				break;
			case '%':
				break;
			case '÷':
					sayi1 = 1;
					sayi1 /= Number(currentOperand.textContent);
					ekle(deger);
				break;
			case '*':
					sayi1 = 1;
					sayi1 += Number(currentOperand.textContent);	
					ekle(deger);
				break;
			case '-':
					sayi1 -= Number(currentOperand.textContent);	
					ekle(deger);
				break;
			case '+':
					sayi1 += Number(currentOperand.textContent);	
					ekle(deger);
								
				break;
			case '=':
					
					currentOperand.innerHTML = sayi1;
									
				break;
			default:
				 	currentOperand.innerHTML += value;
			
		}		
	});
}
function ekle(i){	
		previousOperand.innerHTML  += currentOperand.textContent + i;
		currentOperand.innerHTML = 0;
}



