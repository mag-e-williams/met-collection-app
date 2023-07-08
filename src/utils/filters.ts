export type FilterCategory = {
  title: string,
  category: string,
  urlId: string,
}

type GenerateFilterCategoryParams = {
  category: string,
  urlId: string,
  titles: string[],
}

function generateFilterCategory({ category, urlId, titles }: GenerateFilterCategoryParams): FilterCategory[] {
  return titles.map(title => ({ title, category, urlId }));
}

const materials: FilterCategory[] = generateFilterCategory({
  category: 'Object Type / Materials',
  urlId: 'material',
  titles: [
    "Aagte", "Amulets", "Aquatint", "Arms", "Beads", "Bone", "Books", "Bottles", "Bowls", "Bows", "Bronze", "Canvas", "Ceramics", "Chalcedony", "Chordophones",
    "Clay", "Color lithographs", "Copper", "Copper alloy", "Costume", "Dishes", "Drawings", "Drums", "Earthenware", "Ebony", "Edged weapons", "Engraving",
    "Ephemera", "Etching", "Faience", "Figures", "Figurines", "Frogs", "Furniture", "Gilt", "Glass", "Glaze", "Glazing", "Gold", "Gold alloy", "Graphite",
    "Hair", "Hanging scrolls", "Horsehair", "Idiophones", "Ink", "Iron", "Iron alloy", "Iron and iron alloy", "Ivory", "Jade", "Jars", "Jewelry", "Knives",
    "Lacquer", "Lapis lazuli", "Leather", "Limestone", "Lithographs", "Membranophones", "Metal", "Metalwork", "Molds", "Musical instruments", "Netsukes",
    "Paintings", "Paper", "Pendants", "Photograms", "Photographs", "Photogravures", "Photomechanical reproductions", "Planographic prints", "Porcelain",
    "Pottery", "Printing blocks", "Prints", "Relief prints", "Scroll paintings", "Scrolls", "Sculpture", "Seals", "Silk", "Silver", "Silver alloy",
    "Silver-dye bleach prints", "Snuff bottles", "Snuff containers", "Stamps", "Statues", "Stone", "Swords", "Vases", "Vessels", "Violins", "Watercolors",
    "Wood", "Wood blocks", "Wood engravings", "Woodcuts"
  ]
});

const regions: FilterCategory[] = generateFilterCategory({
  category: 'Geographic Location',
  urlId: 'geolocation',
  titles: [
    "Abydos", "Africa", "Al Lisht", "Amarna", "Anatolia", "Angers", "Antwerp", "Asia", "Augsburg", "Austria", "Baden-Württemberg", "Bavaria", "Beaune",
    "Belgium", "Bennington", "Birmingham", "Bohemia", "Brooklyn", "Burgundy", "Cambodia", "Canada", "Chelsea", "China", "Colima", "Colombia", "Costa Rica",
    "Cyprus", "Czech Republic", "Denmark", "Egypt", "England", "Europe", "Flanders", "Florence", "France", "Frankfurt-am-Main", "Germany", "Ghana", "Greece",
    "Guerrero", "Hesse", "Indonesia", "Innsbruck", "Iran", "Iraq", "Irian Jaya", "Italy", "Japan", "Java", "Korea", "Laconia", "Lao", "Leipzig", "London",
    "Luristan", "Markneukirchen", "Massachusetts", "Meissen", "Mersa Matrûh", "Mexico", "Missouri", "Moscow", "Netherlands", "New Mexico", "New York",
    "New York City", "North and Central America", "Ohio", "Padua", "Panama", "Paris", "Peloponnese", "Pennsylvania", "Peru", "Philadelphia", "Roman Empire",
    "Rome", "Russia", "Saint Petersburg", "Saint-Amand-en-Puisaye", "Saqqara", "Saxony", "South America", "Southwest", "Staffordshire", "Stuttgart",
    "Switzerland", "Thailand", "Thebes", "Turkey", "Tuscany", "Tyrol", "United Kingdom", "United States", "Upper Egypt", "Urbania", "Veracruz", "Vermont",
    "Vietnam", "West Midlands"
  ]
});

const dates: FilterCategory[] = generateFilterCategory({
  category: 'Date / Era',
  urlId: 'era',
  titles: [
    "A.D. 1800-1900", "A.D. 1900-present", "A.D. 1600-1800", "2000-1000 B.C.", "1000 B.C.-A.D. 1", "A.D. 1400-1600", "8000-2000 B.C.", "A.D. 500-1000",
    "A.D. 1-500", "A.D. 1000-1400"
  ]
});

const departments: FilterCategory[] = generateFilterCategory({
  category: 'Department',
  urlId: 'department',
  titles: [
    "The American Wing", "Ancient Near Eastern Art", "Arms and Armor", "Asian Art", "Brooklyn Museum Costume Collection", "The Cloisters", "Costume Institute",
    "Drawings and Prints", "Egyptian Art", "European Paintings", "European Sculpture and Decorative Arts", "Greek and Roman Art", "Medieval Art",
    "The Michael C. Rockefeller Wing", "Modern and Contemporary Art", "Musical Instruments", "Photographs", "Robert Lehman Collection"
  ]
});

export const checkboxFilters: FilterCategory[] = [
  { title: "Highlights", category: 'checkboxes', urlId: 'isHighlight' },
  { title: "Artworks With Image", category: 'checkboxes', urlId: 'hasImage' },
  { title: "Artworks on Display", category: 'checkboxes', urlId: 'isOnView' },
  { title: "Object Type / Materials", category: 'dropdown', urlId: 'materials' },
  { title: "Geographic Location", category: 'dropdown', urlId: 'geolocation' },
  { title: "Date / Era", category: 'dropdown', urlId: 'era' },
  { title: "Department", category: 'dropdown', urlId: 'department' },

];

export const filters: { [key: string]: FilterCategory[] } = {
  'Object Type / Materials': materials,
  'Geographic Location': regions,
  'Date / Era': dates,
  'Department': departments,
};



