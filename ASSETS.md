# Menu artwork and image sources

`leone-menu.png` is the original illustrated menu supplied by the restaurant owner. The file is unchanged. The interface displays individual pizza illustrations using SVG viewports and explicit clipping defined in `public/menu-art.js`. The hero uses the Margherita illustration; stuffed focaccia reuses the original focaccia illustration.

## Generated dish illustrations

Twenty-nine illustrations were generated with the built-in imagegen tool in the supplied menu's watercolor/doodle style. Original PNG outputs are stored in `public/assets/` in the local application (`assets/` in this public export) and displayed without cropping. Only images referenced by the current public menu are included in each export. The full prompt set is retained in the local project's `IMAGE-PROMPTS.md`.

- `tiramisu-doodle.png`
- `cold-pasta-doodle.png`
- `onion-frittata-doodle.png`
- `ham-mozzarella-doodle.png` (crostino pizza)
- `aperol-spritz-doodle.png`
- `moscato-doodle.png`
- `limoncello-doodle.png`
- `bolgheri-rosso-doodle.png`
- `blood-orange-doodle.png`
- `italian-lemonade-doodle.png`
- `pumpkin-spice-latte-doodle.png`
- `hojicha-latte-doodle.png`
- `matcha-latte-doodle.png`
- `organic-japanese-green-tea-doodle.png`
- `orange-granita-doodle.png`
- `organic-uji-black-tea-teapot-doodle.png` (served by the teapot)
- `chai-latte-doodle.png`
- `gyokuro-tea-glass-doodle.png`
- `gyokuro-tea-carafe-doodle.png`
- `black-tea-glass-doodle.png`
- `black-tea-carafe-doodle.png`
- `hojicha-tea-glass-doodle.png`
- `hojicha-tea-carafe-doodle.png`

- `white-miso-asparagus-pizza-doodle.png`
- `cherry-tomato-rocket-pizza-doodle.png`

- `pumpkin-mozzarella-super-seed-pizza-doodle.png` (current pumpkin pizza: mozzarella and mixed seeds)
- `orange-evo-cake-doodle.png`

- `bacon-corn-mozzarella-pizza-doodle.png` (superseded by the original-menu style correction below)
- `oven-roasted-potatoes-doodle.png` (superseded by the simpler rosemary doodle below)

- `pinsa-romana-doodle.png` (superseded; the whole and half products now use separate illustrations below)

## Corrected original-menu doodle style — 10 October 2026

These illustrations were redrawn with the built-in image_gen tool using the owner’s original `leone-menu.png` as the artistic reference: simple flat painted shapes, reduced detail and white backgrounds.

- `pinsa-whole-doodle.png`: whole oval Roman pinsa.
- `pinsa-half-doodle.png`: visibly cut half of the same pinsa.
- `oven-roasted-potatoes-rosemary-doodle.png`: simple roasted-potato wedges with visible green rosemary sprigs.

Pinsa toppings are illustrative; both portions offer a choice of flavour. Generation prompts and final asset paths are recorded locally in `output/imagegen/pinsa-and-potatoes-doodle-prompts.json`.

## Caprese and fennel side dishes — 10 October 2026

Generated with the built-in image_gen tool, using the original `public/assets/leone-menu.png` as the reference for the simple flat painted doodle style.

- `tomato-burrata-caprese-doodle.png`: tomatoes, a whole burrata and extra virgin olive oil.
- `fennel-orange-balsamic-salad-doodle.png`: sliced fennel, orange segments and a visible balsamic drizzle.

Final prompts and asset paths are recorded locally in `output/imagegen/caprese-fennel-salad-prompts.json`.

## Bacon and sweetcorn doodle correction — 10 October 2026

- `bacon-corn-mozzarella-flat-doodle.png`: a flat top-down Roman pizza slice with simplified bacon pieces, sweetcorn cream and mozzarella. Redrawn with the built-in image_gen tool using `leone-menu.png` as the strict style reference, replacing the earlier detailed watercolor image.

Prompt saved locally in `output/imagegen/bacon-corn-doodle-prompt.txt`.

## Lingua di pizza bianca portions — 11 October 2026

Generated with the built-in image_gen tool, matching the original `leone-menu.png` flat painted doodles.

- `pizza-bianca-whole-doodle.png`: one whole long, plain pizza bianca with rounded ends.
- `pizza-bianca-half-doodle.png`: one half portion with a visible straight cut edge, derived from the whole illustration.

Each portion has its own product and image. Final prompts and asset paths are saved locally in `output/imagegen/pizza-bianca-portions-prompts.json`.

## Mortadella and salami pizzas — 13 October 2026

Generated with the built-in image_gen tool, using `leone-menu.png` as the reference for the original simple flat painted doodle style.

- `mortadella-burrata-stuffed-pizza-doodle.png`: a piece of pizza bianca split and filled with mortadella and burrata.
- `tomato-mozzarella-salami-pizza-doodle.png`: a rectangular red pizza slice with tomato, mozzarella and salami.

Final prompts and asset paths are saved locally in `output/imagegen/mortadella-salami-pizza-prompts.json`.

## Zuegg juice bottles — 13 October 2026

Four illustrations generated with the built-in image_gen tool. The owner's supplied bottle photograph is the packaging reference; the original `leone-menu.png` supplies the simple flat painted doodle style.

- `zuegg-blood-orange-bottle-doodle.png`: blood orange, with red-orange juice and blood-orange label artwork.
- `zuegg-sweet-orange-bottle-doodle.png`: sweet orange, with yellow-orange juice and orange label artwork.
- `zuegg-apricot-bottle-doodle.png`: apricot, with apricot label artwork.
- `zuegg-clear-apple-bottle-doodle.png`: clear apple, with golden juice and apple label artwork.

Each image depicts one Zuegg bottle with a navy cap, white label and its own fruit illustration. These are stylized product illustrations. Final prompts and saved asset paths are recorded locally in `output/imagegen/zuegg-juice-bottle-prompts.json`.

## Brachetto by the glass — 13 October 2026

- `brachetto-ruby-wine-glass-doodle.png`: one stemmed glass of ruby-red Brachetto with a few small bubbles. Generated with the built-in image_gen tool, using `leone-menu.png` as the reference for a simple flat painted doodle.

The final prompt and saved asset path are recorded locally in `output/imagegen/brachetto-wine-glass-prompt.json`.

## Panna cotta — 13 October 2026

- `panna-cotta-classic-doodle.png`: one plain ivory panna cotta on a small plate, without toppings. Generated with the built-in image_gen tool using the original `leone-menu.png` as the reference for the simple flat painted doodle style.

The final prompt and saved asset path are recorded locally in `output/imagegen/panna-cotta-prompt.json`.

## Carrot and orange cakes — 15 October 2026

Two cake illustrations edited with the built-in image_gen tool. The existing `orange-evo-cake-doodle.png` supplied the slice composition; the original `leone-menu.png` supplied the simple flat painted doodle style.

- `carrot-walnut-cake-flat-doodle.png`: carrot and walnut cake, with walnut pieces and no citrus garnish. Corrects the orange illustration still assigned to the carrot cake.
- `orange-evo-cake-flat-doodle.png`: a separate orange and extra virgin olive oil cake slice, with an orange half-slice on top.

The original image is retained locally. Final prompts and saved asset paths are recorded in `output/imagegen/carrot-orange-cake-prompts.json`.

## Fusilli and spaghetti — 15 October 2026

Two individual pasta dishes generated with the built-in image_gen tool, using the original `leone-menu.png` as the reference for the simple flat painted doodle style.

- `fusilli-tomato-basil-doodle.png`: short spiral fusilli with tomato sauce and basil on a simple plate.
- `spaghetti-bolognese-doodle.png`: long spaghetti with Bolognese meat ragù on a simple plate.

Final prompts and saved asset paths are recorded locally in `output/imagegen/fusilli-spaghetti-prompts.json`.

## Carbonara and pizza rossa — 16 October 2026

Generated with the built-in image_gen tool, using the original `leone-menu.png` as the reference for the simple flat painted doodle style.

- `spaghetti-carbonara-doodle.png`: spaghetti with egg-and-pecorino sauce, guanciale and black pepper; adapted from the existing spaghetti illustration. The product starts unavailable, so its image remains local until it is included in a public export.
- `pizza-rossa-doodle.png`: one rectangular Roman pizza slice with tomato sauce.

Final prompts and saved asset paths are recorded locally in `output/imagegen/carbonara-pizza-rossa-prompts.json`.

## Spaghetti aglio, olio, peperoncino e prezzemolo — 20 October 2026

- `spaghetti-aglio-olio-doodle.png`: one plate of spaghetti with olive oil, garlic, red chili and parsley. Created with the built-in image_gen tool by adapting the existing spaghetti composition, with `leone-menu.png` as the original simple flat painted doodle style reference.

The final prompt and saved asset path are recorded locally in `output/imagegen/spaghetti-aglio-olio-prompt.json`.

## MoleCola — 21 October 2026

- `molecola-glass-bottle-doodle.png`: a MoleCola glass bottle with a red cap and label, dark cola and simplified embossed glass details. Generated with the built-in image_gen tool, using the owner's bottle photograph as the packaging reference and `leone-menu.png` as the original simple flat painted doodle style reference.

The original generated image is retained locally. The final prompt and saved asset path are recorded in `output/imagegen/molecola-prompt.json`.

## Pomegranate soda and black sesame latte — 23 October 2026

Two individual illustrations generated with the built-in image_gen tool. Both use `leone-menu.png` as the reference for the original simple flat painted doodle style. The existing lemonade and matcha latte images guide only the serving vessel and composition.

- `pomegranate-soda-doodle.png`: a ruby-red pomegranate soda in a clear glass, with bubbles and a small pomegranate wedge.
- `black-sesame-latte-doodle.png`: a rounded ivory cup of creamy grey black sesame latte, with a simple milk foam swirl and visible black sesame seeds.

The original generated images are retained locally. Final prompts and saved asset paths are recorded in `output/imagegen/pomegranate-black-sesame-prompts.json`.

## Potato, garlic, chili and parsley Roman pizza — 23 October 2026

- `potato-garlic-chili-pizza-doodle.png`: one rectangular Roman pizza slice with potatoes, olive oil, garlic, chili and parsley. Generated with the built-in image_gen tool using `leone-menu.png` as the original simple flat painted doodle style reference. Edited with the same tool to add visible parsley at the owner's request.

Both the original and the edited generated images are retained locally. The generation and edit prompts and final asset path are recorded in `output/imagegen/potato-garlic-chili-pizza-prompts.json`.

## French toast and Matcha-misu — 25 October 2026

Two individual illustrations generated with the built-in image_gen tool using `leone-menu.png` as the original painted doodle style reference.

- `french-toast-doodle.png`: golden French toast on a simple ivory plate.
- `matcha-misu-doodle.png`: a rectangular matcha tiramisu slice with green biscuit layers, ivory mascarpone cream and matcha on top. The existing tiramisu illustration guides the composition and dessert structure.

The original generated images are retained locally. Final prompts and saved asset paths are recorded in `output/imagegen/french-toast-matcha-misu-prompts.json`. The existing `tiramisu-doodle.png` remains assigned to the classic tiramisu.

## Giusti balsamic creams — 25 October 2026

Three separate bottle illustrations generated with the built-in image_gen tool from the owner's supplied Giusti packaging photographs. They share a simple painted doodle style on a white background, with gold caps and flavour-specific labels:

- `giusti-truffle-glaze-doodle.png`: truffle, golden label.
- `giusti-raspberry-glaze-doodle.png`: raspberry, pink label.
- `giusti-fig-glaze-doodle.png`: fig, lilac label.

Original generated files remain stored locally. The complete prompts and final asset paths are recorded in `output/imagegen/giusti-creams-prompts.json` in the local application workspace.

## Quattrociocchi oils and gifts — 25 October 2026

Nine individual bottle doodles generated with the built-in image_gen tool, using the owner's Quattrociocchi packaging photographs. All have an opaque white background. The 500 ml variants depict a single bottle, following the owner's requested size rather than the 250 ml pairs in the source photographs.

- `quattrociocchi-superbo-500ml-doodle.png`: black Superbo bottle, red product name.
- `quattrociocchi-olivastro-500ml-doodle.png`: black Olivastro bottle with the three supplied award badges.
- `quattrociocchi-primolio-2025-500ml-doodle.png`: white Primolio 2025 bottle.
- `quattrociocchi-olivastro-gift-100ml-doodle.png`: small Olivastro bottle with the same supplied badges.
- `quattrociocchi-truffle-gift-100ml-doodle.png`: small truffle-flavoured bottle.
- `quattrociocchi-orange-gift-100ml-doodle.png`: small orange-flavoured bottle.
- `quattrociocchi-lemon-gift-100ml-doodle.png`: small lemon-flavoured bottle.
- `quattrociocchi-basil-gift-100ml-doodle.png`: small basil-flavoured bottle.
- `quattrociocchi-garlic-chili-gift-100ml-doodle.png`: small garlic-and-chili bottle.

The Olivastro award designs reproduce the supplied Flos Olei 2026 Point 100, Olive Japan Premier 2026 and Gold 2026 badges. The other illustrations do not inherit Olivastro's badges. Full prompts, source outputs and final paths are saved locally in `output/imagegen/quattrociocchi-products-prompts.json`.

## Original demonstration photos

Photographs were downloaded from Unsplash's image service and are served locally. They are illustrative examples to replace with photographs of the restaurant's actual dishes.

| Local file | Source image |
| --- | --- |
| burrata.jpg | https://images.unsplash.com/photo-1608897013039-887f21d8c804 |
| pasta.jpg | https://images.unsplash.com/photo-1551183053-bf91a1d81141 |
| pizza.jpg | https://images.unsplash.com/photo-1579751626657-72bc17010498 |
| risotto.jpg | https://images.unsplash.com/photo-1473093295043-cdd812d0e601 |
| coffee.jpg | https://images.unsplash.com/photo-1572442388796-11668a67e53d |
| latte.jpg | https://images.unsplash.com/photo-1461023058943-07fcbe16d735 |
| spritz.jpg | https://images.unsplash.com/photo-1544145945-f90425340c7e |
| tiramisu.jpg | https://images.unsplash.com/photo-1571877227200-a0d98ea607e9 |
| gelato.jpg | https://images.unsplash.com/photo-1563805042-7684c019e1cb |
| pannacotta.jpg | https://images.unsplash.com/photo-1488477181946-6428a0291777 |

The icon paths, wordmark, placeholder and interface graphics are included as application source. Fonts use the operating system's local Georgia and Segoe UI/Arial fonts. The portable Node.js runtime's license is included at `.runtime/LICENSE`.
