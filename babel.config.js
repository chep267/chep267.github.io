/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** module path */
const ModuleArray = [
    '@module-base',
    '@module-theme',
    '@module-language',
    '@module-global',
    '@module-user',
    '@module-auth',
    '@module-messenger',
    '@module-calendar',
    '@module-feed',
    '@module-game',
];

const treeShakingComponent = (lib = 'lib') => {
    const output = {};
    ModuleArray.forEach((module) => {
        output[`${module}/${lib}`] = {
            transform: (path) => `${module}/${lib}/${path}`,
            preventFullImport: true,
        };
    });
    return output;
};

const treeShakingLib = (lib = 'lib') => {
    const output = {};
    ['@module-base', '@module-theme', '@module-language'].forEach((module) => {
        output[`${module}/${lib}`] = {
            transform: (path) => `${module}/${lib}/${path}`,
            preventFullImport: false,
            skipDefaultConversion: true,
        };
    });
    return output;
};

export default {
    plugins: [
        [
            'babel-plugin-direct-import',
            {
                modules: [
                    '@mui/material',
                    '@mui/system',
                    '@mui/icons-material',
                    '@mui/x-date-pickers',
                    '@mui/lab',
                    '@mui/styles',
                    '@mui/utils',
                    '@mui/styled-engine',
                    'lodash',
                    'react-dom/client',
                    'react-intl',
                ],
            },
        ],
        [
            // 'babel-plugin-transform-imports',
            'transform-imports',
            {
                ...treeShakingComponent('components'),
                ...treeShakingLib('apis'),
                ...treeShakingLib('constants'),
                ...treeShakingLib('hooks'),
                ...treeShakingLib('utils/firebase'),
                ...treeShakingLib('utils/helpers'),
                ...treeShakingLib('utils/messages'),
                ...treeShakingLib('utils/security'),
                ...treeShakingLib('utils/storage'),
            },
        ],
    ],
};
