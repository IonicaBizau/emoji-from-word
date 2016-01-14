# emoji-from-word [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/emoji-from-word.svg)](https://www.npmjs.com/package/emoji-from-word) [![Downloads](https://img.shields.io/npm/dt/emoji-from-word.svg)](https://www.npmjs.com/package/emoji-from-word) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get emoji from input word.

## Installation

```sh
$ npm i --save emoji-from-word
```

## Example

```js
const emojiFromWord = require("emoji-from-word");

console.log(emojiFromWord("house"));
// => Match {
//  input: 'house',
//  score: 1,
//  emoji:
//   { keywords: [ 'building', 'home' ],
//     char: '🏠',
//     category: 'travelandplaces' },
//  emoji_name: 'house' }

console.log(emojiFromWord("door").toString());
// => ":door:"

console.log(emojiFromWord("happy").toString());
// => ":grinning:"

console.log(emojiFromWord("space").toString());
// => ":milky_way:"

console.log(emojiFromWord("keys").toString());
// => ":key:"
```

## Documentation

### `Match(input)`
Creates a new `Match` instance.

It contains the following properties:

 - `input` (String): The input string.
 - `score` (Number): A number between `0` and `1`. The closer to `1` it is, the better match it is.
 - `emoji` (Object): The emoji object.
 - `emoji_name` (String): The emoji name.

#### Params
- **String** `input`: The input string (just a word).

### `toString()`
Stringifies the `Match` instance.

#### Return
- **String** The stringified emoji (e.g. `":smile:"`).

### `emojiFromWord(input)`
Gets a `Match` instance for an input string.

#### Params
- **String** `input`: The input string (just a word).

#### Return
- **Match** A `Match` instance (documented above).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`emoji-from-text`](https://github.com/IonicaBizau/emoji-from-text#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md