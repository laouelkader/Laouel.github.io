# Portfolio — Laouel Mahaman Laouel Kader

Site statique (HTML / CSS / JS, sans dépendance) prêt pour **GitHub Pages**.

```
index.html      → contenu du site
style.css       → mise en forme (thème sombre, clair automatique selon le système)
script.js       → menu mobile, terminal animé, apparition au scroll
assets/         → photo, favicon, CV en PDF
```

## Mettre en ligne sur GitHub Pages

1. Crée un compte sur https://github.com si ce n'est pas fait.
2. Crée un nouveau dépôt **public** nommé exactement `TON-PSEUDO.github.io`
   (remplace `TON-PSEUDO` par ton nom d'utilisateur GitHub).
3. Dans le dépôt : **Add file → Upload files**, glisse **tout le contenu** du dossier
   (`index.html`, `style.css`, `script.js`, `README.md` et le dossier `assets`), puis **Commit changes**.
4. Va dans **Settings → Pages** : Source = *Deploy from a branch*, Branch = `main`, dossier `/ (root)`, **Save**.
5. Après 1 à 2 minutes, ton site est en ligne sur `https://TON-PSEUDO.github.io`.

Ou en ligne de commande :

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/TON-PSEUDO.github.io.git
git push -u origin main
```

## Personnaliser

- **Liens GitHub des projets** : dans `index.html`, section `PROJETS`, décommente les lignes
  `<a class="p-link" ...>` et mets l'URL de tes dépôts.
- **Lien GitHub dans Contact** : décommente la carte GitHub en bas de `index.html`.
- **Changer le CV** : remplace `assets/CV_Laouel_Mahaman_Laouel_Kader.pdf` (garde le même nom).
- **Couleur principale** : variable `--accent` en haut de `style.css`.
