const multi = `
line1
line2
`;

const single = 'line1';

module.exports = function babelPluginCustom() {
    const isSingle = process.env.NPM_CONFIG_SINGLE === 'true';
    const skip = process.env.NPM_CONFIG_SKIP === 'true';

    if (skip) {
        return {};
    }

    return {
        visitor: {
            Program(path) {
                path.addComment('leading', isSingle ? single : multi);
            }
        }
    };
};
