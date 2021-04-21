exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        { id: 1, word: 'mōrena', pronounciation: '(maaw-reh-nah)', definition: 'good morning.' },
        { id: 2, word: 'taonga', pronounciation: '(tah-aw-nga)', definition: 'treasure, prized possession.' },
        { id: 3, word: 'moni', pronounciation: '(maw-knee)', definition: 'money' },
        { id: 4, word: 'hui', pronounciation: '(who-ee)', definition: 'to gather, assemble, a meeting' },
        { id: 5, word: 'rorohiko', pronounciation: '(roh-roh-he-caw)', definition: 'computer' },
        { id: 6, word: 'īmēra', pronounciation: '(ee-meeh-ra)', definition: 'email' },
        { id: 7, word: 'mahi', pronounciation: '(mah-he)', definition: 'work, to do, make' },
        { id: 8, word: 'take', pronounciation: '(tah-keh)', definition: 'reason, cause, origin, subject of discussion' },
        { id: 9, word: 'tīmata', pronounciation: '(tee-mah-tah)', definition: 'to begin, to start' },
        { id: 10, word: 'tauira', pronounciation: '(toe-ee-rah)', definition: 'student' },
        { id: 11, word: 'kaiako', pronounciation: '((k)eye-ah-caw)', definition: 'teacher' },
        { id: 12, word: 'pātai', pronounciation: '(paah-tie)', definition: 'question' },
        { id: 13, word: 'wānanga', pronounciation: '(waah-nah-nga)', definition: 'a place of learning' },
        { id: 14, word: 'maunga', pronounciation: '(mow-nga)', definition: 'mountain' },
        { id: 15, word: 'awa', pronounciation: '(ah-wah)', definition: 'river' },
        { id: 16, word: 'roto', pronounciation: '(raw-taw)', definition: 'lake' },
        { id: 17, word: 'noho', pronounciation: '(naw-haw)', definition: 'stay, sit, live' },
        { id: 18, word: 'moana', pronounciation: '(maw-ah-nah)', definition: 'sea, ocean' },
        { id: 19, word: 'mihi', pronounciation: '(me-he)', definition: 'to greet' },
        { id: 20, word: 'hīkoi', pronounciation: '(he-koy)', definition: 'walk' },
        { id: 21, word: 'menemene', pronounciation: '(meh-neh-meh-neh)', definition: 'smile' },
        { id: 22, word: 'oma', pronounciation: '(aw-mah)', definition: 'run' },
        { id: 23, word: 'kaukau', pronounciation: '((k)\'O\'-(k)\'O\')', definition: 'to bathe, swim' },
        { id: 24, word: 'neke', pronounciation: '(meh-keh)', definition: 'move' },
        { id: 25, word: 'āpōpō', pronounciation: '(aah-paaw-paaw)', definition: 'tomorrow' },
        { id: 26, word: 'maumahara', pronounciation: '(mow-mah-ha-rah)', definition: 'remember' },
        { id: 27, word: 'kite', pronounciation: '(key-teh)', definition: 'see, find' },
        { id: 28, word: 'whakapono', pronounciation: '(fah-cah-paw-naw)', definition: 'believe' },
        { id: 29, word: 'aroha', pronounciation: '(ah-raw-ha)', definition: 'lvoe' },
        { id: 30, word: 'mauāhara', pronounciation: '(mow-aah-ha-rah)', definition: 'hate, loathe' },
        { id: 31, word: 'ngeru', pronounciation: '((ng)eh-ru)', definition: 'cat' }
      ])
    })
}
