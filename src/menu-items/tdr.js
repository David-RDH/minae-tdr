// assets
import { IconDashboard, IconShadow } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconShadow };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const tdr = {
    id: 'tdr',
    title: 'TDR',
    type: 'group',
    caption: 'A propos TDR',
    children: [
        {
            id: 'liste',
            title: 'Listes ',
            type: 'item',
            url: '/tdr/list',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'gestion',
            title: 'Gestion ',
            type: 'item',
            url: '/tdr/gestion',
            icon: icons.IconShadow,
            breadcrumbs: false
        }
    ]
};

export default tdr;
