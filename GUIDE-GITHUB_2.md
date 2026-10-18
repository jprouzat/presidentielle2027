# Mettre le site en ligne et le tenir à jour — 100 % dans le navigateur

**Objectif :** ton site à l'adresse `https://TON-PSEUDO.github.io`, gratuitement, et une mise à jour quotidienne sans rien installer sur ton MacBook Air.

Remplace partout `TON-PSEUDO` par ton nom d'utilisateur GitHub exact (celui affiché en haut à droite quand tu es connecté).

---

## L'outil qui change tout : github.dev

GitHub met à disposition un éditeur de code complet **qui tourne dans ton navigateur** : c'est **github.dev**. Rien à télécharger, rien à installer, gratuit pour tous les comptes GitHub.

Tu l'ouvres en appuyant sur la touche **`.`** (le point) quand tu es sur la page de ton dépôt. C'est tout. L'écran se transforme en éditeur professionnel, avec l'arborescence de tes fichiers à gauche et le code coloré au centre.

> **Ne le confonds pas avec les « Codespaces »**, que GitHub propose aussi. Les Codespaces sont une machine virtuelle complète, avec un quota gratuit limité puis une facturation. github.dev est gratuit sans limite, et largement suffisant ici : ton site est du HTML statique, il n'a rien à « exécuter ».

---

## Avant de commencer : trois choses à savoir

1. **Le dépôt doit être public.** Avec un compte GitHub gratuit, Pages ne fonctionne que sur un dépôt public. N'importe qui pourra lire le code de ton site. Ce n'est pas un problème — le site est fait pour être lu — mais ne range jamais dans ce dossier un document que tu ne veux pas rendre public.
2. **La première mise en ligne prend jusqu'à 10 minutes.** Les suivantes sont bien plus rapides, souvent moins d'une minute.
3. **Ton navigateur garde les pages en mémoire.** Si tu ne vois pas ton changement, recharge en forçant : `Cmd + Maj + R`.

---

## Étape 1 — Créer le dépôt

1. Va sur [github.com](https://github.com), connecte-toi.
2. En haut à droite, clique sur le **+** puis sur **New repository**.
3. Dans **Repository name**, écris exactement : `TON-PSEUDO.github.io`
   *C'est le point crucial. Ce nom précis est ce qui donne l'adresse courte. Une faute ici et le site ne s'affichera pas.*
4. Laisse **Public** coché.
5. Coche **Add a README file**.
6. Clique sur **Create repository**.

---

## Étape 2 — Déposer les fichiers du site

Les fichiers sont dans ton dossier `PERSONNEL / PRESIDENTIELLE 2027 / site`. Tu vas simplement les faire glisser dans le navigateur.

1. Sur la page de ton dépôt, clique sur **Add file** → **Upload files**.
2. Ouvre le Finder à côté, et **glisse dans la zone de dépôt** :
   - le fichier **`index.html`**
   - le dossier **`assets`** entier (glisse le dossier, pas son contenu : GitHub recrée l'arborescence tout seul)
3. En bas, dans le champ de description, écris une phrase courte : `Première mise en ligne du site`.
4. Clique sur **Commit changes**.

Tes fichiers sont sur GitHub.

> **Variante sans aucun fichier local :** si tu préfères ne rien avoir sur ton Mac, tu peux créer chaque fichier directement en ligne — **Add file** → **Create new file**, taper le nom (`index.html`, puis `assets/styles.css` : en tapant la barre oblique, GitHub crée le dossier automatiquement), coller le contenu, valider. C'est plus fastidieux pour les gros fichiers, d'où ma préférence pour le glisser-déposer.

---

## Étape 3 — Activer GitHub Pages

1. Dans ton dépôt, onglet **Settings** (la roue dentée en haut).
2. Colonne de gauche, section « Code and automation » → **Pages**.
3. Sous **Build and deployment** → **Source** : choisis **Deploy from a branch**.
4. Sous **Branch** : sélectionne **main**, laisse **/ (root)** à côté, clique **Save**.

Une bannière affiche l'adresse de ton site. Attends jusqu'à 10 minutes, puis ouvre `https://TON-PSEUDO.github.io`.

> **Page blanche ou erreur 404 ?** Vérifie que le fichier s'appelle bien `index.html`, tout en minuscules, et qu'il est à la racine du dépôt — pas dans un sous-dossier. C'est la cause dans neuf cas sur dix.

---

## Étape 4 — La mise à jour quotidienne

C'est ici que github.dev prend tout son sens. La boucle complète, sans jamais quitter le navigateur :

1. Va sur la page de ton dépôt sur github.com.
2. **Appuie sur la touche `.`** — l'éditeur s'ouvre.
3. Dans la colonne de gauche, clique sur **`index.html`**. Le fichier s'ouvre au centre.
4. Modifie ton texte. L'éditeur enregistre au fil de l'eau dans ton navigateur ; rien n'est encore publié.
5. Dans la barre d'icônes tout à gauche, clique sur **Source Control** (l'icône en forme de petit embranchement). Tu vois la liste de ce que tu as modifié.
6. Passe la souris sur le nom du fichier, clique sur le **+** pour le préparer.
7. Écris une phrase courte dans le champ du haut : par exemple `Mise à jour du chiffre du SMIC`.
8. Clique sur **Commit & Push** (ou la coche en haut).

Une minute plus tard, ton site est à jour. Pas de terminal, pas d'installation, pas de fichier à gérer.

> **Un point de vigilance propre à github.dev :** tant que tu n'as pas fait « Commit & Push », ton travail n'existe que dans la mémoire de ton navigateur. Si tu vides ton cache ou que tu changes d'ordinateur, il est perdu. **Prends l'habitude de valider souvent**, même pour une petite modification — c'est gratuit et illimité.

### Voir le résultat avant de publier pour de bon

github.dev n'affiche pas le rendu de la page : il montre le code, pas le résultat. Deux façons de contourner ça :

- **Le plus simple :** publie, attends une minute, regarde le site. Si quelque chose ne va pas, tu corriges et tu republies. C'est sans risque — tout est réversible (voir plus bas).
- **Pour les changements risqués :** crée dans ton dépôt un fichier `brouillon.html`, copie-y le contenu d'`index.html`, et fais-y tes essais. Il sera visible à l'adresse `https://TON-PSEUDO.github.io/brouillon.html` sans toucher à la page d'accueil. Quand tu es satisfait, tu reportes dans `index.html`.

---

## Ce que tu peux modifier sans rien casser

Dans **`index.html`**, tout le texte visible est entre des balises. Tu peux changer librement ce qui se trouve **entre** `>` et `<` :

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

Ces lignes ne s'affichent pas sur le site : elles sont là pour toi. Dans github.dev, le raccourci `Cmd + F` cherche dans le fichier ouvert — pratique pour retrouver une phrase précise.

**Les trois fichiers et leur rôle :**

| Fichier | Ce qu'il contient | À quelle fréquence tu y touches |
|---|---|---|
| `index.html` | Tout le texte du site | Souvent |
| `assets/styles.css` | Les couleurs et la mise en page | Rarement — les couleurs sont regroupées en haut du fichier |
| `assets/script.js` | La barre de lecture, les montants animés, le test des piliers | Quasiment jamais |

**Deux endroits à penser à mettre à jour :**

- Les montants du SMIC, dans la section « Fiscalité ». Ils apparaissent **deux fois** : dans `data-count="1477.93"` (la valeur de l'animation) et juste après dans le texte affiché. Change bien les deux.
- Dans l'en-tête du fichier, la ligne `og:url` : remplace `https://VOTRE-PSEUDO.github.io/` par ta vraie adresse. C'est ce qui s'affiche quand quelqu'un partage ton lien sur les réseaux sociaux.

---

## Si tu veux revenir en arrière

Rien n'est jamais perdu. Sur GitHub, onglet **Commits** de ton dépôt : tu vois toutes tes publications, datées, avec le détail de ce qui a changé à chaque fois. Tu peux ouvrir n'importe laquelle et récupérer une version précédente d'un fichier.

C'est précisément l'intérêt de passer par GitHub plutôt que d'écraser un fichier sur un serveur d'hébergement classique : chaque modification est tracée et réversible.

---

## Plus tard, si tu veux un vrai nom de domaine

`TON-PSEUDO.github.io` est gratuit et suffisant pour commencer. Le jour où tu voudras quelque chose comme `pouvoirdevivreensemble.fr` :

1. acheter le nom de domaine chez un bureau d'enregistrement (10 à 15 € par an) ;
2. ajouter un fichier `CNAME` dans le dépôt — ça se fait en ligne, en trois clics ;
3. régler deux lignes chez le vendeur du domaine.

GitHub Pages continue d'héberger gratuitement. Dis-le-moi à ce moment-là et je te guide.

---

## Sources

- Éditeur web github.dev : [docs.github.com — L'éditeur web github.dev](https://docs.github.com/fr/codespaces/the-githubdev-web-based-editor)
- Démarrage rapide GitHub Pages : [docs.github.com/fr/pages/quickstart](https://docs.github.com/fr/pages/quickstart)
- Ajouter un fichier à un dépôt : [docs.github.com — Adding a file to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
