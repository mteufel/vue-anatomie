# vue-anatomie

Quelltext zum Artikel:  
**Advanced Vue, Teil 3: "Anatomie einer Vue-Komponente hin zu Render-Functions"**  
Entwickler Magazin  

#### Einfache Beispiele ohne Vue CLI oder Vite:  

**Listing 1-5:**  
In das jeweilige Unterverzeichnis wechseln und einen Dev-Server z.B. [Servor](https://github.com/lukejacksonn/servor "Bitte hier klicken um auf die Github-Seite von Servor zu gelangen") starten.  
Beispiel:
  
    cd listing-1
    npx servor --browse --reload

#### Beispiele mit Vite:

Bei folgenden Beispielen ist der Dev-Server Servor nicht erforderlich. Sie beziehen sich im Artikel auf folgende Abschnitte:

* SFCs und JSX nicht ohne vorheriges Kompilieren!
* JSX 

**vite-esm-sfc:**

Hierbei handelt es sich um ein Beispielprojekt, das mit [Vite](https://github.com/vitejs/vite "Bitte hier klicken um auf die Github-Seite von Vite zu gelangen") aufgesetzt wurde.
Das Counter-Beispiel wurde hier ESM und Single File Components (SFCs) umgesetzt. 

    cd vite-esm-sfc
    npm install
    npm run dev
    

**vite-esm-jsx:**

Hierbei handelt es sich um ein Beispielprojekt, das mit [Vite](https://github.com/vitejs/vite "Bitte hier klicken um auf die Github-Seite von Vite zu gelangen") aufgesetzt wurde.
Das Counter-Beispiel wurde hier mit ESM und JSX umgesetzt. 

    cd vite-esm-sfc
    npm install
    npm run dev
