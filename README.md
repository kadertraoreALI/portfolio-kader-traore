# Portfolio professionnel — Traoré Kader Ali

Site portfolio statique (HTML / CSS / JavaScript, sans framework ni dépendance de build) présentant le parcours,
les expériences, les projets, les travaux académiques et les compétences de Traoré Kader Ali — économiste de la
santé et chargé de projet territorial en santé publique.

## Arborescence du projet

```
portfolio-kader-traore/
├── index.html                 → page unique du site (toutes les sections, via ancres)
├── style.css                  → feuille de style (design, couleurs, responsive)
├── script.js                  → navigation, animations légères, formulaire de contact
├── README.md                  → ce fichier
├── documents/
│   ├── CV-Traore-Kader-Ali.pdf                                       → CV téléchargeable
│   ├── Rapport-Econometrie-Depenses-Catastrophiques-Sante-CIV.pdf     → travail académique 1 (téléchargeable)
│   ├── Determinants-mortalite-infantile-CIV-SEN.pdf                  → travail académique 2 (téléchargeable)
│   ├── Certificat-AFD-Suivi-Evaluation-Projet-Developpement-2025.pdf → certificat AFD (téléchargeable)
│   ├── Diplome-Licence-Sciences-Economiques-2022.pdf                 → diplôme (section Formation)
│   ├── Diplome-Maitrise-Sciences-Economiques-2023.pdf                → diplôme (section Formation)
│   └── Diplome-Master2-Economie-Sante-2024.pdf                       → diplôme (section Formation)
└── images/
    ├── favicon.svg                        → icône de l'onglet du navigateur
    ├── og-image.svg                       → aperçu pour les réseaux sociaux (Open Graph)
    ├── profil-kader-traore.jpeg           → photo professionnelle (section Accueil)
    ├── profil-placeholder.svg             → silhouette de secours (non utilisée par défaut)
    ├── projet-evaluation-cls.svg          → illustration Projet 1
    ├── projet-attractivite-medicale.svg   → illustration Projet 2
    ├── projet-cartographie-qgis.svg       → illustration Projet 3
    ├── projet-communication-sante.svg     → illustration Projet 4
    ├── travail-econometrie.svg            → illustration du travail académique 1
    └── travail-mortalite-infantile.svg    → illustration du travail académique 2
```

## Ouvrir le site en local

Aucune installation n'est nécessaire : le site est 100 % statique.

- **Option la plus simple** : double-cliquez sur `index.html`, il s'ouvrira dans votre navigateur par défaut.
- **Option recommandée** (pour éviter certaines limitations liées au protocole `file://`) : lancez un petit
  serveur local depuis le dossier du projet.

```bash
# Avec Python (si installé)
python -m http.server 5500
```

```bash
# Avec Node.js (si installé)
npx serve .
```

Puis ouvrez `http://localhost:5500` (ou l'adresse indiquée) dans votre navigateur.

## Remplacer la photo de profil

1. Préparez une photo professionnelle carrée (format `.jpg` ou `.png`, environ 800×800 px).
2. Placez-la dans le dossier `images/`, par exemple `images/profil-kader-traore.jpeg` (vous pouvez remplacer le
   fichier existant du même nom, ou en ajouter un nouveau).
3. Dans `index.html`, repérez la section `<!-- ============================== ACCUEIL ============================== -->`
   et modifiez l'attribut `src` de la balise `<img>` dans `.hero-photo` :

```html
<img src="images/votre-nouvelle-photo.jpg" alt="Photo professionnelle de Traoré Kader Ali" width="480" height="480">
```

## Ajouter ou remplacer mon CV

1. Placez votre fichier PDF à jour dans `documents/`, par exemple `documents/CV-Traore-Kader-Ali.pdf` (vous pouvez
   écraser le fichier existant en conservant le même nom, aucune autre modification n'est alors nécessaire).
2. Si vous changez le nom du fichier, mettez à jour les deux liens de téléchargement dans `index.html` :
   - dans la section **Accueil** (bouton « Télécharger mon CV »)
   - dans la section **CV** (bouton « Télécharger mon CV »)

```html
<a href="documents/VOTRE-NOUVEAU-FICHIER.pdf" class="btn ..." download>Télécharger mon CV</a>
```

## Modifier mon adresse e-mail

L'adresse `kadertraore408@gmail.com` est déjà renseignée (section **Contact** et pied de page). Pour la changer :

1. Ouvrez `index.html` et cherchez `kadertraore408@gmail.com` (elle apparaît à deux endroits).
2. Remplacez chaque occurrence par la nouvelle adresse, dans le lien et dans le texte affiché :

```html
<a href="mailto:votre-adresse@domaine.fr">votre-adresse@domaine.fr</a>
```

## Ajouter mon LinkedIn

Le lien `https://www.linkedin.com/in/kader-ali-traore-0172ab254` est déjà renseigné (section **Contact** et pied
de page). Pour le changer :

1. Ouvrez `index.html` et cherchez `kader-ali-traore-0172ab254` (il apparaît à deux endroits).
2. Remplacez l'URL par celle de votre profil, par exemple :

```html
<a href="https://www.linkedin.com/in/votre-profil/">LinkedIn</a>
```

## Ajouter un nouveau projet

Dans `index.html`, section **Projets** (`id="projets"`), dupliquez un bloc `<article class="project-card">…</article>`
existant, puis :

1. Changez l'image (`images/votre-image.svg` ou `.jpg`) et son texte alternatif (`alt`).
2. Changez l'étiquette (`project-tag`), le titre et les blocs Contexte / Objectif / Méthode / Outils / Livrables.
3. Ajustez les étiquettes d'outils (`chip`) et, si besoin, le lien du bouton « Voir le projet ».

Le même principe s'applique pour ajouter un **travail académique** (section `id="travaux-academiques"`, blocs
`<article class="academic-card">`) ou une **expérience** (section `id="experiences"`, blocs `<article class="timeline-item">`).

> **Note :** le projet « Tableau de bord du Médicobus » (Power BI) a été volontairement retiré du site à votre
> demande, pour des raisons de confidentialité. Si vous souhaitez le publier plus tard (par exemple avec des
> captures d'écran anonymisées), reprenez le modèle d'une carte de projet existante dans la section **Projets** de
> `index.html` et complétez-la avec le contenu de votre choix.

## Ajouter un diplôme ou une certification

1. Placez le fichier PDF dans `documents/`.
2. Dans `index.html`, section **Formation** (`id="formation"`), ajoutez un lien sous le bloc `meta-row` concerné :

```html
<a href="documents/votre-diplome.pdf" class="btn btn-ghost btn-sm diploma-link" download>Voir le diplôme (PDF)</a>
```

3. Pour une nouvelle certification, dupliquez une `<div class="cert-card">…</div>` dans `.cert-grid`.

## Remplacer les images temporaires

Les visuels des projets et du rapport (`images/projet-*.svg`, `images/travail-econometrie.svg`) sont des
illustrations génériques créées pour ce site, **sans aucune donnée réelle ni confidentielle** (pas de captures
d'écran de tableaux de bord réels, pas de données individuelles).

Pour les remplacer par de vraies captures d'écran (Power BI, QGIS, etc.) :

1. Exportez une capture d'écran **anonymisée** (aucune donnée personnelle ou confidentielle visible).
2. Enregistrez-la dans `images/` au format `.jpg` ou `.png`.
3. Remplacez le `src` de l'`<img>` correspondante dans `index.html`.

⚠️ Avant de publier une capture d'écran d'un outil professionnel (Médicobus, CLS, DAC 66…), vérifiez qu'elle ne
contient aucune donnée confidentielle, aucun nom de patient ni information permettant d'identifier une personne.

## Publier le site sur GitHub Pages

1. Créez un dépôt GitHub (public ou privé) et poussez le contenu de ce dossier à la racine du dépôt.

```bash
git init
git add .
git commit -m "Portfolio initial"
git branch -M main
git remote add origin https://github.com/votre-utilisateur/votre-depot.git
git push -u origin main
```

2. Sur GitHub, allez dans **Settings → Pages**.
3. Dans « Build and deployment », choisissez **Deploy from a branch**, sélectionnez la branche `main` et le
   dossier `/ (root)`.
4. Après quelques minutes, le site est disponible à l'adresse `https://votre-utilisateur.github.io/votre-depot/`.
5. Pensez à mettre à jour la balise `<link rel="canonical">` et les balises `og:url` dans `index.html` avec cette
   adresse définitive.

## Publier le site sur Netlify

**Option glisser-déposer (la plus simple) :**

1. Rendez-vous sur [app.netlify.com/drop](https://app.netlify.com/drop).
2. Glissez le dossier `portfolio-kader-traore` complet dans la zone indiquée.
3. Netlify génère automatiquement une adresse (`https://un-nom-genere.netlify.app`), modifiable dans les
   paramètres du site.

**Option via GitHub (déploiement continu) :**

1. Poussez le projet sur GitHub (voir section précédente).
2. Sur Netlify, cliquez sur **Add new site → Import an existing project**, connectez votre compte GitHub et
   sélectionnez le dépôt.
3. Aucune commande de build n'est nécessaire (site statique) : laissez les champs « Build command » et
   « Publish directory » vides, ou indiquez `.` comme répertoire de publication.

## Publier le site sur Vercel

1. Poussez le projet sur GitHub.
2. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project** et importez le dépôt.
3. Comme il s'agit d'un site statique, choisissez « Other » comme framework et laissez la commande de build vide.

## Connecter le formulaire de contact

Le formulaire de contact (section **Contact**) est **déjà connecté à Formspree** et envoie les messages
directement à `kadertraore408@gmail.com`, sans recharger la page (envoi en arrière-plan, géré dans `script.js`).

- Endpoint utilisé : `https://formspree.io/f/mdaqjqqk` (visible dans l'attribut `action` du formulaire, `index.html`).
- Un champ anti-spam invisible (`_gotcha`) est inclus par précaution.
- Le champ « Objet » est envoyé sous le nom `_subject`, ce que Formspree utilise automatiquement comme objet de l'e-mail reçu.
- Le champ « Adresse e-mail » (`name="email"`) est automatiquement utilisé par Formspree comme adresse de réponse (Reply-To) : vous pouvez répondre directement depuis votre boîte mail.

### Pour changer de destinataire ou de formulaire Formspree

1. Créez un nouveau formulaire sur [formspree.io](https://formspree.io) et récupérez son URL (`https://formspree.io/f/VOTRE_ID`).
2. Dans `index.html`, remplacez l'attribut `action` de la balise `<form id="contact-form" …>` par la nouvelle URL.
3. Aucune autre modification n'est nécessaire : `script.js` utilise automatiquement `contactForm.action`.

### Option B — EmailJS (alternative, envoi direct depuis le navigateur)

1. Créez un compte sur [emailjs.com](https://www.emailjs.com), configurez un service d'envoi (Gmail, Outlook…) et
   un modèle d'e-mail.
2. Ajoutez le SDK EmailJS dans `index.html` (juste avant `script.js`) :

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

3. Dans `script.js`, initialisez EmailJS et remplacez la logique d'envoi par un appel à
   `emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", contactForm, "PUBLIC_KEY")` (voir la documentation EmailJS pour
   le détail exact des paramètres).

Dans les deux cas, pensez à activer une protection anti-spam (reCAPTCHA ou honeypot, proposés nativement par ces
deux services).

## Accessibilité et bonnes pratiques déjà en place

- Structure HTML sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Lien d'évitement (« Aller au contenu principal ») pour la navigation clavier.
- Contrastes de couleurs vérifiés (texte foncé sur fond clair, blanc sur bleu foncé).
- Toutes les images porteuses de sens ont un texte alternatif (`alt`).
- Formulaire avec `label` associés à chaque champ, messages d'état annoncés (`aria-live`).
- Navigation et menus utilisables entièrement au clavier (`:focus-visible` personnalisé).
- Respect de `prefers-reduced-motion` pour désactiver les animations si l'utilisateur le préfère.
- Aucune donnée personnelle, confidentielle ou individuelle (patients, répondants) n'est affichée sur le site.

## Personnalisation des couleurs

Toutes les couleurs du site sont centralisées en haut de `style.css`, dans le bloc `:root { … }`. Modifier une
seule valeur (par exemple `--color-accent`) met à jour l'ensemble du site automatiquement.
