# website
68618762

## 2 Using Basic Styles
### 2.1 Basic Styles Overview
* Browser Styles - Bootstrap CSS - Custom CSS
* Reboot: make things consistent across different platforms by using rems [1rem == 16px]
and through using CSS inheritance whenever possible [easy to override]

### 2.2 Basic Typography
* border-box - takes into account built-in padding, no need to add it
* alternate to h1, h2, ... - display-1, display-2, ... are bigger
* specify lead paragraphs - lead

### 2.3 Typographic Utilities
* horizontal alignment - justify paragraph - text-justify; by breakpoint - text-lg-center
* vertical alignment - align-baseline, align-middle, align-text-top (of text within the line)
* capitalization
* text styles - font-weight-light font-italic
* text modifiers - text-decoration-none (do not underline links); text-reset (get rid of link color)
* flow - text-nowrap, text-truncate (results in ...)

### 2.4 Blockquotes and Lists
* list-unstyled (top level only, added to ul, gets rid of the bullets)
* inline lists (added to ul, add list-inline-item to each li, elements appear side-by-side)
* blockquotes, add author into blockquote-footer
* px-5, my-1 - add padding, margins to x or y

### 2.5 Using color with Bootstrap
* text-primary, text-secondary, text-success, text-warning, text-danger, text-info, text-white, text-body (can redefine using Bootstrap Saas)
* bg-primary, bg-success, bg-light, bg-dark, bg-transparent, bg-faded

### 2.6 Work with images
* img-fluid (automatically adjusts to container, so is responsive)
* img-thumbnail
* rounded-top, rounded-right, rounded-circle, rounded-pill, rounded-0, rounded-sm, rounded-lg
* float-left, float-right (those are quite useful)
* text-center (images are inline elements, otherwise use mx-auto)
* figure-img, figure-caption
```
<style>img {border-radius: 20px; width: 200px;}</style>
```

### 2.7 CSS variables
* Allows to override CSS variables (e.g. colors) on particular object
* Can use the :root{ --pink: #...} to redefine built-in CSS variables, but some of the variables (e.g. danger) are hard-coded by the !important attribute
* Media Queries --breakpoint-xs -sm -md -g -xl
* Fonts --font-family-sans-serif --font-family-monospace

### 2.8 Text selection
* user-select-auto, user-select-all, user-select-none (what happens when users are trying to select text)
