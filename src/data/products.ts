export interface Product {
  id: number;
  name: string;
  origin: string;
  roast: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  flavorProfile: string[];
  tastingNotes: string;
  brewingMethods: string[];
  description: string;
  originStory: string;
  price: number;
  weight: string;
  image: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    roast: 'Light',
    flavorProfile: ['Floral', 'Citrus', 'Berry'],
    tastingNotes: 'Bright and complex with notes of jasmine, bergamot, and wild blueberry. A silky body with a clean, tea-like finish that lingers with hints of honey.',
    brewingMethods: ['Pour Over', 'AeroPress', 'Chemex'],
    description: 'Grown at elevations above 1,900 meters in the birthplace of coffee, this single-origin lot represents the pinnacle of Ethiopian coffee craftsmanship.',
    originStory: 'From the misty highlands of Yirgacheffe, where coffee has been cultivated for over a thousand years. Our partner farmers use traditional cultivation methods passed down through generations, hand-picking only the ripest cherries at peak maturity. The beans are naturally processed on raised beds under the African sun.',
    price: 24.99,
    weight: '340g',
    image: '🫘',
    color: 'from-amber-100 to-orange-100'
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    origin: 'Colombia',
    roast: 'Medium',
    flavorProfile: ['Caramel', 'Nutty', 'Chocolate'],
    tastingNotes: 'Rich and balanced with a sweet caramel backbone, toasted almond undertones, and a velvety milk chocolate finish. Medium body with a smooth, clean aftertaste.',
    brewingMethods: ['Drip', 'French Press', 'Espresso'],
    description: 'A classic Colombian offering that showcases the country\'s reputation for producing some of the world\'s most well-balanced coffees.',
    originStory: 'Sourced from small family farms in the Huila region, where volcanic soil and consistent rainfall create ideal growing conditions. The Supremo grade represents the largest and most carefully selected beans, hand-sorted by experienced growers who have perfected their craft over decades.',
    price: 19.99,
    weight: '340g',
    image: '☕',
    color: 'from-yellow-100 to-amber-100'
  },
  {
    id: 3,
    name: 'Sumatra Mandheling',
    origin: 'Indonesia',
    roast: 'Dark',
    flavorProfile: ['Earthy', 'Herbal', 'Dark Chocolate'],
    tastingNotes: 'Full-bodied and intense with deep earthy tones, dried herb complexity, and bittersweet dark chocolate. Low acidity with a syrupy, lingering finish.',
    brewingMethods: ['French Press', 'Espresso', 'Moka Pot'],
    description: 'A bold and distinctive Indonesian coffee known for its full body and complex, earthy character that sets it apart from other origins.',
    originStory: 'From the lush volcanic slopes of northern Sumatra, where the wet-hulled processing method (Giling Basah) creates the coffee\'s signature bold character. Our beans come from the Mandheling region, named after the indigenous Mandailing people who have cultivated coffee here since the Dutch colonial era.',
    price: 21.99,
    weight: '340g',
    image: '🌿',
    color: 'from-green-100 to-emerald-100'
  },
  {
    id: 4,
    name: 'Guatemala Antigua',
    origin: 'Guatemala',
    roast: 'Medium-Dark',
    flavorProfile: ['Cocoa', 'Spice', 'Smoky'],
    tastingNotes: 'Elegant and sophisticated with rich cocoa notes, warm cinnamon spice, and a subtle smoky sweetness. Full body with a refined, complex finish.',
    brewingMethods: ['Pour Over', 'Espresso', 'Siphon'],
    description: 'A premium Guatemalan coffee from the renowned Antigua valley, celebrated for its unique microclimate and volcanic terroir.',
    originStory: 'Nestled between three volcanoes — Agua, Fuego, and Acatenango — the Antigua valley benefits from rich volcanic soil, cool nights, and abundant sunshine. Our beans are grown on centuries-old estates where shade-grown cultivation preserves the forest canopy and produces beans of extraordinary depth.',
    price: 22.99,
    weight: '340g',
    image: '🌋',
    color: 'from-stone-100 to-amber-100'
  },
  {
    id: 5,
    name: 'Kenya AA',
    origin: 'Kenya',
    roast: 'Medium',
    flavorProfile: ['Blackcurrant', 'Grapefruit', 'Brown Sugar'],
    tastingNotes: 'Vibrant and juicy with explosive blackcurrant and grapefruit notes, balanced by a sweet brown sugar base. Wine-like acidity with a sparkling, fruit-forward finish.',
    brewingMethods: ['Pour Over', 'AeroPress', 'Chemex'],
    description: 'Kenya\'s finest grade AA beans deliver an unforgettable cup that showcases the country\'s reputation for producing some of the most exciting coffees in the world.',
    originStory: 'Harvested from the fertile red volcanic soils of Kenya\'s central highlands, where altitudes above 1,800 meters create ideal conditions for slow cherry maturation. The AA grade denotes the largest bean size, selected through rigorous screening. Our lots come from the Nyeri county, where cooperative farming ensures sustainable practices.',
    price: 26.99,
    weight: '340g',
    image: '🍇',
    color: 'from-purple-100 to-pink-100'
  },
  {
    id: 6,
    name: 'Brazilian Santos',
    origin: 'Brazil',
    roast: 'Light',
    flavorProfile: ['Hazelnut', 'Vanilla', 'Milk Chocolate'],
    tastingNotes: 'Smooth and approachable with gentle hazelnut sweetness, creamy vanilla undertones, and a delicate milk chocolate finish. Light body with a clean, sweet aftertaste.',
    brewingMethods: ['Drip', 'Cold Brew', 'French Press'],
    description: 'A versatile and crowd-pleasing Brazilian coffee that exemplifies the country\'s mastery of producing clean, sweet, and approachable cups.',
    originStory: 'From the rolling hills of Minas Gerais, Brazil\'s premier coffee state, where vast plantations benefit from a unique combination of altitude, tropical climate, and mineral-rich soil. The Santos port, through which these beans were historically exported, gives this coffee its legendary name. Our partner farms use natural processing to enhance the inherent sweetness.',
    price: 17.99,
    weight: '340g',
    image: '🥜',
    color: 'from-orange-100 to-yellow-100'
  }
];

export const origins = [...new Set(products.map(p => p.origin))];
export const roasts = [...new Set(products.map(p => p.roast))];
export const flavorProfiles = [...new Set(products.flatMap(p => p.flavorProfile))];
