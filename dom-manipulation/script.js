document.addEventListener('DOMContentLoaded',function(){
    const quotes = [
        "The only way to do great work is to love what you do. - Encouragemnt",
        "Life is what happens when you're busy making other plans. - Lesson",
        "Get busy living or get busy dying. - Lesson",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - happines",
        "Believe you can and you're halfway there. - Encouragment"
    ];
    
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
    
        const quoteElement = document.createElement('div');
        quoteElement.innerHTML = randomQuote;
        document.getElementById('quoteDisplay').appendChild(quoteElement);
    }
    function addQuote() {
    const createAddQuoteForm = document.createElement('form')
    const newQuoteText = document.createElement('label');
    newQuoteText.textContent = 'Enter a new quote';
    form.appendChild(newQuoteText)

    const input = document.createElement('input');
    input.type = 'text';
    input.name='newQuote'
    form.appendChild(input)

    const newCategory = document.createElement('label');
    newCategory.textContent = 'Enter quote category:';
    form.appendChild(newCategory)


    const categoryInput = document.createElement('input');
     categoryInput.type = 'text';
    categoryInput.name = 'quoteCategory';
    form.appendChild(categoryInput)
    
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Add Quote';
        form.appendChild(submitButton);

        
        const exportQuotesButton = document.createElement('button');
        exportQuotesButton.type= 'submit';
        exportQuotesButton.textContent='Download link'
        form.appendChild(exportQuotesButton)
        
        function exportQuotes(){
        const json= JSON.stringify(quotes,null, 2);
        const blob = newBlob([json],{ type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quotes.json';
        a.click();
        console.log(url)
        }
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const newQuote = input.value.trim();
            if (newQuote) {
                quotes.push(newQuote);
                addQuoteToDOM(newQuote);
                input.value = '';
            }
            localStorage.setItemItem("quotes",quotes)
            localStorage.getItem('quotes')
        });
        
        document.body.appendChild(form);
    }
    
    
    function addQuoteToDOM(quote) {
        const quoteElement = document.createElement('div');
        quoteElement.innerText =quote;
        document.getElementById('quoteDisplay').appendChild(quoteElement);  
        
    }

    function importFromJsonFile(event) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
          const importedQuotes = JSON.parse(event.target.result);
          quotes.push(...importedQuotes);
          saveQuotes();
          alert('Quotes imported successfully!');
        };
        fileReader.readAsText(event.target.files[0]);
        console.log(fileReader)
        console.log(importedQuotes)
      }
    
      function updateQuoteDisplay() {
        const quoteDisplay = document.getElementById('quoteDisplay');
        quoteDisplay.innerHTML = '';
      } 
    
    createAddForm();
    showRandomQuote();
    
    })




