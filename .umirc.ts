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
  qiankun: {
    master: {
      defer: true,
      jsSandbox: true,
      prefetch: true,
    },
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
    },
    '/api/app1': {
      target: 'http://localhost:8001',
      changeOrigin: true,
    },
    '/api/app3': {
      target: 'http://localhost:8002',
      changeOrigin: true,
    },
  },
});
