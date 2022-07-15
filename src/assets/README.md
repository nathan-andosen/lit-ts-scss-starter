
# Assets

## How to include icon fonts

* Use the [icomoon app](https://icomoon.io/app/#/select) to generate your font files
  * You can import the _./icomoon/selection.json_ file in the app to reload the currently selected icons.
* Download the generated files and add them to the directory _/src/assets/icomoon_ folder
* Now you will have to update the _./icon-font/icon-classes.scss_ file. Basically copy all the css from the file _./src/assets/icomoon/style.css_ (expect the @font-face code).

__Why do we add the icon fonts like this?__

The css _font-face_ can not be set in the shadow root, you have to set that style in the head of the page. 