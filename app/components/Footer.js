import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
  
  {/* Footer Section */}
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="foot-about">
            <h3>معلومات عنا</h3>
            <p>
              تأسس مركز واحة الطفل عام ٢٠١٨ ،وهو مرخص من وزارة الموارد البشرية
              والتنمية الاجتماعية. نهتم في المركز بالرعاية المتميزة و بتقديم
              بيئة آمنة وداعمة لنمو وتطوير أطفالكم الصغار. في واحتنا، نجمع بين
              الاهتمام الفردي وبرامج تعليمية متقدمة، بهدف توفير تجربة فريدة لكل
              طفل.{" "}
            </p>
            <div className="social-icon">
              <ul>
                <li>
                  <Link href="https://www.facebook.com/wahat.altefl.5">
                    <i className="flaticon-facebook-logo" />
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
              </ul>
            </div>
          </div>
        </div>
        {/* <div class="col-md-6 col-lg-3"> 
                  <div class="classes-foot">
                      <h3>باقات الاشتراك</h3>
                      <ul>
                          <li><a href="#">الاشتراك بالساعة</a></li>
                          <li><a href="#">الاشتراك اليومي</a></li>
                          <li><a href="#">الاشتراك الشهري</a></li>
                          <li><a href="#">الاشتراك الفصلي</a></li>
                          <li><a href="#">الاشتراك السنوي</a></li>*/}
        {/*  <li><a href="#">Previous Reading</a></li> */}
        {/* </ul> */}
        {/* </div> */}
        {/* </div> */}
        <div className="col-md-6 col-lg-2">
          <div className="quick-link">
            <h3>روابط سريعة</h3>
            <ul>
              <li>
                <Link href="about.html">من نحن</Link>
              </li>
              {/* <li><a href="team.html">سياسة الخصوصية</a></li> */}
              <li>
                <Link href="faq.html">الأسئلة الشائعة</Link>
              </li>
              <li>
                <Link href="contact.html">اتصل بنا</Link>
              </li>
              <li>
                <Link href="pricing.html">باقات الاشتراك</Link>
              </li>
              {/* <li><a href="services.html">خدماتنا</a></li> */}
              {/* <li><a href="event.html">الفعاليات</a></li> */}
              {/* <li><a href="program-details.html">تفاصيل البرامج</a></li> */}
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="latest-news">
            <h3>آخر الأحداث</h3>
            <ul>
              <li>
                <Link href="How-to-motivate-your-child-to-read-details.html">
                  كيف تحفز طفلك للقراءة
                </Link>
                <p>نوفمبر٢٠٢٣</p>
              </li>
              <li>
                <Link href="Healthy-breakfast-for-kids-in-the-kindergarten-details.html">
                  فطور صحي للأطفال في الروضة
                </Link>
                <p>مارس ٢٠٢٢</p>
              </li>
              <li>
                <Link href="What-does-your-child-need-in-the-nursery-bag-details.html">
                  ماذا يحتاج الطفل في حقيبة الحضانة
                </Link>
                <p>مايو ٢٠٢١</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Whatsapp FlootButton */}
  <Link
    href="https://wa.me/+966500899173"
    className="float-whatsapp-button"
    target="_blank"
  >
    <i className="fa fa-whatsapp my-float-whatsapp" />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </Link>
  {/* fotter */}
  <div className="footer-bottom">
    <div className="container">
      <p className="copy_right text-center"></p>
      <p>
        Copyright © All Rights Reserved <br />{" "}
        <i className="ti-heart" aria-hidden="true" /> Developed by ♥
        <Link href="https://www.selsla.net/" target="_new" title="child oasis">
          <b>selsla.net</b>
        </Link>
      </p>
      <p />
      <p />
    </div>
  </div>
  {/* End Footer Section */}


    </div>
  )
}

export default Footer
