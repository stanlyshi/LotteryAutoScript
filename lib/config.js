/**
 * 默认设置
 */
const default_config = {
    model: '11',
    chatmodel: '01',
    maxday: '-1',
    wait: '60000',
    minfollower: '1000',
    blacklist: '', /* 与云端同步 */
    blockword: ["脚本抽奖", "恭喜", "结果"],
    followWhiteList: '',
    relay: ['转发动态'],
    chat: [
        '[OK]', '[星星眼]', '[歪嘴]', '[喜欢]', '[偷笑]', '[笑]', '[喜极而泣]', '[辣眼睛]', '[吃瓜]', '[奋斗]',
        '永不缺席 永不中奖 永不放弃！', '万一呢', '在', '冲吖~', '来了', '万一', '[保佑][保佑]', '从未中，从未停', '[吃瓜]', '[抠鼻][抠鼻]',
        '来力', '秋梨膏', '[呲牙]', '从不缺席', '分子', '可以', '恰', '不会吧', '1', '好',
        'rush', '来来来', 'ok', '冲', '凑热闹', '我要我要[打call]', '我还能中！让我中！！！', '大家都散了吧，已经抽完了，是我的', '我是天选之子', '给我中一次吧！',
        '坚持不懈，迎难而上，开拓创新！', '[OK][OK]', '我来抽个奖', '中中中中中中', '[doge][doge][doge]', '我我我',
    ],
};
/**
 * 自己修改过的设置
 */
const my_config = (() => {
    try {
        return JSON.parse(process.env.MY_CONFIG);
    } catch (_) {
        return {};
    }
})();

const config = {
    ...default_config,
    ...my_config
};

module.exports = config;