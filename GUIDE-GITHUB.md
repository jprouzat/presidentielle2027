# Mettre le site en ligne sur GitHub Pages

**Objectif :** ton site à l'adresse `https://TON-PSEUDO.github.io`, gratuitement, et une mise à jour quotidienne en trois clics.

Remplace partout `TON-PSEUDO` par ton nom d'utilisateur GitHub exact (celui qui apparaît en haut à droite quand tu es connecté). Les majuscules n'ont pas d'importance pour l'adresse, mais écris-le exactement comme GitHub l'affiche.

---

## Avant de commencer : trois choses à savoir

1. **Le dépôt doit être public.** Avec un compte GitHub gratuit, GitHub Pages ne fonctionne que sur un dépôt public. Concrètement : n'importe qui pourra lire le code de ton site. Ce n'est pas un problème ici — le site est fait pour être lu — mais ne mets jamais dans ce dossier un document que tu ne veux pas rendre public.
2. **La mise en ligne n'est pas instantanée.** Compte jusqu'à 10 minutes après ta première publication. Les suivantes sont beaucoup plus rapides, souvent moins d'une minute.
3. **Ton navigateur garde les pages en mémoire.** Après une mise à jour, si tu ne vois pas le changement, recharge en forçant : `Cmd + Maj + R` sur Mac.

---

## Étape 1 — Créer le dépôt sur GitHub

1. Va sur [github.com](https://github.com) et connecte-toi.
2. En haut à droite, clique sur le **+** puis sur **New repository**.
3. Dans **Repository name**, écris exactement : `TON-PSEUDO.github.io`
   *C'est le point clé. Ce nom précis est ce qui donne l'adresse courte. Une faute ici et le site ne s'affichera pas.*
4. Laisse **Public** coché.
5. Coche **Add a README file**.
6. Clique sur **Create repository**.

Ton dépôt est créé. Il contient un seul fichier, `README.md`.

---

## Étape 2 — Installer GitHub Desktop

C'est l'application qui va te permettre de publier sans jamais ouvrir le Terminal. C'est elle qui rend les mises à jour quotidiennes indolores.

1. Va sur [desktop.github.com](https://desktop.github.com) et télécharge la version macOS.
2. Ouvre le fichier téléchargé, glisse **GitHub Desktop** dans ton dossier **Applications**, puis lance-le.
3. Clique sur **Sign in to GitHub.com** et connecte-toi avec ton compte. Ton navigateur s'ouvrira pour confirmer, puis tu reviendras automatiquement dans l'application.
4. GitHub Desktop te demandera ton nom et ton e-mail : ce sont les informations qui signeront tes publications. Mets ce que tu veux, ça n'a aucune conséquence sur le site.

---

## Étape 3 — Récupérer le dépôt sur ton Mac

1. Dans GitHub Desktop, menu **File** → **Clone repository**.
2. Onglet **GitHub.com** : tu vois la liste de tes dépôts. Sélectionne `TON-PSEUDO.github.io`.
3. Dans **Local path**, choisis où tu veux que le dossier vive sur ton Mac. Je te conseille ton dossier `Documents/PERSONNEL/PRESIDENTIELLE 2027`, pour tout garder au même endroit.
4. Clique sur **Clone**.

Tu as maintenant sur ton Mac un dossier `TON-PSEUDO.github.io`. **Tout ce que tu mets dedans finira sur le site.**

---

## Étape 4 — Y déposer le site

Dans le dossier `site` que je t'ai livré, tu as :

```
index.html          ← la page elle-même : tout le texte est là
assets/styles.css   ← les couleurs et la mise en page
assets/script.js    ← la barre de lecture, les montants animés, le test des piliers
```

1. Ouvre le dossier `TON-PSEUDO.github.io` dans le Finder.
2. Copie dedans **`index.html`** et le dossier **`assets`** entier.
3. Reviens dans GitHub Desktop. Les trois fichiers apparaissent dans la colonne de gauche : c'est GitHub Desktop qui a détecté les nouveautés tout seul.
4. En bas à gauche, dans le champ **Summary**, écris une phrase courte qui dit ce que tu as fait. Par exemple : `Première mise en ligne du site`.
5. Clique sur **Commit to main**.
6. En haut, clique sur **Push origin**.

C'est publié. Les fichiers sont partis sur GitHub.

---

## Étape 5 — Activer GitHub Pages

1. Retourne sur [github.com](https://github.com), ouvre ton dépôt `TON-PSEUDO.github.io`.
2. Onglet **Settings** (la roue dentée, en haut à droite du dépôt).
3. Dans la colonne de gauche, section « Code and automation », clique sur **Pages**.
4. Sous **Build and deployment** → **Source**, choisis **Deploy from a branch**.
5. Sous **Branch**, sélectionne **main**, et à côté laisse **/ (root)**. Clique sur **Save**.

Une bannière apparaît en haut avec l'adresse de ton site. Attends jusqu'à 10 minutes, puis ouvre `https://TON-PSEUDO.github.io`.

> **Si la page reste blanche ou affiche une erreur 404 :** vérifie que le fichier s'appelle bien `index.html`, tout en minuscules, et qu'il se trouve à la racine du dépôt (pas dans un sous-dossier). C'est 90 % des cas.

---

## Étape 6 — La mise à jour quotidienne (c'est ici que ça devient simple)

Une fois tout en place, modifier le site prend trois clics :

1. Ouvre `index.html` sur ton Mac, modifie ton texte, enregistre.
2. Dans GitHub Desktop : écris une phrase dans **Summary** → **Commit to main** → **Push origin**.
3. Attends une minute, recharge ton site.

C'est tout. Pas de terminal, pas de commande à retenir.

### Avec quoi modifier les fichiers ?

Pas avec Word ni avec TextEdit en mode texte enrichi — ils abîmeraient le code. Utilise un vrai éditeur de texte, gratuit :

- **Visual Studio Code** — [code.visualstudio.com](https://code.visualstudio.com) — colore le code, signale les erreurs, et permet d'ouvrir le dossier entier d'un coup. C'est celui que je recommande.
- À défaut, **TextEdit** fonctionne si tu fais d'abord *Format → Convertir au format Texte*.

### Voir le résultat avant de publier

Double-clique simplement sur `index.html` dans le Finder : il s'ouvre dans ton navigateur et tu vois exactement ce que ça donnera. Rien n'est encore en ligne. Quand ça te plaît, tu publies.

---

## Ce que tu peux modifier sans rien casser

Dans **`index.html`**, tout le texte visible est entre des balises. Tu peux changer librement ce qui est **entre** `>` et `<` :

```html
<p>Un impôt juste n'est pas un impôt bas.</p>
     ↑ ça, tu peux le changer ↑
```

Ne touche pas aux balises elles-mêmes (`<p>`, `</p>`, `<div class="...">`). Si tu supprimes une balise fermante, la page se déforme.

J'ai mis des commentaires en français dans le fichier, qui repèrent chaque section :

```html
<!-- =============================================
     LES QUATRE PILIERS
     ============================================= -->
```

Ces lignes ne s'affichent pas sur le site : elles sont là pour toi.

**Deux endroits à penser à mettre à jour :**

- Les montants du SMIC, dans la section « Fiscalité ». Ils apparaissent **deux fois** : dans `data-count="1477.93"` (la valeur utilisée pour l'animation) et juste après, dans le texte. Change bien les deux.
- Dans l'en-tête du fichier, la ligne `og:url` : remplace `https://VOTRE-PSEUDO.github.io/` par ta vraie adresse. C'est ce qui sert quand quelqu'un partage le lien sur les réseaux.

---

## Si tu veux revenir en arrière

Tout est conservé. Sur GitHub, onglet **Commits** de ton dépôt : tu vois la liste de toutes tes publications, avec la date et ce qui a changé. Tu peux ouvrir n'importe laquelle et récupérer une version précédente d'un fichier. Rien n'est jamais perdu — c'est tout l'intérêt de passer par GitHub plutôt que d'écraser un fichier sur un serveur.

---

## Plus tard, si tu veux un vrai nom de domaine

`TON-PSEUDO.github.io` est gratuit et suffisant pour commencer. Le jour où tu voudras quelque chose comme `pouvoirdevivreensemble.fr`, il faudra :

1. acheter le nom de domaine chez un bureau d'enregistrement (environ 10 à 15 € par an) ;
2. ajouter un fichier `CNAME` dans le dépôt ;
3. régler deux lignes chez le vendeur du domaine.

Ça se fait en vingt minutes et GitHub Pages continue d'héberger gratuitement. Dis-le-moi à ce moment-là et je te guide.

---

## Sources

- Procédure officielle GitHub Pages : [docs.github.com/fr/pages/quickstart](https://docs.github.com/fr/pages/quickstart)
- Installation de GitHub Desktop : [docs.github.com/desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)
