const catalogData = {
  data: [
    {
      title: 'Boku no piku',
      genres: ['Hentai', 'Futanari', 'Handjob', 'Fighting', 'Fantasy', 'Fighting', 'Fantasy', 'Fighting', 'Fantasy', 'Fighting', 'Fantasy'],
      social: [
        {
          icon: 'views',
          count: 120
        },
        {
          icon: 'likes',
          count: 5
        },
        {
          icon: 'comments',
          count: 0
        }
      ],
      source: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Bokunopico.jpg',
      content: 'Boku no Pico (ぼくのぴこ Boku no Piko, lit. My Pico) is a Japanese series of shotacon anime OVAs produced by Natural High. The producer has described it as the worlds first Shotacon anime.[1] The series consists of three episodes, as well as a one-shot manga chapter, a computer game and a video compilation of songs. Because of the high cost of producing anime, the characters and contents were intensively product-tested before production began'
    },
    {
      title: 'Naruto',
      genres: ['Senen', 'Fighting', 'Fantasy'],
      social: [
        {
          icon: 'views',
          count: 708922
        },
        {
          icon: 'likes',
          count: 25981
        },
        {
          icon: 'comments',
          count: 218957
        }
      ],
      source: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg',
      content: 'is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becoming the Hokage, the leader of his village. The story is in two parts, the first set in Narutos pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueishas monthly Hop Step Award the following year, and Naruto (1997).'
    },
    {
      title: 'One Piece',
      genres: ['Senen', 'Fighting', 'Pirates'],
      social: [
        {
          icon: 'views',
          count: 102402
        },
        {
          icon: 'likes',
          count: 853920
        },
        {
          icon: 'comments',
          count: 8292
        }
      ],
      source: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg',
      content: 'is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueishas Weekly Shōnen Jump magazine since July 22, 1997, and has been collected into 90 tankōbon volumes. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the worlds ultimate treasure known as One Piece in order to become the next Pirate King.'
    },
    {
      title: 'Fullmetal Alchemist',
      genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
      social: [
        {
          icon: 'views',
          count: 91842
        },
        {
          icon: 'likes',
          count: 878
        },
        {
          icon: 'comments',
          count: 32
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/medium/25-imy9GeynfS89.jpg',
      content: `In this world, alchemists are those who study and perform the art of alchemical transmutation—the science of manipulating and transforming matter. They are bounded by the Law of Equivalent Exchange: in order to gain something, one must sacrifice something of equal value.
      Young Edward Elric, nicknamed the "Fullmetal Alchemist", is a State Alchemist working for the government of Amestris. As a child, Edward and his little brother Alphonse attempted the forbidden art of human transmutation to revive their late mother. In the accident that ensued, Edward lost his left leg and right arm, and Alphonse's soul was sealed in a large suit of armor. To reclaim their original bodies, the Elric brothers embark on a journey to find the Philosopher's Stone, a mythical object said to allow its user to perform alchemical miracles.`
    },
    {
      title: 'JoJo\'s Bizarre Adventure Part 7: Steel Ball Run',
      genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
      social: [
        {
          icon: 'views',
          count: 4681
        },
        {
          icon: 'likes',
          count: 29
        },
        {
          icon: 'comments',
          count: 3
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/large/nx31706-8NapvUJrWR3C.png',
      content: `Originally presented as an unrelated story, this series was later officially declared a part of the JoJo storyline. The series stars Gyro Zeppeli, who uses a set of steel balls that spin incredibly fast, and Johnny Joestar (Jonathan Joestar), a former hot-shot jockey who was crippled by an ambusher and lost his fame and fortune. They race, along with others, in a mad-dash across America for 50 million dollars, reminiscent of The Cannonball Run.`
    },
    {
      title: 'Tokyo Ghoul',
      genres: ['Action', 'Horror', 'Mystery', 'Psychological', 'Supernatural'],
      social: [
        {
          icon: 'views',
          count: 124978
        },
        {
          icon: 'likes',
          count: 1277
        },
        {
          icon: 'comments',
          count: 901
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/large/nx63327-VpmcwQGbXZh5.jpg',
      content: `Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize. But it turns out that she’s only interested in his body—eating it, that is. When a morally questionable rescue transforms him into the first half-human half-Ghoul hybrid, Ken is drawn into the dark and violent world of Ghouls, which exists alongside our own.`
    },
    {
      title: 'Berserk',
      genres: ['Action', 'Adventure', 'Drama', 'Fantasy', 'Horror', 'Psychological', 'Supernatural'],
      social: [
        {
          icon: 'views',
          count: 1429202
        },
        {
          icon: 'likes',
          count: 14206
        },
        {
          icon: 'comments',
          count: 2165
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/medium/2-EpAB47R1L1Hh.jpg',
      content: `Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces that pursue him and his woman, and also vengeance against the man who branded him as an unholy sacrifice. Aided only by his titanic strength, skill, and sword, Guts must struggle against his bleak destiny, all the while fighting with a rage that might strip him of his humanity. Berserk is a dark and brooding story of outrageous swordplay and ominous fate, in the theme of Shakespeare's Macbeth.`
    },
    {
      title: 'Attack on Titan',
      genres: ['Action', 'Drama', 'Fantasy', 'Horror', 'Mystery'],
      social: [ 
        {
          icon: 'views',
          count: 1588721
        },
        {
          icon: 'likes',
          count: 1102
        },
        {
          icon: 'comments',
          count: 265
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/medium/23390-PEsWVu9n8lhb.png',
      content: `Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans. Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa `
    },
    {
      title: 'My Hero Academia',
      genres: ['Action', 'Comedy'],
      social: [ 
        {
          icon: 'views',
          count: 137431
        },
        {
          icon: 'likes',
          count: 1383
        },
        {
          icon: 'comments',
          count: 512
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/medium/55486-ut4ycwzuWEMF.png',
      content: `One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as "quirks," which have given many the power to make their childhood dreams of becoming a superhero a reality. Unfortunately, Izuku Midoriya was one of the few born without a quirk, suffering from discrimination because of it. Yet, he refuses to give up on his dream of becoming a hero; determined to do the impossible, Izuku sets his sights on the elite hero training academy, UA High.`
    },
    {
      title: 'Bleach',
      genres: ['Action', 'Adventure'],
      social: [ 
        {
          icon: 'views',
          count: 10507
        },
        {
          icon: 'likes',
          count: 405
        },
        {
          icon: 'comments',
          count: 12
        }
      ],
      source: 'https://s3.anilist.co/media/manga/cover/medium/12-UvTZ3kLjNVAV.png',
      content: `Ichigo Kurosaki has always been able to see ghosts, but this ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hollow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family; but much to her surprise, Ichigo absorbs every last drop of her energy. Now a full-fledged Soul Reaper himself, Ichigo quickly learns that the world he inhabits is one full of dangerous spirits and, along with Rukia—who is slowly regaining her powers—it's Ichigo's job `
    }
  ]
};


class CatalogDeliver {
  static getCatalog(page = 1, offset = 5, filterOptions) {
    const items = catalogData.data.length;
    const pages = items / offset;

    let end = page * offset;
    const start = end - offset;

    const result = [];

    if (start > end) {
      return result;
    }

    if (end > items) {
      end = items;
    }

    for (let i = start; i < end; i++) {
      result.push(catalogData.data[i]);
    }

    return ({
      result,
      totalItems: items,
      totalPages: pages,
      page
    });
  }
}

export default CatalogDeliver;
