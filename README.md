Five Directions Tutorials
=========================

A series of 5 interactive video tutorials created for [Jason Baerg's](https://www.jasonbaerg.ca/) Five Directions project. Intended for an audience of Indigenous artist, scholars and makers to enhance their knowledge of machine learning and AI systems, theory, history and philosophy particularly in regards to art making.

This projects code and structure is based off [Gleb Bahmutov's reveal-vite project](https://github.com/bahmutov/reveal-vite) which combines [Hakim El Hattab's reveal.js project](https://revealjs.com/) and [Vite](https://vitejs.dev/) build tool. I added [Asvin Goel's reveal plugins](https://github.com/rajgoel/reveal.js-plugins) particularly the Audio slideshow.


# Install

    $ npm install

    or alternatively use `pnpm` (my preference):

    $ pnpm install
    

# Development

    $ npm run dev

    or

    $ pnpm run dev

The presentation will run locally at http://localhost:3000. You can edit the `index.html`, `main.js`, or `style.css` to see it auto-reload, but will need to manually reload the browser page when making edits to the markdown files. If you make local edits to node modules you will need to delete `npm run dev -- --force` to recompile the javascript.


## Notes on dependencies

I have dramatically altered the `audio-slideshow` component of the [reveal.js-plugins](https://github.com/rajgoel/reveal.js-plugins) plugin pack. You can find my changes at [my repo](https://github.com/RKelln/reveal.js-plugins/tree/master/audio-slideshow).

Some tutorials use [wikipedia-preview](https://github.com/wikimedia/wikipedia-preview) to automatically turn links to wikipedia into rollover pop-up previews.


# Building static site

To build the presentation for hosting, run `npm run build`, which creates the `dist` folder.

    $ npm run build


## Testing static site
    
The `vite preview` command will boot up local static web server that serves the files from dist at http://localhost:4173/. It's an easy way to check if the production build looks OK in your local environment.

    $ npm run serve


### Deploying

I use a script to deploy to my own server (that is not included in the repo) that has this basic outline:

```bash
#!/bin/bash
SERVER_DIR=presentations/5_directions/

npm run build -- --base=/$SERVER_DIR

# set distribution files to correct ownership
find dist/ -type f -exec chmod 644 -- {} +

# transfer all files based on size only
rsync -e ssh -varuzP --delete --size-only --chown=username:www-data dist/* username@servername:/path/$SERVER_DIR 

# transfer html & asset files based on checksum 
# (they have only asset file changes sometimes that leave them with the same size)
# NOTE: using --relative and /./ to indicate relative break
rsync -e ssh -varuzP --delete --checksum --relative --chown=username:www-data dist/./*.html dist/./**/*.html dist/./**/*.md dist/./assets/* username@servername:/path/$SERVER_DIR 
```

# User Interface

* `spacebar` to pause / resume
* `left` & `up` arrows to go back
* `right` & `down` arrows to go forward
* `esc` to bring up a map to navigate
* `F` to go to fullscreen ( `esc` to exit )
* The red arrows in the bottom right also control movement
* The playback bar at the bottom controls the narration
* Text in red denotes clickable links
* `S` to bring up speaker notes for accessible text

There are slideshow-like controls that you can use to control the presentation. Spacebar will pause and resume. The left or up arrow will move you backward. The right or down arrows will move you forward. This is represented visually with the red arrows in the bottom right and clicking on them will react similarly.

The red bar at the bottom of the screen shows how far along you are in the presentation.


# Static files

The videos and images for the tutorials are not included in this repo, they may be released at a later date.


# Making PDFs of slides

You can export the talks as PDFs (currently best using Chrome/Chromium) by opening the slideshow and adding `?print-pdf` to the end of the url. Its usually best to scroll through the entire presentation to make sure everything is loaded. 

1. Open your presentation with `print-pdf` included in the query string, for example: `http://localhost:3000/?print-pdf`.
2. Open the in-browser print dialog (CTRL/CMD+P).
3. Change the **Destination** setting to **Save as PDF**.
4. Change the **Layout** to **Landscape**.
5. Change the **Margins** to **None**.
6. Enable the **Background graphics** option.

See https://revealjs.com/pdf-export/ for more details.


# Making your own presentation

If you want to make your own presentations like this one you can fork this repo, delete the markdown files in `writing/` and the subdirectories for the tutorials (`foundations`, etc) and edit `index.html`. I'll endeavour to make a template that makes this easier in the near future.


# Credits

You can find more links and credits by viewing the speaker notes (using the `S` key).

## Special thanks

* Laura, Jason, Kristy, Liz, and the Harbour Collective
* InterAccess, OCADU, and the Canada Council for the Arts
* The Diagonal AI Reading group
* All the <a title="Thank you Laura, Lucas, Giuliana, Eric, Dallas, Rinat, Rod, Jason, Liz, Graham, and Cameron">beta testers</a>

## Code and other tools

* [Reveal.js](https://revealjs.com/) slideshow framework by Hakim El Hattab
* [reveal.js-plugins](https://github.com/RKelln/reveal.js-plugins) by Asvin Goel
* [kdenlive](https://kdenlive.org/) video editor
* [LosslessCut](https://github.com/mifi/lossless-cut) by Mikael Finstad
* [Audacity](https://www.audacityteam.org/) audio editor
* [maua](https://github.com/maua-maua-maua/maua) generative art code by [Hans Brouwer](https://wavefunk.xyz/)

## Licence

The code, writing and audio narration are licensed under Creative Commons Attribution-ShareAlike 4.0 International. The images and videos retain their original varied licensing but are incorporated under Fair Use provisions.

