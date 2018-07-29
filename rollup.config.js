// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript';

export default {
    input: 'index.ts',
    output: {
        file: 'moment.js',
        format: 'es'
    },
    plugins: [
        resolve(),
        typescript({ typescript: require('typescript') }),
        commonJS({
            include: 'node_modules/**'
        })
    ]
};