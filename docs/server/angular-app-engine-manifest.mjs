
export default {
  basePath: '/pizza_angular',
  allowedHosts: [],
  supportedLocales: {
  "ru": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
