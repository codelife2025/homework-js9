const userInput = prompt('ჩაწერეთ რიცხვი');

    
 function test() {
    
      if (Number.isNaN(userInput)) {
    alert('გთხოვთ შეიყვანოთ სწორი რიცხვი');
    return;
  }

   if (userInput % 2) {
    alert('რიცხვი კენტია');  
     return
   }
    alert('რიცხვი ლუწია');
 }

test();