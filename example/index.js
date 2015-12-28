const emojiFromWord = require("../lib");

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
