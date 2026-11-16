/**
 * POETRY DATA
 * Add your poems here. They will appear on the /poetry page.
 *
 * HOW TO ADD A POEM:
 *   1. Copy the template object at the bottom of this file.
 *   2. Fill in title, lines (each string is one line; use '' for a blank line).
 *   3. Optionally set category and date.
 *   4. Add it to the `poems` array — newest first is recommended.
 *   5. Save — the poetry page will render it automatically.
 *
 * CATEGORIES (optional):
 *   'Life' | 'Growth' | 'Feelings' | 'Unspoken' | 'Fragments'
 */

export type PoemCategory = 'Life' | 'Growth' | 'Feelings' | 'Unspoken' | 'Fragments';

export interface Poem {
  id: string;
  title: string;
  lines: string[];         // each string = one line; '' = blank line (stanza break)
  category?: PoemCategory;
  date?: string;           // e.g. "November 2026" — displayed as written, not sorted
  note?: string;           // optional italicised note below the poem
}

// ─── Poems ───────────────────────────────────────────────────────────────────
export const poems: Poem[] = [

  // ── 1. Love doesn't choose everyone. (27 September) ──────────────────────
  {
    id: 'love-doesnt-choose-everyone',
    title: 'Love doesn\'t choose everyone.',
    date: '27 September',
    category: 'Feelings',
    lines: [
      'Love doesn\'t choose everyone.',
      '',
      'Some people spend their lives',
      'remembering how others take their chai,',
      'noticing the silence behind a smile,',
      'staying a little longer',
      'when someone says, "I\'m fine."',
      '',
      'They love in small things....',
      'warm meals, late-night conversations,',
      'sunsets saved in photographs,',
      'and the quiet comfort of simply staying.',
      '',
      'They give without keeping count,',
      'forgive without being asked,',
      'and keep a little softness',
      'even after betrayal teaches them not to.',
      '',
      'And still,',
      'they are often left wondering...',
      '',
      'Why does love find everyone',
      'except me?',
      '',
      'Maybe it isn\'t because',
      'they are too much.',
      'Too emotional.',
      'Too ordinary.',
      'Too imperfect.',
      '',
      'Maybe some hearts',
      'are simply used to giving',
      'before they learn',
      'that they deserve to receive.',
      '',
      'Because love exists.',
      '',
      'It lives in chai gone cold',
      'while someone listens,',
      'in hands held a little tighter,',
      'in choosing honesty over lust.',
    ],
  },

  // ── 2. Lavender Haze (15 July) ─────────────────────────────────────────
  {
    id: 'lavender-haze',
    title: 'Lavender Haze',
    date: '15 July',
    category: 'Feelings',
    lines: [
      'Just wondering, with each passing day,',
      'does loving someone hurt so much that',
      'it starts turning into physical pain, yet',
      'you still choose to adore them anyway?',
      '',
      'Why?',
      '',
      'Is this love, or am I just lost in a lavender haze?',
      '',
      'Thinking of him as daylight, while',
      'feeling like a sunflower made only for its gaze',
      'as if my entire existence leans toward him.',
      '',
      'Still questioning what love truly is,',
      'a beautifully calm emotion,',
      'or a journey of pain and endlessly chasing it?',
      '',
      'Maybe it\'s the coexistence of you and',
      'me in that lavender haze, where every',
      'ache blurs away while I drown in your',
      'brownish-golden eyes, run my fingers',
      'through the waves of your dark hair, and',
      'hold the hand of the one who quiets',
      'every storm within me. Perhaps love is',
      'simply finding peace in someone exactly',
      'as they are.',
      '',
      'Love is loving you exactly as you are.',
    ],
  },

  // ── 3. A Quiet Unfolding (10 April) ───────────────────────────────────
  {
    id: 'a-quiet-unfolding',
    title: 'A Quiet Unfolding',
    date: '10 April',
    category: 'Growth',
    lines: [
      'Love is not losing myself,',
      'not slowly disappearing',
      'into someone else.',
      '',
      'It is something else —',
      'a quiet unfolding,',
      'a soft blooming inside',
      'where I meet myself',
      'in a new light.',
      '',
      'Is love about me?',
      'Maybe.',
      'or maybe it\'s the place',
      'where I finally come back to myself.',
      '',
      'In the way I hold my broken parts,',
      'in the kindness I\'m still learning',
      'to give myself,',
      'in allowing myself',
      'to just be',
      'without fear, without doubt.',
      '',
      'Love burns,',
      'but not to hurt.',
      'It burns to show me',
      'what is real,',
      'to remove all the versions of me',
      'that were never truly mine.',
      '',
      'And the "you" I love —',
      'are you really a person,',
      'or just a mirror',
      'that helps me understand',
      'myself better?',
      '',
      'Love feels like spring,',
      'but not the obvious one.',
      'It\'s the quiet growth',
      'after everything felt empty,',
      'like new leaves',
      'finding their way through.',
    ],
  },

  // ── 4. कहाँ होते हैं सपने? (27 February) ──────────────────────────────
  {
    id: 'kahan-hote-hain-sapne',
    title: 'कहाँ होते हैं सपने?',
    date: '27 February',
    category: 'Life',
    lines: [
      'सपने कहाँ होते हैं?',
      '',
      'उन नन्हीं चमकती आँखों में,',
      'जिन्होंने अभी-अभी तो दौड़ना सीखा है।',
      'उन उम्मीदों से भरी खिलखिलाती आँखों में,',
      'जिन्होंने अपनी आकांक्षाओं और उम्मीदों को',
      'उस बस्ते में भर, उड़ने का ख्वाब देखा है।',
      '',
      'सपने कहाँ होते हैं?',
      '',
      'उन बढ़ती उम्र के पानी भरे चक्षुओं में,',
      'कहाँ होते हैं सपने?',
      '',
      'उन घरों में, जहाँ स्त्री की आँखें',
      'उजाले के बावजूद उससे वंचित हैं।',
      'उस अंधेरे में खुद को भूलती स्त्री की,',
      'उन गहरी, सूनी और चमकहीन आँखों में,',
      'कहाँ होते हैं सपने?',
      '',
      'शायद...',
      '',
      'स्त्री और सपनों का नाता कलहपूर्ण है,',
      'उनके कर्तव्य चयन में, सपनों ने गोशा पकड़ लिया है।',
      'क्या वहाँ होते हैं सपने?',
    ],
    note: 'Written in Hindi. Title translates to: "Where do dreams live?"',
  },

  // ── 5. The Older Me (15 November 2025) ───────────────────────────────
  {
    id: 'the-older-me',
    title: 'The Older Me',
    date: 'November 2025',
    category: 'Growth',
    lines: [
      'I miss the older me.',
      'The one overflowing with enthusiasm,',
      'With goals stacked like milestones waiting to be conquered.',
      'The one who lived inside a shell she built herself,',
      'Yet somehow always knew exactly what she wanted.',
      '',
      'But... maybe, just maybe,',
      'I like this version of me a little more.',
      'The one who is fuller, not just of dreams,',
      'But of life itself.',
      '',
      'The one who still dreams,',
      'But isn\'t caged by them.',
      'Who laughs loudly, cries deeply,',
      'And feels everything without fear.',
      '',
      'The one who has learned to love herself',
      'From her curls to her eyes,',
      'To every imperfect, precious detail.',
      'The one who finally looks at herself',
      'Not through the lens of society,',
      'But through the gentleness of her own gaze.',
    ],
  },

  // ── 6. Crimson (11 July 2025) ─────────────────────────────────────────
  {
    id: 'crimson',
    title: 'Crimson',
    date: 'July 2025',
    category: 'Feelings',
    lines: [
      'Loving him wasn\'t pink like petals',
      'or calm like blue skies,',
      'It was crimson — wild and reckless,',
      'like the rush before a storm breaks the silence.',
      'It was every heartbeat too loud,',
      'every glance that said more than he\'d ever admit.',
      '',
      'Loving him was red —',
      'The color of waiting rooms',
      'and sunsets that don\'t promise tomorrow\'s.',
      'The burn of unsaid things,',
      'the warmth of a smile that wasn\'t always mine to keep.',
      '',
      'It wasn\'t safe.',
      'It wasn\'t easy.',
      'But it was real.',
      '',
      'And maybe he\'ll never know,',
      'how many times I rewrote our story in my head,',
      'hoping one day,',
      'he\'d turn the last page',
      'and finally choose me.',
      '',
      'But even if he doesn\'t,',
      'I\'ll always remember what it felt like',
      'to love someone so deeply.',
    ],
  },

];

// ─── Template — copy, fill, and add to the array above ───────────────────────
// {
//   id: 'unique-slug',          // used as the HTML id; lowercase-dashes, no spaces
//   title: '👉 Your poem title',
//   lines: [
//     '👉 First line of your poem.',
//     'Second line.',
//     '',                        // blank line = stanza break
//     'Third line, new stanza.',
//   ],
//   category: 'Life',           // optional — one of the PoemCategory values above
//   date: '👉 Month YYYY',      // optional
//   note: '👉 Optional note.',  // optional
// },
