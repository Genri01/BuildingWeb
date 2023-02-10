import ActionTypes from '../constants';

const initialState = {
  page: '/',  
  pagesArr: {
    main:  { pagetitle: 'Let us proffessionally do your project', subtitle: 'Butkov is residentional / commercial remodeling company', videolink: `041/086/original/031_07.mp4` },
    bathroom:  { pagetitle: 'Bathroom Remodel', subtitle: '', videolink: `049/168/original/27-05-2020104.mp4` },
    kitchen: { pagetitle: 'Kitchen Remodel', subtitle: '', videolink: `037/504/original/C069.mp4` },
    roofing: { pagetitle: 'Roofing', subtitle: '', videolink: `050/888/original/MVI_7139-Rain-Roof.mp4` },
    basment: { pagetitle: 'Basment Remodel', subtitle: '', videolink: `021/226/original/A106_09021627_C022.mp4` },
    tile: { pagetitle: 'Tile Installation', subtitle: '', videolink: `056/106/original/demolition-hammer-breaking-the-tiled-wallM.mp4` },
    commercial: { pagetitle: 'Commercial', subtitle: 'Our commercial constraction services includes:', videolink: `006/903/original/Scientists4.mp4` },
    faq: { pagetitle: 'More Info', subtitle: 'FAQ', videolink: `018/914/original/ICON-VERSION9.mp4` },
    butkovprocess: { pagetitle: 'More Info', subtitle: 'Butkov\'s process', videolink: `018/914/original/ICON-VERSION9.mp4` },
    financingoptions: { pagetitle: 'More Info', subtitle: 'Financing options', videolink: `018/914/original/ICON-VERSION9.mp4` },
    rewiews: { pagetitle: 'Testimonials', subtitle: 'Get to know us through the experiences of our clients.', videolink: `018/914/original/ICON-VERSION9.mp4` },
    blog: { pagetitle: 'Blog', subtitle: '', videolink: `013/979/original/keys_web-blog-social.mp4` },
    contact: { pagetitle: 'Contact Us', subtitle: '', videolink: `018/367/original/ICON-VERSION4.mp4` },
    login: { pagetitle: 'Login', subtitle: '', videolink: `041/086/original/031_07.mp4` }, 
    registartion: { pagetitle: 'Registartion', subtitle: '', videolink: `041/086/original/031_07.mp4` }, 
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