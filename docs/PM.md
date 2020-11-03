# Post Mortem

# Solo Adventure

# 1.1 Inledning
Arbetets syfte och mål var att skapa ett solo äventyr utifrån en saga. Solo äventyret ska gå att spela i webbläsaren. Solo äventyret skulle innehålla backend med node, express och mysql och frontend skulle innehålla views designat från mig utifrån målgruppen som var barn. 

Mitt arbetssätt och genomförande var så att jag började med att lägga till sagans textinnehåll i draw.io. Sedan så skapade jag en mysql databas med en story och en links tabell. Sedan så lade jag till rows i story och links med innehållet och sedan så fixade jag så node backend så att det fungerar med mysql. När allt backend fungerade så snyggade jag till viewsen med färger och tema utifrån målgruppen som var barn. Min ide var att skapa ett solo äventyr där man kan välja olika alternativ och beroende på det alternativet man väljer så kan man komma till en ny del i sagan och det är det som jag gjort. Jag hade ingen större inspiration förutom min egen. 

# 1.2 Bakgrund
Jag har skrivit koden i Visual Studio Code eftersom jag tycker den är bra. Jag har använt en Mysql databas där jag sparat sagans innehåll och länkar. Jag har använt Node som server och Express som är ett Node framework för fler funktioner. Jag har också använt Pug som views engine alltså istället för HTML. Jag har använt sass, css och bootstrap för designen eftersom jag tyckte det passade. Exempelvis så valde jag att använda Bootstrap också eftersom det underlättar designarbetet och blir snyggt och resposivt, men jag använde också egen css. Jag har sparat viktiga variabler med Dotenv npm framework i en hidden config.env fil och git ignorat den så att andra inte ska se den. Jag har också använt Morgan för loggning i terminalen av GET, POST med status requests som underlättar utvecklingsarbetet. Jag har också använt Sassmiddleware för omvandling av sass till css. Jag har också använt WSL som linux terminal samt GIT för att ha filerna sparade i ett Github repository.

Mitt planeringsarbete var så att jag började med att fundera vad det är jag ska utveckla, sedan valde jag sagan Rödluvan och skrev in dess olika delar i draw.io samt alternativen som jag hittade på. Jag ändrade också en del på sagan eftersom man fick det. Jag skissade en enkel skiss på papper om hur jag tänkte att sidan skulle se ut. Jag tänkte utifrån att målgruppen var barn och jag valde en Font, vilka färger, mm. Sedan så började jag lägga in sagans delar och länkar med alternativ i Mysql databasen. Sedan så importerade jag databasen och började få det att fungera med Node routes och views. Allt detta var kanske inte exakt denna ordningen, men ungefär. Det mesta av planeringsarbetet gjorde jag före jag kodade, men en del gjorde jag samtidigt och sedan så har jag under tidens gång ändrat en del av min ursprungliga ide. 

# 1.2.1 Planering
Spelet behöver innehålla en saga om Rödluvan. Spelaren är Rödluvan. Spelaren kan välja vad Rödluvan ska svara eller göra. Alla links samt storyn måste finnas i databasen i två olika tabeller. Sedan så måste det finnas en route för storyn som ansluter till databasen och hämtar storyn och links utifrån req.params.id och anslutningen till mysql görs via modellen db. Det måste fungera så att man kan välja alternativ så kommer man till en ny (oftast) annorlunda fortsättningen på sagan beroende på vilket alternativ spelaren väljer. Målgruppen för detta spel är barn och därför väljer jag att barnvänliga bilder, typsnitt och färger.
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

# 1.2.2 Dokumentation
Skiss, drawio, db dump och Post mortem finns i docs mappen. Planeringen finns här över där det står lite om vilka färger, typsnitt mm jag använde. Jag har ändrat en del i planeringen under arbetets gång.

# 1.2.3 Validering
Jag har validerat css med https://jigsaw.w3.org/css-validator/ och den visade inga fel. Jag visade page source på mitt solo adventure, kopierade html in i https://validator.w3.org/ och den visade en varning, 5 errors. Error 1: Element title must not be empty. Fixat. Error 2-5: Element div not allowed as child of element h3 in this context. Fixat. Validerat både css och html.

# 1.2.4 Tester
Jag har testat att klona mitt repo samt testat köra npm install, redigera config.env, importera databasen och sedan starta servern. Allt fungerar. Jag har skapat en config.env-example också som underlättar för andra som klonar mitt projekt från git.


# 1.3 Positiva erfarenheter
Jag tyckte allt med detta arbete gick bra. Jag hade inga problem med att få till varken backend eller frontend delarna av sidan. Allt med Node och Mysql gick bra, även om att få alla länkar att gå till rätt saga tog lite tid, men inget märkvärdigt.

# 1.4 Negative erfarenheter
Jag kommer inte på någon negativ erfarenhet med detta arbete. Jag tyckte arbetet överlag gick bra.

# 1.5 Sammanfattning
Jag tyckte allt med detta arbete gick bra. Jag hade inga problem med att få till varken backend eller frontend delarna av sidan. Spelet fungerar som det var tänkt, men det jag skulle kunna göra bättre är att lägga till mer av sagan till databasen/spelet så att äventyret blir längre, samt så skulle jag kunna lägga till strid i spelet. Anledningen till att jag inte lade till strid i spelet var att spelet skulle vara barnanpassat samt att det skulle ta längre tid som jag inte hade. Jag hade också kunnat lagt mer tid på designen av sidan, att få den att se ännu snyggare ut. Om jag hade haft mycket mer tid så hade jag lagt mer tid på designen samt mer saga och även strid. Jag känner inte att det är något jag måste lära mig mer om, men jag skulle gärna göra fler sådana här enskilda projekt men gärna större där man får göra olika typer av hemsidor och fokusera både på backend och frontend. Men för mig spelar det ingen stor roll vad det är för hemsida. Jag skulle gärna fokusera mer på en hemsida under en längre tid så att man hinner göra den mer avancerad.