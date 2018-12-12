import zoro from '../../../../../public/imgs/zoro-achiv.png';
import nami from '../../../../../public/imgs/nami_achiv.png';
import ussop from '../../../../../public/imgs/usopp_achiv.png';
import sanji from '../../../../../public/imgs/sanji_achiv.png';
import chopper from '../../../../../public/imgs/chopper_achiv.png';

export const profile = {
  nickname: 'Aniki',
  hero: 'https://i.ytimg.com/vi/Y-HQZkufnsA/maxresdefault.jpg',
  avatar: 'https://a.ppy.sh/5770165?1459723617.jpg',
  experience: {
    max: 12532,
    current: 12298,
    lvl: 102
  }
};

export const bookmarks = {
  favorite: {
    title: 'Favorite',
    items: [
      {
        id: 1,
        title: 'The Breaker',
        hero: '',
        views: 24599,
        volumes: 15,
        chapters: 122,
        current: 10,
        preview: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_Breaker_%28manhwa%29_1_volume_Daiwon_C.I..jpg/220px-The_Breaker_%28manhwa%29_1_volume_Daiwon_C.I..jpg',
        type: 'Manhwaa'
      },
      {
        id: 2,
        title: 'All You Need Is Kill',
        hero: '',
        views: 9857,
        volumes: 1,
        chapters: 1,
        current: 0,
        preview: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Series/23855/23855._SX360_QL80_TTD_.jpg',
        type: 'Manga'
      },
      {
        id: 3,
        title: 'The Tower of God',
        hero: '',
        views: 39827192,
        volumes: 2,
        chapters: 329,
        current: 329,
        preview: 'https://static.anidub.com/blog/2017/10/Grumpy_Tower_of_God_ch10_feature-1-.jpg',
        type: 'Manhwaa'
      },
      {
        id: 4,
        title: 'Shamo',
        hero: '',
        views: 32570,
        volumes: 34,
        chapters: 334,
        current: 334,
        preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7vK2oMrYnWKOT-k8EQPrAmX6hGQAeJMtNhC9Jasba6eKZCmq',
        type: 'Manhwaa'
      },
      {
        id: 5,
        title: 'The Wedding Eve',
        hero: '',
        views: 6439,
        volumes: 1,
        chapters: 7,
        current: 3,
        preview: 'https://images-na.ssl-images-amazon.com/images/I/51usoeDAonL._SX341_BO1,204,203,200_.jpg',
        type: 'Manga'
      }
    ]
  },
  reading: {
    title: 'Reading',
    items: [
      {
        id: 6,
        title: 'Berserk',
        hero: 'https://s3.anilist.co/media/manga/banner/2-wkmxrZ2d0Zx5.jpg',
        views: 9591821,
        volumes: 40,
        chapters: 358,
        current: 201,
        preview: 'https://s3.anilist.co/media/manga/cover/medium/2-EpAB47R1L1Hh.jpg',
        type: 'Manga'
      },
      {
        id: 7,
        title: 'One Piece',
        hero: '',
        views: 1226173,
        volumes: 91,
        chapters: 916,
        current: 513,
        preview: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg',
        type: 'Manga'
      },
      {
        id: 8,
        title: 'Bleach',
        hero: '',
        views: 872501,
        volumes: 52,
        chapters: 621,
        current: 12,
        preview: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
        type: 'Manga'
      }
    ]
  },
  done: {
    title: 'Done',
    items: [
      {
        id: 9,
        title: 'Fairy Tail',
        hero: '',
        views: 52987,
        volumes: 88,
        chapters: 753,
        current: 591,
        preview: 'https://images.penguinrandomhouse.com/cover/9781632364203',
        type: 'Manga'
      }
    ]
  }
};

export const achivments = {
  achivments: [
    {
      id: 1,
      name: 'Welcome to the team Zoro',
      icon: zoro,
      exp: 3,
      description: 'Read up to the moment of joining Zoro team',
      status: {
        current: 50,
        total: 3
      }
    },
    {
      id: 2,
      name: 'Welcome to the team Nami',
      icon: nami,
      exp: 5,
      description: 'Read up to the moment of joining Nami team',
      status: {
        current: 50,
        total: 8
      }
    },
    {
      id: 3,
      name: 'Welcome to the team Ussop',
      icon: ussop,
      exp: 8,
      description: 'Read up to the moment of joining Ussop team',
      status: {
        current: 50,
        total: 23
      }
    },
    {
      id: 4,
      name: 'Welcome to the team Sanji',
      icon: sanji,
      exp: 15,
      description: 'Read up to the moment of joining Sanji team',
      status: {
        current: 50,
        total: 43
      }
    },
    {
      id: 5,
      name: 'Welcome to the team Sanji',
      icon: sanji,
      exp: 15,
      description: 'Read up to the moment of joining Sanji team',
      status: {
        current: 50,
        total: 43
      }
    },
    {
      id: 6,
      name: 'Welcome to the team Chopper',
      icon: chopper,
      exp: 27,
      description: 'Read up to the moment of joining Chopper team',
      status: {
        current: 50,
        total: 142
      }
    }
  ]
};
