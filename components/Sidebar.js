// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
// //import Stack from '@material-ui/core/Stack';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import {sidebar} from '../components/Attributes'
// const social = [
//   { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/UT0903' },
//   { name: 'Twitter', icon: InstagramIcon, href: '#' },
//   { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100000599048771' },
// ];
// function Sidebar() {

//   const { archives, description, title } = sidebar;
//   return (
//     <>
//       <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
//         <Typography variant="h6" gutterBottom>
//           {title}
//         </Typography>
//         <Typography>{description}</Typography>
//       </Paper>
//       <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//         Archives
//       </Typography>
//       {archives?.map((archive) => (
//         <Link display="block" variant="body1" href={archive.url} key={archive.title}>
//           {archive.title}
//         </Link>
//       ))}

//       <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//         Social
//       </Typography>

//       {social.map((network) => (
//         <Link
//           display="block"
//           variant="body1"
//           href={network.href}
//           key={network.name}
//           sx={{ mb: 0.5 }}
//         >
//           <network.icon />
//           <span>{network.name}</span>
//         </Link>
//       ))}
//     </>
//   );
// }

// // Sidebar.propTypes = {
// //   archives: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       title: PropTypes.string.isRequired,
// //       url: PropTypes.string.isRequired,
// //     }),
// //   ).isRequired,
// //   description: PropTypes.string.isRequired,
// //   social: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       icon: PropTypes.elementType.isRequired,
// //       name: PropTypes.string.isRequired,
// //     }),
// //   ).isRequired,
// //   title: PropTypes.string.isRequired,
// // };

// export default Sidebar;
