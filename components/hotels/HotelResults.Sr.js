import Image from "next/image";
import { Button, Col, Row } from "reactstrap";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { submitairSellRequest, setAirSell } from "@/store/AirSellSlice";
import { setSelectedFlights } from "@/store/AvailabilitySlice";
import {getPaymentPage} from "@/store/PaymentSlice";
import { useResolvedPath } from "react-router-dom";
//const ImgUrl = "https://mainimageservice.azureedge.net/00-tup-web/images/airline/bigimages/";

const HotelResultsSr = () => {

    return (
    //   <>
    //   <section className="xs-section bg-inner">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12 ratio3_2">
    //           <div className="product-wrapper-grid special-section">
    //             <div className="row  content grid">
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">
    //                     <img src="../images/packages/holidays-main/dubai/centara-mirage-beach-resort.jpg" className="img-fluid lazyload bg-img" alt />
    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Centara Mirage Beach Resort <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes 20% hotel discount.and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                           {/* <span>swimming</span>
    //               <span>parking</span> */}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 latest grid-item wow fadeInUp" data-class="latest">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">
    //                     <a href="hotel-single-7.html">
    //                       <img src="../images/packages/holidays-main/dubai/atlantis-the-palm.jpg" className="img-fluid lazyload bg-img" alt />
    //                     </a>
    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">

    //                     <h5>Atlantis, The Palm<span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                     </h5>

    //                     <p>
    //                       complimentary daily access to Atlantis Aquaventure Waterpark


    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />

    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                           {/* <span>swimming</span>
    //               <span>parking</span> */}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="label-offer">Recommended</div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular  grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">

    //                     <img src="../images/packages/holidays-main/dubai/delano-dubai.jpg" className="img-fluid lazyload bg-img" alt />

    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Delano Dubai <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes discounted rates and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular  grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">

    //                     <img src="../images/packages/holidays-main/dubai/delano-dubai.jpg" className="img-fluid lazyload bg-img" alt />

    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Delano Dubai <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes discounted rates and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular  grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">

    //                     <img src="../images/packages/holidays-main/dubai/delano-dubai.jpg" className="img-fluid lazyload bg-img" alt />

    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Delano Dubai <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes discounted rates and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular  grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">

    //                     <img src="../images/packages/holidays-main/dubai/delano-dubai.jpg" className="img-fluid lazyload bg-img" alt />

    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Delano Dubai <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes discounted rates and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular  grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">

    //                     <img src="../images/packages/holidays-main/dubai/delano-dubai.jpg" className="img-fluid lazyload bg-img" alt />

    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Delano Dubai <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes discounted rates and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-xl-4 col-lg-4 col-sm-6 popular  grid-item wow fadeInUp" data-class="popular">
    //                 <div className="special-box p-0">
    //                   <div className="special-img">

    //                     <img src="../images/packages/holidays-main/dubai/delano-dubai.jpg" className="img-fluid lazyload bg-img" alt />

    //                     <div className="top-icon">
    //                       <a href="#" className data-bs-toggle="tooltip" data-placement="top" title data-original-title="Add to Wishlist">
    //                         <i className="far fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="special-content">
    //                     <a href="hotel-single-7.html">
    //                       <h5>Delano Dubai <span><i className="fas fa-map-marker-alt" /> Dubai</span>
    //                       </h5>
    //                     </a>
    //                     <p>
    //                       Includes discounted rates and complimentary upgrade to half board
    //                     </p>
    //                     <div className="bottom-section">
    //                       <div className="rating">
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <i className="fas fa-star" />
    //                         <span>5 nights half board</span>
    //                       </div>
    //                       <div className="price">
    //                         <del>£ 1,180</del>
    //                         <span>£1,144</span>
    //                         <div className="facility-detail">
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>

                 
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    // </>

    <>
   <section className="pt-0 xs-section bg-inner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ratio3_2">
        <div className="container">
          <div className="list-view row content grid">
            <div className="list-box col-12 popular grid-item wow fadeInUp">
              <div className="list-img">
                <a href="hotel-single-7.html">
                <img src="../images/packages/holidays-main/dubai/centara-mirage-beach-resort.jpg" className="img-fluid lazyload bg-img" alt />
                </a>
              </div>
              <div className="list-content">
                <div>
                  <a href="hotel-single-7.html">
                    <h5>sea view hotel</h5>
                  </a>
                  <p>dubai, 2km from center</p>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span>26412 review</span>
                  </div>
                  <div className="facility-icon">
                    <div className="facility-box">
                    <img src="../images/packages/holidays-main/dubai/atlantis-the-palm.jpg" className="img-fluid lazyload bg-img" alt />
                      <span>bar</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/wifi.png" className="img-fluid blur-up lazyload" alt />
                      <span>wifi</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/sunset.png" className="img-fluid blur-up lazyload" alt />
                      <span>beach</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/pool.png" className="img-fluid blur-up lazyload" alt />
                      <span>swimming</span>
                    </div>
                  </div>
                  <div className="price">
                    <del>$1300</del>
                    $1254 <span>/ per night</span>
                    <p className="mb-0">login &amp; unlock a secret deal</p>
                  </div>
                  <div className="offer-box">
                    <i className="fas fa-fire" /> 8 people booked this hotel today
                  </div>
                  <a href="hotel-booking.html" className="btn btn-solid color1 book-now">book now</a>
                </div>
              </div>
            </div>
            <div className="list-box col-12 latest grid-item wow fadeInUp">
              <div className="list-img">
                <a href="hotel-single-7.html">
                <img src="../images/packages/holidays-main/dubai/atlantis-the-palm.jpg" className="img-fluid lazyload bg-img" alt />
                </a>
              </div>
              <div className="list-content">
                <div>
                  <a href="hotel-single-7.html">
                    <h5>sea view hotel</h5>
                  </a>
                  <p>dubai, 2km from center</p>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span>26412 review</span>
                  </div>
                  <div className="facility-icon">
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/beer.png" className="img-fluid blur-up lazyload" alt />
                      <span>bar</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/wifi.png" className="img-fluid blur-up lazyload" alt />
                      <span>wifi</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/tour/fork.png" className="img-fluid blur-up lazyload" alt />
                      <span>restaurant</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/pool.png" className="img-fluid blur-up lazyload" alt />
                      <span>swimming</span>
                    </div>
                  </div>
                  <div className="price">
                    <del>$1300</del>
                    $1254 <span>/ per night</span>
                    <p className="mb-0">login &amp; unlock a secret deal</p>
                  </div>
                  <a href="hotel-booking.html" className="btn btn-solid color1 book-now">book now</a>
                </div>
              </div>
            </div>
            <div className="list-box col-12 popular grid-item wow fadeInUp">
              <div className="list-img">
                <a href="hotel-single-7.html">
                <img src="../images/packages/holidays-main/dubai/atlantis-the-palm.jpg" className="img-fluid lazyload bg-img" alt />
                </a>
              </div>
              <div className="list-content">
                <div>
                  <a href="hotel-single-7.html">
                    <h5>sea view hotel</h5>
                  </a>
                  <p>dubai, 2km from center</p>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span>26412 review</span>
                  </div>
                  <div className="facility-icon">
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/wifi.png" className="img-fluid blur-up lazyload" alt />
                      <span>wifi</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/sunset.png" className="img-fluid blur-up lazyload" alt />
                      <span>beach</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/pool.png" className="img-fluid blur-up lazyload" alt />
                      <span>swimming</span>
                    </div>
                  </div>
                  <div className="price">
                    <del>$1300</del>
                    $1254 <span>/ per night</span>
                    <p className="mb-0">login &amp; unlock a secret deal</p>
                  </div>
                  <div className="offer-box">
                    <i className="fas fa-fire" /> Hurry, Only 1 room left
                  </div>
                  <a href="hotel-booking.html" className="btn btn-solid color1 book-now">book now</a>
                </div>
              </div>
            </div>
            <div className="list-box col-12 trend grid-item wow fadeInUp">
              <div className="list-img">
                <a href="hotel-single-7.html">
                <img src="../images/packages/holidays-main/dubai/atlantis-the-palm.jpg" className="img-fluid lazyload bg-img" alt />
                </a>
              </div>
              <div className="list-content">
                <div>
                  <a href="hotel-single-7.html">
                    <h5>sea view hotel</h5>
                  </a>
                  <p>dubai, 2km from center</p>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span>26412 review</span>
                  </div>
                  <div className="facility-icon">
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/beer.png" className="img-fluid blur-up lazyload" alt />
                      <span>bar</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/wifi.png" className="img-fluid blur-up lazyload" alt />
                      <span>wifi</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/sunset.png" className="img-fluid blur-up lazyload" alt />
                      <span>beach</span>
                    </div>
                    <div className="facility-box">
                      <img src="../assets/images/icon/hotel/pool.png" className="img-fluid blur-up lazyload" alt />
                      <span>swimming</span>
                    </div>
                  </div>
                  <div className="price">
                    <del>$1300</del>
                    $1254 <span>/ per night</span>
                    <p className="mb-0">login &amp; unlock a secret deal</p>
                  </div>
                  <a href="hotel-booking.html" className="btn btn-solid color1 book-now">book now</a>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example" className="pagination-section">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
              <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
              <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
    );
  }
export default HotelResultsSr;
