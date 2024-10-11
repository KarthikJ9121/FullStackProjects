import React from 'react';  //used when using the class components

// /* props using destructuring */
// const Header = ({title}) => {    
//   return (
//     <header>
//       <h1>Task Tracking Application </h1>
//       <p>{title}</p>      
//     </header>
//   )
// }


/* uses custom styling */

// const headerStyle = {color : 'navy', textAlign : 'center'}

// const Header = (props) => {    
//   return (
//     <header>
//       <h1 style={headerStyle}>Task Tracking Application </h1>
//       {/* <p>{props.title}</p>       */}
//     </header>
//   )
// }

/* constraints for props */
Header.propTypes = {
    title: propTypes.string.isRequired,
}



/* these were the default props 
used by the function and is overridden
when it receives props as parameters from
other files */

Header.defaultProps = {
   title : "Good to see you",     
}


/* This was the Class Component */

// class App extends React.Component {
//   render ()
//   {
//       return <header>
//           <h1>Task Tracking Application</h1>
//       </header>
//   }
// }


export default Header
