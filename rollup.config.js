import sourcemaps from 'rollup-plugin-sourcemaps';
import liveServer from 'rollup-plugin-live-server';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    external: ['react', 'react-dom'],
    input: 'dist/index.js',
    output: [
        {
            name: 'index',
            file: 'public/bundle.js',
            format: 'iife',
            sourcemap: true,
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM'
            }
        },
    ],
    plugins: [
        resolve({browser:true}),
        commonjs(),

        replace({
            'process.env.NODE_ENV': JSON.stringify( 'development' )
          }),

        // load files with existing source maps:
        sourcemaps(),

        liveServer({
            port: 8181,
            root: './public',
            file: 'index.html',
            wait: 500,
            open: false
        }),
    ]
};
