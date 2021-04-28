export const getMockdata = (data: string): Promise<any> => {
  return new Promise((res) => {
    if (data === 'user') {
      res(userData);
    }
    if (data === 'review') {
      res(reviewData);
    }
    if (data === 'quote') {
      res(quoteData);
    }
  });
};

export const userData = {
  id: 1,
  name: '이수영',
};

export const reviewData = [
  {
    id: 1,
    userId: 1,
    categoryId: 1,
    movieId: 1,
    movieTitle: '어바웃타임',
    movieYear: '2014',
    reviewTitle:
      '이 영화는 진국이다. Incididunt velit laborum sint exercitation labore officia aliquip culpa commodo cillum.',
    reviewContent:
      '이 영화는 진국이다. 왜냐하면 이 영화는 정말 상상 이상의 스토리 전개 능력을 보여주기 때문이다. Labore elit commodo ex aliqua enim laboris labore sit irure. Cillum nulla sunt veniam culpa sit officia tempor cillum nisi sunt.Proident qui deserunt dolor dolore duis minim cupidatat est deserunt ullamco dolore qui incididunt.Veniam dolor et ea ullamco amet mollit proident aliqua voluptate do.Non labore incididunt sint sunt est ut eiusmod Lorem.',
    likedCount: 89,
  },

  {
    id: 2,
    userId: 1,
    categoryId: 1,
    movieId: 2,
    movieTitle: '러브 액츄얼리',
    movieYear: '2016',
    reviewTitle: '진짜 재밌다',
    reviewContent: '크리스마스 대표영화임',
    likedCount: 20,
  },
  {
    id: 3,
    userId: 1,
    categoryId: 1,
    movieId: 1,
    movieTitle: '어바웃타임',
    movieYear: '2014',
    reviewTitle: '이 영화는 진국이다.',
    reviewContent:
      '이 영화는 진국이다. 왜냐하면 이 영화는 정말 상상 이상의 스토리 전개 능력을 보여주기 때문이다. 때문이다.때문이다....',
    likedCount: 0,
  },
  {
    id: 4,
    userId: 1,
    categoryId: 1,
    movieId: 2,
    movieTitle: '러브 액츄얼리',
    movieYear: '2016',
    reviewTitle: '진짜 재밌다',
    reviewContent: '크리스마스 대표영화임',
    likedCount: 20,
  },
];

export const quoteData = [
  {
    id: 1,
    userId: 1,
    categoryId: 2,
    movieId: 1,
    movieTitle: '어바웃타임',
    movieYear: '2014',
    quote: '난 하루를 두 번 살아',
    likedCount: 89,
  },
  {
    id: 2,
    userId: 1,
    categoryId: 2,
    movieId: 3,
    movieTitle:
      '해리포터와 불의잔laborum labore nostrud est aute excepteur incididunt officia est adipisicing labore.',
    movieYear: '2016',
    quote:
      '알로호모라 Consequat est reprehenderit et excepteur in laboris voluptate minim anim non ex dolore.x',
    likedCount: 20,
  },
  {
    id: 3,
    userId: 1,
    categoryId: 2,
    movieId: 1,
    movieTitle: '어바웃타임',
    movieYear: '2014',
    quote: '난 하루를 두 번 살아',
    likedCount: 0,
  },
];
