import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LongProductCard, ProductCard, SmallProdcard } from "../../product_card/ProductCard";
import Subscription from "../../subscription/Subscription"
import './home.scss';
import NewsCard from "../../news_card/NewsCard";
const Home = () => {


  return (
    <main className="homepage">
      <section className="product_actions">
        <div className="container">
          <div className="pa_left">
            <div className="category_dropdown">
              All Category
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 6L8 11L3 6" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="action_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.25 21.75H18.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Track Order</span>
            </div>

            <div className="action_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.48126 9.34688H2.98126V4.84688" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.8313 6.16874C17.0659 5.40226 16.1569 4.79418 15.1563 4.3793C14.1558 3.96442 13.0832 3.75087 12 3.75087C10.9168 3.75087 9.84427 3.96442 8.84369 4.3793C7.8431 4.79418 6.93413 5.40226 6.16876 6.16874L2.98126 9.34687" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5187 14.6531H21.0187V19.1531" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.16876 17.8313C6.93413 18.5977 7.8431 19.2058 8.84368 19.6207C9.84427 20.0356 10.9168 20.2491 12 20.2491C13.0832 20.2491 14.1558 20.0356 15.1563 19.6207C16.1569 19.2058 17.0659 18.5977 17.8313 17.8313L21.0188 14.6531" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Compare</span>
            </div>

            <div className="action_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.1406 12.75H18.1406C17.7428 12.75 17.3613 12.908 17.08 13.1893C16.7987 13.4707 16.6406 13.8522 16.6406 14.25V18C16.6406 18.3978 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5 18.1406 19.5H19.6406C20.0384 19.5 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3978 21.1406 18V12.75ZM21.1406 12.75C21.1407 11.5618 20.9054 10.3853 20.4484 9.28845C19.9915 8.1916 19.3218 7.1961 18.4781 6.35938C17.6344 5.52267 16.6334 4.8613 15.5328 4.41345C14.4322 3.96559 13.2538 3.74011 12.0656 3.75001C10.8782 3.74135 9.70083 3.96775 8.60132 4.41616C7.5018 4.86458 6.50189 5.52614 5.6592 6.36273C4.81651 7.19932 4.1477 8.1944 3.69131 9.29063C3.23492 10.3869 2.99997 11.5626 3 12.75V18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5H6C6.39782 19.5 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3978 7.5 18V14.25C7.5 13.8522 7.34196 13.4707 7.06066 13.1893C6.77936 12.908 6.39782 12.75 6 12.75H3" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Customer Support</span>
            </div>

            <div className="action_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.25 11.25H12V16.5H12.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875Z" fill="#191C1F" stroke="#5F6C72" strokeWidth="1.5" />
              </svg>
              <span>Need Help</span>
            </div>
          </div>

          <div className="pa_right">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.5266 7.75468C17.4192 7.99175 18.2333 8.46057 18.8864 9.11364C19.5395 9.7667 20.0083 10.5808 20.2454 11.4734" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.1172 13.65C11.0176 15.5094 12.5211 17.0091 14.3828 17.9047C14.5201 17.9697 14.672 17.9979 14.8235 17.9864C14.975 17.9748 15.1209 17.9241 15.2469 17.8391L17.9812 16.0125C18.1021 15.9306 18.2417 15.8806 18.387 15.8672C18.5324 15.8538 18.6788 15.8775 18.8125 15.9359L23.9312 18.1344C24.1062 18.2072 24.2524 18.3355 24.3472 18.4995C24.4421 18.6636 24.4804 18.8542 24.4562 19.0422C24.294 20.3085 23.6759 21.4722 22.7177 22.3158C21.7594 23.1593 20.5266 23.6247 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75001C4.37529 7.47338 4.84073 6.24059 5.68425 5.28233C6.52776 4.32407 7.69153 3.70599 8.95781 3.54376C9.14576 3.51961 9.33643 3.55792 9.50047 3.65279C9.66451 3.74765 9.79281 3.89381 9.86562 4.06876L12.0641 9.19844C12.1212 9.33007 12.1451 9.47374 12.1337 9.6168C12.1223 9.75985 12.0758 9.89789 11.9984 10.0188L10.1719 12.7969C10.0906 12.9225 10.0428 13.0669 10.0333 13.2163C10.0237 13.3657 10.0526 13.515 10.1172 13.65V13.65Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>+1-202-555-0104</span>
          </div>
        </div>
      </section>


      <section className="promoted_products">
        <div className="container">
          <div className="pp_slider">
            <div className="product_info">
              <h6>THE BEST PLACE TO PLAY</h6>
              <h2>Xbox Consoles</h2>
              <p>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
              <a href="#">
                <div className="shop_now">
                  SHOP NOW
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="product_img">
              <img src="/assets/ps.png" alt="" />

              <div className="price">
                $299
              </div>
            </div>
          </div>

          {/* <div className="pp_right"> */}
          <div className="product_sale_card card_1">
            <div className="card_content">
              <h5>Summer Sales</h5>
              <h3>New Google Pixel 6 Pro</h3>
              <a href="#">
                <div className="shop_now">
                  SHOP NOW
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="card_img">
              <img src="/assets/pixelphone.png" alt="" />
            </div>

            <div className="sale_tag">
              29% OFF
            </div>
          </div>

          <div className="product_sale_card card_2">
            <div className="card_img">
              <img src="/assets/earbuds.png" alt="" />
            </div>

            <div className="card_content">
              <h3>Xiaomi FlipBuds Pro</h3>
              <div className="product_price">
                $299 USD
              </div>
              <a href="#">
                <div className="shop_now">
                  SHOP NOW
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <div className="card_wrapper">
            <div className="adv_card">
              <div className="adv_card_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M35 27.7031V12.2969C34.9988 12.0743 34.939 11.8561 34.8265 11.664C34.714 11.472 34.5529 11.313 34.3594 11.2031L20.6094 3.46876C20.4241 3.36179 20.2139 3.30548 20 3.30548C19.7861 3.30548 19.5759 3.36179 19.3906 3.46876L5.64062 11.2031C5.44711 11.313 5.28599 11.472 5.17352 11.664C5.06105 11.8561 5.0012 12.0743 5 12.2969V27.7031C5.0012 27.9257 5.06105 28.144 5.17352 28.336C5.28599 28.528 5.44711 28.687 5.64062 28.7969L19.3906 36.5313C19.5759 36.6382 19.7861 36.6945 20 36.6945C20.2139 36.6945 20.4241 36.6382 20.6094 36.5313L34.3594 28.7969C34.5529 28.687 34.714 28.528 34.8265 28.336C34.939 28.144 34.9988 27.9257 35 27.7031V27.7031Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M27.6562 23.8281V15.7031L12.5 7.34375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M34.8281 11.6562L20.1406 20L5.17188 11.6562" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.1406 20L20 36.6875" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="adv_card_info">
                <h5>Fasted Delivery</h5>
                <p>Delivery in 24/H</p>
              </div>
            </div>


            <div className="adv_card">
              <div className="adv_card_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M8.75 8.75V17.3594C8.75 23.5625 13.7187 28.7031 19.9219 28.75C21.4058 28.7603 22.8771 28.4769 24.2511 27.9162C25.625 27.3554 26.8744 26.5284 27.9274 25.4827C28.9803 24.437 29.816 23.1933 30.3862 21.8233C30.9565 20.4533 31.25 18.984 31.25 17.5V8.75C31.25 8.41848 31.1183 8.10054 30.8839 7.86612C30.6495 7.6317 30.3315 7.5 30 7.5H10C9.66848 7.5 9.35054 7.6317 9.11612 7.86612C8.8817 8.10054 8.75 8.41848 8.75 8.75Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 35H25" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 28.75V35" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30.9688 20H32.5C33.8261 20 35.0979 19.4732 36.0355 18.5355C36.9732 17.5979 37.5 16.3261 37.5 15V12.5C37.5 12.1685 37.3683 11.8505 37.1339 11.6161C36.8995 11.3817 36.5815 11.25 36.25 11.25H31.25" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.0625 20H7.48438C6.15829 20 4.88652 19.4732 3.94884 18.5355C3.01116 17.5979 2.48438 16.3261 2.48438 15V12.5C2.48438 12.1685 2.61607 11.8505 2.85049 11.6161C3.08491 11.3817 3.40285 11.25 3.73438 11.25H8.73438" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="adv_card_info">
                <h5>24 Hours Return</h5>
                <p>100% money-back guarantee</p>
              </div>
            </div>


            <div className="adv_card">
              <div className="adv_card_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M35 8.75H5C4.30964 8.75 3.75 9.30964 3.75 10V30C3.75 30.6904 4.30964 31.25 5 31.25H35C35.6904 31.25 36.25 30.6904 36.25 30V10C36.25 9.30964 35.6904 8.75 35 8.75Z" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26.25 26.25H31.25" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.75 26.25H21.25" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.75 15.1406H36.25" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="adv_card_info">
                <h5>Secure Payment</h5>
                <p>Your money is safe</p>
              </div>
            </div>


            <div className="adv_card">
              <div className="adv_card_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M35.2344 21.25H30.2344C29.5713 21.25 28.9354 21.5134 28.4666 21.9822C27.9978 22.451 27.7344 23.0869 27.7344 23.75V30C27.7344 30.663 27.9978 31.2989 28.4666 31.7677C28.9354 32.2366 29.5713 32.5 30.2344 32.5H32.7344C33.3974 32.5 34.0333 32.2366 34.5021 31.7677C34.971 31.2989 35.2344 30.663 35.2344 30V21.25ZM35.2344 21.25C35.2344 19.2696 34.8424 17.3088 34.0807 15.4807C33.3191 13.6526 32.203 11.9935 30.7969 10.5989C29.3907 9.20441 27.7224 8.10213 25.888 7.3557C24.0537 6.60927 22.0897 6.23347 20.1094 6.24997C18.1304 6.23554 16.1681 6.61288 14.3355 7.36023C12.503 8.10759 10.8365 9.21019 9.432 10.6045C8.02751 11.9988 6.91283 13.6573 6.15218 15.4843C5.39153 17.3114 4.99995 19.2709 5 21.25V30C5 30.663 5.26339 31.2989 5.73223 31.7677C6.20107 32.2366 6.83696 32.5 7.5 32.5H10C10.663 32.5 11.2989 32.2366 11.7678 31.7677C12.2366 31.2989 12.5 30.663 12.5 30V23.75C12.5 23.0869 12.2366 22.451 11.7678 21.9822C11.2989 21.5134 10.663 21.25 10 21.25H5" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="adv_card_info">
                <h5>Support 24/7</h5>
                <p>Live contact/message</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="best_deals">
        <div className="container">
          <div className="bd_header">
            <div className="header_left">
              <h2>Best Deals</h2>
              <div className="timer">
                <span>Deals ends in</span>
                <div className="end_time_counter">
                  <span>16d</span>
                  :
                  <span>21h</span>
                  :
                  <span>57m</span>
                  :
                  <span>23s</span>
                </div>
              </div>
            </div>

            <div className="header_right">
              <a href="">Browse All Product
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.125 10H16.875" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

            </div>

          </div>


          <div className="product_card_wrapper">
            <div className="col-2">
              <LongProductCard
                className='long_card'
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                description={'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.'}
                // isSoldout={true}
                ratedCount={52.677}
                isHot={true}
              />
            </div>

            <div className="col">
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
            </div>
            <div className="col">
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
            </div>
            <div className="col">
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
            </div>
            <div className="col">
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
              <ProductCard
                img={'https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1704067200&Signature=BNEGEN~uF0S4d176olmJMo8xZVCob7LLPIuqTfHFdlHO0eVNeqkBoYR8kUHO02UGKHx5Lqbk~wZwu8KcvupNP5lXYhl-H23WqSmNpfn5~faiwhBscVjZdwhAdooifglEBoC6vgSUO319QKpj6B2ZvDqyIEBl40az97iAwlbM38vO-KVLcp4bxo4izAI9x0lW8U4NRu2NzMLaslBA5pZ5JJ~ivvECklYpNKQGCprVc50eBfFAM6~fkcRhcvB2oCWr5TVWqYW23bJYYZFOIV9SYuq7oiaE-bTpfmx73ENgDbruAtUNy1JdWjxtVtJDUJjifWXAWiZyD2kfr-a7ekFEvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title={'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...'}
                price={'2,300'}
                isSoldout={true}
              // isHot={true}
              />
            </div>
          </div>
        </div>


      </section>

      <section id="categories_slider">
        <div className="container">
          <div className="cs_heading">
            <h2>Shop with Categories</h2>
          </div>
          <div className="slider-container">
            <div className="swiper-button_next">
              <div className="prev_container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.75 12H20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="swiper-button_prev">
              <div className="next_container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.25 12H3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={18}
              slidesPerView={'auto'}

              navigation={{ prevEl: '.swiper-button_prev', nextEl: '.swiper-button_next' }}
            >
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
              <SwiperSlide className="res-slide">
                <div className="imgcont">
                  <img src="https://s3-alpha-sig.figma.com/img/ca28/1686/61494544c040fd06143b1849c7e4949c?Expires=1704067200&Signature=LCHu52daplDWanVqLQBb3I2UXfo2QY5Z0cnYrVNpnk-bcTmgsKMI480RUqOzP3Eu9nB97ekdzdbUw8LVYcYOM0phtarTntxqo2DntT5eXemHOFEQh3IK7M74LAbyQnr4-2XSm-kDG3PrqAdK1jtCYOuWz2dK9J5Uh4lg7l5O53GvUi8S5FRFeacWzgUoSWfqKqZCXgO9mQB29rmgVMUS19tHmgQmlojxqXxcr25nLa7KXE0u8wTcGO3m9HmVCrxnA81FCfOebDEhFgfbWtlzzLhiO8lchKUddPEHkip--FMRpwmdy2UnBZ-gwQv80hOT4O~ZdBhZzAySpFbD7MggDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <p>Computer & Laptop</p>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </section>

      <section id="recommended_product">
        <div className="container">
          <div className="rp_wrapper">
            <div className="rp_left">
              <span className="saved_price">
                SAVE UP TO $200.00
              </span>
              <h2>Macbook Pro</h2>

              <p>
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
              </p>

              <a href="#">
                SHOP NOW
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.75 12H20.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="rp_right">
              <div className="imgcont">
                <div className="price">
                  $1999
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/85b0/d3b5/fbf2d4a308ed09b8dd0b0ff62d7ea9d4?Expires=1704672000&Signature=HmRfupPdrA1pofk~HFcSE5DugxtD6E4Db411XPgmojT-ARFb3ZTvAHYhFosOzFGymmfpoi8ZjQNSZ14my64pvd4IPSKANUDrlhhgITkWeQ75KFtqVuxwLrBO2vdp~4UIAP1pSTtdp7NXhIy-jow-vy8~NQKcN5sZlFaVTvJyl972eiFCWjRjF7XezJeyQm-S6~UeJJoTPIiViAsQQt67BLeftMOIB637QwoCCBj6ntTxjJXGZQg1MfMxEr40r7JtRMFWE0yPz1aB4sHZxWla-nHP~ItaZIrPM5MSv6AGgUFoBatIKm-M8HYRW1T-iudZX9m89kkwrIaj886yjItPoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="latest_news">
        <div className="container">
          <h1 className="ln_heading">
            Latest News
          </h1>

          <div className="ln_card_wrapper">
            <div className="ln_card">
              <NewsCard
                img={'https://s3-alpha-sig.figma.com/img/a4bf/09a2/b2a0c4b41e79e059808e84ae39035884?Expires=1704672000&Signature=H2pQLYrSV3bNInTBXZyzRm8v8oRP1MbxHzdsyCYaFjfmsIzcmKsM55xfFGZ10N2pjlj1HR3HQ5Kx47Y-sD6Ol7WbELZJf87Ka3cbjXI16bXWAQpNcuT5nPh0XI02irP3BekLHky7mVuDioYGoElnwmw0EmQzntTg47oCD~U-AoXMoVMOgD62T88hXTeF1As8myKGmaSrFjq5G~T8Rkeo2Zq9OX2nRjwuNgWYpqsqygNltUPLjFt04onUKQzj2nR7Z1ZAGMWtc70yp2BfGA0TtVP6SB7Ve6duDfVQrK4TOa3NP1dSZx5WfmY15GqYVicfqEuHHoe~e4Y1-hfICW-daA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                name="Kristin"
                time="19Dec, 2013"
                comment="453"
                title="Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor."
                desc="Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."

              />

            </div>
            <div className="ln_card">
              <NewsCard
                img={'https://s3-alpha-sig.figma.com/img/a4bf/09a2/b2a0c4b41e79e059808e84ae39035884?Expires=1704672000&Signature=H2pQLYrSV3bNInTBXZyzRm8v8oRP1MbxHzdsyCYaFjfmsIzcmKsM55xfFGZ10N2pjlj1HR3HQ5Kx47Y-sD6Ol7WbELZJf87Ka3cbjXI16bXWAQpNcuT5nPh0XI02irP3BekLHky7mVuDioYGoElnwmw0EmQzntTg47oCD~U-AoXMoVMOgD62T88hXTeF1As8myKGmaSrFjq5G~T8Rkeo2Zq9OX2nRjwuNgWYpqsqygNltUPLjFt04onUKQzj2nR7Z1ZAGMWtc70yp2BfGA0TtVP6SB7Ve6duDfVQrK4TOa3NP1dSZx5WfmY15GqYVicfqEuHHoe~e4Y1-hfICW-daA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                name="Kristin"
                time="19Dec, 2013"
                comment="453"
                title="Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor."
                desc="Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."

              />

            </div>
            <div className="ln_card">
              <NewsCard
                img={'https://s3-alpha-sig.figma.com/img/a4bf/09a2/b2a0c4b41e79e059808e84ae39035884?Expires=1704672000&Signature=H2pQLYrSV3bNInTBXZyzRm8v8oRP1MbxHzdsyCYaFjfmsIzcmKsM55xfFGZ10N2pjlj1HR3HQ5Kx47Y-sD6Ol7WbELZJf87Ka3cbjXI16bXWAQpNcuT5nPh0XI02irP3BekLHky7mVuDioYGoElnwmw0EmQzntTg47oCD~U-AoXMoVMOgD62T88hXTeF1As8myKGmaSrFjq5G~T8Rkeo2Zq9OX2nRjwuNgWYpqsqygNltUPLjFt04onUKQzj2nR7Z1ZAGMWtc70yp2BfGA0TtVP6SB7Ve6duDfVQrK4TOa3NP1dSZx5WfmY15GqYVicfqEuHHoe~e4Y1-hfICW-daA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                name="Kristin"
                time="19Dec, 2013"
                comment="453"
                title="Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor."
                desc="Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."

              />

            </div>
          </div>
        </div>
      </section>

      <section id="small_categories">
        <div className="container">
          <div className="category_wrapper">
            <div className="category_container">
              <h3 className="category_title">
                FLASH SALE TODAY
              </h3>
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
            </div>


            <div className="category_container">
              <h3 className="category_title">
                BEST SELLERS
              </h3>
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
            </div>


            <div className="category_container">
              <h3 className="category_title">TOP RATED</h3>
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
            </div>


            <div className="category_container">
              <h3 className="category_title">NEW ARRIVAL</h3>
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
              <SmallProdcard
                img={'https://s3-alpha-sig.figma.com/img/4d11/c06a/3b45a80aa15dd6606ef1562a06207fcc?Expires=1704672000&Signature=NEAs39xc72hh~BO~ZZRrDImVrKoEeUowyKcckkfrhRiSgrjhlRfZ206oTpr8UCAOc84HnoDO4X5i9~yQ2rzcUB8t0LRRzhIZF0HN5E9~e1qaWnI-0J1c7w79CoqG1TwDjGsG-Q7BpDk3XHe8~S~0l7z9BJZA~yi7uLCU7PLUNbPWW-S5ArIM7Nb4g1r6sNFu6cQGji-SaSgidEjOtx14A~cgXTif~Gn~3HMUvcc0LJCxF1h9e4gXnnJOH9Ez7NKjAjn9bi-BNRTvjXazc0VuWfH-N2BqN0S-T1EBQBAMiZV5JesoKL-xBA2ARGfYw7fz9qJ4Lp6zB0c9ZYmVV7AErw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                title='4K UHD LED Smart TV with Chromecast Built-in'
                price='1,500'
              />
            </div>
          </div>
        </div>
      </section>

      <Subscription />
    </main>
  )
}

export default Home