import { occulte, psychologique, policier, paranormal, mystere } from '../types/genres';

const storylist = [
    {
      genres: [
        occulte,
      ],
      tempsLecture: 5,
      date: "20/02/2021",
      description:"Les rues ne sont plus sûres et sont devenues presque impraticables. L'une d'entre elles, Easy Street, a fait couler beaucoup d'encre, et peut-être un peu de sang également.",
      url:"/stories/1",
      title:"Easy Street",
      image:"/assets/stories/easystreet.png",
      texte:[<p>Lorem ipsum test1 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        paranormal,
        policier
      ],
      tempsLecture: 10,
      date: "13/02/2021",
      description:"Le pardon se mérite. Le roi en rouge vous l'accordera-t-il ?",
      url:"/stories/2",
      title:"Rédemption",
      image:"/assets/stories/redking.png",
      texte:[<p>Lorem ipsum test2 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        psychologique,
        policier
      ],
      tempsLecture: 15,
      date: "10/02/2021",
      description:"Êtes-vous encore capable de raisonner ?",
      url:"/stories/3",
      title:"Papillon Doré",
      image:"/assets/stories/papillondore.png",
      texte:[
        <p>
        <h3>12.03.2020 à 21h15</h3>

        Cher journal,<br/><br/>

        Comme tu le sais, voilà déjà maintenant huit ans que je suis mariée à une femme altruiste et bienveillante. Aujourd'hui c'était son anniversaire et j'ai enfin pu lui offrir le cadeau pour lequel j'ai économisé pendant dix mois. Je voulais me rattraper pour le flop de l'année dernière et j'espère qu'elle saura s'en servir. J'ai eu l'aide de mes amis, qui sont aussi mes voisins dans le petit village de Destrecourt. J'aime sincèrement Nadège et je suis heureuse avec elle. Malheureusement, les vacances sont terminées et je reprends le boulot demain. J'irai chercher Ange après l'école.
        </p>,
        <p>
        <h3>13.03.2020 à 22h38</h3>

        Cher journal,<br/><br/>

        Je suis rentrée avec Ange il y a quelques heures de cela. Je vais tenter de partager mon ressenti sur cette journée, mais je ne pourrai pas correctement décrire ce que j'ai vécu, car je ne sais pas ce que j'ai vécu. J'ai eu une sorte... d'absence. Je me souviens de m'être réveillée ce matin, d'avoir déjeuné un bol de Coco Pops et de m'être préparée, mais après avoir franchi le seuil de la porte... plus rien. Je n'en ai aucun souvenir...
        Si. Je me souviens qu'après ça j'étais dans la boutique. J'étais en train de servir un client, et il m'a demandé si ça allait. J'ai dû lui redemander ce qu'il voulait car je ne me souvenais de rien. 
        Après le boulot j'ai récupéré Ange et en rentrant, j'ai remarqué qu'elle s'est regardée assez longtemps le miroir dans l'entrée pour la troisième fois depuis hier. Je pense qu'elle découvre son reflet.
        J'ai essayé d'appeler Nadège pour lui dire que j'avais récupéré notre fille mais elle n'a pas répondu alors je lui ai envoyé un message. Je suis allée jouer avec Ange dans le jardin. Elle aime beaucoup jouer au foot, comme moi à son âge. Je suis heureuse quand elle rit et sourit, car c'est le plus beau cadeau qu'on puisse faire à une mère, même si au regard de la loi je ne suis rien pour elle. Nous avons eu beaucoup de mal à avoir Ange. Je ne suis peut-être pas sa mère biologique mais je l'aime tout autant. Nadège, Ange et moi sommes heureuses ensemble et une deuxième cigogne devrait arriver dans quelques mois. Cette fois-ci, c'est moi qui porte l'enfant comme on avait réflechi. Je ne voulais pas laisser Nadège tout faire seule. Je suis impatiente de bercer un deuxième petit ange dans mes bras !
        </p>,
        <p>
        <h3>14.03.2020 à 12h34</h3>

        Cher journal,<br/><br/>

        Ça a recommencé. Je ne veux pas oublier alors j'écris très vite. Excuse mon écriture un peu bancale. Je sais qu'il est tôt dans la journée mais j'ai pris mon après-midi car je me sentais vraiment mal. Heureusement que demain est un dimanche. J'étais pourtant sûre que les résultats de TSH étaient bons, et je prends bien mes médicaments... Je ne sais pas si ça a un lien, mais si j'ai raison... (?? des mots incompréhensibles s'étendent sur plusieurs lignes ??)

        Je me revois à la boutique ce matin, en train de faire un bouquet de lilas pour l'amie d'une veuve endeuillée, il ne devait pas être plus de 8h30, et juste après que ça se soit passé, je servais un jeune homme noir, très charmant et chaleureux. Il me rappelait un ancien ami, propriétaire d'un chat qui se faufilait souvent dans des boîtes pour s'y réfugier. Pour rire, on se demandait souvent si le chat y était encore ou si la magie de Schrödinger l'avait vaporisé. En y repensant, c'était peut-être lui. Lorsque je le servais, j'ai regardé l'horloge et elle indiquait 11h24. Ce qui aurait laissé environ trois heures d'obscurité, de vide, d'absence. Il ne m'a pas fallu beaucoup de temps pour faire ce calcul et demander à mon coéquipier s'il m'avait vue ce matin-là. J'ai demandé au client d'attendre et je n'ai pas hésité à me rendre dans l'arrière-boutique rencontrer mon collègue. Malheureusement, il prenait à onze heures et en plus il est arrivé avec quinze minutes de retard. Malgré cela, il m'a affirmé m'avoir vue au comptoir depuis son arrivée. Je dois en savoir plus.
        </p>,
        <p>
        <h3>14.03.2020 à 21h49</h3>

        Cher journal,<br/><br/>

        Je ne comprends pas. Nadège ne répond plus au téléphone et n'est pas rentrée depuis hier soir. D'habitude, elle laisse au moins un message pour ne pas m'inquiéter, et me prévenir qu'elle ne pourra pas rentrer, me dire de m'occuper de préparer le dîner pour notre fille et moi et de bien acheter du pain et du maquereau car Ange en raffole...
        Seulement ce soir elle semblait distante. J'ai la sensation qu'elle a peur. Son regard me terrorise parce que je semble moi-même l'intimider. Je ne sais pas ce que je lui ai fait, et je ne veux pas lui faire de mal alors j'ai peur de lui avoir causé du tort sans m'en rendre compte. De mon côté, j'espère que ma femme va revenir avant demain car je ne pourrai pas tenir 48h avant de prévenir les autorités. L'espoir est la seule chose qui soit plus puissante que la peur, mais j'ai très peur qu'il lui soit arrivé quelque chose. Bien sûr c'est quelque chose que je n'aime pas montrer... mais notre dernière discussion c'était le 13 et on se disputait pour l'avenir de notre fille... Ça ne peut pas finir sur une satanée engueulade, bordel !
        </p>,
        <p>
        <h3>15.03.2020 à 19h30</h3>

        Cher... journal...<br/><br/>

        Nadège n'est toujours pas revenue... je ne sais plus quoi faire. Je suis épuisée. Je l'ai cherchée toute la journée, et je ne me souviens même plus de ce que j'ai fait... J'avais déjà fait des appels à l'aide sur les réseaux sociaux hier, mais maintenant que j'ai signalé sa disparition aux flics, je vais peut-être avoir plus de chances de la retrouver. Pitié, je ne veux pas la perdre. Pas Nadège. Elle est tout ce que j'ai...
        </p>,
        <p>
        <h3>15.03.2020 à 23h47</h3>

        Journal,<br/><br/>
        Je n'arrive pas à dormir... je veux juste savoir où est ma femme... je ne veux vraiment pas aller travailler demain mais je n'ai pas le choix... je ne peux compter que sur les patrouilles maintenant...
        </p>,
        <p>
        <h3>16.03 à 2h03</h3>

        Journal,<br/><br/>

        J'ai peur du noir... je n'arrive plus à respirer... Les choux-fleurs sont partout sur les murs et une araignée géante me fixe depuis tout à l'heure...
        Maman...
        </p>,
        <p>
        <h3>16.03 à 5h28</h3>

        Cher journal,<br/><br/>

        Je viens de me réveiller. Je ne comprends pas ce que j'ai discerné dans l'obscurité. Une silhouette humanoïde avec des cornes de bouc en affrontait une autre aux échecs dans notre chambre parentale. L'une des deux a retourné l'échiquier puis les deux ont disparu, l'échiquier aussi... À examiner...
        </p>,
        <p>
        <h3>16.03.2020 à 20h21</h3>

        Cher journal,<br/><br/>

        Je ne sais pas quoi dire...
        Comment résumer cela en quelques mots ? Je ne sais pas. Je ne sais plus. J'aurais dû réussir cette satanée TS. Pourquoi faire tout ce chemin... pour ÇA ?!

        En me rendant au boulot ce matin, j'ai entendu un cri d'effroi d'une passante alors qu'elle regardait le contenu de la vitrine de la boutique du fleuriste pour lequel je travaille. Alors qu'un atroupement de spectateurs se créait autour de la vitrine, une vague de stress et d'angoisse s'abattit sur moi. Me précipitant à contrecœur vers celle-ci, j'ai vu tous les regards horrifiés se tourner vers moi et m'empêcher de passer en hurlant que je ne devais pas voir ce désastre. Et j'aurais dû les écouter...

        Après m'être frayé un passage vers la vitrine, j'ai enfin pu voir sans mal l'objet de toutes les frayeurs. Dans la vitrine était exposé un grand bouquet rouge, qui s'avérait être composé de morceaux de chair et de peau humaines, mais également d'organes. Les "fleurs" étaient liées par ce qui semblait être des parties d'intestin et je pus distinguer une main, ce qui me fit tourner la tête de terreur et de dégoût. En ayant toujours le regard éloigné de ces monstruosités, je ne pus m'empêcher de poser une question à laquelle je ne voulais pas savoir la réponse. Comme je le craignais, cette main gauche portait une bague avec une pierre d'améthyste en forme de papillon...

        Il... s'agissait... de la main... de ma femme... Nadège... alors cela signifie-t-il que les intestins et la chair étaient les siens ? 

        Je ne sais pas comment je vais l'apprendre à Ange... Mon dieu... Elle pense que sa mère est partie pour le travail...
        </p>,
        <p>
        <h3>17.03.2020 à 6h08</h3>

        Cher journal,<br/><br/>

        Je n'ai pas dormi, mais je n'ai pas pu me résoudre à écrire... je ne peux pas mettre de mots sur l'horreur que je vis actuellement...

        J'ai encore espoir que quelqu'un lui ait volé sa bague avant de mourir...

        Ses bras me manquent tellement...
        Mais POURQUOI commettre un crime aussi atroce ?! C'était la personne la plus formidable que le monde ait porté ! Mais pourquoi ?! POURQUOI ?! (des larmes ont fait couler l'encre)
        </p>,
        <p>
        <h3>18.03.2020 à 23h08</h3>

        Cher (...),<br/><br/>

        Je suis anéantie... Je n'avais même pas remarqué à cause des émotions, mais Ange aussi a disparu...
        </p>,
        <p>
        <h3>20.03.2020 à 21h36</h3>

        Cher journal,<br/><br/>

        Des policiers se sont rendus chez moi pour m'annoncer que le corps de ma femme avait été identifié... en morceaux...
        Ils n'ont pas souhaité me dire grand chose de plus, seulement que tout n'avait pas été retrouvé. Plutôt qu'un organe manquait. Le meurtre est encore plus horrible que je ne l'imaginais...

        Ils m'ont aussi dit qu'ils avaient trouvé une peluche de lionceau dans la forêt près de chez nous. C'est la peluche d'Ange...
        </p>,
        <p>
        <h3>22.03.2020 à 07h32</h3>

        J'écris vite, je n'ai pas le temps car je dois aller au travail et je me suis réveillée en retard.
        Ce matin vers 4h a été retrouvé ce que les médias appellent un papillon doré empalé sur un grillage devant le laboratoire médical le plus proche de chez moi, à 45 minutes d'ici. Les analyses effectuées ont révélé qu'il s'agirait d'une glande thyroïde recouverte d'or. J'ai trouvé cela étrange, car comme tu le sais je suis née sans thyroïde et je commence à paranoïer. Et si le monstre qui a fait ça me vise ???
        </p>,
        <p>
        <h3>22.03.2020 à 17h39</h3>

        Cher journal,<br/><br/>

        Après avoir réfléchi, j'ai établi un lien entre le "papillon doré" et l'organe manquant du cadavre de ma femme. Si mes craintes sont fondées, je suis la prochaine. Mais pourquoi faire du mal à Nadège ? Pourquoi bordel...

        Rendez-moi ma femme... Je te vengerai Nadège...

        Les laboratoires sont-ils aussi responsables de ta mort ??!
        Ces ordures de SANOFI ont détruit le seul médicament qui se substituait à ma thyroïde et me maintenaient en forme et saine d'esprit il y a trois ans... POUR de l'ARGENT !! Depuis 2017, j'ai ces absences et ces pulsions... que pouvais-je faire de plus ? Je ne voulais pas...
        </p>,
        <p>
        <h3>23.03.2020 à 10h20</h3>

        J'ai quitté mon travail. Je ne pouvais pas supporter de retourner là où ma vie s'était écroulée.
        Où est Ange ? Je jure de ne plus jamais la blesser... c'était un accident... ce sont ces absences... je ne veux pas... Non !
        Ne m'emmen_/"
        </p>,
        <p>
        ---<br/>

        Bien #7384209<br/>
        Objet : Journal du patient 44-10<br/>

        ---<br/>

        <h3>Patient 44-10</h3>

        Nom du patient : Clotilde SATURNIN<br/>
        Dangerosité : Maximale<br/>
        Motif(s) d'internement : Meurtres au premier degré de sa femme et de sa fille, démembrement, amnésies antérogrades, traumatisme affectif<br/>
        Observations : A une haine envers le corps médical et pense que nous sommes ceux qui aurions tué sa femme et kidnappé sa fille. Faire attention à l'emploi des mots.
        
        </p>
      ]
      
    },
    {
      genres: [
        psychologique,
        occulte
      ],
      tempsLecture: 15,
      date: "04/02/2021",
      description:"La mort n'est pas un fléau. La mort fait partie intégrante de la vie. Ainsi, les morts veillent sur les vivants.",
      url:"/stories/4",
      title:"Spectre",
      image:"/assets/stories/spectre.png",
      texte:[<p>Lorem ipsum test4 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        paranormal,
        policier
      ],
      tempsLecture: 15,
      date: "31/01/2021",
      description:"Que celui qui n'a jamais ressenti une grande colère l'envahir me jette la première pierre.",
      url:"/stories/5",
      title:"Colère",
      image:"/assets/stories/colere.png",
      texte:[<p>Lorem ipsum test5 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        mystere,
      ],
      tempsLecture: 10,
      date: "27/01/2021",
      description:"Que ma miséricorde l'emporte sur ma colère.",
      url:"/stories/6",
      title:"Miséricorde",
      image:"/assets/stories/misericorde.png",
      texte:[<p>Lorem ipsum test6 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        occulte,
        mystere
      ],
      tempsLecture: 5,
      date: "22/01/2021",
      description:"La forêt recelle bien des mystères. Oseriez-vous l'affronter ? Moi, j'ai essayé.",
      url:"/stories/7",
      title:"Esprits des bois",
      image:"/assets/stories/woodqueen.png",
      texte:[<p>Lorem ipsum test7 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        psychologique,
      ],
      tempsLecture: 20,
      date: "15/01/2021",
      description:"Je suis celui qui amène les âmes dans l'au-delà. Celui qui accomplit les tâches ingrates que les plus puissants délèguent.",
      url:"/stories/8",
      title:"Le passeur",
      image:"/assets/stories/lepasseur.png",
      texte:[<p>Lorem ipsum test8 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        paranormal,
        mystere
      ],
      tempsLecture: 10,
      date: "8/01/2021",
      description:"L'année dernière, une série d'événements macabres a frappé une petite famille d'Italie. Rien n'a permis d'élucider le mystère.",
      url:"/stories/9",
      title:"Castiglioni",
      image:"/assets/stories/nature.png",
      texte:[<p>Lorem ipsum test9 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    },
    {
      genres: [
        psychologique
      ],
      tempsLecture: 5,
      date: "1/01/2021",
      description:"Le gouvernement veut nous contrôler. Nous devons agir.",
      url:"/stories/10",
      title:"Sous silence",
      image:"/assets/stories/distanciation.png",
      texte:[<p>Lorem ipsum test10 partie 1</p>, <p>Partie 2</p>,<p>Partie 3</p>]
    }
  ];

  export default storylist;