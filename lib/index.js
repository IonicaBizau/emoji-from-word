"use strict";

const emojis = require("emojilib")
    , emojiKeys = emojis.keys
    , levenshteinArray = require("levenshtein-array")
    , iterateObject = require("iterate-object")
    , average = require("average")
    ;

delete emojis.keys;

class Match {
     /**
      * Match
      * Creates a new `Match` instance.
      *
      * It contains the following properties:
      *
      *  - `input` (String): The input string.
      *  - `score` (Number): A number between `0` and `1`. The closer to `1` it is, the better match it is.
      *  - `emoji` (Object): The emoji object.
      *  - `emoji_name` (String): The emoji name.
      *
      * @name Match
      * @function
      * @param {String} input The input string (just a word).
      */
    constructor (input) {
        var r = emojis[input]
          , finalScore = -1
          , finalEmoji = null
          , emojiName = null
          ;

        this.input = input;
        this.matches = [];

        if (r) {
            finalScore = 1;
            finalEmoji = r;
            emojiName = input;
        } else {
            let matches = this.matches = [];
            iterateObject(emojis, (e, n) => {
                for (var i = 0; i < e.keywords.length; ++i) {
                    var c = e.keywords[i]
                      , equals = c === input
                      , index = c.indexOf(input)
                      , score = equals
                      ? 1 : index === 0
                      ? 0.95 : index > 0
                      ? 0.93 : -1
                      ;

                    if (score > finalScore) {
                        finalEmoji = e;
                        emojiName = n;
                        finalScore = score;
                        if (score === 1) {
                            return false;
                        }
                    }
                }

                matches.push({
                    score: 1 / (average(levenshteinArray(e.keywords, input).map(x => x.l)) + 1)
                  , emoji: e
                  , name: n
                });
            });
            if (!finalEmoji) {
                matches.sort((a, b) => {
                    return a.score < b.score ? 1 : -1;
                });
                let best = matches[0];
                finalScore = best.score;
                finalEmoji = best.emoji;
                emojiName = best.name
            }
        }

        this.score = finalScore;
        this.emoji = finalEmoji;
        this.emoji_name = emojiName;
    }

    /**
     * toString
     * Stringifies the `Match` instance.
     *
     * @name toString
     * @function
     * @return {String} The stringified emoji (e.g. `":smile:"`).
     */
    toString () {
        return ":" + this.emoji_name + ":";
    }
}

/**
 * emojiFromWord
 * Gets a `Match` instance for an input string.
 *
 * @name emojiFromWord
 * @function
 * @param {String} input The input string (just a word).
 * @return {Match} A `Match` instance (documented above).
 */
module.exports = function emojiFromWord(input) {
    return new Match(input);
};
