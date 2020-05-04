import request from './services/request';

export const qiankun = request('/apps').then(apps => {
  console.log('apps', apps);
  return { apps };
});

// export const qiankun = [
//   {
//     name: 'qiankun_test',
//     entry: 'http://localhost:8001/qiankun_test',
//     base: '/qiankun_test',
//     mountElementId: 'root-subapp-container',
//   },
// ];
