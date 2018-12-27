const span = {
  color: 'orange',
};

const image = {
  width: '255px',
  borderRadius: '5%',
};

const title = {
  color: 'black',
  fontSize: '16px',
};

const listEntry = {
  boxSizing: 'inherit',
  border: '1px gainsboro solid',
  borderRadius: '5%',
  fontSize: '12px',
  display: 'flex',
  flexDirection: 'column',
  margin: '15px',
  fontFamily: "'Nunito Sans', sans-serif",
  color: 'rgba(0,0,0,.55)',
};

const carousel = {
  margin: 0,
  padding: 0,
  position: 'relative',
  width: '70%',
};

const carouselEntry = {
  display: 'flex',
};

const carouselEntryActive = {
  display: 'flex',
  marginRight: '3.5%',
};

const carouselBody = {
  display: 'flex',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  boxSizing: 'inherit',
};

const lowerRow = {
  display: 'flex',
  justifyContent: 'space-between',
};

const list0 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(0%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const list1 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-25%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const list2 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-50%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const list3 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-75%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const stars = {
  display: 'flex',
  flexDirection: 'row',
};

const listInfoLeft = {
  marginLeft: '8px',
};

const listInfoRight = {
  marginRight: '8px',
};

const rightArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  right: '-10px',
  top: '150px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '30px',
  fontWeight: '700',
  color: '#0070eb',
};

const leftArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  left: '-10px',
  top: '150px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '30px',
  fontWeight: '700',
  color: '#0070eb',
};

const reviewSummary = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '12px',
};

const review = {
  display: 'flex',
  fontFamily: "'Nunito Sans', sans-serif",
  margin: '10px',
};

const reviewContent = {
  width: '80%',
  color: 'black',
  fontSize: '14px',
};

const avatar = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#40c2de',
  textAlign: 'center',
  lineHeight: '40px',
  margin: '20px 7px',
};

const reviewBorder = {
  borderLeft: '1px solid gainsboro',
  borderRight: '1px solid gainsboro',
  margin: '0 15px',
  padding: '0 10px',
};

const tooltip = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default {
  span,
  listEntry,
  list0,
  list1,
  list2,
  list3,
  stars,
  listInfoLeft,
  listInfoRight,
  lowerRow,
  image,
  carousel,
  carouselBody,
  carouselEntry,
  avatar,
  carouselEntryActive,
  rightArrow,
  leftArrow,
  reviewSummary,
  reviewContent,
  review,
  reviewBorder,
  tooltip,
  title,
};
