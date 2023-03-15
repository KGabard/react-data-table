# Composant react-data-table

## 1. Description
Le composant react-data-table permet de prendre en données d'entrée un tableau d'objets ayants les même propriétés (les data) afin de les afficher sous forme d'une table dont les colonnes représentent les propriétés alors que les lignes représentent chaque entité du tableau.

## 2. Paramètres

### 2.1 data: DataType[]
Les data sont le tableau d'objet qui constitu les données d'entrée. Le DataType est un objet dont l'ensemble des propriétés sont de type string.

### 2.2 columnsWidth: number[]
Les columnsWidth sont un tableau de number qui représentent le paramètre flex-grow de chaque colonne et permet donc d'indiquer la largeur relative par colonne.

### 2.3 enableNumberOfEntries?: boolean
Le paramètre enableNumberOfEntries est optionnel et permet d'afficher ou non le menu déroulant permettant de choisir le nombre d'entrées par page de la table.

### 2.4 enableSearch?: boolean
Le paramètre enableSearch est optionnel et permet d'afficher ou non la barre de recherche permettant de filtrer la table.

### 2.5 enableSort?: boolean
Le paramètre enableSort est optionnel et permet d'afficher ou non les bouttons de tri permettant de trier une colonne dans l'ordre ascendant ou descendant.

### 2.5   colors?: { primary: string, secondary: string }
Le paramètre colors est optionnel et permet de choisir une couleur primaire et une secondaire pour personaliser le tableau selon notre convenance.

## 3. Exemple d'utilisation
Etant donnée le tableau de donnée suivant :
```js
const employeesList = [
  {
    firstName: 'Elijah',
    lastName: 'Larsen',
    startDate: '9/3/2006',
    department: 'Marketing',
    dateOfBirth: '12/26/1997',
    street: 'Chambers Alley',
    city: 'Bridgeport',
    state: 'Tennessee',
    zipCode: '53584',
  },
  {
    firstName: 'John',
    lastName: 'Donovan',
    startDate: '9/1/2006',
    department: 'Sales',
    dateOfBirth: '7/17/1976',
    street: 'Monroe Tunnel',
    city: 'San Antonio',
    state: 'Florida',
    zipCode: '10494',
  },
  ...
]
```

On peut alors utiliser ce composant tel quel :
```js
import Table from '@kgabard/react-data-table'

<Table
  data={employeesList}
  columnsWidth={[1, 1, 0.85, 1, 0.85, 1, 1, 1, 0.7]}
  colors={{ primary: 'var(--highlight-primary)', secondary: 'var(--highlight-secondary)' }}
  enableNumberOfEntries={true}
  enableSearch={true}
  enableSort={true}
/>
```

On obtient alors :
<img src="tableExample.png" alt="Table">