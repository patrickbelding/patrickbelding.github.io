const players_list = [
    {
        "fullName": "Jonathan Bernier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473541@3x.png"
    },
    {
        "fullName": "Miles Wood",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477425@3x.png"
    },
    {
        "fullName": "Vitek Vanecek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477970@3x.png"
    },
    {
        "fullName": "Jesper Bratt",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479407@3x.png"
    },
    {
        "fullName": "Jesper Boqvist",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480003@3x.png"
    },
    {
        "fullName": "Reilly Walsh",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480054@3x.png"
    },
    {
        "fullName": "Brendan Smith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474090@3x.png"
    },
    {
        "fullName": "Tomas Tatar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475193@3x.png"
    },
    {
        "fullName": "Erik Haula",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475287@3x.png"
    },
    {
        "fullName": "Ondrej Palat",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476292@3x.png"
    },
    {
        "fullName": "Dougie Hamilton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476462@3x.png"
    },
    {
        "fullName": "Damon Severson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476923@3x.png"
    },
    {
        "fullName": "Andreas Johnsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477341@3x.png"
    },
    {
        "fullName": "Mason Geertsen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477419@3x.png"
    },
    {
        "fullName": "Ryan Graves",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477435@3x.png"
    },
    {
        "fullName": "Jonas Siegenthaler",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478399@3x.png"
    },
    {
        "fullName": "Mackenzie Blackwood",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478406@3x.png"
    },
    {
        "fullName": "John Marino",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478507@3x.png"
    },
    {
        "fullName": "Nathan Bastian",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479414@3x.png"
    },
    {
        "fullName": "Michael McLeod",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479415@3x.png"
    },
    {
        "fullName": "Nico Hischier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480002@3x.png"
    },
    {
        "fullName": "Yegor Sharangovich",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481068@3x.png"
    },
    {
        "fullName": "Jack Hughes",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481559@3x.png"
    },
    {
        "fullName": "Dawson Mercer",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482110@3x.png"
    },
    {
        "fullName": "Zach Parise",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470610@3x.png"
    },
    {
        "fullName": "Cal Clutterbuck",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473504@3x.png"
    },
    {
        "fullName": "Semyon Varlamov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473575@3x.png"
    },
    {
        "fullName": "Josh Bailey",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474573@3x.png"
    },
    {
        "fullName": "Matt Martin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474709@3x.png"
    },
    {
        "fullName": "Kyle Palmieri",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475151@3x.png"
    },
    {
        "fullName": "Casey Cizikas",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475231@3x.png"
    },
    {
        "fullName": "Anders Lee",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475314@3x.png"
    },
    {
        "fullName": "Brock Nelson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475754@3x.png"
    },
    {
        "fullName": "Jean-Gabriel Pageau",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476419@3x.png"
    },
    {
        "fullName": "Scott Mayfield",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476429@3x.png"
    },
    {
        "fullName": "Adam Pelech",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476917@3x.png"
    },
    {
        "fullName": "Ryan Pulock",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477506@3x.png"
    },
    {
        "fullName": "Ross Johnston",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477527@3x.png"
    },
    {
        "fullName": "Ilya Sorokin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478009@3x.png"
    },
    {
        "fullName": "Mathew Barzal",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478445@3x.png"
    },
    {
        "fullName": "Anthony Beauvillier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478463@3x.png"
    },
    {
        "fullName": "Kieffer Bellows",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479356@3x.png"
    },
    {
        "fullName": "Sebastian Aho",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480222@3x.png"
    },
    {
        "fullName": "Oliver Wahlstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480789@3x.png"
    },
    {
        "fullName": "Noah Dobson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480865@3x.png"
    },
    {
        "fullName": "Alexander Romanov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481014@3x.png"
    },
    {
        "fullName": "Sammy Blais",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478104@3x.png"
    },
    {
        "fullName": "Jaroslav Halak",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470860@3x.png"
    },
    {
        "fullName": "Ryan Reaves",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471817@3x.png"
    },
    {
        "fullName": "Chris Kreider",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475184@3x.png"
    },
    {
        "fullName": "Jarred Tinordi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475797@3x.png"
    },
    {
        "fullName": "Louis Domingue",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475839@3x.png"
    },
    {
        "fullName": "Vincent Trocheck",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476389@3x.png"
    },
    {
        "fullName": "Mika Zibanejad",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476459@3x.png"
    },
    {
        "fullName": "Turner Elson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476505@3x.png"
    },
    {
        "fullName": "Barclay Goodrow",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476624@3x.png"
    },
    {
        "fullName": "Jacob Trouba",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476885@3x.png"
    },
    {
        "fullName": "Jonny Brodzinski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477380@3x.png"
    },
    {
        "fullName": "Ryan Carpenter",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477846@3x.png"
    },
    {
        "fullName": "Igor Shesterkin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478048@3x.png"
    },
    {
        "fullName": "Dryden Hunt",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478211@3x.png"
    },
    {
        "fullName": "Artemi Panarin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478550@3x.png"
    },
    {
        "fullName": "Adam Fox",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479323@3x.png"
    },
    {
        "fullName": "Ryan Lindgren",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479324@3x.png"
    },
    {
        "fullName": "Julien Gauthier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479328@3x.png"
    },
    {
        "fullName": "Libor Hajek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479333@3x.png"
    },
    {
        "fullName": "Filip Chytil",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480078@3x.png"
    },
    {
        "fullName": "K'Andre Miller",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480817@3x.png"
    },
    {
        "fullName": "Nils Lundkvist",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480878@3x.png"
    },
    {
        "fullName": "Zac Jones",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481708@3x.png"
    },
    {
        "fullName": "Braden Schneider",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482073@3x.png"
    },
    {
        "fullName": "Alexis Lafreni\u00e8re",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482109@3x.png"
    },
    {
        "fullName": "Ryan Ellis",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475176@3x.png"
    },
    {
        "fullName": "Sean Couturier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476461@3x.png"
    },
    {
        "fullName": "Justin Braun",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474027@3x.png"
    },
    {
        "fullName": "James van Riemsdyk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474037@3x.png"
    },
    {
        "fullName": "Cam Atkinson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474715@3x.png"
    },
    {
        "fullName": "Nicolas Deslauriers",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475235@3x.png"
    },
    {
        "fullName": "Kevin Connauton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475246@3x.png"
    },
    {
        "fullName": "Kevin Hayes",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475763@3x.png"
    },
    {
        "fullName": "Nick Seeler",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476372@3x.png"
    },
    {
        "fullName": "Scott Laughton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476872@3x.png"
    },
    {
        "fullName": "Troy Grosenick",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477234@3x.png"
    },
    {
        "fullName": "Rasmus Ristolainen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477499@3x.png"
    },
    {
        "fullName": "Patrick Brown",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477887@3x.png"
    },
    {
        "fullName": "Travis Sanheim",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477948@3x.png"
    },
    {
        "fullName": "Tony DeAngelo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477950@3x.png"
    },
    {
        "fullName": "Travis Konecny",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478439@3x.png"
    },
    {
        "fullName": "Ivan Provorov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478500@3x.png"
    },
    {
        "fullName": "Adam Brooks",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478996@3x.png"
    },
    {
        "fullName": "Carter Hart",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479394@3x.png"
    },
    {
        "fullName": "Morgan Frost",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480028@3x.png"
    },
    {
        "fullName": "Noah Cates",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480220@3x.png"
    },
    {
        "fullName": "Joel Farabee",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480797@3x.png"
    },
    {
        "fullName": "Ronnie Attard",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481521@3x.png"
    },
    {
        "fullName": "Cam York",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481546@3x.png"
    },
    {
        "fullName": "Bobby Brink",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481553@3x.png"
    },
    {
        "fullName": "Drake Caggiula",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479465@3x.png"
    },
    {
        "fullName": "Kasperi Kapanen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477953@3x.png"
    },
    {
        "fullName": "Radim Zohorna",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482241@3x.png"
    },
    {
        "fullName": "Jeff Carter",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470604@3x.png"
    },
    {
        "fullName": "Evgeni Malkin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471215@3x.png"
    },
    {
        "fullName": "Sidney Crosby",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471675@3x.png"
    },
    {
        "fullName": "Kris Letang",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471724@3x.png"
    },
    {
        "fullName": "Jeff Petry",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473507@3x.png"
    },
    {
        "fullName": "Dustin Tokarski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474682@3x.png"
    },
    {
        "fullName": "Brian Dumoulin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475208@3x.png"
    },
    {
        "fullName": "Jason Zucker",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475722@3x.png"
    },
    {
        "fullName": "Bryan Rust",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475810@3x.png"
    },
    {
        "fullName": "Rickard Rakell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476483@3x.png"
    },
    {
        "fullName": "Teddy Blueger",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476927@3x.png"
    },
    {
        "fullName": "Brock McGinn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476934@3x.png"
    },
    {
        "fullName": "Chad Ruhwedel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477244@3x.png"
    },
    {
        "fullName": "Jake Guentzel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477404@3x.png"
    },
    {
        "fullName": "Tristan Jarry",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477465@3x.png"
    },
    {
        "fullName": "Marcus Pettersson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477969@3x.png"
    },
    {
        "fullName": "Mark Friedman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478017@3x.png"
    },
    {
        "fullName": "Danton Heinen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478046@3x.png"
    },
    {
        "fullName": "Casey DeSmith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479193@3x.png"
    },
    {
        "fullName": "Ryan Poehling",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480068@3x.png"
    },
    {
        "fullName": "Jan Rutta",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480172@3x.png"
    },
    {
        "fullName": "Ty Smith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480883@3x.png"
    },
    {
        "fullName": "Drew O'Connor",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482055@3x.png"
    },
    {
        "fullName": "Jakub Zboril",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478415@3x.png"
    },
    {
        "fullName": "Brad Marchand",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473419@3x.png"
    },
    {
        "fullName": "Nick Foligno",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473422@3x.png"
    },
    {
        "fullName": "Craig Smith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475225@3x.png"
    },
    {
        "fullName": "Charlie Coyle",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475745@3x.png"
    },
    {
        "fullName": "Derek Forbort",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475762@3x.png"
    },
    {
        "fullName": "Chris Wagner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475780@3x.png"
    },
    {
        "fullName": "Taylor Hall",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475791@3x.png"
    },
    {
        "fullName": "Keith Kinkaid",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476234@3x.png"
    },
    {
        "fullName": "Mike Reilly",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476422@3x.png"
    },
    {
        "fullName": "Hampus Lindholm",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476854@3x.png"
    },
    {
        "fullName": "Matt Grzelcyk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476891@3x.png"
    },
    {
        "fullName": "Linus Ullmark",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476999@3x.png"
    },
    {
        "fullName": "Connor Clifton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477365@3x.png"
    },
    {
        "fullName": "Tomas Nosek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477931@3x.png"
    },
    {
        "fullName": "David Pastrnak",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477956@3x.png"
    },
    {
        "fullName": "Brandon Carlo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478443@3x.png"
    },
    {
        "fullName": "Jake DeBrusk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478498@3x.png"
    },
    {
        "fullName": "Charlie McAvoy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479325@3x.png"
    },
    {
        "fullName": "Trent Frederic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479365@3x.png"
    },
    {
        "fullName": "Joona Koppanen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479533@3x.png"
    },
    {
        "fullName": "Oskar Steen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479546@3x.png"
    },
    {
        "fullName": "Vinni Lettieri",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479968@3x.png"
    },
    {
        "fullName": "Jeremy Swayman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480280@3x.png"
    },
    {
        "fullName": "Kyle Keyser",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480356@3x.png"
    },
    {
        "fullName": "Jakub Lauko",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480880@3x.png"
    },
    {
        "fullName": "Nick Wolff",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482059@3x.png"
    },
    {
        "fullName": "Marc McLaughlin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8483397@3x.png"
    },
    {
        "fullName": "Malcolm Subban",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476876@3x.png"
    },
    {
        "fullName": "Victor Olofsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478109@3x.png"
    },
    {
        "fullName": "Craig Anderson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8467950@3x.png"
    },
    {
        "fullName": "Kyle Okposo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473449@3x.png"
    },
    {
        "fullName": "Jeff Skinner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475784@3x.png"
    },
    {
        "fullName": "Zemgus Girgensons",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476878@3x.png"
    },
    {
        "fullName": "Vinnie Hinostroza",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476994@3x.png"
    },
    {
        "fullName": "Eric Comrie",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477480@3x.png"
    },
    {
        "fullName": "Alex Tuch",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477949@3x.png"
    },
    {
        "fullName": "Anders Bjork",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478075@3x.png"
    },
    {
        "fullName": "Rasmus Asplund",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479335@3x.png"
    },
    {
        "fullName": "Kale Clague",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479348@3x.png"
    },
    {
        "fullName": "Tage Thompson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479420@3x.png"
    },
    {
        "fullName": "Casey Mittelstadt",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479999@3x.png"
    },
    {
        "fullName": "Henri Jokiharju",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480035@3x.png"
    },
    {
        "fullName": "Jacob Bryson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480196@3x.png"
    },
    {
        "fullName": "Rasmus Dahlin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480839@3x.png"
    },
    {
        "fullName": "Ilya Lyubushkin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480950@3x.png"
    },
    {
        "fullName": "Dylan Cozens",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481528@3x.png"
    },
    {
        "fullName": "Jonathan Drouin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477494@3x.png"
    },
    {
        "fullName": "Sam Montembeault",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478470@3x.png"
    },
    {
        "fullName": "Carey Price",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471679@3x.png"
    },
    {
        "fullName": "Paul Byron",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474038@3x.png"
    },
    {
        "fullName": "Evgenii Dadonov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474149@3x.png"
    },
    {
        "fullName": "Jake Allen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474596@3x.png"
    },
    {
        "fullName": "Mike Hoffman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474884@3x.png"
    },
    {
        "fullName": "Chris Wideman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475227@3x.png"
    },
    {
        "fullName": "David Savard",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475233@3x.png"
    },
    {
        "fullName": "Brendan Gallagher",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475848@3x.png"
    },
    {
        "fullName": "Joel Edmundson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476441@3x.png"
    },
    {
        "fullName": "Joel Armia",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476469@3x.png"
    },
    {
        "fullName": "Mike Matheson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476875@3x.png"
    },
    {
        "fullName": "Josh Anderson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476981@3x.png"
    },
    {
        "fullName": "Christian Dvorak",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477989@3x.png"
    },
    {
        "fullName": "Jake Evans",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478133@3x.png"
    },
    {
        "fullName": "Rem Pitlick",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479514@3x.png"
    },
    {
        "fullName": "Michael Pezzetta",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479543@3x.png"
    },
    {
        "fullName": "Nick Suzuki",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480018@3x.png"
    },
    {
        "fullName": "Jordan Harris",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480887@3x.png"
    },
    {
        "fullName": "Kirby Dach",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481523@3x.png"
    },
    {
        "fullName": "Cole Caufield",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481540@3x.png"
    },
    {
        "fullName": "Justin Barron",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482111@3x.png"
    },
    {
        "fullName": "Shane Pinto",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481596@3x.png"
    },
    {
        "fullName": "Claude Giroux",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473512@3x.png"
    },
    {
        "fullName": "Nick Holden",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474207@3x.png"
    },
    {
        "fullName": "Travis Hamonic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474612@3x.png"
    },
    {
        "fullName": "Cam Talbot",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475660@3x.png"
    },
    {
        "fullName": "Austin Watson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475766@3x.png"
    },
    {
        "fullName": "Anton Forsberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476341@3x.png"
    },
    {
        "fullName": "Jayce Hawryluk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477963@3x.png"
    },
    {
        "fullName": "Thomas Chabot",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478469@3x.png"
    },
    {
        "fullName": "Alex DeBrincat",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479337@3x.png"
    },
    {
        "fullName": "Nikita Zaitsev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479458@3x.png"
    },
    {
        "fullName": "Dylan Gambrell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479580@3x.png"
    },
    {
        "fullName": "Kristians Rubins",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479729@3x.png"
    },
    {
        "fullName": "Alex Formenton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480029@3x.png"
    },
    {
        "fullName": "Erik Brannstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480073@3x.png"
    },
    {
        "fullName": "Drake Batherson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480208@3x.png"
    },
    {
        "fullName": "Brady Tkachuk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480801@3x.png"
    },
    {
        "fullName": "Tim St\u00fctzle",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482116@3x.png"
    },
    {
        "fullName": "Artem Zub",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482245@3x.png"
    },
    {
        "fullName": "Matt Murray",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476899@3x.png"
    },
    {
        "fullName": "Pierre Engvall",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478115@3x.png"
    },
    {
        "fullName": "Rasmus Sandin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480873@3x.png"
    },
    {
        "fullName": "Mark Giordano",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470966@3x.png"
    },
    {
        "fullName": "Jake Muzzin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474162@3x.png"
    },
    {
        "fullName": "Wayne Simmonds",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474190@3x.png"
    },
    {
        "fullName": "TJ Brodie",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474673@3x.png"
    },
    {
        "fullName": "Jordie Benn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474818@3x.png"
    },
    {
        "fullName": "Kyle Clifford",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475160@3x.png"
    },
    {
        "fullName": "John Tavares",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475166@3x.png"
    },
    {
        "fullName": "Calle Jarnkrok",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475714@3x.png"
    },
    {
        "fullName": "Justin Holl",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475718@3x.png"
    },
    {
        "fullName": "Morgan Rielly",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476853@3x.png"
    },
    {
        "fullName": "Alexander Kerfoot",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477021@3x.png"
    },
    {
        "fullName": "Carl Dahlstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477472@3x.png"
    },
    {
        "fullName": "William Nylander",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477939@3x.png"
    },
    {
        "fullName": "Nicolas Aube-Kubel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477979@3x.png"
    },
    {
        "fullName": "Michael Bunting",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478047@3x.png"
    },
    {
        "fullName": "Mitchell Marner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478483@3x.png"
    },
    {
        "fullName": "Ilya Samsonov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478492@3x.png"
    },
    {
        "fullName": "Adam Gaudette",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478874@3x.png"
    },
    {
        "fullName": "Erik Kallgren",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478902@3x.png"
    },
    {
        "fullName": "Joey Anderson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479315@3x.png"
    },
    {
        "fullName": "Auston Matthews",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479318@3x.png"
    },
    {
        "fullName": "Victor Mete",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479376@3x.png"
    },
    {
        "fullName": "Timothy Liljegren",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480043@3x.png"
    },
    {
        "fullName": "David Kampf",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480144@3x.png"
    },
    {
        "fullName": "Mac Hollowell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480439@3x.png"
    },
    {
        "fullName": "Filip Kral",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480820@3x.png"
    },
    {
        "fullName": "Nicholas Robertson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481582@3x.png"
    },
    {
        "fullName": "Alex Steeves",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482634@3x.png"
    },
    {
        "fullName": "Brent Burns",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470613@3x.png"
    },
    {
        "fullName": "Jordan Staal",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473533@3x.png"
    },
    {
        "fullName": "Max Pacioretty",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474157@3x.png"
    },
    {
        "fullName": "Jesper Fast",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475855@3x.png"
    },
    {
        "fullName": "Frederik Andersen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475883@3x.png"
    },
    {
        "fullName": "Brady Skjei",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476869@3x.png"
    },
    {
        "fullName": "Teuvo Teravainen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476882@3x.png"
    },
    {
        "fullName": "Jordan Martinook",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476921@3x.png"
    },
    {
        "fullName": "Jaccob Slavin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476958@3x.png"
    },
    {
        "fullName": "Antti Raanta",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477293@3x.png"
    },
    {
        "fullName": "Brett Pesce",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477488@3x.png"
    },
    {
        "fullName": "William Lagesson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478021@3x.png"
    },
    {
        "fullName": "Ondrej Kase",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478131@3x.png"
    },
    {
        "fullName": "Sebastian Aho",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478427@3x.png"
    },
    {
        "fullName": "Ethan Bear",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478451@3x.png"
    },
    {
        "fullName": "Lane Pederson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478967@3x.png"
    },
    {
        "fullName": "Dylan Coghlan",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479639@3x.png"
    },
    {
        "fullName": "Martin Necas",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480039@3x.png"
    },
    {
        "fullName": "Jesperi Kotkaniemi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480829@3x.png"
    },
    {
        "fullName": "Andrei Svechnikov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480830@3x.png"
    },
    {
        "fullName": "Seth Jarvis",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482093@3x.png"
    },
    {
        "fullName": "Marc Staal",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471686@3x.png"
    },
    {
        "fullName": "Patric Hornqvist",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471887@3x.png"
    },
    {
        "fullName": "Radko Gudas",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475462@3x.png"
    },
    {
        "fullName": "Sergei Bobrovsky",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475683@3x.png"
    },
    {
        "fullName": "Nick Cousins",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476393@3x.png"
    },
    {
        "fullName": "Chris Tierney",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476919@3x.png"
    },
    {
        "fullName": "Anthony Duclair",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477407@3x.png"
    },
    {
        "fullName": "Carter Verhaeghe",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477409@3x.png"
    },
    {
        "fullName": "Aleksander Barkov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477493@3x.png"
    },
    {
        "fullName": "Aaron Ekblad",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477932@3x.png"
    },
    {
        "fullName": "Sam Reinhart",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477933@3x.png"
    },
    {
        "fullName": "Sam Bennett",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477935@3x.png"
    },
    {
        "fullName": "Brandon Montour",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477986@3x.png"
    },
    {
        "fullName": "Gustav Forsling",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478055@3x.png"
    },
    {
        "fullName": "Ryan Lomberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479066@3x.png"
    },
    {
        "fullName": "Lucas Carlsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479523@3x.png"
    },
    {
        "fullName": "Gerry Mayhew",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479933@3x.png"
    },
    {
        "fullName": "Eetu Luostarinen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480185@3x.png"
    },
    {
        "fullName": "Spencer Knight",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481519@3x.png"
    },
    {
        "fullName": "Anton Lundell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482113@3x.png"
    },
    {
        "fullName": "Corey Perry",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470621@3x.png"
    },
    {
        "fullName": "Brian Elliott",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470880@3x.png"
    },
    {
        "fullName": "Alex Killorn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473986@3x.png"
    },
    {
        "fullName": "Ian Cole",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474013@3x.png"
    },
    {
        "fullName": "Pat Maroon",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474034@3x.png"
    },
    {
        "fullName": "Steven Stamkos",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474564@3x.png"
    },
    {
        "fullName": "Zach Bogosian",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474567@3x.png"
    },
    {
        "fullName": "Victor Hedman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475167@3x.png"
    },
    {
        "fullName": "Nikita Kucherov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476453@3x.png"
    },
    {
        "fullName": "Vladislav Namestnikov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476480@3x.png"
    },
    {
        "fullName": "Andrei Vasilevskiy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476883@3x.png"
    },
    {
        "fullName": "Nicholas Paul",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477426@3x.png"
    },
    {
        "fullName": "Pierre-Edouard Bellemare",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477930@3x.png"
    },
    {
        "fullName": "Haydn Fleury",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477938@3x.png"
    },
    {
        "fullName": "Brayden Point",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478010@3x.png"
    },
    {
        "fullName": "Erik Cernak",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478416@3x.png"
    },
    {
        "fullName": "Anthony Cirelli",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478519@3x.png"
    },
    {
        "fullName": "Philippe Myers",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479026@3x.png"
    },
    {
        "fullName": "Mikhail Sergachev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479410@3x.png"
    },
    {
        "fullName": "Ross Colton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479525@3x.png"
    },
    {
        "fullName": "Brandon Hagel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479542@3x.png"
    },
    {
        "fullName": "Alex Barr\u00e9-Boulet",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479718@3x.png"
    },
    {
        "fullName": "Cal Foote",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479984@3x.png"
    },
    {
        "fullName": "Carl Hagelin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474176@3x.png"
    },
    {
        "fullName": "Nicklas Backstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473563@3x.png"
    },
    {
        "fullName": "Charlie Lindgren",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479292@3x.png"
    },
    {
        "fullName": "Henrik Borgstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479404@3x.png"
    },
    {
        "fullName": "Alex Ovechkin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471214@3x.png"
    },
    {
        "fullName": "T.J. Oshie",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471698@3x.png"
    },
    {
        "fullName": "Lars Eller",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474189@3x.png"
    },
    {
        "fullName": "John Carlson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474590@3x.png"
    },
    {
        "fullName": "Marcus Johansson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475149@3x.png"
    },
    {
        "fullName": "Dmitry Orlov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475200@3x.png"
    },
    {
        "fullName": "Darcy Kuemper",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475311@3x.png"
    },
    {
        "fullName": "Nick Jensen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475324@3x.png"
    },
    {
        "fullName": "Nic Dowd",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475343@3x.png"
    },
    {
        "fullName": "Matt Irwin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475625@3x.png"
    },
    {
        "fullName": "Evgeny Kuznetsov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475744@3x.png"
    },
    {
        "fullName": "Tom Wilson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476880@3x.png"
    },
    {
        "fullName": "Erik Gustafsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476979@3x.png"
    },
    {
        "fullName": "Connor Brown",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477015@3x.png"
    },
    {
        "fullName": "Anthony Mantha",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477511@3x.png"
    },
    {
        "fullName": "Conor Sheary",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477839@3x.png"
    },
    {
        "fullName": "Trevor van Riemsdyk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477845@3x.png"
    },
    {
        "fullName": "Garnet Hathaway",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477903@3x.png"
    },
    {
        "fullName": "Dylan Strome",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478440@3x.png"
    },
    {
        "fullName": "Gabriel Carlsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478506@3x.png"
    },
    {
        "fullName": "Axel Jonsson-Fjallby",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479536@3x.png"
    },
    {
        "fullName": "Martin Fehervary",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480796@3x.png"
    },
    {
        "fullName": "Joe Snively",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481441@3x.png"
    },
    {
        "fullName": "Connor McMichael",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481580@3x.png"
    },
    {
        "fullName": "Connor Murphy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476473@3x.png"
    },
    {
        "fullName": "Jujhar Khaira",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476915@3x.png"
    },
    {
        "fullName": "Jonathan Toews",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473604@3x.png"
    },
    {
        "fullName": "Patrick Kane",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474141@3x.png"
    },
    {
        "fullName": "Tyler Johnson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474870@3x.png"
    },
    {
        "fullName": "Petr Mrazek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475852@3x.png"
    },
    {
        "fullName": "Colin Blackwell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476278@3x.png"
    },
    {
        "fullName": "Jake McCabe",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476931@3x.png"
    },
    {
        "fullName": "Andreas Athanasiou",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476960@3x.png"
    },
    {
        "fullName": "Seth Jones",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477495@3x.png"
    },
    {
        "fullName": "Sam Lafferty",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478043@3x.png"
    },
    {
        "fullName": "Caleb Jones",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478452@3x.png"
    },
    {
        "fullName": "Brett Seney",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478881@3x.png"
    },
    {
        "fullName": "Boris Katchouk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479383@3x.png"
    },
    {
        "fullName": "Riley Stillman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479388@3x.png"
    },
    {
        "fullName": "Taylor Raddysh",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479390@3x.png"
    },
    {
        "fullName": "MacKenzie Entwistle",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480025@3x.png"
    },
    {
        "fullName": "Philipp Kurashev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480798@3x.png"
    },
    {
        "fullName": "Reese Johnson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481147@3x.png"
    },
    {
        "fullName": "Robby Fabbri",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477952@3x.png"
    },
    {
        "fullName": "David Perron",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474102@3x.png"
    },
    {
        "fullName": "Ben Chiarot",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475279@3x.png"
    },
    {
        "fullName": "Mark Pysyk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475796@3x.png"
    },
    {
        "fullName": "Olli Maatta",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476874@3x.png"
    },
    {
        "fullName": "Oskar Sundqvist",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476897@3x.png"
    },
    {
        "fullName": "Dominik Kubalik",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477330@3x.png"
    },
    {
        "fullName": "Andrew Copp",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477429@3x.png"
    },
    {
        "fullName": "Adam Erne",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477454@3x.png"
    },
    {
        "fullName": "Robert Hagg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477462@3x.png"
    },
    {
        "fullName": "Tyler Bertuzzi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477479@3x.png"
    },
    {
        "fullName": "Jordan Oesterle",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477851@3x.png"
    },
    {
        "fullName": "Jakub Vrana",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477944@3x.png"
    },
    {
        "fullName": "Dylan Larkin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477946@3x.png"
    },
    {
        "fullName": "Alex Nedeljkovic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477968@3x.png"
    },
    {
        "fullName": "Ville Husso",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478024@3x.png"
    },
    {
        "fullName": "Givani Smith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479379@3x.png"
    },
    {
        "fullName": "Filip Hronek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479425@3x.png"
    },
    {
        "fullName": "Matt Luff",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479644@3x.png"
    },
    {
        "fullName": "Michael Rasmussen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479992@3x.png"
    },
    {
        "fullName": "Gustav Lindstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480184@3x.png"
    },
    {
        "fullName": "Pius Suter",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480459@3x.png"
    },
    {
        "fullName": "Filip Zadina",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480821@3x.png"
    },
    {
        "fullName": "Moritz Seider",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481542@3x.png"
    },
    {
        "fullName": "Lucas Raymond",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482078@3x.png"
    },
    {
        "fullName": "Ryan McDonagh",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474151@3x.png"
    },
    {
        "fullName": "Roman Josi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474600@3x.png"
    },
    {
        "fullName": "Mark Borowiecki",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474697@3x.png"
    },
    {
        "fullName": "Matt Duchene",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475168@3x.png"
    },
    {
        "fullName": "Mattias Ekholm",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475218@3x.png"
    },
    {
        "fullName": "Ryan Johansen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475793@3x.png"
    },
    {
        "fullName": "Mikael Granlund",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475798@3x.png"
    },
    {
        "fullName": "Nino Niederreiter",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475799@3x.png"
    },
    {
        "fullName": "Filip Forsberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476887@3x.png"
    },
    {
        "fullName": "Colton Sissons",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476925@3x.png"
    },
    {
        "fullName": "Juuse Saros",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477424@3x.png"
    },
    {
        "fullName": "Michael McCarron",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477446@3x.png"
    },
    {
        "fullName": "Zach Sanford",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477482@3x.png"
    },
    {
        "fullName": "Roland McKeown",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477981@3x.png"
    },
    {
        "fullName": "Jeremy Lauzon",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478468@3x.png"
    },
    {
        "fullName": "Alexandre Carrier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478851@3x.png"
    },
    {
        "fullName": "Dante Fabbro",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479371@3x.png"
    },
    {
        "fullName": "Tanner Jeannot",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479661@3x.png"
    },
    {
        "fullName": "Eeli Tolvanen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480009@3x.png"
    },
    {
        "fullName": "Kevin Lankinen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480947@3x.png"
    },
    {
        "fullName": "Philip Tomasino",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481577@3x.png"
    },
    {
        "fullName": "Niko Mikkola",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478859@3x.png"
    },
    {
        "fullName": "Scott Perunovich",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481059@3x.png"
    },
    {
        "fullName": "Thomas Greiss",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471306@3x.png"
    },
    {
        "fullName": "Robert Bortuzzo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474145@3x.png"
    },
    {
        "fullName": "Marco Scandella",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474618@3x.png"
    },
    {
        "fullName": "Ryan O'Reilly",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475158@3x.png"
    },
    {
        "fullName": "Brayden Schenn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475170@3x.png"
    },
    {
        "fullName": "Nick Leddy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475181@3x.png"
    },
    {
        "fullName": "Justin Faulk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475753@3x.png"
    },
    {
        "fullName": "Vladimir Tarasenko",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475765@3x.png"
    },
    {
        "fullName": "Jordan Binnington",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476412@3x.png"
    },
    {
        "fullName": "Brandon Saad",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476438@3x.png"
    },
    {
        "fullName": "Torey Krug",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476792@3x.png"
    },
    {
        "fullName": "Colton Parayko",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476892@3x.png"
    },
    {
        "fullName": "Pavel Buchnevich",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477402@3x.png"
    },
    {
        "fullName": "Nathan Walker",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477573@3x.png"
    },
    {
        "fullName": "Ivan Barbashev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477964@3x.png"
    },
    {
        "fullName": "Noel Acciari",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478569@3x.png"
    },
    {
        "fullName": "Logan Brown",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479366@3x.png"
    },
    {
        "fullName": "Jordan Kyrou",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479385@3x.png"
    },
    {
        "fullName": "Robert Thomas",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480023@3x.png"
    },
    {
        "fullName": "Alexey Toropchenko",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480281@3x.png"
    },
    {
        "fullName": "Sean Monahan",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477497@3x.png"
    },
    {
        "fullName": "Andrew Mangiapane",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478233@3x.png"
    },
    {
        "fullName": "Oliver Kylington",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478430@3x.png"
    },
    {
        "fullName": "Juuso Valimaki",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479976@3x.png"
    },
    {
        "fullName": "Adam Ruzicka",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480008@3x.png"
    },
    {
        "fullName": "Trevor Lewis",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473453@3x.png"
    },
    {
        "fullName": "Milan Lucic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473473@3x.png"
    },
    {
        "fullName": "Mikael Backlund",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474150@3x.png"
    },
    {
        "fullName": "Jacob Markstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474593@3x.png"
    },
    {
        "fullName": "Christopher Tanev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475690@3x.png"
    },
    {
        "fullName": "Tyler Toffoli",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475726@3x.png"
    },
    {
        "fullName": "Blake Coleman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476399@3x.png"
    },
    {
        "fullName": "Jonathan Huberdeau",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476456@3x.png"
    },
    {
        "fullName": "MacKenzie Weegar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477346@3x.png"
    },
    {
        "fullName": "Elias Lindholm",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477496@3x.png"
    },
    {
        "fullName": "Nikita Zadorov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477507@3x.png"
    },
    {
        "fullName": "Noah Hanifin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478396@3x.png"
    },
    {
        "fullName": "Rasmus Andersson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478397@3x.png"
    },
    {
        "fullName": "Dan Vladar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478435@3x.png"
    },
    {
        "fullName": "Nicolas Meloche",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478467@3x.png"
    },
    {
        "fullName": "Kevin Rooney",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479291@3x.png"
    },
    {
        "fullName": "Dillon Dube",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479346@3x.png"
    },
    {
        "fullName": "Andrew Cogliano",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471699@3x.png"
    },
    {
        "fullName": "Darren Helm",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471794@3x.png"
    },
    {
        "fullName": "Erik Johnson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473446@3x.png"
    },
    {
        "fullName": "Josh Manson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476312@3x.png"
    },
    {
        "fullName": "Gabriel Landeskog",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476455@3x.png"
    },
    {
        "fullName": "Brad Hunt",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476779@3x.png"
    },
    {
        "fullName": "Kurtis MacDermid",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477073@3x.png"
    },
    {
        "fullName": "Anton Blidh",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477320@3x.png"
    },
    {
        "fullName": "J.T. Compher",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477456@3x.png"
    },
    {
        "fullName": "Nathan MacKinnon",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477492@3x.png"
    },
    {
        "fullName": "Valeri Nichushkin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477501@3x.png"
    },
    {
        "fullName": "Andreas Englund",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477971@3x.png"
    },
    {
        "fullName": "Jonas Johansson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477992@3x.png"
    },
    {
        "fullName": "Devon Toews",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478038@3x.png"
    },
    {
        "fullName": "Mikko Rantanen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478420@3x.png"
    },
    {
        "fullName": "Samuel Girard",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479398@3x.png"
    },
    {
        "fullName": "Cale Makar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480069@3x.png"
    },
    {
        "fullName": "Alexandar Georgiev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480382@3x.png"
    },
    {
        "fullName": "Pavel Francouz",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480925@3x.png"
    },
    {
        "fullName": "Logan O'Connor",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481186@3x.png"
    },
    {
        "fullName": "Bowen Byram",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481524@3x.png"
    },
    {
        "fullName": "Alex Newhook",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481618@3x.png"
    },
    {
        "fullName": "Calvin Pickard",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475717@3x.png"
    },
    {
        "fullName": "Jesse Puljujarvi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479344@3x.png"
    },
    {
        "fullName": "Kailer Yamamoto",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479977@3x.png"
    },
    {
        "fullName": "Mike Smith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8469608@3x.png"
    },
    {
        "fullName": "Brad Malone",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474089@3x.png"
    },
    {
        "fullName": "Evander Kane",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475169@3x.png"
    },
    {
        "fullName": "Tyson Barrie",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475197@3x.png"
    },
    {
        "fullName": "Greg McKegg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475735@3x.png"
    },
    {
        "fullName": "Zach Hyman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475786@3x.png"
    },
    {
        "fullName": "Jack Campbell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475789@3x.png"
    },
    {
        "fullName": "Ryan Nugent-Hopkins",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476454@3x.png"
    },
    {
        "fullName": "Seth Griffith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476495@3x.png"
    },
    {
        "fullName": "Cody Ceci",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476879@3x.png"
    },
    {
        "fullName": "Devin Shore",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476913@3x.png"
    },
    {
        "fullName": "Brett Kulak",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476967@3x.png"
    },
    {
        "fullName": "Mattias Janmark",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477406@3x.png"
    },
    {
        "fullName": "Darnell Nurse",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477498@3x.png"
    },
    {
        "fullName": "Leon Draisaitl",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477934@3x.png"
    },
    {
        "fullName": "Warren Foegele",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477998@3x.png"
    },
    {
        "fullName": "Connor McDavid",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478402@3x.png"
    },
    {
        "fullName": "Derek Ryan",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478585@3x.png"
    },
    {
        "fullName": "Markus Niemelainen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479338@3x.png"
    },
    {
        "fullName": "Stuart Skinner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479973@3x.png"
    },
    {
        "fullName": "Dmitri Samorukov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480041@3x.png"
    },
    {
        "fullName": "Ryan McLeod",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480802@3x.png"
    },
    {
        "fullName": "Evan Bouchard",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480803@3x.png"
    },
    {
        "fullName": "Philip Broberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481598@3x.png"
    },
    {
        "fullName": "Tucker Poolman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477359@3x.png"
    },
    {
        "fullName": "Nils Hoglander",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481535@3x.png"
    },
    {
        "fullName": "Justin Dowling",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475413@3x.png"
    },
    {
        "fullName": "Spencer Martin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477484@3x.png"
    },
    {
        "fullName": "Dakota Joshua",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478057@3x.png"
    },
    {
        "fullName": "Jack Rathbone",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480056@3x.png"
    },
    {
        "fullName": "Vasily Podkolzin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481617@3x.png"
    },
    {
        "fullName": "Luke Schenn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474568@3x.png"
    },
    {
        "fullName": "Tyler Myers",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474574@3x.png"
    },
    {
        "fullName": "Oliver Ekman-Larsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475171@3x.png"
    },
    {
        "fullName": "J.T. Miller",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476468@3x.png"
    },
    {
        "fullName": "Tanner Pearson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476871@3x.png"
    },
    {
        "fullName": "Kyle Burroughs",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477335@3x.png"
    },
    {
        "fullName": "Jason Dickinson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477450@3x.png"
    },
    {
        "fullName": "Bo Horvat",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477500@3x.png"
    },
    {
        "fullName": "Curtis Lazar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477508@3x.png"
    },
    {
        "fullName": "Thatcher Demko",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477967@3x.png"
    },
    {
        "fullName": "Travis Dermott",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478408@3x.png"
    },
    {
        "fullName": "Brock Boeser",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478444@3x.png"
    },
    {
        "fullName": "Conor Garland",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478856@3x.png"
    },
    {
        "fullName": "Elias Pettersson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480012@3x.png"
    },
    {
        "fullName": "Collin Delia",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480420@3x.png"
    },
    {
        "fullName": "Quinn Hughes",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480800@3x.png"
    },
    {
        "fullName": "Ilya Mikheyev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481624@3x.png"
    },
    {
        "fullName": "Jakob Silfverberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475164@3x.png"
    },
    {
        "fullName": "John Moore",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475186@3x.png"
    },
    {
        "fullName": "Justin Kirkland",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477993@3x.png"
    },
    {
        "fullName": "Chase De Leo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478029@3x.png"
    },
    {
        "fullName": "Glenn Gawdin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478446@3x.png"
    },
    {
        "fullName": "Isac Lundestrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480806@3x.png"
    },
    {
        "fullName": "Simon Benoit",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481122@3x.png"
    },
    {
        "fullName": "Kevin Shattenkirk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474031@3x.png"
    },
    {
        "fullName": "Adam Henrique",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474641@3x.png"
    },
    {
        "fullName": "Derek Grant",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474683@3x.png"
    },
    {
        "fullName": "Cam Fowler",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475764@3x.png"
    },
    {
        "fullName": "Sam Carrick",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475842@3x.png"
    },
    {
        "fullName": "John Klingberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475906@3x.png"
    },
    {
        "fullName": "John Gibson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476434@3x.png"
    },
    {
        "fullName": "Ryan Strome",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476458@3x.png"
    },
    {
        "fullName": "Anthony Stolarz",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476932@3x.png"
    },
    {
        "fullName": "Frank Vatrano",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478366@3x.png"
    },
    {
        "fullName": "Colton White",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478841@3x.png"
    },
    {
        "fullName": "Troy Terry",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478873@3x.png"
    },
    {
        "fullName": "Olli Juolevi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479355@3x.png"
    },
    {
        "fullName": "Max Jones",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479368@3x.png"
    },
    {
        "fullName": "Josh Mahura",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479372@3x.png"
    },
    {
        "fullName": "Max Comtois",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480031@3x.png"
    },
    {
        "fullName": "Austin Strand",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480467@3x.png"
    },
    {
        "fullName": "Trevor Zegras",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481533@3x.png"
    },
    {
        "fullName": "Jamie Drysdale",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482142@3x.png"
    },
    {
        "fullName": "Riley Barber",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477003@3x.png"
    },
    {
        "fullName": "Ryan Suter",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470600@3x.png"
    },
    {
        "fullName": "Joe Pavelski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470794@3x.png"
    },
    {
        "fullName": "Jamie Benn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473994@3x.png"
    },
    {
        "fullName": "Alexander Petrovic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475755@3x.png"
    },
    {
        "fullName": "Tyler Seguin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475794@3x.png"
    },
    {
        "fullName": "Scott Wedgewood",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475809@3x.png"
    },
    {
        "fullName": "Jani Hakanpaa",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475825@3x.png"
    },
    {
        "fullName": "Colin Miller",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476525@3x.png"
    },
    {
        "fullName": "Luke Glendening",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476822@3x.png"
    },
    {
        "fullName": "Radek Faksa",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476889@3x.png"
    },
    {
        "fullName": "Esa Lindell",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476902@3x.png"
    },
    {
        "fullName": "Will Butcher",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477355@3x.png"
    },
    {
        "fullName": "Joel Hanley",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477810@3x.png"
    },
    {
        "fullName": "Roope Hintz",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478449@3x.png"
    },
    {
        "fullName": "Denis Gurianov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478495@3x.png"
    },
    {
        "fullName": "Tanner Kero",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478528@3x.png"
    },
    {
        "fullName": "Ryan Shea",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478854@3x.png"
    },
    {
        "fullName": "Joseph Cecconi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478863@3x.png"
    },
    {
        "fullName": "Mason Marchment",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478975@3x.png"
    },
    {
        "fullName": "Riley Tufte",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479362@3x.png"
    },
    {
        "fullName": "Fredrik Karlstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479518@3x.png"
    },
    {
        "fullName": "Rhett Gardner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479587@3x.png"
    },
    {
        "fullName": "Jake Oettinger",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479979@3x.png"
    },
    {
        "fullName": "Jason Robertson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480027@3x.png"
    },
    {
        "fullName": "Miro Heiskanen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480036@3x.png"
    },
    {
        "fullName": "Jacob Peterson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480216@3x.png"
    },
    {
        "fullName": "Marian Studenic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480226@3x.png"
    },
    {
        "fullName": "Oskar Back",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480840@3x.png"
    },
    {
        "fullName": "Ty Dellandrea",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480848@3x.png"
    },
    {
        "fullName": "Riley Damiani",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480988@3x.png"
    },
    {
        "fullName": "Thomas Harley",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481581@3x.png"
    },
    {
        "fullName": "Joel Kiviranta",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481641@3x.png"
    },
    {
        "fullName": "Jerad Rosburg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482051@3x.png"
    },
    {
        "fullName": "Adam Scheel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482642@3x.png"
    },
    {
        "fullName": "Drew Doughty",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474563@3x.png"
    },
    {
        "fullName": "Sean Walker",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480336@3x.png"
    },
    {
        "fullName": "Jaret Anderson-Dolan",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479994@3x.png"
    },
    {
        "fullName": "Gabriel Vilardi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480014@3x.png"
    },
    {
        "fullName": "Alexander Edler",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471303@3x.png"
    },
    {
        "fullName": "Anze Kopitar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471685@3x.png"
    },
    {
        "fullName": "Jonathan Quick",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471734@3x.png"
    },
    {
        "fullName": "Phillip Danault",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476479@3x.png"
    },
    {
        "fullName": "Cal Petersen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477361@3x.png"
    },
    {
        "fullName": "Pheonix Copley",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477831@3x.png"
    },
    {
        "fullName": "Kevin Fiala",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477942@3x.png"
    },
    {
        "fullName": "Adrian Kempe",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477960@3x.png"
    },
    {
        "fullName": "Brendan Lemieux",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477962@3x.png"
    },
    {
        "fullName": "Viktor Arvidsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478042@3x.png"
    },
    {
        "fullName": "Matt Roy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478911@3x.png"
    },
    {
        "fullName": "Carl Grundstrom",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479336@3x.png"
    },
    {
        "fullName": "Jacob Moverare",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479421@3x.png"
    },
    {
        "fullName": "Trevor Moore",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479675@3x.png"
    },
    {
        "fullName": "Mikey Anderson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479998@3x.png"
    },
    {
        "fullName": "Lias Andersson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480072@3x.png"
    },
    {
        "fullName": "Alex Iafallo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480113@3x.png"
    },
    {
        "fullName": "Sean Durzi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480434@3x.png"
    },
    {
        "fullName": "Rasmus Kupari",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480845@3x.png"
    },
    {
        "fullName": "Blake Lizotte",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481481@3x.png"
    },
    {
        "fullName": "Arthur Kaliyev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481560@3x.png"
    },
    {
        "fullName": "Tobias Bjornfot",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481600@3x.png"
    },
    {
        "fullName": "Jordan Spence",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481606@3x.png"
    },
    {
        "fullName": "Quinton Byfield",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482124@3x.png"
    },
    {
        "fullName": "Kevin Labanc",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478099@3x.png"
    },
    {
        "fullName": "Markus Nutivaara",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478906@3x.png"
    },
    {
        "fullName": "Marc-Edouard Vlasic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471709@3x.png"
    },
    {
        "fullName": "James Reimer",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473503@3x.png"
    },
    {
        "fullName": "Nick Bonino",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474009@3x.png"
    },
    {
        "fullName": "Logan Couture",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474053@3x.png"
    },
    {
        "fullName": "Erik Karlsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474578@3x.png"
    },
    {
        "fullName": "Matt Nieto",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476442@3x.png"
    },
    {
        "fullName": "Tomas Hertl",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476881@3x.png"
    },
    {
        "fullName": "Matt Benning",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476988@3x.png"
    },
    {
        "fullName": "Jaycob Megna",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477034@3x.png"
    },
    {
        "fullName": "Timo Meier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478414@3x.png"
    },
    {
        "fullName": "Adin Hill",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478499@3x.png"
    },
    {
        "fullName": "Noah Gregor",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479393@3x.png"
    },
    {
        "fullName": "Jeffrey Viel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479705@3x.png"
    },
    {
        "fullName": "Jonah Gadjovich",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479981@3x.png"
    },
    {
        "fullName": "Sasha Chmelevski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480053@3x.png"
    },
    {
        "fullName": "Scott Reedy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480060@3x.png"
    },
    {
        "fullName": "Radim Simek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480160@3x.png"
    },
    {
        "fullName": "Ryan Merkley",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480847@3x.png"
    },
    {
        "fullName": "Jasper Weatherby",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481061@3x.png"
    },
    {
        "fullName": "Nico Sturm",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481477@3x.png"
    },
    {
        "fullName": "Santeri Hatakka",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481701@3x.png"
    },
    {
        "fullName": "Alexander Barabanov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482222@3x.png"
    },
    {
        "fullName": "Boone Jenner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476432@3x.png"
    },
    {
        "fullName": "Alexandre Texier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480074@3x.png"
    },
    {
        "fullName": "Daniil Tarasov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480193@3x.png"
    },
    {
        "fullName": "Mathieu Olivier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479671@3x.png"
    },
    {
        "fullName": "Jake Christiansen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481161@3x.png"
    },
    {
        "fullName": "Jakub Voracek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474161@3x.png"
    },
    {
        "fullName": "Gustav Nyquist",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474679@3x.png"
    },
    {
        "fullName": "Erik Gudbranson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475790@3x.png"
    },
    {
        "fullName": "Johnny Gaudreau",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476346@3x.png"
    },
    {
        "fullName": "Sean Kuraly",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476374@3x.png"
    },
    {
        "fullName": "Brendan Gaunce",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476867@3x.png"
    },
    {
        "fullName": "Joonas Korpisalo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476914@3x.png"
    },
    {
        "fullName": "Elvis Merzlikins",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478007@3x.png"
    },
    {
        "fullName": "Jack Roslovic",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478458@3x.png"
    },
    {
        "fullName": "Zach Werenski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478460@3x.png"
    },
    {
        "fullName": "Vladislav Gavrikov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478882@3x.png"
    },
    {
        "fullName": "Patrik Laine",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479339@3x.png"
    },
    {
        "fullName": "Andrew Peeke",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479369@3x.png"
    },
    {
        "fullName": "Jake Bean",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479402@3x.png"
    },
    {
        "fullName": "Justin Danforth",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479941@3x.png"
    },
    {
        "fullName": "Gavin Bayreuther",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479945@3x.png"
    },
    {
        "fullName": "Carson Meyer",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480292@3x.png"
    },
    {
        "fullName": "Eric Robinson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480762@3x.png"
    },
    {
        "fullName": "Adam Boqvist",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480871@3x.png"
    },
    {
        "fullName": "Yegor Chinakhov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482475@3x.png"
    },
    {
        "fullName": "Cole Sillinger",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482705@3x.png"
    },
    {
        "fullName": "Filip Gustavsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479406@3x.png"
    },
    {
        "fullName": "Marc-Andre Fleury",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470594@3x.png"
    },
    {
        "fullName": "Alex Goligoski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471274@3x.png"
    },
    {
        "fullName": "Jared Spurgeon",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474716@3x.png"
    },
    {
        "fullName": "Dmitry Kulikov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475179@3x.png"
    },
    {
        "fullName": "Marcus Foligno",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475220@3x.png"
    },
    {
        "fullName": "Mats Zuccarello",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475692@3x.png"
    },
    {
        "fullName": "Jon Merrill",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475750@3x.png"
    },
    {
        "fullName": "Jonas Brodin",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476463@3x.png"
    },
    {
        "fullName": "Matt Dumba",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476856@3x.png"
    },
    {
        "fullName": "Ryan Hartman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477451@3x.png"
    },
    {
        "fullName": "Frederick Gaudreau",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477919@3x.png"
    },
    {
        "fullName": "Jacob Middleton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478136@3x.png"
    },
    {
        "fullName": "Jordan Greenway",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478413@3x.png"
    },
    {
        "fullName": "Joel Eriksson Ek",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478493@3x.png"
    },
    {
        "fullName": "Kirill Kaprizov",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478864@3x.png"
    },
    {
        "fullName": "Tyson Jost",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479370@3x.png"
    },
    {
        "fullName": "Brandon Duhaime",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479520@3x.png"
    },
    {
        "fullName": "Connor Dewar",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480980@3x.png"
    },
    {
        "fullName": "Matt Boldy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481557@3x.png"
    },
    {
        "fullName": "Cole Perfetti",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482149@3x.png"
    },
    {
        "fullName": "Jansen Harkins",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478424@3x.png"
    },
    {
        "fullName": "Michael Eyssimont",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479591@3x.png"
    },
    {
        "fullName": "Kristian Vesalainen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480005@3x.png"
    },
    {
        "fullName": "Dylan Samberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480049@3x.png"
    },
    {
        "fullName": "Morgan Barron",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480289@3x.png"
    },
    {
        "fullName": "Ville Heinola",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481572@3x.png"
    },
    {
        "fullName": "Blake Wheeler",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471218@3x.png"
    },
    {
        "fullName": "Brenden Dillon",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475455@3x.png"
    },
    {
        "fullName": "Dylan DeMelo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476331@3x.png"
    },
    {
        "fullName": "Adam Lowry",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476392@3x.png"
    },
    {
        "fullName": "Mark Scheifele",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476460@3x.png"
    },
    {
        "fullName": "Connor Hellebuyck",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476945@3x.png"
    },
    {
        "fullName": "Dominic Toninato",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476952@3x.png"
    },
    {
        "fullName": "Nate Schmidt",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477220@3x.png"
    },
    {
        "fullName": "Josh Morrissey",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477504@3x.png"
    },
    {
        "fullName": "Nikolaj Ehlers",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477940@3x.png"
    },
    {
        "fullName": "Kyle Connor",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478398@3x.png"
    },
    {
        "fullName": "Kyle Capobianco",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478476@3x.png"
    },
    {
        "fullName": "Logan Stanley",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479378@3x.png"
    },
    {
        "fullName": "David Rittich",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479496@3x.png"
    },
    {
        "fullName": "Neal Pionk",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480145@3x.png"
    },
    {
        "fullName": "Conor Timmins",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479982@3x.png"
    },
    {
        "fullName": "Lawson Crouse",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478474@3x.png"
    },
    {
        "fullName": "Barrett Hayton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480849@3x.png"
    },
    {
        "fullName": "Andrew Ladd",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8471217@3x.png"
    },
    {
        "fullName": "Zack Kassian",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475178@3x.png"
    },
    {
        "fullName": "Patrik Nemeth",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475747@3x.png"
    },
    {
        "fullName": "Nick Bjugstad",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475760@3x.png"
    },
    {
        "fullName": "Travis Boyd",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476329@3x.png"
    },
    {
        "fullName": "Jon Gillies",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476903@3x.png"
    },
    {
        "fullName": "Shayne Gostisbehere",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476906@3x.png"
    },
    {
        "fullName": "Liam O'Brien",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477070@3x.png"
    },
    {
        "fullName": "Josh Brown",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477384@3x.png"
    },
    {
        "fullName": "Nick Ritchie",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477941@3x.png"
    },
    {
        "fullName": "Nick Schmaltz",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477951@3x.png"
    },
    {
        "fullName": "Dysin Mayo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478062@3x.png"
    },
    {
        "fullName": "Christian Fischer",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478432@3x.png"
    },
    {
        "fullName": "Karel Vejmelka",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478872@3x.png"
    },
    {
        "fullName": "Clayton Keller",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479343@3x.png"
    },
    {
        "fullName": "Jakob Chychrun",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479345@3x.png"
    },
    {
        "fullName": "Troy Stecher",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479442@3x.png"
    },
    {
        "fullName": "Vladislav Kolyachonok",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481609@3x.png"
    },
    {
        "fullName": "J.J. Moser",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482655@3x.png"
    },
    {
        "fullName": "Reilly Smith",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475191@3x.png"
    },
    {
        "fullName": "Laurent Brossoit",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476316@3x.png"
    },
    {
        "fullName": "Brett Howden",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479353@3x.png"
    },
    {
        "fullName": "Nolan Patrick",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479974@3x.png"
    },
    {
        "fullName": "Nicolas Hague",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479980@3x.png"
    },
    {
        "fullName": "Alec Martinez",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474166@3x.png"
    },
    {
        "fullName": "Alex Pietrangelo",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474565@3x.png"
    },
    {
        "fullName": "Michael Hutchinson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474636@3x.png"
    },
    {
        "fullName": "Brayden McNabb",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475188@3x.png"
    },
    {
        "fullName": "Robin Lehner",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475215@3x.png"
    },
    {
        "fullName": "Mark Stone",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475913@3x.png"
    },
    {
        "fullName": "William Karlsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476448@3x.png"
    },
    {
        "fullName": "Jonathan Marchessault",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476539@3x.png"
    },
    {
        "fullName": "Chandler Stephenson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476905@3x.png"
    },
    {
        "fullName": "Ben Hutton",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477018@3x.png"
    },
    {
        "fullName": "Shea Theodore",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477447@3x.png"
    },
    {
        "fullName": "William Carrier",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477478@3x.png"
    },
    {
        "fullName": "Michael Amadio",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478020@3x.png"
    },
    {
        "fullName": "Jack Eichel",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478403@3x.png"
    },
    {
        "fullName": "Nicolas Roy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478462@3x.png"
    },
    {
        "fullName": "Logan Thompson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480313@3x.png"
    },
    {
        "fullName": "Zach Whitecloud",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480727@3x.png"
    },
    {
        "fullName": "Brandon Tanev",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479293@3x.png"
    },
    {
        "fullName": "Austin Poganski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478040@3x.png"
    },
    {
        "fullName": "Andrew Poturalski",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479249@3x.png"
    },
    {
        "fullName": "Kole Lind",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479986@3x.png"
    },
    {
        "fullName": "Morgan Geekie",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479987@3x.png"
    },
    {
        "fullName": "Alexander True",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480384@3x.png"
    },
    {
        "fullName": "Brogan Rafferty",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8481479@3x.png"
    },
    {
        "fullName": "Jordan Eberle",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474586@3x.png"
    },
    {
        "fullName": "Justin Schultz",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474602@3x.png"
    },
    {
        "fullName": "Martin Jones",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474889@3x.png"
    },
    {
        "fullName": "Jaden Schwartz",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475768@3x.png"
    },
    {
        "fullName": "Joonas Donskoi",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475820@3x.png"
    },
    {
        "fullName": "Philipp Grubauer",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475831@3x.png"
    },
    {
        "fullName": "Magnus Hellberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476433@3x.png"
    },
    {
        "fullName": "Adam Larsson",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476457@3x.png"
    },
    {
        "fullName": "Jamie Oleksiak",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476467@3x.png"
    },
    {
        "fullName": "Yanni Gourde",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476826@3x.png"
    },
    {
        "fullName": "Chris Driedger",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476904@3x.png"
    },
    {
        "fullName": "Carson Soucy",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477369@3x.png"
    },
    {
        "fullName": "John Hayden",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477401@3x.png"
    },
    {
        "fullName": "Oliver Bjorkstrand",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477416@3x.png"
    },
    {
        "fullName": "Andre Burakovsky",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477444@3x.png"
    },
    {
        "fullName": "Alex Wennberg",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477505@3x.png"
    },
    {
        "fullName": "Jared McCann",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477955@3x.png"
    },
    {
        "fullName": "Ryan Donato",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477987@3x.png"
    },
    {
        "fullName": "Vince Dunn",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478407@3x.png"
    },
    {
        "fullName": "Will Borgen",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478840@3x.png"
    },
    {
        "fullName": "Cameron Hughes",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478888@3x.png"
    },
    {
        "fullName": "Michal Kempny",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8479482@3x.png"
    },
    {
        "fullName": "Karson Kuhlman",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8480901@3x.png"
    },
    {
        "fullName": "Matty Beniers",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482665@3x.png"
    },
    {
        "fullName": "Jesper Froden",
        "image": "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8482834@3x.png"
    }
]

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// get a random image and player name from players_list
function getRandom() {
    const randomIndex = Math.floor(Math.random() * players_list.length);
    const randomImage = players_list[randomIndex].image;
    const randomName = players_list[randomIndex].fullName;
    return [randomImage, randomName];
}

// loop 10 times to get 10 random players
let randomPlayers = [];
for (let i = 0; i < 10; i++) {
    randomPlayers.push(getRandom());
}


let questions = [];
for (let i = 0; i < randomPlayers.length; i++) {
    // randomly assign a player name to choiceA, choiceB, choiceC, choiceD
    const randomPlayer = randomPlayers[i];
    const randomImage = randomPlayer[0];
    const randomName = randomPlayer[1];
    const randomChoice = Math.floor(Math.random() * 4);
    if (randomChoice === 0) {
        questions.push({
            question: "Who is this player?",
            imgSrc: randomImage,
            choiceA: randomName,
            choiceB: getRandom()[1],
            choiceC: getRandom()[1],
            choiceD: getRandom()[1],
            correct: "A"
        });
    }
    else if (randomChoice === 1) {
        questions.push({
            question: "Who is this player?",
            imgSrc: randomImage,
            choiceA: getRandom()[1],
            choiceB: randomName,
            choiceC: getRandom()[1],
            choiceD: getRandom()[1],
            correct: "B"
        });
    }
    else if (randomChoice === 2) {
        questions.push({
            question: "Who is this player?",
            imgSrc: randomImage,
            choiceA: getRandom()[1],
            choiceB: getRandom()[1],
            choiceC: randomName,
            choiceD: getRandom()[1],
            correct: "C"
        });
    }
    else {
        questions.push({
            question: "Who is this player?",
            imgSrc: randomImage,
            choiceA: getRandom()[1],
            choiceB: getRandom()[1],
            choiceC: getRandom()[1],
            choiceD: randomName,
            correct: "D"
        });
    }
}

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 5min
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
