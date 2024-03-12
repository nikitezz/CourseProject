 const studyButton = document.getElementById('studyButton');
        
 studyButton.addEventListener('click', function() {
   const radioButtons = document.querySelectorAll('input[type="radio"]');

   radioButtons.forEach(function(radioButton) {
     if (radioButton.checked) {
       const category = radioButton.nextElementSibling.textContent;
       
       switch (category) {
         case 'Птицы':
           window.location.href = 'https://example.com/ptitsy';
           break;
         case 'Рыбы':
           window.location.href = 'https://example.com/ryby';
           break;
         case 'Насекомые':
           window.location.href = 'https://example.com/nasekomye';
           break;
         case 'Земноводные':
           window.location.href = 'https://example.com/zemnovodnye';
           break;
         case 'Млекопитающие':
           window.location.href = 'https://example.com/mlekopitayushchie';
           break;
         default:
           break;
       }
     }
   });
 });