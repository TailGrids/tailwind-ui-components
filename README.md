# Free Tailwind CSS UI Components by TailGrids

TailGrids is a library of high-quality Tailwind CSS UI components and blocks, designed specifically for modern websites, landing pages, and web apps. It comes with all the essential UI components and elements you would expect from a top-notch UI library, featuring a consistent design and a copy-paste UI building tool.

The free core version provides numerous UI components along with all core components. It is available for both personal and commercial projects. Please feel free to use it, and don't forget to support and inspire our team by starring this repo.

### [🚀 Explore All Components](https://tailgrids.com/components)

### [🌏 Visit Website](https://tailgrids.com)

### [📃 Documentation](https://tailgrids.com/docs)

## Installation

**Step #1**: Install Tailwind and generate the config file.

```shellscript copy
npm install -D tailwindcss
npx tailwindcss init
```

Step #2: Install TailGrids

```shellscript copy
npm i tailgrids
```

Step #3: Update the tailwind.config.js file with the TailGrids plugin.

```js filename="tailwind.config.js" copy showLineNumbers
module.exports = {
  content: ["./*.html", "./**/*.{html,js,jsx,ts,tsx,vue}", "./assets/**/*.js"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
```

**Note:** This is the config file for the HTML project. Go to [Tailwind CSS docs](https://tailwindcss.com/docs/installation/framework-guides) and install Tailwind according to your Framework and Languages.

**Step #4**: Add Tailwind CSS directives to your CSS.

Create a CSS file named **input.css** in the root of your project or the /**src** directory. Then, include this code at the top of the file.

```css copy
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step #5**: Generate the CSS file with the build command.

To do that, we must first add the build script to the **package.json** file. Make sure you’ve provided the correct path of the **input.css** file. If it’s in the root, keep the script as it is. If it’s under the /**src** directory, \*\*\*\*include it before the CSS file.

```javascript copy
"scripts": {
    "build": "npx tailwindcss -i ./input.css -o ./dist/output.css --watch"
  },
```

Then, we will have to run the build command:

```shellscript copy
npm run build
```

**Step #6**: Include the compiled CSS file in the HTML file. We’ve compiled the file in the **dist** folder.

```html copy
<link href="/dist/output.css" rel="stylesheet" />
```

Now, you can copy and paste the components from TailGrids and build websites.

> This TailGrids NPM package enables you to use UI components seamlessly in HTML, React, and Vue projects.

### Detailed Installation Guides for React and Vue:

- **[Installing on React](https://tailgrids.com/docs/components/react)**
- **[Installing on Vue](https://tailgrids.com/docs/components/vue)**

### [⚡ Get PRO Version](https://tailgrids.com/pricing)

### [📄 Detailed Documentation and Usage Guide](https://tailgrids.com/docs)

### [👉 TailAdmin React](https://tailgrids.com/react)

### [👉 TailAdmin Vue](https://tailgrids.com/vue)

### [🖌️ TailGrids Figma](https://tailgrids.com/figma)

## 💙 Support

You can always support this project and inspire us by [Starring🌟 This Repository](https://github.com/TailGrids/tailwind-ui-components)
and sharing with friends. If you like the the library consider purchasing the [Pro version](https://tailgrids.com/pricing)

## Changelog

### Version 2.2.0

(May, 2024)

- Added over 80 new components.
- Updated the core style guide.
- Revised the file structure.
- Enhanced the plugin to reduce dependencies.
- Updated the Tailwind CSS version along with other dependencies.

### Version 2.1.0

(October, 2023)

- Introduced dark mode.
- Polished existing components.
- Incorporated a few core components.
- Updated dependent packages.

## Version 2.0.0

(February, 2023)

- This major release doubled our components, introduced dark mode, and expanded our components & example templates.
- 500+ Tailwind UI Components (200+ Newly Added)
- 12 Templates (8 Newly Added)
- Dark mode for all Components
- Updated Figma File with New UI Components
- 2 E-Commerce Templates
- 90+ Advanced | Core, Marketing and App UI Components
- 50+ Dashboard UI Components
- 100+ eCommerce Components

## Version 1.1.0

(March, 2022)

We focused on enhancing your design experience with Figma integration and new templates.

- 2 New Templates
- Figma Source for UI Components
- Responsive Buttons / Viewport
- Dedicated Templates Gallery

## Initial Release

(February, 2022)

The journey began! We launched TailGrids with a strong foundation of components and templates.

- Initial 300+ UI Components
- Two Example Templates
- NPM Package for Open Source Version

## 🎁 License

TailGrids Core Version is 100% Free! and open-source you can use it with your personal or commercial projects.

## UI Components

[![sneak-peek](https://cdn.tailgrids.com/tailgrids-components.svg)](https://tailgrids.com/components)
