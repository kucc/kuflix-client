import { User } from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sampleMovieInfoData = [
  {
    id: 1,
    title: "조커",
    original_title: "Joker",
    overview: "고담시의 광대 아서 플렉은 코미디언을 꿈꾸는 남자. 하지만 모두가 미쳐가는 코미디 같은 세상에서 맨 정신으로는 그가 설 자리가 없음을 깨닫게 되는데... 이제껏 본 적 없는 진짜 ‘조커’를 만나라!",
    release_date: "2019.10.02",
    vote_average: 8.97,
    genre_ids: ["스릴러 ", "범죄 ", "드라마 "],
    poster_path: "https://upload.wikimedia.org/wikipedia/ko/thumb/3/31/%EC%A1%B0%EC%BB%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EC%A1%B0%EC%BB%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  }
];

export const sampleMovieReviewData = [
  {
    id: 1,
    title: "영화 조커 Joker 후기 리뷰",
    content: "DC 코믹스나 조커라는 캐릭터에 대해 큰 궁금증은 없었기 때문에 굳이 안 봐도 되었을 영화이지만 호아킨 피닉스의 무시무시한 연기력 만으로도 ...",
  }, {
    id: 2,
    title: "영화 조커를 보고 난 후 마음이 불편한 이유",
    content: "개인적으로 인생 영화로 크리스퍼 놀란 감독의 배트맨 트릴로지 삼부작을 꼽을 정도로 배트맨 영화를 좋아하는 나에게 조커는 무척이나 기대되던 ...",
  }, {
    id: 3,
    title: "위험한 아름다움을 지닌 영화, <조커> 리뷰",
    content: "요즘 가장 핫한 영화, <조커>는 전 서계에서 관객들과 평론가들의 뜨거운 반응을 얻으며 승승자구 하고 있습니다. 거기다가 베니스 영화제에서 황금 ...",
  },
];

export const sampleMovieQuoteData = [
  {
    id: 1,
    content: "“비극인줄 알았는데, 코미디였어”",
  }, {
    id: 2,
    content: "“나의 죽음이 내 삶보다 더 가취 있기를”",
  }, {
    id: 3,
    content: "“코미디는 주관적인 거에요. 그런데 사람들은 그것이 웃긴지 안웃긴지 결정하죠.”",
  },
];