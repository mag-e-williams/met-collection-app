export type FilterCategory = {
  title: string,
  category: string,
}

const materials: FilterCategory[] = [
  {title: "Aagte", category: 'material'}, 
  {title: "Amulets", category: 'material'}, 
  {title: "Aquatint", category: 'material'}, 
  {title: "Arms", category: 'material'}, 
  {title: "Beads", category: 'material'}, 
  {title: "Bone", category: 'material'}, 
  {title: "Books", category: 'material'}, 
  {title: "Bottles", category: 'material'}, 
  {title: "Bowls", category: 'material'}, 
  {title: "Bows", category: 'material'}, 
  {title: "Bronze", category: 'material'}, 
  {title: "Canvas", category: 'material'}, 
  {title: "Ceramics", category: 'material'}, 
  {title: "Chalcedony", category: 'material'}, 
  {title: "Chordophones", category: 'material'}, 
  {title: "Clay", category: 'material'}, 
  {title: "Color lithographs", category: 'material'}, 
  {title: "Copper", category: 'material'}, 
  {title: "Copper alloy", category: 'material'}, 
  {title: "Costume", category: 'material'}, 
  {title: "Dishes", category: 'material'}, 
  {title: "Drawings", category: 'material'}, 
  {title: "Drums", category: 'material'}, 
  {title: "Earthenware", category: 'material'}, 
  {title: "Ebony", category: 'material'}, 
  {title: "Edged weapons", category: 'material'}, 
  {title: "Engraving", category: 'material'}, 
  {title: "Ephemera", category: 'material'}, 
  {title: "Etching", category: 'material'}, 
  {title: "Faience", category: 'material'}, 
  {title: "Figures", category: 'material'}, 
  {title: "Figurines", category: 'material'}, 
  {title: "Frogs", category: 'material'}, 
  {title: "Furniture", category: 'material'}, 
  {title: "Gilt", category: 'material'}, 
  {title: "Glass", category: 'material'}, 
  {title: "Glaze", category: 'material'}, 
  {title: "Glazing", category: 'material'}, 
  {title: "Gold", category: 'material'}, 
  {title: "Gold alloy", category: 'material'}, 
  {title: "Graphite", category: 'material'}, 
  {title: "Hair", category: 'material'}, 
  {title: "Hanging scrolls", category: 'material'}, 
  {title: "Horsehair", category: 'material'}, 
  {title: "Idiophones", category: 'material'}, 
  {title: "Ink", category: 'material'}, 
  {title: "Iron", category: 'material'}, 
  {title: "Iron alloy", category: 'material'}, 
  {title: "Iron and iron alloy", category: 'material'}, 
  {title: "Ivory", category: 'material'}, 
  {title: "Jade", category: 'material'}, 
  {title: "Jars", category: 'material'}, 
  {title: "Jewelry", category: 'material'}, 
  {title: "Knives", category: 'material'}, 
  {title: "Lacquer", category: 'material'}, 
  {title: "Lapis lazuli", category: 'material'}, 
  {title: "Leather", category: 'material'}, 
  {title: "Limestone", category: 'material'}, 
  {title: "Lithographs", category: 'material'}, 
  {title: "Membranophones", category: 'material'}, 
  {title: "Metal", category: 'material'}, 
  {title: "Metalwork", category: 'material'}, 
  {title: "Molds", category: 'material'}, 
  {title: "Musical instruments", category: 'material'}, 
  {title: "Netsukes", category: 'material'}, 
  {title: "Paintings", category: 'material'}, 
  {title: "Paper", category: 'material'}, 
  {title: "Pendants", category: 'material'}, 
  {title: "Photograms", category: 'material'}, 
  {title: "Photographs", category: 'material'}, 
  {title: "Photogravures", category: 'material'}, 
  {title: "Photomechanical reproductions", category: 'material'}, 
  {title: "Planographic prints", category: 'material'}, 
  {title: "Porcelain", category: 'material'}, 
  {title: "Pottery", category: 'material'}, 
  {title: "Printing blocks", category: 'material'}, 
  {title: "Prints", category: 'material'}, 
  {title: "Relief prints", category: 'material'}, 
  {title: "Scroll paintings", category: 'material'}, 
  {title: "Scrolls", category: 'material'}, 
  {title: "Sculpture", category: 'material'}, 
  {title: "Seals", category: 'material'}, 
  {title: "Silk", category: 'material'}, 
  {title: "Silver", category: 'material'}, 
  {title: "Silver alloy", category: 'material'}, 
  {title: "Silver-dye bleach prints", category: 'material'}, 
  {title: "Snuff bottles", category: 'material'}, 
  {title: "Snuff containers", category: 'material'}, 
  {title: "Stamps", category: 'material'}, 
  {title: "Statues", category: 'material'}, 
  {title: "Stone", category: 'material'}, 
  {title: "Swords", category: 'material'}, 
  {title: "Vases", category: 'material'}, 
  {title: "Vessels", category: 'material'}, 
  {title: "Violins", category: 'material'}, 
  {title: "Watercolors", category: 'material'}, 
  {title: "Wood", category: 'material'}, 
  {title: "Wood blocks", category: 'material'}, 
  {title: "Wood engravings", category: 'material'},
  {title: "Woodcuts", category: 'material'}
]

const regions: FilterCategory[] = [
  {title: "Abydos", category: "region"},
  {title: "Africa", category: "region"},
  {title: "Al Lisht", category: "region"},
  {title: "Amarna", category: "region"},
  {title: "Anatolia", category: "region"},
  {title: "Angers", category: "region"},
  {title: "Antwerp", category: "region"},
  {title: "Asia", category: "region"},
  {title: "Augsburg", category: "region"},
  {title: "Austria", category: "region"},
  {title: "Baden-Württemberg", category: "region"},
  {title: "Bavaria", category: "region"},
  {title: "Beaune", category: "region"},
  {title: "Belgium", category: "region"},
  {title: "Bennington", category: "region"},
  {title: "Birmingham", category: "region"},
  {title: "Bohemia", category: "region"},
  {title: "Brooklyn", category: "region"},
  {title: "Burgundy", category: "region"},
  {title: "Cambodia", category: "region"},
  {title: "Canada", category: "region"},
  {title: "Chelsea", category: "region"},
  {title: "China", category: "region"},
  {title: "Colima", category: "region"},
  {title: "Colombia", category: "region"},
  {title: "Costa Rica", category: "region"},
  {title: "Cyprus", category: "region"},
  {title: "Czech Republic", category: "region"},
  {title: "Denmark", category: "region"},
  {title: "Egypt", category: "region"},
  {title: "England", category: "region"},
  {title: "Europe", category: "region"},
  {title: "Flanders", category: "region"},
  {title: "Florence", category: "region"},
  {title: "France", category: "region"},
  {title: "Frankfurt-am-Main", category: "region"},
  {title: "Germany", category: "region"},
  {title: "Ghana", category: "region"},
  {title: "Greece", category: "region"},
  {title: "Guerrero", category: "region"},
  {title: "Hesse", category: "region"},
  {title: "Indonesia", category: "region"},
  {title: "Innsbruck", category: "region"},
  {title: "Iran", category: "region"},
  {title: "Iraq", category: "region"},
  {title: "Irian Jaya", category: "region"},
  {title: "Italy", category: "region"},
  {title: "Japan", category: "region"},
  {title: "Java", category: "region"},
  {title: "Korea", category: "region"},
  {title: "Laconia", category: "region"},
  {title: "Lao", category: "region"},
  {title: "Leipzig", category: "region"},
  {title: "London", category: "region"},
  {title: "Luristan", category: "region"},
  {title: "Markneukirchen", category: "region"},
  {title: "Massachusetts", category: "region"},
  {title: "Meissen", category: "region"},
  {title: "Mersa Matrûh", category: "region"},
  {title: "Mexico", category: "region"},
  {title: "Missouri", category: "region"},
  {title: "Moscow", category: "region"},
  {title: "Netherlands", category: "region"},
  {title: "New Mexico", category: "region"},
  {title: "New York", category: "region"},
  {title: "New York City", category: "region"},
  {title: "North and Central America", category: "region"},
  {title: "Ohio", category: "region"},
  {title: "Padua", category: "region"},
  {title: "Panama", category: "region"},
  {title: "Paris", category: "region"},
  {title: "Peloponnese", category: "region"},
  {title: "Pennsylvania", category: "region"},
  {title: "Peru", category: "region"},
  {title: "Philadelphia", category: "region"},
  {title: "Roman Empire", category: "region"},
  {title: "Rome", category: "region"},
  {title: "Russia", category: "region"},
  {title: "Saint Petersburg", category: "region"},
  {title: "Saint-Amand-en-Puisaye", category: "region"},
  {title: "Saqqara", category: "region"},
  {title: "Saxony", category: "region"},
  {title: "South America", category: "region"},
  {title: "Southwest", category: "region"},
  {title: "Staffordshire", category: "region"},
  {title: "Stuttgart", category: "region"},
  {title: "Switzerland", category: "region"},
  {title: "Thailand", category: "region"},
  {title: "Thebes", category: "region"},
  {title: "Turkey", category: "region"},
  {title: "Tuscany", category: "region"},
  {title: "Tyrol", category: "region"},
  {title: "United Kingdom", category: "region"},
  {title: "United States", category: "region"},
  {title: "Upper Egypt", category: "region"},
  {title: "Urbania", category: "region"},
  {title: "Veracruz", category: "region"},
  {title: "Vermont", category: "region"},
  {title: "Vietnam", category: "region"},
  {title: "West Midlands", category: "region"}
]

const dates: FilterCategory[] = [
  {title: "A.D. 1800-1900", category: 'date'},
  {title: "A.D. 1900-present", category: 'date'},
  {title: "A.D. 1600-1800", category: 'date'},
  {title: "2000-1000 B.C.", category: 'date'},
  {title: "1000 B.C.-A.D. 1", category: 'date'},
  {title: "A.D. 1400-1600", category: 'date'},
  {title: "8000-2000 B.C.", category: 'date'},
  {title: "A.D. 500-1000", category: 'date'},
  {title: "A.D. 1-500", category: 'date'},
  {title: "A.D. 1000-1400", category: 'date'}
]

const departments: FilterCategory[] = [
  {title: "The American Wing", category: 'department'}, 
  {title: "Ancient Near Eastern Art", category: 'department'}, 
  {title: "Arms and Armor", category: 'department'}, 
  {title: "Asian Art", category: 'department'}, 
  {title: "Brooklyn Museum Costume Collection", category: 'department'}, 
  {title: "The Cloisters", category: 'department'}, 
  {title: "Costume Institute", category: 'department'}, 
  {title: "Drawings and Prints", category: 'department'}, 
  {title: "Egyptian Art", category: 'department'}, 
  {title: "European Paintings", category: 'department'}, 
  {title: "European Sculpture and Decorative Arts", category: 'department'}, 
  {title: "Greek and Roman Art", category: 'department'}, 
  {title: "Medieval Art", category: 'department'}, 
  {title: "The Michael C. Rockefeller Wing", category: 'department'}, 
  {title: "Modern and Contemporary Art", category: 'department'}, 
  {title: "Musical Instruments", category: 'department'}, 
  {title: "Photographs", category: 'department'}, 
  {title: "Robert Lehman Collection", category: 'department'}
]

export const checkboxFilters: FilterCategory[] = [
  {title: "Highlights", category: 'checkboxes'},
  {title: "Artworks With Image", category: 'checkboxes'},
  {title: "Artworks on Display", category: 'checkboxes'},
]

export const filters: {[key: string]: FilterCategory[]} = {
  'Object Type / Materials': materials,
  'Geographic Location': regions,
  'Date / Era': dates,
  'Department': departments,
}

