import { defineConfig } from 'umi';

export default defineConfig({
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8889,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  base: '/qiankun_portal/',
  hash: true,
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/qiankun_portal/',
  routes: [{ path: '/', component: '@/pages/index' }],
});
