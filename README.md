Five Directions Tutorials
=========================

A series of 5 interactive video tutorials created for Jason Baerg's Five Directions project.
Intended for an audience of Indigenous artist, scholars and makers to enhance their 
knowledge of machine learning and AI systems, theory, history and philosophy particularly
in regards to art making.

This projects code and structure is based off [Gleb Bahmutov's reveal-vite project](https://github.com/bahmutov/reveal-vite) which combines [Hakim El Hattab's reveal.js project](https://revealjs.com/) and [Vite](https://vitejs.dev/) build tool. I added [Asvin Goel's reveal plugins](https://github.com/rajgoel/reveal.js-plugins) particularly the Audio slideshow.

# Install

    $ npm install
    
# Development

    $ npm run dev

The presentation will run locally at http://localhost:3000. You can edit the `index.html` and `main.js` to see it auto-reload.

# Building static site

To build the presentation for hosting, run `npm run build`, which creates the `dist` folder.

    $ npm run build

## Testing static site
    
The `vite preview` command will boot up local static web server that serves the files from dist at http://localhost:5000. It's an easy way to check if the production build looks OK in your local environment.

    $ npm run preview
