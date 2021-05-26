export const getMockdata = (): Promise<any> => {
  return new Promise((res) => {
    res(sampleMovieInfoData);
  });
};

export const sampleMovieInfoData = {
  id: 1,
  name: '조커',
  englishName: 'Joker',
  description:
    '고담시의 광대 아서 플렉은 코미디언을 꿈꾸는 남자. 하지만 모두가 미쳐가는 코미디 같은 세상에서 맨 정신으로는 그가 설 자리가 없음을 깨닫게 되는데... 이제껏 본 적 없는 진짜 ‘조커’를 만나라!',
  releasedDate: '2019.10.02',
  score: 8.97,
  genre: ['스릴러 ', '범죄 ', '드라마 '],
  posterImageUrl: 'http://img.movist.com/?img=/x00/05/22/20_p1.jpg',
  director: '토드 필립스',
  country: '미국',
  runningTime: '123분',
  audienceCount: 5230000,
  reviews: [
    {
      id: 1,
      title: '영화 조커 Joker 후기 리뷰',
      content:
        'DC 코믹스나 조커라는 캐릭터에 대해 큰 궁금증은 없었기 때문에 굳이 안 봐도 되었을 영화이지만 호아킨 피닉스의 무시무시한 연기력 만으로도 Et laborum Lorem nulla ea non laboris commodo adipisicing in irure pariatur eiusmod pariatur. Lorem voluptate laboris laborum irure incididunt nulla. Duis reprehenderit sint amet reprehenderit pariatur id sit. Anim nulla labore adipisicing nostrud fugiat ut occaecat ullamco. Officia ipsum ad id eiusmod. Excepteur dolore aute cillum eiusmod ut exercitation deserunt dolor consectetur ullamco. Non aliqua culpa officia cupidatat nulla sint voluptate qui.',
      score: 3.5,
      likeCount: 2235,
      author: '수영',
      createdDateTime: '2019.10.02',
      liked: false,
    },
    {
      id: 2,
      title: '영화 조커를 보고 난 후 마음이 불편한 이유',
      likeCount: 0,
      content:
        '개인적으로 인생 영화로 크리스퍼 놀란 감독의 배트맨 트릴로지 삼부작을 꼽을 정도로 배트맨 영화를 좋아하는 나에게 조커는 무척이나 기대되던 Qui occaecat minim cillum ullamco nulla eu sunt. Quis velit non elit dolore duis proident mollit ad nisi sunt anim. Ex officia minim aliqua elit Lorem exercitation ut aliqua commodo consectetur. In commodo ipsum Lorem exercitation fugiat ipsum commodo.',
    },
    {
      id: 3,
      title: '위험한 아름다움을 지닌 영화, <조커> 리뷰',
      likeCount: 30,
      content:
        '요즘 가장 핫한 영화, <조커>는 전 서계에서 관객들과 평론가들의 뜨거운 반응을 얻으며 승승자구 하고 있습니다. 거기다가 베니스 영화제에서 황금 Consequat aliquip non laboris aliquip quis occaecat eiusmod cupidatat laboris excepteur anim. Commodo occaecat sint eu amet eiusmod ullamco tempor et excepteur. Consequat veniam do qui consectetur et do enim consequat id cillum pariatur elit. Do occaecat id nulla amet.',
    },
  ],
  famousLines: [
    {
      id: 1,
      content: '“비극인줄 알았는데, 코미디였어”',
    },
    {
      id: 2,
      content: '“나의 죽음이 내 삶보다 더 가취 있기를”',
    },
    {
      id: 3,
      content: '“코미디는 주관적인 거에요. 그런데 사람들은 그것이 웃긴지 안웃긴지 결정하죠.”',
    },
  ],
  favorite: true,
};
