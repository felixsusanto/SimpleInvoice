import React from "react";
import Template from "components/Template/Template";

class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Template>
          <div>
            <img style={{ maxWidth: "150px"}} src="https://res.cloudinary.com/teepublic/image/private/s--Wz07EAn0--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1521888279/production/designs/2524688_0.jpg" alt="logo"/>
          </div>
        </Template>
      </div>
    );
  }
}

export default Home;