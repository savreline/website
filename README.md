# website
68618762

## 1. Getting Started
### 1.1 Installation options
* Download final files, use CDN, dowload source files, package managers
* Regular/grid/reboot/min/map versions of all files (map is original files and are useful in development,
min is the non customizable version, grid contains only the grid, reboot resets the CSS in browsers for consistency)
* JS bootstrap bundle includes the popper.js library

### 1.2 Creating a basic template
* The Bootstrap website provides the basic template code that includes just the jQuery slim verison
* Additional style sheets would go below the Bootstrap style sheet
* Order for loading scripts: jQuerry, Popper, Bootstrap

## 2. Using Basic Styles
### 2.1 Basic styles overview
* Browser Styles - Bootstrap CSS - Custom CSS
* Reboot: make things consistent across different platforms by using rems [1rem == 16px]
and through using CSS inheritance whenever possible [easy to override]

### 2.2 Basic typography
* border-box - takes into account built-in padding, no need to add it
* alternate to h1, h2, ... - display-1, display-2, ... are bigger
* specify lead paragraphs - lead

### 2.3 Typographic utilities
* horizontal alignment - justify paragraph - text-justify; by breakpoint - text-lg-center
* vertical alignment - align-baseline, align-middle, align-text-top (of text within the line)
* capitalization
* text styles - font-weight-light font-italic
* text modifiers - text-decoration-none (do not underline links); text-reset (get rid of link color)
* flow - text-nowrap, text-truncate (results in ...)

### 2.4 Blockquotes and lists
* list-unstyled (top level only, added to ul, gets rid of the bullets)
* inline lists (added to ul, add list-inline-item to each li, elements appear side-by-side)
* blockquotes, add author into blockquote-footer
* px-5, my-1 - add padding, margins to x or y

### 2.5 Using color with Bootstrap
* text-primary, text-secondary, text-success, text-warning, text-danger, text-info, text-white, text-body (can redefine using Bootstrap Saas)
* bg-primary, bg-success, bg-light, bg-dark, bg-transparent, bg-faded

### 2.6 Work with images
* img-fluid (automatically adjusts to the container and is responsive)
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

## 3. Mastering Layout with Bootstrap
### 3.1 Layout overview
* Bootstrap uses a very flexible grid
* 3 parts: containers, rows and columns (12-column grid system, flexbox-based)

### 3.2 Using containers
* container-sm -md -lg -xl -fluid (15px padding to the edge of the monitor, 30px in-between columns)
* the fluid class always snaps to the edge of the monitor, others will snap to certain breakpoints

### 3.3 Working with rows and columns
* row class encompases several column classes
* row-cols-lg-2 (1-6: how many columns per row, can include a class per each breakpoint)
* col-lg-2 (1-12: how many units to take up)
* no-gutters (removes the 30px of padding)

### 3.4 Multiple column classes
* `row row-cols-1 rows-cols-sm-2 rows-cols-md-3`

### 3.5 Offset columns
* offset-sm-1 (1-11: used to center columns in earlier days, before flex box was introduced)

### 3.6 Nested columns
* can create a new row inside any column (can effectively make columns that are for example 1/16 of the full page width)

### 3.7 Custom order
* order-sm-1 (1-12: changes the order of the given column)
* all ordered columns are placed after all of the non-ordered ones, so should specify an order for each column
* d-flex flex-column (put things next to each other)

### 3.8 Grid alignment options
* align-items-start/center/end (vertical: use in rows)
* align-self-start/center/end (vertical: use in columns)
* justify-content-start/center/end/around/between (horizontal)
* around tries to make all spacing equidistant
* between pushes the columns to the edges

### 3.9 Display properties
* fixed-top/fixed-bottom/sticky-top (sticky-top lacks support and is the only one that aligns to the container)
* d-sm-none/inline/inline-block/block/table/table-row/table-cell/flex/inline-flex
* d-print-none/... (when using paper printer)
* inline-block allows to specify width and height
* inline-flex is an inline element whose sub-elements are controlled by flex

### 3.10 Flexbox container options
* flex-sm-row/column-reverse (stack elements or have them in a line)
* flex-sm-wrap/nowrap-reverse
* can also use the custom order and justification classes
* align-content-sm-start/end/center/between/around/stretch

### 3.11 Individual flex elements
* align-self-sm-start/end/center/baseline/stretch (align multiple elements by the baseline, stretch is the default)
* can also use the custom order class 

### 3.12 Floating elements
* not as popular in the new Bootstrap
* float-sm-left/right/none
* add clearfix class to the parent to ensure that it doesn't lose track of the floating children

### 3.13 Margin and padding
* (m/p)(t/r/b/l/x/y)-sm-1 (0-5 or auto, each step = 0.5rem, can make the value negative by adding n at the front)
* padding adds space on the inside, margin adds space on the outside
* x means left and right
* mx-auto pushes the surrounding elements off to the sides

### 3.14 Visibility
* invisible/visible (invisible elements still take up room, visible elements are visible only to screen readers)
* use d-none to hide an element (can specify breakpoints at which the property would take effect)

### 3.15 Sizing utilities
* siz-w/h/mw/mh/vw/vh/min-wv/min-vh/auto(25/50/75/100)
* vw/vh means viewport width/height
* mw/mh means max width/height
* m-0 would clear out the margins

### 3.16 Using borders
* border-top/right/bottom/left-primary/secondary/success/danger/warning/info/light/dark/white-0
* rounded-top/right/bottom/left-circle/pill-0/sm/lg
* `border border-primary`
* `border rounded-circle` (turns the element into a circle)

## 4. Using Navs and Navbar Components
### 4.1 Navbar overview
* The next most important component after the grid
* Navs are parents to tabs, pills (those change when clicked) and navbars

### 4.2 Create basic navigation
* can use with ul and li or without
* nav and nav-item (put inside the link or the li)
* nav-link, active, disabled
* nav-pills, nav-tabs
* can use the justify class for alignment or nav-fill, nav-justified, flex-column, flex-sm-row
[nav-fill allows the text to be wider, flex-row/column: when should the items stack up]
* `<li class="nav-item"><a class="nav-link active">...</a></li>`
* `<a class="nav-item nav-link active">...</a>`
* `<nav class="nav nav-pills justify-content-end">...</nav>`

### 4.3 Create a navbar
* navbar-nav with nav-item/nav-link inside
* navbar-expand-sm
* bg-color
* navbar-light/dark

### 4.4 Use branding and text
* navbar-brand/text (adjusts the given text to the style of the rest of the navbar)

### 4.5 Add a dropdown to navigation
* dropdown
* dropdown-toggle (gives the triangle, add to the top item of the menu)
* dropdown-menu
* dropdown-item
* also need `data-toggle="dropdown"` and assign some aria attributes for screenreaders, href must be set to #

### 4.6 Add form elements
* form-inline inside the form tag
* form-control inside the input tag
* btn btn-outline-light inside the button tag

### 4.7 Control positioning
* `<nav class="navbar sticky-top">`

### 4.8 Create collapsible content
* collapse navbar-collapse (goes around the content we wish to collapse, that tag also needs the id attribute)
* navbar-toggler (goes on the button along with data-toggle="collapse" attribute and data-target="#ourId")
* navbar-toggler-icon (into span, will appear in the written order with respect to navbar-brand)

## Additional Notes
* https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
* `Set-ExecutionPolicy -Scope LocalMachine Unrestricted`
* `<nav class="navbar" style="background-color: red">`
* `<img src="" style="width:80px;" alt="">`
* `<d-none d-xl-inline-block>` to make things appear/disappear
* data attributes typically correspond to something with JavaScript
