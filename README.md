# Svelte Pipes

### Pipe transformation functions inspired by Angular Pipes

This repo contains a bare-bones example of how to create a library using Rollup and TypeScript, including importing a module from `node_modules` and converting it from CommonJS.



## Getting started

Clone this repository and install its dependencies:

```bash
$   git clone https://github.com/nikmerlock97/svelte-pipes
$   cd svelte-pipes
$   npm install
```


## Building

```bash
$  npm run build
```

This builds the library to `dist`, generating three files:


### 1. ***dist/svelte-pipes.cjs.js***

 - a CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency
 - corresponds to the `"main"` field in package.json
    
### 2. ***dist/svelte-pipes.esm.js***

 - an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency
 - corresponds to the `"module"`field in package.json
    
### 3. ***dist/svelte-pipes.umd.js***
 - a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency
 - corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).


## Testing

`npm test` builds the library, then tests it.


## License


Forked from [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib/tree/typescript).

Inspiration drawn from [Angular pipes](https://angular.io/api/core/Pipe) and [ngx-pipes](https://github.com/danrevah/ngx-pipes).

[MIT](LICENSE).
