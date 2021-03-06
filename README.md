# estimate

> Get remaining reading time estimates in real-time

**[Live Demo][1]**

# Install

```shell
npm install --save estimate
```

```shell
bower install --save estimate
```

# Usage

## `.text(value)`

Estimates the reading time in seconds for a piece of text to be read completely.

```js
estimate.text('........');
// <- 3
```

## `.element(elem)`

Estimates reading time for a given element. Returns a small API.

```js
estimate.element(document.body);
// <- { ... }
```

#### `.total`

Total duration in seconds to read the full article.

#### `.progress`

The progress percentage that's considered to be already read.

#### `.remaining`

Duration in seconds that remains to read the rest of the article.

#### `.update()`

Call it through `requestAnimationFrame` to update the estimate. Updates `calc.progress` and `calc.remaining`.

```js
var calc = estimate.element(document.body);

requestAnimationFrame(function refresh () {
  calc.update();
  time.innerText = calc.remaining;
  requestAnimationFrame(refresh);
});
```

#### `.initialize()`

Re-initialize the calculator whenever the text changes. Updates `calc.total`.

**Caveat:** At any given point, half of the height in the viewport is considered read.

# License

MIT

[1]: http://bevacqua.github.io/estimate/
