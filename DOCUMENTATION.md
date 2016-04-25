## Documentation

You can see below the API reference of this module.

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

