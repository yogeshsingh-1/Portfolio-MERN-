<!-- Icon -->

https://www.svgrepo.com/?utm_source=chatgpt.com
https://devicon.dev/?utm_source=chatgpt.com

npm install @marsidev/react-turnstile
0 = 5
src/
│
├── assets/ # images, icons, fonts
├── components/ # reusable UI components
│ ├── ui/
│ ├── cards/
│ └── buttons/
│
├── pages/ # pages/screens
│ ├── Home/
│ ├── About/
│ └── Contact/
│
├── layouts/ # navbar, sidebar, footer layouts
│
├── routes/ # react-router setup
│
├── hooks/ # custom hooks
│
├── context/ # Context API files
│
├── services/ # API calls (axios/fetch)
│
├── utils/ # helper functions
│
├── store/ # Zustand/Redux store
│
├── styles/ # global css, tailwind css
│
├── types/ # TypeScript interfaces/types
│
├── App.jsx
└── main.jsx

<!-- UI Color -->

| Purpose         | Color         | Hex       |
| --------------- | ------------- | --------- |
| Background      | Deep Black    | `#050816` |
| Card Background | Dark Navy     | `#0B1120` |
| Border Glow     | Dark Purple   | `#6D28D9` |
| Primary Purple  | Neon Purple   | `#7C3AED` |
| Bright Purple   | Accent Purple | `#9333EA` |
| Blue Glow       | Electric Blue | `#2563EB` |
| Cyan Accent     | Cyan          | `#06B6D4` |
| Text White      | Soft White    | `#F8FAFC` |
| Secondary Text  | Gray          | `#94A3B8` |

<!-- Mobile UI ko correctly approach kaise kare -->

1 . Pehle mobile design soch
Instead:

Mobile UI first banao
Fir tablet
Fir desktop

This is called:

Mobile First Design

Mobile me space bahut limited hoti hai

Desktop:

horizontal space zyada

Mobile:

vertical scrolling natural hota hai

Isliye mobile me:

items stack karo
columns avoid karo
spacing simple rakho

Bad mobile approach:
display: flex;
justify-content: space-between;

Better:
flex-direction: column;
gap: 1rem;

Mobile layout ka basic formula

Most mobile screens follow:

# f(x)=vertical stacking for mobile layouts

Meaning:

vertical flow
full width sections
less side-by-side content

5. Fixed width mat use karo

Ye mobile tod deta hai.

Bad:
width: 1200px;

Good:
width: 100%;
max-width: 1200px;
margin: auto;

# Flexbox ko mobile-first use karo

.container {
display: flex;
flex-direction: column;
}

for tailwind:

<div className="
  flex
  flex-col
  md:flex-row
">

<!-- Mobile UI me kya avoid kare -->

❌ Large padding
❌ 4-column layouts
❌ Huge font sizes
❌ Sidebars
❌ Too many buttons in one row

<!-- Best practice for cards -->

Mobile:
width: 100%;

Desktop:
width: 300px;
