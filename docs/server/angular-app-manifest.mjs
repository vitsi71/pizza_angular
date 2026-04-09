
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pizza_angular/',
  locale: "ru",
  routes: [
  {
    "renderMode": 2,
    "route": "/pizza_angular"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5JHLCIJV.js",
      "chunk-NGFUQVJ2.js"
    ],
    "route": "/pizza_angular/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EHHOZGLD.js",
      "chunk-WLLXEW2Q.js",
      "chunk-NGFUQVJ2.js"
    ],
    "route": "/pizza_angular/order"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G2F7AR5R.js",
      "chunk-WLLXEW2Q.js",
      "chunk-NGFUQVJ2.js"
    ],
    "route": "/pizza_angular/products"
  },
  {
    "renderMode": 2,
    "redirectTo": "/pizza_angular/products",
    "route": "/pizza_angular/pizza"
  },
  {
    "renderMode": 2,
    "redirectTo": "/pizza_angular",
    "route": "/pizza_angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29823, hash: 'ed922fd2452c8a3a4110263f4dcbb4f7f9e3d0f96cab7af5380d0bdf5de7fcbe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17301, hash: 'ad555c891c0355b087b8bd32db01758b4e07d87f9318fd6c6cb7fa6b7be6517d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'order/index.html': {size: 267, hash: '3c09a47f54da6d7554b649c59604c1dbbd6533c3670cf9bdbf90d02cfaf9d10e', text: () => import('./assets-chunks/order_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57248, hash: '732e295b0238a310d194330d98e352d0d0a49d5ca6d68dee2b1c69acd5618b05', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 54280, hash: '7ea6dcda905b6cf6ebb63f70b18f4681f0f3cc13b838b5d90bc4ac2fdf3f3682', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 63466, hash: '3c4857c74aa01b44a8ec3a87ad7f660ad670b0a1ada2a603b1acf98f1c466500', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-PZPINQGO.css': {size: 252042, hash: 'TjfrebNXpko', text: () => import('./assets-chunks/styles-PZPINQGO_css.mjs').then(m => m.default)}
  },
};
