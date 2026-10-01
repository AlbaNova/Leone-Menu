# Menu artwork and image sources

`leone-menu.png` is the original illustrated menu supplied by the restaurant owner. The file is unchanged. The interface displays individual pizza illustrations using SVG viewports and explicit clipping defined in `public/menu-art.js`. The hero uses the Margherita illustration; stuffed focaccia reuses the original focaccia illustration.

## Generated dish illustrations

Fifteen illustrations were generated with the built-in imagegen tool in the supplied menu's watercolor/doodle style. Original PNG outputs are stored in `public/assets/` in the local application (`assets/` in this public export) and displayed without cropping. The full prompt set is retained in the local project's `IMAGE-PROMPTS.md`.

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
