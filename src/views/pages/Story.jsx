import { Helmet } from "react-helmet";
import Img from '../../assets/img/img.png'

const Story = (props) => {
    return (
      <div>
          <Helmet>

          <title>Story | RepoHub</title>
          <meta name="title" content="RepoHub" />
          <meta name="description" content="demon slayer cosplay" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content="repohub.co" />
          <meta property="og:title" content="RepoHub" />
          <meta property="og:description" content="demon slayer cosplay" />
          <meta property="og:image" content={Img} />


          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="repohub.co" />
          <meta property="twitter:title" content="RepoHub" />
          <meta property="twitter:description" content="demon slayer cosplay" />
          <meta property="twitter:image" content={Img} />
          </Helmet>
        <h3 className="text-info"> story</h3>
      </div>
    );
  };
  
  export default Story;