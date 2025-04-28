import localFont from 'next/font/local';

export const DinRoundPro = localFont({
  src: [
    {
      path: '../../../../../public/dinroundpro_light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../../public/dinroundpro_medi.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../../public/dinroundpro_bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../../public/dinroundpro_black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});
