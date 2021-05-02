export const getMockdata = (): Promise<any> => {
  return new Promise((res) => {
    res(movieData.slice(0, 10));
  });
};

export const movieData = [
  {
    id: 1,
    title: '어바웃타임',
    year: '2014',
    image:
      'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20130520_179%2F1369011482309poK1F_JPEG%2Fmovie_image.jpg',
  },

  {
    id: 2,
    title: '러브 액츄얼리',
    year: '2016',
    image:
      'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20191202_278%2F1575250003279Taafr_JPEG%2Fmovie_image.jpg',
  },
  {
    id: 3,
    title: '인터스텔라',
    year: '2014',
    image:
      'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20160106_138%2F1452044846608eaFcJ_JPEG%2Fmovie_image.jpg',
  },
  {
    id: 4,
    title: '라라랜드',
    year: '2016',
    image:
      'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20160831_124%2F1472635767122cctLV_JPEG%2Fmovie_image.jpg',
  },
  {
    id: 5,
    title: '해리포터와 불의잔',
    year: '2016',
    image:
      'https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20111222_105%2F1324534489218s33DJ_JPEG%2Fmovie_image.jpg',
  },
];
