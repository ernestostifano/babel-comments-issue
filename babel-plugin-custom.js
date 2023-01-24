const multi = `
line1
line2
`;

const single = 'line1';

module.exports = function babelPluginCustom() {
    const isSingle = process.env.NPM_CONFIG_SINGLE === 'true';
    return {
        visitor: {
            Program(path) {
                path.addComment('leading', isSingle ? single : multi);
            }
        }
    };
};
