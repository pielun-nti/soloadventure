# soloadventure
Baserat på sagan "Red Riding Hood".

# Planering
Spelet behöver innehålla en saga om Rödluvan. Spelaren är Rödluvan. Spelaren kan välja vad Rödluvan ska svara eller göra. Alla links samt storyn måste finnas i databasen i två olika kolumner. Sedan så måste det finnas en route för storyn som ansluter till databasen och hämtar storyn och links utifrån req.params.id och anslutningen till mysql görs via modellen db. Det måste fungera så att man kan välja alternativ så kommer man till en ny (oftast) annorlunda fortsättningen på sagan beroende på vilket alternativ spelaren väljer. Målgruppen för detta spel är barn och därför väljer jag att barnvänliga bilder, typsnitt och färger.
Jag tyckte att vit/grå bakgrund passade bra och att navigationen skulle ha mörk bakgrund och vit text. Jag tyckte även att knapparna skulle ha samma färgtema som navigationen alltså mörk bakgrund och vit text. Jag valde "Georgia, 'Times New Roman', Times, serif" som font eftersom jag tyckte den jag tyckte den var lättläst och passade bra.

<br>
Redan gjort backend
<br />
<br>
Gör färdigt frontend design, lägg till mer story om jag hinner
<br />
<br>
Validera html, css (gjort)
<br />
<br>
Gör dokumentation
<br/>
<br>
Gör db dump igen om jag ändrat något

# Dokumentation

# validering
Jag har validerat css med https://jigsaw.w3.org/css-validator/ och den visade inga fel. Jag visade page source på mitt solo adventure, kopierade html in i https://validator.w3.org/ och den visade en varning, 5 errors. Error 1: Element title must not be empty. Fixat. Error 2-5: Element div not allowed as child of element h3 in this context. Fixat. Validerat både css och html.

# tester

