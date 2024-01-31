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

const treeShakingModule = () => {
    const output = {};
    ModuleArray.forEach((module) => {
        ['constants', 'hooks'].forEach((lib) => {
            output[`${module}/${lib}`] = {
                transform: (path) => `${module}/${lib}/${path}`,
                preventFullImport: false,
                skipDefaultConversion: true,
            };
        });
        output[`${module}/components`] = {
            transform: (path) => `${module}/components/${path}`,
            preventFullImport: true,
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
                    '@mui/base',
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
            treeShakingModule(),
        ],
    ],
};
