require('dotenv').config();
require('./config/database');
const Category = require('./models/category');
const Brand = require('./models/brand');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Full Kits', sortOrder: 10}, // [0]
    {name: 'Snare Drums', sortOrder: 20}, // [1]
    {name: 'Cymbals', sortOrder: 30}, // [2]
    {name: 'Sticks', sortOrder: 40}, // [3]
    {name: 'Heads', sortOrder: 50}, // [4]
    {name: 'Hardware', sortOrder: 60}, // [5]
    {name: 'Accessories', sortOrder: 70}, // [6]
  ]);

  await Brand.deleteMany({});
  const brands = await Brand.create([
    {name: 'Ludwig', sortOrder: 10}, // [0]
    {name: 'Slingerland', sortOrder: 20}, // [1]
    {name: 'Pearl', sortOrder: 30}, // [2]
    {name: 'George Way', sortOrder: 40}, // [3]
    {name: 'Gretsch', sortOrder: 50}, // [4]
    {name: 'Istanbul Agop', sortOrder: 60}, // [5]
    {name: 'Promark', sortOrder: 70}, // [6]
    {name: 'Vic Firth', sortOrder: 80}, // [7]
    {name: 'Vater', sortOrder: 90}, // [8]
    {name: 'Remo', sortOrder: 100}, // [9]
    {name: 'Evans', sortOrder: 110}, // [10]
    {name: 'Gibraltar', sortOrder: 120}, // [11]
  ])

  await Item.deleteMany({});
  const items = await Item.create([
    // Drum Kits
    {
      name: 'Ludwig Classic Maple 3-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Signet-105-Gigabeat-3-Piece-Shell-Pack-Natural-Teak/J04113000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[0], 
      price: 2149,
      size: '22x15", 12x8.5", 16x16"',
      description: "Preferred by professionals for superior tone and versatility, Classic Maple drums are the ideal choice for any performance application. A perfect blend of high sensitivity, wide dynamic tuning range, and sharp attack make Classic Maple the ideal choice for live performance. Classic Maple's 7-ply shell is crafted to respond to the player and environment quickly, making it adaptable to any playing style or preference."
    },
    {
      name: 'Ludwig Neusonic 3 piece FAB Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Neusonic-3-piece-FAB-Shell-Pack-with-22-in.-Bass-Drum-Black-Velvet/L85733000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[0], 
      price: 1259,
      size: '20x15", 12x8.5", 14x14"',
      description: "Handcrafted by Ludwig in Monroe, NC., Signet 105 Series Drums are designed to give the up-and-coming player high-end North American Maple tone at unbeatable low prices. The drummer builds and personalizes the kit in minutes following a simple, rewarding assembly process, thanks to Ludwig's Insta-Lite screw-less lugs and Triad 3-point tom suspension mounts."
    },
    {
      name: 'Ludwig Signet 105 Gigabeat 3-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Classic-Maple-3-Piece-Fab-Shell-Pack-with-22-in.-Bass-Drum-Red-Sparkle/K45602000006000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[0], 
      price: 3450,
      size: '',
      description: " "
    },
    {
      name: 'Pearl Export EXL New Fusion 5-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Export-EXL-New-Fusion-5-Piece-Shell-Pack-Black-Smoke/J20454000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[2], 
      price: 599,
      size: '22x16", 10x7", 12x8", 16x14"',
      description: "Export Series returns again - this time with a lacquer finish. Offering updated hardware features, SST shell construction and suspended mounts, these Export drums are better than you remember them. The 6-ply poplar and mahogany shells churn out balanced attack and full tone, while the high-end hardware will make your trip down memory lane a pleasant one. Pearl's updated Export Series offers a sonically advanced recipe of strategically arranged plies of premium wood to maximize frequency response of every component. As with all Pearl drums, each shell is formed from our legendary SST construction process that uses extreme heat, Precision-cut scarf joints, proprietary Acoustiglue and over 1000lb. of hydraulic pressure to create the ultimate acoustic air chamber."
    },
    {
      name: 'Pearl Decade Maple 3-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Decade-Maple-3-Piece-Shell-Pack-Satin-Black-Burst/J40006000004000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[2], 
      price: 1299,
      size: '22x14", 12x8", 16x14"',
      description: 'Decade’s 6-ply/5.4mm all maple shell is what sets it apart from the other players in the field. The final product of ten years of process and material refinement, each cross-laminated ply incorporates Pearl’s proprietary Superior Shell Technology. Pearl’s Superior Shell Technology utilizes a proprietary technique for achieving the ultimate air chamber. It begins with select woods chosen for their unique acoustic attributes, milled to precise thickness with overlapping scarf joint seams, for a perfect air-tight fit. The wood plies are saturated with Pearl’s proprietary “AcoustiGlue” that permeates every pore and dries to the exact consistency of the wood for optimum resonance.'
    },
    {
      name: 'Pearl Crystal Beat 5-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Crystal-Beat-5-Piece-Shell-Pack-Ultra-Clear/J15997000001000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[2], 
      price: 1889,
      size: '22x16", 20x7", 12x8", 14x13", 16x15"',
      description: "In 1973, Pearl set a benchmark in the drumming world with the introduction of Crystal Beat. A stunning combination of visual appeal and powerful sonic attack, Crystal Beat's revolutionary seamless construction was molded -not rolled- creating a strong acrylic drum system that could stand up to the riggors of touring. The shells of the Crystal Beat series produce fat attack with big projection and clipped resonance. Tom and share shells are 6mm thick, while the kick drum measures 7mm. The drums are fitted with 1.6mm triple-flanged hoops for just the right amount of attack without sacrificing tonal body."
    },
    {
      name: 'Gretsch Drums Broadkaster Series 3- Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Broadkaster-Series-3-Piece-Shell-Pack-with-22-Bass-Drum-and-Vintage-Hardware-Satin-Copper/J20940000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[4], 
      price: 3000,
      size: '24x14, 12x9, 16x16',
      description: "Featuring 3-ply shells made individually using oversized plies of North American maple/poplar/maple, the reintroduced Gretsch Broadkaster calls upon a rich musical lineage of quality materials, craftsmanship and superstar alumni. The Broadkaster was the top-of-the-line kit for Gretsch in the 1930's boasting players a vertible who's who of big band and jazz drummers."
    },
    {
      name: 'Gretsch Drums Renown 4-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Renown-4-Piece-Shell-Pack-with-20-Bass-Drum-Piano-Black/L44366000005000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[4], 
      price: 1399,
      size: '20x14", 10x7", 12x8", 16x14", 14x5.5"',
      description: "Since its initial launch in 2001, Gretsch Catalina has received many high marks from students, educators, and performing drummers around the world and today the Catalina Maple and Club series are still recognized as high quality pro-ready instruments that are reasonably priced. Gretsch Drums Catalina Special Edition expands on the sound, feel and classy look of Catalina with affordability still in mind. Its 7-ply birch shells with the natural shell interior and 30º bearing edge are the foundation of Catalina SE. The mounting hardware includes the signature round gas cap bass drum mount plate and an ultra-low profile GTS mounting system. T-Wing screws and bolts are included on all fittings to round out it's classic Gretsch look. Each drum's interior label specifies the year of production and species of wood the shell is made of."
    },
    {
      name: 'Gretsch Drums Catalina Special Edition Birch 5-Piece Shell Pack', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Catalina-Special-Edition-Birch-5-Piece-Shell-Pack-with-20-Bass-Drum-Ebony-Satin/L48537000002000-00-220x220.jpg', 
      category: categories[0], 
      brand: brands[4], 
      price: 799,
      size: '20x14", 10x7", 14x14", 14x5.5"',
      description: "Since its initial launch in 2001, Gretsch Catalina has received many high marks from students, educators, and performing drummers around the world and today the Catalina Maple and Club series are still recognized as high quality pro-ready instruments that are reasonably priced. Gretsch Drums Catalina Special Edition expands on the sound, feel and classy look of Catalina with affordability still in mind. Its 7-ply birch shells with the natural shell interior and 30º bearing edge are the foundation of Catalina SE. The mounting hardware includes the signature round gas cap bass drum mount plate and an ultra-low profile GTS mounting system. T-Wing screws and bolts are included on all fittings to round out it's classic Gretsch look. Each drum's interior label specifies the year of production and species of wood the shell is made of."
    },
    // Snares
    {
      name: 'Ludwig Black Beauty', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Black-Beauty-Snare-Drum-14-x-8-in./J50184000000000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 1125,
      size: '14" x 6.5"',
      description: 'The Ludwig Black Beauty snare drum is considered one of the most desirable drums ever made. The seamless, one piece brass beaded shell provides the legendary balanced metallic-yet-warm sound and ease of tuning that this classic drum is famous for, while the Supraphonic snares and classic P-85 snare throw-off provide the unmatched sensitivity professionals demand. The antique black anodized shell, chrome hardware, and imperial lugs make the Black Beauty strikingly beautiful.'
    },
    {
      name: 'Ludwig LE Legacy Mahogany', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Limited-Edition-Legacy-Mahogany-14x6.5-Snare-Drum-Black-Cat/L83310000000000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 1209,
      size: '14" x 6.5"',
      description: 'In the tradition of Ludwig’s “Victorious” drums of the 1940s, the Legacy Mahogany Black Cat Snare Drum features a black stain finish with silver sparkle inlaid maple hoops finished in black. This limited edition is available in two popular outfits, Fab (limited to 40) and Pro Beat (limited to 20). Featuring the Special Edition "Enamel" badge, the Black Cat Snare blends the iconic Ludwig sound with the aesthetics of yesteryear.'
    },
    {
      name: 'Ludwig Supraphonic', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Supraphonic-Snare-Drum-Chrome-14-x-6.5-in./446280000375488-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 589,
      size: '14" x 6.5"',
      description: "The Ludwig Supraphonic Snare Drum features chrome metal shell construction that offers a bright, cutting, and crisp sound found on a multitude of classic pop and jazz hits of the last several decades. The Supraphonic snares are wonderfully responsive, a quality that's further enhanced by their triple-flanged hoops. The 6-1/2 inch deep version produces deep, fat tone and great projection. 10 classic lugs, with a P-85 throw-off. A versatile drum that's perfect for styles ranging from symphonic to arena rock."
    },
    {
      name: 'Ludwig Acrolite', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Hammered-Acrolite-Snare-Drum-14-x-6.5-in./K47596000002000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[0], 
      price: 479,
      size: '14" x 6.5"',
      description: 'Originally introduced in 1963 as a student drum, the Ludwig Acrolite quickly became the choice of pro players in need of dry, cracking snare tone. Ludwig is proud to re-introduce Acrolite in its original splendor; with a seamless, beaded, brushed-aluminum shell. Made in Monroe, North Carolina, USA. The Acrolite features chrome Classic dual snare lugs, P85 strainer, and Blue/Olive Badge.'
    },
    {
      name: 'Pearl Sensitone', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/L85273000002002-00-720x720.jpg', 
      category: categories[1], 
      brand: brands[2], 
      price: 0,
      size: '14" x 6.5"',
      description: "The Sensitone Snare from Pearl is drawn from a combination of Heritage Alloys. These vital, immediate tones recall legendary chart-toppers with an undeniable modern sensibility. The Sensitone Heritage Alloy Aluminum model features a 1.2mm seamless beaded shell, and delivers the goods with gig-ready touches to make it a utility standard for the tonally nuanced player."
    },
    {
      name: 'Pearl Masters BCX Birch Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Modern-Utility-Maple-Snare-Drum-14-x-6.5-in.-Matte-Natural/J53406000003002-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[2], 
      price: 477.99,
      size: '14" x 5.5"',
      description: "Building upon the outstanding legacy of thin shell Masters Custom drums, the Pearl Masters BCX Birch Snare Drum offers projection and attack for the prefect bridge between player and audience. The 6-ply, 100% birch shell produces focused power and tone with great cut, along with a quick resonance. The drum also features Masters hardware including: MasterCast die-cast hoops, SR-017 vertical pull strainer, bridge lugs, steel tension rods with brass swivel nuts and Remo Ambassador heads."
    },
    {
      name: 'Pearl Reference Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Reference-Snare-Drum-Natural-Maple-14-X-6.5/446698000954488-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[2], 
      price: 719.40,
      size: '14" x 6.5"',
      description: "Reference Series snare drums are available in three different shell sizes: 14x5, 14x6-1/2 and 13 x 6-1/2 to suit individual preferences and tastes. The heart and soul of your kit is your snare drum and Pearl's Reference Series snare drums shine through loud and clear. Simply amazing volume."
    },
    {
      name: 'George Way Nyatoh Snare Drum', 
      img: 'https://cdn.shopify.com/s/files/1/0277/2835/products/GW654T-W_1.jpg?v=1575933012', 
      category: categories[1], 
      brand: brands[3], 
      price: 575,
      size: '14" x 6.5"',
      description: "The shell construction uses 4 layers of select Nyatoh with matching 4 layer reinforcement rings. The warmth of the wood shell is augmented by the solid attack provided Way's Double Edge-Double Flange hoops. Fitted with the famous Way 845 'Beer Tap' throw off, Way high carbon steel snare wires, Remo Ambassador batter and Dunnett Cristal snare side heads, this classic snare drum makes for an effective, versatile and affordable wood shell snare drum and a welcome addition to every snare drum arsenal."
    },
    {
      name: 'George Way Aristocrat Studio Snare', 
      img: 'https://cdn.long-mcquade.com/files/172016/md_e7c6cd7f8224715d5d9a6f5d744d487d.jpg', 
      category: categories[1], 
      brand: brands[3], 
      price: 595,
      size: '14" x 6.5',
      description: 'The George H. Way 14x6.5 Aristocrat Studio Snare Drum (AS654GB) has a 4-ply maple/poplar/poplar/maple shell with 4-ply maple reinforcement rings. This George H. Way snare drum features LA Camco "Bullet Style" bearing edges, double edge-double flange hoops, 8 aristocrat lugs, 845 "Beer Tap" throw-off, 20-strand snare wires, and a George H. Way Res-O-Tone drumhead. This snare drum has a Black Gloss Lacquer finish, George Way black and gold badge, and chrome hardware.'
    },
    {
      name: 'George Way Elkhart Copper', 
      img: 'https://d2bghjaa5qmp6f.cloudfront.net/resize/images/Dunnett/Dunnett-GW654-CU-full.jpg', 
      category: categories[1], 
      brand: brands[3], 
      price: 595,
      size: '14" x 6.5',
      description: 'With nearly a century of experience, the George H. Way Drum Company has a long history of crafting high-quality instruments without all of the extraneous design frills introduced by larger drum companies. The "Elkhart" Snare Drum features a medium-thick copper shell, giving you a middle-of the-road sound between the warmness of wood and the bite of a metal drum. Vintage-looking Streamline lug casings and triple-flanged hoops are also included. The chrome plating on every metal component of the drum and the polished finish give this instrument that truly professional look.'
    },
    {
      name: 'Gretsch Drums Black Nickel Over Steel Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Black-Nickel-Over-Steel-Snare-Drum/L00685000000000-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[4], 
      price: 290,
      size: '14" x 6.5"',
      description: 'Like all Gretsch snares, the Black Nickel Over Steel snare is a workhorse; a drum that just works no matter the room or the acoustics. The 1.2 mm, 14x6.5" Black Nickel Plated shell is balanced, full and responsive to any style. Built for power out of the box, Gretsch also includes a Coated Remo batter head, 2.3 mm steel hoops, classic lugs, and 20-strand snares—all at a price that makes it easy to add this drum to any snare arsenal.'
    },
    {
      name: 'Gretsch Drums Brooklyn Standard Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Brooklyn-Standard-Snare-Drum-14-x-5.5-in.-Satin-Black-Metallic/L70407000001001-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[4], 
      price: 529,
      size: '14" x 5.5"',
      description: 'Developed in collaboration with drummer and educator Mike Johnston, the Gretsch Brooklyn Standard snare drum combines throwback looks with modern versatility. Johnston wanted a signature snare drum with the widest possible dynamic range across the full spectrum of tunings. After 9 months of prototyping and testing, Gretsch finally delivered the perfect match, and the Brooklyn Standard was born. Guitar Center offers this adaptable snare to a wide variety of players. It’s an exciting vintage-style drum for collectors and professionals, but thanks to Johnston’s purposeful design, it’s just as appropriate for students looking for their first pro-level snare drum.'
    },
    {
      name: 'Gretsch Drums USA Custom Snare Drum', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/USA-Custom-Snare-Drum-14-x-5-in.-Natural-Satin/J56878000001002-00-220x220.jpg', 
      category: categories[1], 
      brand: brands[4], 
      price: 546,
      size: '14" x 5.5"',
      description: 'Gretsch USA Custom 5x14 in. snare drums have been a significant part of “That Great Gretsch Sound” for over 65 years. At the heart of each drum is the legendary 6-ply Gretsch-formula maple/gum shell with its expertly formed 30-degree bearing edge, the exclusive "Silver Sealer” interior finish and rugged die cast hoops.'
    },
    // Cymbals
    {
      name: 'Istanbul Agop Xist Series Crash', 
      img: 'https://cdn.shopify.com/s/files/1/1790/1665/products/Istanbul-Agop-Xist-Series-Crash_480x480.jpg?v=1639950813', 
      category: categories[2], 
      brand: brands[5], 
      price: 154.99,
      size: '',
      description: ''
    },
    {
      name: 'Istanbul Agop Traditional Dark Crash', 
      img: 'https://cdn.shopify.com/s/files/1/1790/1665/products/Istanbul-Agop-Traditional-Dark-Crash_480x480.jpg?v=1639950807', 
      category: categories[2], 
      brand: brands[5], 
      price: 239.99,
      size: '',
      description: ''
    },
    {
      name: 'Istanbul Agop Joey Waronker Signature Ride', 
      img: 'https://cdn.shopify.com/s/files/1/1790/1665/products/Istanbul-Agop-24-Joey-Waronker-Signature-Ride_480x480.jpg?v=1639950802', 
      category: categories[2], 
      brand: brands[5], 
      price: 699.99,
      size: '',
      description: ''
    },
    // Sticks
    {
      name: 'Promark TX5ABW', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Select-Balance-Rebound-Balance-Acorn-Tip-Drum-Sticks-5B/J30833000003000-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[6], 
      price: 14.50,
      size: 'Betweem 5A and 5b',
      description: 'The 5AB is like the classic 5A, but with a shorter taper and slightly larger tip for added durability and projection.'
    },
    {
      name: 'Promark BYOS Hickory Oval Wood Tip', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/BYOS-Hickory-Oval-Wood-Tip-Drumsticks/J39222000000000-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[6], 
      price: 12.99,
      size: 'Custom',
      description: 'The BYOS stick is engineered to function as a traditional marching implement and a well-balanced show-style trick stick. Featuring a medium taper and large barrel tip, this stick will provide the necessary output volume needed for the marching activity both indoor or out.'
    },
    {
      name: 'Promark Japanese White Oak Drumsticks Nylon Tip', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Japanese-White-Oak-Drumsticks-Nylon-7A/443180000281029-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[6], 
      price: 15.49,
      size: 'Custom',
      description: 'Pro-Mark Japanese white oak drumsticks are balanced and carefully crafted using hand-selected white oak. Grown in the mountainous regions of Japan, this particular species of oak is a harder wood than hickory and will take more wear, tear, and punishment. It resists chipping and wearing soft.'
    },
    {
      name: 'Vic Firth 5A', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Classic-Hickory-Drum-Sticks-Wood-5A/460490000645021-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[7], 
      price: 9.99,
      size: '5A',
      description: 'The American Classic drum stick line combines tradition and Vic Firth style. With bold designs for fuller sound and deeply back-cut tips for intensified cymbal response, the American Classic dum sticks are turned from select hickory, further enhancing their durability and sound.'
    },
    {
      name: 'Vic Firth 5B', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Classic-Hickory-Drum-Sticks-Wood-5A/460490000645021-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[7], 
      price: 9.99,
      size: '5B',
      description: 'The American Classic drum stick line combines tradition and Vic Firth style. With bold designs for fuller sound and deeply back-cut tips for intensified cymbal response, the American Classic dum sticks are turned from select hickory, further enhancing their durability and sound.'
    },
    {
      name: 'Vic Firth American Concept Freestyle Drum Sticks', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Concept-Freestyle-Drum-Sticks-5B-Wood/L44664000002001-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[7], 
      price: 9.99,
      size: 'Medium Guage',
      description: 'Inspired by the sport of Freestyle longboarding, the Freestyle series of sticks is all about effortless flow, creativity and style. Exaggerated tapers on extra long sticks more than doubles the area where a drummer can place their fulcrum, opening up creative possibilities and unlocking the ultimate expressive drumming experience..'
    },
    {
      name: 'Vater 3A', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Hickory-Fatback-3A-Drum-Sticks-Wood/J44212000000002-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[8], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Vater American Hickory Los Angeles 5A Drumsticks', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Hickory-Los-Angeles-5A-Drumsticks-Nylon/J44281000000001-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[8], 
      price: 9.49,
      size: '5A',
      description: 'American Hickory dowels have to meet very strict quality characteristics to become a Vater drum stick. Vater only uses dowels that have a specific moisture content, straightness and grain structure, to produce a higher quality drum stick. These Vater American Hickory Los Angeles 5A drum sticks are formed from hickory—the most popular drumstick material. Hickory is dense and strong so it is resistant to chipping and breaking. Stronger than maple, it also absorbs a lot of shock. As a result, these sticks lessen wrist and hand fatigue while playing.'
    },
    {
      name: 'Vater American Hickory 5B Drum Sticks', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/American-Hickory-5B-Drum-Sticks-Nylon/J44215000000001-00-220x220.jpg', 
      category: categories[3], 
      brand: brands[8], 
      price: 9.49,
      size: '5B',
      description: 'These Vater 5B Drumsticks are formed from hickory—the most popular drumstick material. Hickory is dense and strong so it is resistant to chipping and breaking. Stronger than maple, it also absorbs a lot of shock. As a result, these sticks lessen wrist and hand fatigue while playing.'
    },
    // Heads
    {
      name: 'Remo Ambassador Coated Head', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Ambassador-Coated-Head-14-in./L74760000001000-00-220x220.jpg', 
      category: categories[4], 
      brand: brands[9], 
      price: 12.99,
      size: '10" - 24"',
      description: 'Remo Weather King Ambassador Coated Heads are the most widely used drumheads in the world. The ones all others are judged by. Medium thickness. The Weather King Ambassador heads are the reigning champs for studio recording.'
    },
    {
      name: 'Remo Emperor Coated Drum Head', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Emperor-Coated-Drum-Head-12-in./442306000000076-00-220x220.jpg', 
      category: categories[4], 
      brand: brands[9], 
      price: 12.99,
      size: '10" - 24"',
      description: 'These heads use 2 free-floating plies of 7-mil film, which give them their consistent open tones and account for their popularity among many of today&rsquo;s top drummers. In 10", 12", 13", 14", or 16".'
    },
    {
      name: 'Remo Powerstroke 3 Coated with Dot Batter', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Powerstroke-3-Coated-with-Dot-Batter-13-in./442943000000078-00-220x220.jpg', 
      category: categories[4], 
      brand: brands[9], 
      price: 19.99,
      size: '10" - 24"',
      description: 'The Remo Powerstroke 3 Coated Batter is a coated head forged from a single ply with an underlay ring at the outer edge.'
    },
    {
      name: 'Remo Powerstroke 3 Coated with Dot Batter', 
      img: 'https://media.guitarcenter.com/is/image/MMGS7/Powerstroke-3-Coated-with-Dot-Batter-13-in./442943000000078-00-220x220.jpg', 
      category: categories[4], 
      brand: brands[10], 
      price: 19.99,
      size: '10" - 24"',
      description: 'The Remo Powerstroke 3 Coated Batter is a coated head forged from a single ply with an underlay ring at the outer edge.'
    },
    // Hardware
    {
      name: 'Stand 1', 
      img: '', 
      category: categories[5], 
      brand: brands[11], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Stand 2', 
      img: '', 
      category: categories[5], 
      brand: brands[11], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Stand 3', 
      img: '', 
      category: categories[5], 
      brand: brands[11], 
      price: 0,
      size: '',
      description: ''
    },
    // Accessories
    {
      name: 'Accessory 1', 
      img: '', 
      category: categories[6], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Accessory 2', 
      img: '', 
      category: categories[6], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
    {
      name: 'Accessory 3', 
      img: '', 
      category: categories[6], 
      brand: brands[2], 
      price: 0,
      size: '',
      description: ''
    },
  ]);

  console.log(items)

  process.exit();

})();