import StringUtil from '../../../../../utils/stringUtils';

const chaptersAndVolumes = {
  ch: 192,
  vol: 29
};

const mangaInfo = ({
  views,
  date,
  genres,
  author,
  magazine
}) => [
  {
    title: 'Views',
    description: String(views)
  },
  {
    title: 'Start Date',
    description: date
  },
  {
    title: 'Genres',
    description: genres.map(genre => StringUtil.firstToUpper(genre.name)).join(' ')
  },
  {
    title: 'Author',
    description: author.name
  },
  {
    title: 'Magazine',
    description: magazine.name
  }
];

const similarManga = [
  {
    title: 'One Piece',
    status: 'Ongoing',
    chapters: '980',
    views: 324095489,
    img: {
      alt: 'OnePiece',
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg'
    }
  },
  {
    title: 'Bleach',
    status: 'Ended',
    chapters: '620',
    views: 213499,
    img: {
      alt: 'Bleach',
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Bleach_cover_01.jpg/220px-Bleach_cover_01.jpg'
    }
  },
  {
    title: 'Death Note',
    status: 'Ended',
    chapters: '112',
    views: 12587950,
    img: {
      alt: 'DeathNote',
      src: 'https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY268_CR1,0,182,268_AL_.jpg'
    }
  },
  {
    title: 'Fate/stay night Movie: Unlimited Blade Works',
    status: 'Ongoing',
    chapters: '675',
    views: 3489,
    img: {
      alt: 'Shit',
      src: 'https://myanimelist.cdn-dena.com/images/anime/4/30327.jpg'
    }
  }
];

export {
  chaptersAndVolumes,
  mangaInfo,
  similarManga
};
