# soloadventure
Baserat på sagan "Red Riding Hood".

# Planering
Spelet behöver innehålla en saga om Rödluvan. Spelaren är Rödluvan. Spelaren kan välja vad Rödluvan ska svara eller göra. Alla links samt storyn måste finnas i databasen i två olika kolumner. Sedan så måste det finnas en route för storyn som ansluter till databasen och hämtar storyn och links utifrån req.params.id och anslutningen till mysql görs via modellen db. Det måste fungera så att man kan välja alternativ så kommer man till en ny (oftast) annorlunda fortsättningen på sagan beroende på vilket alternativ spelaren väljer. Målgruppen för detta spel är barn och därför väljer jag att barnvänliga bilder, typsnitt och färger.
Jag tycker att vit/grå bakgrund passar bra och att navigationen ska ha mörk bakgrund och vit text. Jag tycker även att knapparna ska ha samma färgtema som navigationen alltså mörk bakgrund och vit text. Jag valde "Georgia, 'Times New Roman', Times, serif" som font eftersom jag tyckte den jag tyckte den var lättläst och passade bra. Jag valde att använda både Bootstrap och CSS/sass för att slippa göra alla responsiva delarna och css delarna själv samt att jag tyckte det passade med både och.

Redan gjort backend
<br>
Gör färdigt frontend design (gjort)
<br />
<br>
Validera html, css (gjort)
<br />
<br>
Gör dokumentation (gjort)
<br/>
<br>
lägg till mer story om jag hinner (gjort)
</br>
<br>
Gör db dump igen om jag ändrat något (gjort)
</br>


# Dokumentation
Skiss, db dump finns i docs mappen. Planeringen finns över i denna readme där det står lite om vilka färger, typsnitt mm jag använde. Jag har ändrat en del i planeringen under arbetets gång.

# Validering
Jag har validerat css med https://jigsaw.w3.org/css-validator/ och den visade inga fel. Jag visade page source på mitt solo adventure, kopierade html in i https://validator.w3.org/ och den visade en varning, 5 errors. Error 1: Element title must not be empty. Fixat. Error 2-5: Element div not allowed as child of element h3 in this context. Fixat. Validerat både css och html.

# Tester
Jag har testat att klona mitt repo samt testat köra npm install, redigera config.env, importera databasen och sedan starta servern. Allt fungerar.

# Reflektion
Jag tyckte allt med detta arbete gick bra. Jag hade inga problem med att få till varken backend eller frontend delarna av sidan. Spelet fungerar som det var tänkt, men det jag skulle kunna göra bättre är att lägga till mer av sagan till databasen/spelet så att äventyret blir längre, samt så skulle jag kunna lägga till strid i spelet. Anledningen till att jag inte lade till strid i spelet var att spelet skulle vara barnanpassat samt att det skulle ta längre tid som jag inte hade. Jag hade också kunnat lagt mer tid på designen av sidan, att få den att se ännu snyggare ut. Om jag hade haft mycket mer tid så hade jag lagt mer tid på designen samt mer saga och även strid. Jag känner inte att det är något jag måste lära mig mer om, men jag skulle gärna göra fler sådana här enskilda projekt men gärna större där man får göra olika typer av hemsidor och fokusera både på backend och frontend. Men för mig spelar det ingen stor roll vad det är för hemsida. Jag skulle gärna fokusera mer på en hemsida under en längre tid så att man hinner göra den mer avancerad.
