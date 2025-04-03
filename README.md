# Nozama Web

Welcome back to Nozama! We've missed you.

No, really. Our CEO's cousin said he'd build the website and... well look at it.

## Setting up

Set up for this project is pretty simple.

1. Open a terminal, and run `npm install`

2. Then, run `npm run dev` and the site should open at
   [localhost:5173](http://localhost:5173)

> [!TIP]
>
> In case you have any trouble, you can always open this project in a Codespace
> by clicking "Code > Codespaces" at the top of the README page on Github.com.

## Scenario

You’ve been handed an old, inconsistent, and poorly designed website that needs
a **modern refresh**. Your task is to:

1. Identify the issues with the current site.

2. Refactor and redesign it using modern CSS techniques and UI principles.

**Objective:** Create a visually appealing, accessible, responsive, and
maintainable website that adheres to design system principles and enhances user
experience.

## Tasks

### Identify and document problems

- [x] List all the design, accessibility, and technical issues you find in the
      provided code.

### Refactor for maintainability

- [x] Remove inline CSS and use CSS files.

- [x] Replace hardcoded values with custom properties.

### Make it consistent

- [x] Make a simple design system and apply it to the page.

- [x] Use custom properties to create predefined values such as
      `--padding-1: 4px` and `--padding-2: 8px` and so on.

### Improve accessibility

- [x] Add meaningful alt attributes to images.

- [x] Ensure all interactive elements are keyboard accessible.

- [x] Test and fix colour contrast issues.

### Make it responsive

- [X] Use Flexbox or CSS Grid for layout.

- [X] Add
      [media queries](https://tech-docs.corndel.com/html-css/media-queries.html)
      to adjust the layout for different screen sizes.

### Add dark mode

- [ ] Use custom properties to define
      [light and dark themes](https://tech-docs.corndel.com/html-css/dark-mode.html).

- [ ] Use `prefers-color-scheme` to apply dark mode responsively and/or a button
      to toggle dark mode.

## Enhance visual hierarchy

- [ ] Use modern CSS functions like
      [`clamp()`](https://tech-docs.corndel.com/html-css/selectors-and-functions.html#special-functions)
      for fluid typography.

- [ ] Establish a clear visual hierarchy with consistent
      [font sizes](https://typescale.com/) and weights.
