
// import React from 'react'
// import Navbar from './Navbar'
// import Main from './Main'
// import Sidebar1 from './Sidebar1'
// import Sidebar2 from './Sidebar2'
// import Footer from './Footer'
// const App = () => {
// import React from "react";
// import PropChildEx from "./PropChildEx";
// import SubChild from "./SubChild";
// import Child1 from "./Child1";
// import CBCStateEx from "./CBCStateEx"

//  return (
//     <div className="App">
//       <Navbar/>
//       <Main/>
//       <div className="sidebar">
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
// import React, {Component} from 'react'
// import CBCStateEx from './CBCStateEx'
// import CBCPropsEx from './CBCPropsEx'
// import FBCPropEx from './FBCPropEx'
// export default class App extends Component {
//   render(){
//     return (
//       <div>
        {/* <CBCPropsEx
        username="srinija"
        age={19}
        hobbies={["playing", "stock"]}
        address={{city:"hitech", area:"madhapur"}}
        sendFun={function(){alert("iofhi")}}
        /> */}
      //   <FBCPropEx
      //   username="srinu"
      //   isMarried={true}
      //   hobbies={["chatting","dancing"]}
      //   />
      // </div>
//     )
//   }
// }
// import React from "react";npm
// import PropChildEx from "./PropChildEx";
// import SubChild from "./SubChild";
// import Child1 from "./Child1";
import React from "react";
import FBCStateEx from "./FBCStateEx";
import FunctionalComponent from "./FunctionalComponent";
const App = () => {
  return (
    <div>App <FunctionalComponent/>      
    </div>
  );
};

export default App;
