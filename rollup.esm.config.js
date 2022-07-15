// /**
//  * @license
//  * Copyright 2018 Google LLC
//  * SPDX-License-Identifier: BSD-3-Clause
//  */

//  import summary from 'rollup-plugin-summary';
//  import {terser} from 'rollup-plugin-terser';
//  import resolve from '@rollup/plugin-node-resolve';
//  import replace from '@rollup/plugin-replace';
//  import postcss from 'rollup-plugin-postcss';
//  import postcssUrl from 'postcss-url';
//  import litcss from 'rollup-plugin-postcss-lit';
//  import typescript from 'rollup-plugin-typescript2';
 
//  export default {
//    input: './src/my-element.ts',
//   //  output: {
//   //    file: 'my-element.bundled.js',
//   //    format: 'esm',
//   //  },
//   output: [
//     {
//       dir: 'compiled',
//       format: 'es',
//       sourcemap: true,
//     }
//   ],
//    onwarn(warning) {
//      if (warning.code !== 'THIS_IS_UNDEFINED') {
//        console.error(`(!) ${warning.message}`);
//      }
//    },
//    plugins: [
//      replace({'Reflect.decorate': 'undefined'}),
//      resolve(),
//      terser({
//        ecma: 2017,
//        module: true,
//        warnings: true,
//        mangle: {
//          properties: {
//            regex: /^__/,
//          },
//        },
//      }),
//      typescript(),
//       postcss({
//         minimize: false,
//         // do not inject the css style in the head element
//         inject: false,
//         plugins: [
//           postcssUrl({
//             basePath: [
//               './'
//             ],
//             url: 'inline'
//           })
//         ]
//       }),
//       litcss(),
//     //  summary(),
//    ],
//  };
 