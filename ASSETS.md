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

- `bacon-corn-mozzarella-pizza-doodle.png`
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
