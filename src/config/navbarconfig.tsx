
interface NavbarConfig {
    headerName: string;
    field: string;
    href:string;
}

export const navbarConfig: NavbarConfig[] = [{
    headerName: 'Home',
    field: 'home',
    href:'/'

},
{
    headerName: 'About',
    field: 'about',
    href:'about',
},
{
    headerName: 'Resume',
    field: 'resume',
    href:'resume'
},
{
    headerName: 'Services',
    field: 'services',
    href:'services',
}, {
    headerName: 'Skills',
    field: 'skills',
    href:'skills'
},
{
    headerName: 'Projects',
    field: 'projects',
    href:'projects'
},
{
    headerName: 'Contact',
    field: 'contact',
    href:'contact',
}]
