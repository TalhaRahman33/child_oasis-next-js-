import Link from 'next/link'
import React from 'react'

const Header1 = () => {
  return (
    <div>
      <div className="header-top-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <ul className="head-top-list">
          <li>
            {/* <i class="flaticon-facebook-placeholder-for-locate-places-on-maps" style="height:15px !important"></i> */}
            <i className="fa fa-map-marker" />
            زكريا الساجي، ۷۳۸٦ ، الشفا، ۱٤۷۲۱، الرياض
          </li>
          <li>
            <Link href="tel:٠ ٥٠ ٠٨٩ ٩١٧٣">
              <i className="fa fa-phone" />
              ٠٥٠٠٨٩٩١٧٣
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fa fa-envelope" />
              {/* babycare@gmail.com */}
              Info@childoasis.com.sa
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4">
        <div className="social-link">
          <ul>
            {/* <li>
                                  <a href="https://www.facebook.com/wahat.altefl.5">
                                      <i class="flaticon-facebook-logo"></i>
                                  </a>
                              </li> */}
            {/* <li>
                              <a href="https://iwtsp.com/966500899173"></a>
                              <img src="fonts/whatsapp.png" height="24">
                          </li>  */}
            <li>
              <Link href="https://iwtsp.com/966500899173">
                <i className="fa fa-whatsapp" />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/childoasis_sa?t=BbD-NZe-07NQuIIabZQk1g">
                <i className="flaticon-twitter-black-shape" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/childoasis_sa?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                <i className="flaticon-instagram" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/%D9%85%D8%B1%D9%83%D8%B2-%D9%88%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D8%B7%D9%81%D9%84-%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9-%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-0230342a6/?originalSubdomain=sa">
                <i className="flaticon-linkedin-letters" />
              </Link>
            </li>
            <li>
              <Link
                href="#modalCart"
                className="log-btn cart modalCart"
                data-bs-toggle="modal"
                data-bs-target="#modalCart"
              >
                log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Header1
