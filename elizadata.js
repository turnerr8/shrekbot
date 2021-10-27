// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"What are you doing in my swamp?",
// additions (not original)
"How are you today donkey?",
"Princess?"
];

var elizaFinals = [
"Get out me swamp!",
// additions (not original)
"https://www.youtube.com/watch?v=1bkbjpqj7L8",
"Goodbye. donkey.",
"No waffles in the morning.",
"Shut it donkey."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "What are ye talking about ?",
     "huh ?",
     "Go on princess",
     "Please tell me more about your layers.",
     "Aye.",
     "You're going the right way for a smacked bottom.",
     "Can we just settle this over a pint ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Alright alright donkey.",
     "No appologies in this swamp."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "And I remember when I lived alone.",
     "What makes you say that donkey ?"
  ]],
 ["* do you remember *", [
     "I remember peace.",
     "Of course I remember (2) princess.",
     "What about it?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Being locked in a tower tends to make you forget that.",
     "Is this because of the dragon ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Why would you ask me that ?!",
     "Did the other creatures tell you (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Is this what you thought about in the tower ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "Is this a Lord Farquaad dream ?",
     "Is this an ogre dream or a human dream ?",
     "I dream of having my swamp back, what about you ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain princess.",
     "Thats doubtful donkey",
     "Maybe theres a good reason donkeys dont talk ."
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names, you'll be out of my swamp soon enough.",
     "I'm the ogrelord.",
     "And I'm shrek."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only Ogre."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hello Princess.",
     "This is why I don't leave my swamp.",
     "What do you want donkey ?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Whats a computer ?",
     "Is this fairy godmothers magic ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "I'm an ogre, what are you",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I miss you humming donkey."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't an ogre ?",
     "Perhaps I am (2) in your fantasies princess.",
     "goto what",
     "Would it matter to you ?",
     "I have layers, maybe I am (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "The fairy tale creatures are (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "Think about your own (2) donkey.",
     "Look i'm not the one with the problem okay !?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "I miss you humming donkey.",
     "Does (2) make you think of your layers ?",
     "Were you (2) princess ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why were you (2) ?"
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "Why would you say that donkey?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "Is (3) your deepest desire ?",
     "Did the mirror show you this ?",
     "Donkey I do not care."
  ]],
 ["* i am* @sad *", [
     "We're all sad princess.",
     "That must suck princess.",
     "Whats all this about ?"
  ]],
 ["* i am* @happy *", [
     "I am glad your happy princess",
     "Did Lord Farquaad make you (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "That feels like you read it in a fairy tale."
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "And i'm an ogre, we all have our issues princess.",
     "Do you think (2) is as bad as a singing donkey?"
  ]],
 ["* i @cannot *", [
     "No you can't princess.",
     "Have you tried ?",
     "But your already halfway."
  ]],
 ["* i don't *", [
     "Why don't you (2) with your own friends ?",
     "No wonder you don't have friends."
  ]],
 ["* i feel *", [
     "Oh that's great. really.",
     "Just keep moving and don't look down."
  ]],
 ["* i * you *", [
     "No! I'm an ogre!",
     "Do you wish to (2) me princess ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Pleasse tell me more donkey."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
  //CONTINUE-HERE
 ["* you are *", [
     "Do you wish I was that princess ?",
     "No I am an ogre.",
     "Ogres are like onions.",
  ]],
 ["* you* me *", [
     "I would never (2) you princess.",
     "Donkey there is no way.",
     "My layers don't permit this."
  ]],
 ["* you *", [
     "You don't need to know me",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "Is that so ?",
     "Are you sure about that donkey ?",
     "Alright."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Very well, I'll take care of it.",
     "Well then.",
     "You sound like Farquaad.",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Would this have to do with the fact that your (2) ?",
     "How about you tak about your (2) to someone else.",
     "Very well mY hIgHnEsS.",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "My family abandoned me.",
     "Whats a family ?",
     "Your (3) ?",
     "No donkey we aren't family ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Ah this and your kingdom ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you princess ?",
     "goto what",
     "No donkey I cannot do that.",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof