const tab = ["Tim Berners Lee","Ada Lovelace","Gérard Berry"];
for (let valeur of tab) console.log("Nom: " + valeur);
tab.push("Linus Torvalds");
tab.shift();
for (let valeur of tab) console.log("Nom : " + valeur);