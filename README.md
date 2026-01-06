Diese Landingpage zeigt ein iPhone-Produkt mit einem großen Hauptbild und mehreren kleinen Vorschaubildern (Icons). Beim Anklicken eines Icons wird das große Produktbild dynamisch ausgetauscht.

Das Projekt dient zum Üben von:

HTML-Struktur

CSS (Flexbox, Hover-Effekte, Transition)

JavaScript DOM-Manipulation

<img width="208" height="262" alt="image" src="https://github.com/user-attachments/assets/5f61223f-895b-4f19-9762-5ed22fdd551e" />

Erklärung:

Das große Bild wird einmal mit querySelector ausgewählt

Beim Klick auf ein kleines Bild (onclick) wird dessen src übergeben

Das große Bild erhält den neuen src

🎨 CSS-Highlights

Flexbox für Text-Bild-Anordnung

Hover-Effekt mit transform: scale()

Smooth Animation mit transition

Beispiel:

.icons img {
  transition: transform 0.3s ease, opacity 0.3s ease;
}


.icons img:hover {
  transform: scale(1.5);
  cursor: pointer;
}
🚀 Starten des Projekts

Projektordner öffnen

index.html im Browser öffnen

oder (empfohlen):

Mit Live Server in VS Code starten

🎯 Lernziel

Dieses Projekt hilft beim Verständnis von:

DOM-Zugriff (querySelector)

Events (onclick)

Zusammenspiel von HTML, CSS und JavaScript
