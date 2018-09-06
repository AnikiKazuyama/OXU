var express = require('express');
var router = express.Router();

const manga = {
    onepiece: { 
        title: 'One Piece',
        description: 'Последние слова, произнесённые Королем Пиратов Гол Д. ' +
                     'Роджером перед казнью, вдохновили многих выйти в море: «Мои сокровища?' +
                     'Я завещаю их тому, кто сможет их найти. Ищите! Я все оставил в одном месте!».' + 
                     'Лишённые сна и покоя люди ринулись на Гранд Лайн, самое опасное место в мире. ',
        chapters: {
            915: {
                    title: "Baruka Town",
                    volume: 87,
                    number: 915,
                    entry: [
                        'http://localhost:3000/manga/onepiece/915/1.png', 
                        'http://localhost:3000/manga/onepiece/915/2.png',
                        'http://localhost:3000/manga/onepiece/915/3.png',
                        'http://localhost:3000/manga/onepiece/915/4.png',
                        'http://localhost:3000/manga/onepiece/915/5.png',
                        'http://localhost:3000/manga/onepiece/915/6.png',
                        'http://localhost:3000/manga/onepiece/915/7.png',
                        'http://localhost:3000/manga/onepiece/915/8-9.png',
                        'http://localhost:3000/manga/onepiece/915/10.png',
                        'http://localhost:3000/manga/onepiece/915/11.png',
                        'http://localhost:3000/manga/onepiece/915/12.png',
                        'http://localhost:3000/manga/onepiece/915/13.png',
                        'http://localhost:3000/manga/onepiece/915/14.png',
                        'http://localhost:3000/manga/onepiece/915/15.png',
                        'http://localhost:3000/manga/onepiece/915/16.png',
                        'http://localhost:3000/manga/onepiece/915/17.png'
                    ]
            },
            914: {
                title: "Okobore, The Tower of Leftovers",
                volume: 86,
                number: 914,
                entry: [
                    'http://localhost:3000/manga/onepiece/914/1.png', 
                    'http://localhost:3000/manga/onepiece/914/2.png',
                    'http://localhost:3000/manga/onepiece/914/3.png',
                    'http://localhost:3000/manga/onepiece/914/4.png',
                    'http://localhost:3000/manga/onepiece/914/5.png',
                    'http://localhost:3000/manga/onepiece/914/6.png',
                    'http://localhost:3000/manga/onepiece/914/7.png',
                    'http://localhost:3000/manga/onepiece/914/8.png',
                    'http://localhost:3000/manga/onepiece/914/9.png',
                    'http://localhost:3000/manga/onepiece/914/10.png',
                    'http://localhost:3000/manga/onepiece/914/11.png',
                    'http://localhost:3000/manga/onepiece/914/12.png',
                    'http://localhost:3000/manga/onepiece/914/13.png',
                    'http://localhost:3000/manga/onepiece/914/14.png',
                    'http://localhost:3000/manga/onepiece/914/15.png',
                    'http://localhost:3000/manga/onepiece/914/16.png',
                    'http://localhost:3000/manga/onepiece/914/17.png'
                ]
            }
        }
    } 
};

/* GET users listing. */
router.get('/:name/:chapter', function(req, res, next) {
    const stringifyResponse = JSON.stringify(manga[req.params.name].chapters[req.params.chapter])
    if (stringifyResponse)
        res.send(stringifyResponse);
    else
        res.status(404).send('not found');
});

module.exports = router;
