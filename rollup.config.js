import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: "src/index.js",
    plugins: [
        nodeResolve(),
    ],
    output: [
        {
            format: 'es',
            dir: "dist/es"
        },
        {
            format: 'es',
            dir: "dist/cjs"
        }
    ]
}