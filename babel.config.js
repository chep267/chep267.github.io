/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

export default {
    plugins: [
        [
            'babel-plugin-direct-import',
            {
                modules: [
                    '@mui/system',
                    '@mui/material',
                    '@mui/icons-material',
                    '@mui/x-date-pickers',
                    '@mui/lab',
                    '@mui/styles',
                    '@mui/utils',
                    '@mui/styled-engine',
                    'lodash',
                    'react-dom/client',
                    'react-intl',
                    'react-router',
                    'react-router-dom',
                    'firebase/database',
                ],
            },
        ],
    ],
};
