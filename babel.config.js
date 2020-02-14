module.exports = {
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            { corejs: 3 },
        ],
        '@babel/plugin-proposal-class-properties', // 解析类的属性的
    ],
    presets: [
        // [
        //     '@babel/preset-env',
        //     {
        //         useBuiltIns: 'usage', // usage-按需引入 entry-入口引入（整体引入） false-不引入polyfill（污染全局）
        //         corejs: 2,  // 2-corejs@2  3-corejs@3
        //         targets: { ie: '9' }, // default: > 0.5%, last 2 versions, Firefo
        //     },
        // ],
        '@babel/preset-env',
        '@babel/preset-typescript',
    ],
};