import ActionTypes from '../constants';
import kitchen from '../../assets/kitchen.mp4';
import basment from '../../assets/basment.mp4';
import blog from '../../assets/blog.mp4';
const initialState = {
  page: '/',  
  pagesArr: {
    main:  { pagetitle: 'Let us professionally do your project', subtitle: 'Butkov is residential/commercial remodeling company', videolink: `041/086/original/031_07.mp4`, costomlink: false },
    bathroom:  { pagetitle: 'Bathroom Remodel', subtitle: '', videolink: `049/168/original/27-05-2020104.mp4`, costomlink: false },
    kitchen: { pagetitle: 'Kitchen Remodel', subtitle: '', videolink: kitchen, costomlink: true },
    roofing: { pagetitle: 'Roofing', subtitle: '', videolink: `050/888/original/MVI_7139-Rain-Roof.mp4`, costomlink: false },
    basment: { pagetitle: 'Basement Remodel', subtitle: '', videolink: basment, costomlink: true },
    tile: { pagetitle: 'Tile Installation', subtitle: '', videolink: `056/106/original/demolition-hammer-breaking-the-tiled-wallM.mp4`, costomlink: false },
    commercial: { pagetitle: 'Commercial', subtitle: 'Our commercial construction services includes:', videolink: `006/903/original/Scientists4.mp4`, costomlink: false },
    faq: { pagetitle: 'More Info', subtitle: 'FAQ', videolink: `018/914/original/ICON-VERSION9.mp4`, costomlink: false },
    butkovprocess: { pagetitle: 'More Info', subtitle: 'Butkov\'s process', videolink: `018/914/original/ICON-VERSION9.mp4`, costomlink: false },
    financingoptions: { pagetitle: 'More Info', subtitle: 'Financing options', videolink: `018/914/original/ICON-VERSION9.mp4`, costomlink: false },
    rewiews: { pagetitle: 'Testimonials', subtitle: 'Get to know us through the experiences of our clients.', videolink: `018/914/original/ICON-VERSION9.mp4`, costomlink: false },
    blog: { pagetitle: 'Blog', subtitle: '', videolink: blog, costomlink: true },
    contact: { pagetitle: 'Contact Us', subtitle: '', videolink: `018/367/original/ICON-VERSION4.mp4`, costomlink: false },
    login: { pagetitle: 'Login', subtitle: '', videolink: `041/086/original/031_07.mp4`, costomlink: false }, 
    registartion: { pagetitle: 'Registartion', subtitle: '', videolink: `041/086/original/031_07.mp4`, costomlink: false }, 
  }
};

export default function pages(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.APP_PAGES_SCREEN:
      return {
        ...state,
        page: payload,
      };  
    default:
      return state;
  }
}