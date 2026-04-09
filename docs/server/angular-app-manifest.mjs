
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
      "chunk-SJKMWQO5.js",
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
    'index.csr.html': {size: 29823, hash: '72c5c8942223e84b6032583b1cc162756adbf6a638f2a383742e88a493ca29a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17301, hash: 'aabda8bd708ec48881c07d1e938a789eb7e3a9e21b815b1168f86310a64b7097', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'order/index.html': {size: 267, hash: '3c09a47f54da6d7554b649c59604c1dbbd6533c3670cf9bdbf90d02cfaf9d10e', text: () => import('./assets-chunks/order_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 54280, hash: '70ca4d8202e512d1414e8a589880e97ee7dc1a75bf6827bd8032133322eb86d9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 56287, hash: 'c705b10b7107a2d58e1ac319434c3e0bd249191b465152552c8faf0ba864e141', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 63466, hash: '3f6605af05edb4c1f5ce6c3a5daeaed38ab031e2dafcd3b110fac2d1d03863ad', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-PZPINQGO.css': {size: 252042, hash: 'TjfrebNXpko', text: () => import('./assets-chunks/styles-PZPINQGO_css.mjs').then(m => m.default)}
  },
};
