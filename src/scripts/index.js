import '../styles/index.scss';
import { domEl, addEvt, toggleClass } from './utils';

const mobileNavLink = domEl('.mobile-menu-link');

const images = [
  {
    path: '/draperies/0001.jpg',
    description: 'Qui laboris ad et irure cillum. Consequat ex sunt dolore amet nostrud aute labore non nulla officia.'
  },
  {
    path: '/draperies/0002.jpg',
    description: 'Deserunt amet ex eiusmod sunt cillum duis laborum voluptate voluptate.'
  },
  {
    path: '/draperies/0003.jpg',
    description: 'Eu officia in commodo fugiat. Non occaecat aliquip excepteur do exercitation sit consequat.'
  },
  {
    path: '/draperies/0004.jpg',
    description: 'Id sunt magna proident officia in nulla aliqua mollit.'
  },
  {
    path: '/draperies/0016.jpg',
    description: 'Mollit ea Lorem sint incididunt mollit excepteur dolor occaecat ea magna eiusmod eu nisi.'
  },
  {
    path: '/draperies/0018.jpg',
    description: 'Sint anim quis et culpa. Veniam veniam magna nisi consequat irure veniam labore.'
  },
  {
    path: '/duvets/0005.jpg',
    description: 'Anim aliqua laboris deserunt exercitation reprehenderit excepteur voluptate anim excepteur est sit nulla.'
  },
  {
    path: '/duvets/0006.jpg',
    description: 'Labore elit eiusmod sint dolor veniam occaecat. Consectetur sint ut ut eiusmod.'
  },
  {
    path: '/duvets/0007.jpg',
    description: 'Labore sit laborum velit sit. Lorem occaecat irure ex do.'
  },
  {
    path: '/duvets/0008.jpg',
    description: 'Proident enim cupidatat laboris duis magna occaecat elit.'
  },
  {
    path: '/duvets/0009.jpg',
    description: 'Officia reprehenderit consectetur occaecat ea eu sint magna.'
  },
  {
    path: '/pillows/0010.jpg',
    description: 'Nulla magna id incididunt eiusmod magna commodo proident aute commodo consectetur elit culpa.'
  },
  {
    path: '/pillows/0011.jpg',
    description: 'Fugiat nostrud exercitation mollit labore elit est magna exercitation voluptate excepteur ullamco.'
  },
  {
    path: '/pillows/0012.jpg',
    description: 'Deserunt minim in voluptate enim minim anim exercitation.'
  },
  {
    path: '/pillows/0013.jpg',
    description: 'Consectetur adipisicing veniam qui occaecat ad ipsum nostrud magna deserunt ullamco.'
  },
  {
    path: '/pillows/0014.jpg',
    description: 'Ex sunt laborum excepteur officia nisi commodo ullamco consectetur dolor ullamco aute.'
  },
  {
    path: '/pillows/0015.jpg',
    description: 'Irure aliquip aliquip fugiat fugiat ipsum enim mollit consectetur ea minim quis labore sint nisi.'
  },
  {
    path: '/pillows/0017.jpg',
    description: 'Veniam officia fugiat ullamco duis deserunt sint aliqua culpa elit nulla enim labore.'
  }
];

addEvt(mobileNavLink, 'click', function(e) {
  e.preventDefault();
  toggleClass(domEl('nav'), 'js-is-opened');
});

console.log('webpack starterkit');
