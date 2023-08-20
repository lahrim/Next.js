## installation
```
yarn install
```

## _app.js
Changer la ligne 13, exemple par les reducer utilisés
```
const reducers = combineReducers({ user, panier, ... });
```

Changer la ligne 14, la key par le nom souhaiter afficher dans le localstorage
```
const persistConfig = { key: 'nomdelakeylocalstorage', storage, blacklist: ['_persist'] };
```

## utilisation
Dans le terminal à la racine du projet
```
yarn dev
```

## utiles
Déjà installé
```
fortawesome
@reduxjs/toolkit
react-redux
redux-persist
react-helmet
node-sass
```

Pour changer dans une page le head ou ajouter une class au body simplement grace à react-helmet, il est possible de faire
```
 <Helmet>
  <title>Titre</title>
  <body className="nomdemaclass" />
</Helmet>
```

Pour les chemins il est possible
```
@components // dossier components
@pages // dossier pages
@reducers // dossier reducers
@styles // dossier styles
@img // dossier public/img
```

## Routes dynamiques
Il y a 2 exemples de routes dynamiques, soit par id, ou par token. entre crochet [id].js ou [token].js, ne doit pas être changé

Pour l'id
```
pages > annonce > [id].js
```

Pour le token
```
pages > profil > [token].js
```
