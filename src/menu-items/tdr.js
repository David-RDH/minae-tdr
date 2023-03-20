// assets
import { IconFiles, IconListDetails } from '@tabler/icons';

// constant
const icons = { IconFiles, IconListDetails };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const tdr = {
    id: 'tdr',
    title: 'Gérer les TDR',
    type: 'group',
    caption: 'A propos TDR',
    children: [
        {
            id: 'liste',
            title: 'Listes ',
            type: 'item',
            url: '/tdr/list',
            icon: icons.IconListDetails,
            breadcrumbs: false
        },
        {
            id: 'gestion',
            title: 'Gestion ',
            type: 'item',
            url: '/tdr/gestion',
            icon: icons.IconFiles,
            breadcrumbs: false
        }
    ]
};

export default tdr;
