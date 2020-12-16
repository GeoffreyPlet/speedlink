# Speedlink
Création d'un site internet, qui liste les liens utiles, eux lors d'une formation de developpeur concepteur d'application

# Technologie
## Front
 - Angulare
 - Bootstrap
 - SASS

# Pages
 - accueil : Page d'accueil du site
    {
        - Header avec la nav, titre du site, dropdown des langages.
        - Un carousel des langages avec 3 link.
        - Footer avec, copyright, list des pages.
        
    }
 - list_langage : Page de la liste des langages
    {
        - Header avec la nav, titre du site, dropdown des langages.
        - Liste des langages avec, la cover, le name, la description.
        - Footer avec, copyright, list des pages.
    }
 - list_link : Page de la liste des link.
    {
        - Header avec la nav, titre du site, dropdown des langages.
        - Liste des link avec, la cover, le name, la description, le langage concerné.
        - Footer avec, copyright, list des pages.
    }



# Class
 - Langage [DONE]
  - id (numerique)
  - name (string)
  - description (string)
  - cover (string)

 - Link [DONE]
  - id (numerique)
  - name (string)
  - description (string)
  - cover (string)
  - id_langage (numerique)


# Service
    - Langage : Permet la récupération des langages dans le dossier db.json.
    - Link : Permet la récupération des langages dans le dossier db.json.

# Component
 - header.component : Header du site avec une nav, une décoraction
 - footer.component : Footer du site avec un copyright, une liste des pages du site.
 - carousel.component : les langages 1 par 1, qui contiens 3 links.
 - liste-langage.component : listte les langages du site.
 - liste-link.component : liste des links du site.


# Update
 ## Pages
  - list_link_single : Page d'un seul link.
    {
        - Header avec la nav, titre du site, dropdown des langages.
        - Liste des link avec, la cover, le name, la description, le langage concerné.
        - Footer avec, copyright, list des pages.
    }