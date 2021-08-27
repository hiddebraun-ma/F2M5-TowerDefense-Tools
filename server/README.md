# NodeJS server voor Tower Defense JSON opslaan en laden

Dit is afgeleid van:
https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files

---

Maak eerst een lege package.json:  
```bash
npm init -y
```

Vul de author en description velden in met jouw gegevens.

---

Installeer de benodigde node packages (webserver)  
```bash
npm install express cors body-parser
```

Installeer de de `nodemon` utility (herstart de server bij wijzigingen aan onze code)

```bash
npm install nodemon --save-dev
```

Maak een nieuw bestand `server.js` in de root van je project folder. 

---

Pas package.json aan zodat dit het main script is:  

```json
"main": "index.js"
```

Voeg een `start` script toe aan package.json:  

```json
"scripts": {
    "start": "nodemon server.js"
}
```

---

Maak 2 directories

- data  
*om JSON straks in op te slaan*  

- routes  
*om onze beschikbare URL's / routes in te stellen en te coderen*

Maak in de directory `routes` een `routes.js` bestand.

---

Routes toevoegen die requests afhandelen
