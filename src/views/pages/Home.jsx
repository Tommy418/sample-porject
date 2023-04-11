import Home_Img from '../../assets/img/demonslayer.png';
import Service_1 from '../../assets/img/services1.png';
import Service_2 from '../../assets/img/services2.png';
import Service_3 from '../../assets/img/services3.png';
import Service_4 from '../../assets/img/services4.png';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import 'animate.css';
import { Helmet } from 'react-helmet';
import Logo from '../../dmlogo.png'
import Img from '../../assets/img/img.png'


const Home = (props) => {
  const Work = [
    { id: 1, src: Home_Img, subtitle: "Sport Books", desc: "Rewind" },
    { id: 2, src: Home_Img, subtitle: "Sport Books", desc: "Rewind" },
    { id: 3, src: Home_Img, subtitle: "Sport Books", desc: "Rewind" },
    { id: 4, src: Home_Img, subtitle: "Sport Books", desc: "Rewind" },
    { id: 5, src: Home_Img, subtitle: "Sport Books", desc: "Rewind" },
  ]

  const Service = [
    { id: 1, src: Service_1, title: "Reasearch & Analysis", },
    { id: 2, src: Service_2, title: "Reasearch & Analysis", },
    { id: 3, src: Service_3, title: "Reasearch & Analysis", },
    { id: 4, src: Service_4, title: "Reasearch & Analysis", },

  ]
  useEffect(() => {

    ScrollReveal().reveal('.headline', {
      origin: 'bottom',
      distance: '4opx',
      duration: 1200,
      // reset: true,
      inerval: 200,
      scale: 0.9,
      viewFactor: 0.1,

    });
  }, [])
  return (
    <div>
    <Helmet>

          <title>Home | RepoHub</title>
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

      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-10">

            {/* Home Section */}
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="my-3 py-3 ">
                    <h3 className='fw-light headline animate__animated animate__bounce animate__delay-1s '>Digital Angency</h3>
                    <p className='headline'>kdjsafkdaksdfkskdfaskdfldksfkdsflkadfjlkadsfkl</p>
                    <img src={Home_Img} alt="home img" className='d-block w-100 headline animate__animated animate__pulse animate__delay-1s rounded pdf-rounded-xl' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Work Section */}
      <div className='bg-light'>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="my-3 ">
                      <h3 className='fw-light text-center py-4 headline'>Our work select Projects</h3>

                      <div className='row row-cols-1 row-cols-md-2 g-5'>
                        {
                          Work.map((w) => {
                            return (
                              <div key={w.id} className='col headline'>
                                <div className="card border border-secondary-subtles rounded pdf-rounded-xl overflow-hidden border-0 shadow-xl shadow-sky-200 " >
                                  <img src={w.src} alt="home img" className='col-md-12' />
                                  <div className="card-body">
                                    <h5 className='card-title'>{w.subtitle}</h5>
                                    <p className="card-text">{w.desc}</p>
                                  </div>
                                </div>
                              </div>


                            )
                          })
                        }
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section */}
      <div className='bg-light'>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className='headline'>Our Services</h4>
                  </div>
                  <div className="col-lg-6">
                    <p className='headline'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat consequuntur voluptate provident vero, ullam delectus inventore eius. Consequatur accusamus atque veritatis facere! Totam dolores, perspiciatis at cumque id error.</p>
                  </div>
                </div>
                <div className="row g-4 mt-3">
                  {
                    Service.map((s) => {
                      return (
                        <div key={s.id} className='col headline '>
                          <div className="card rounded-0 text-center py-3 py-lg-5 border-0 shadow-xl shadow-sky-200" >
                            <div className='mb-1 mb-lg-3'>
                              <img src={s.src} alt="home img" className='w-50' />
                            </div>
                            <div className="card-body">
                              <h6 className='card-title text-muted'>{s.title}</h6>
                            </div>
                          </div>
                        </div>


                      )
                    })
                  }



                </div>
                <div className="col-12 headline">

                  <div className="float-end my-5">
                    <div className='d-flex justify-content-center align-item-center'>
                      <span className='me-3'>Explore </span>
                      <div>
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stouy */}
      <div className=''>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="py-5">

                      <div className='text-center py-lg-5 my-lg-5 headline'>
                        <p>Next</p>
                        <h4>Our Story</h4>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='border-top py-3'>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="container">
                <div className="row">
                  <div className="col headline ">
                    <div className="small mb-4 mb-lg-0">
                      <NavLink to="/" className=' text-decoration-none me-4' > Home</NavLink>
                      <NavLink to="/story" className='text-decoration-none text-secondary me-4' > Story</NavLink>
                      <NavLink to="/services" className='text-decoration-none text-secondary me-4' > Services</NavLink>

                      <NavLink to="/" className=' text-decoration-none text-secondary d-lg-none' > Career</NavLink>
                      <NavLink to="/contact" className='text-decoration-none text-secondary ms-4 d-lg-none' > Contact us</NavLink>
                    </div>
                  </div>
                  <div className="col-lg mt-md-3 headline">
                    <div className="text-center">
                      <h5>Repo Hub</h5>

                    </div>
                  </div>
                  <div className="col d-none d-lg-block headline">
                    <div className="text-end small">
                      <NavLink to="/" className=' text-decoration-none text-secondary' > Career</NavLink>
                      <NavLink to="/contact" className='text-decoration-none text-secondary ms-4' > Contact us</NavLink>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;