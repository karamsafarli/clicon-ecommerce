/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './prodcard.module.scss';
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";


export const ProductCard = ({ img, title, price, isSale, isSoldout, isBestDeal, isHot }) => {
    return (
        <div className={styles.product_card}>
            <div className={styles.card_img}>
                <img src={img} alt="" />

                <div className={styles.overlay}>
                    <div className={styles.card_action}>
                        <CiHeart />
                    </div>
                    <div className={styles.card_action}>
                        <CiShoppingCart />
                    </div>
                    <div className={styles.card_action}>
                        <IoEyeOutline />
                    </div>
                </div>
            </div>

            <h3>{title}</h3>
            {/* {
                description &&
                <p>{description}</p>
            } */}

            <span className={styles.price}>
                ${price}
            </span>

            <div className={styles.tags}>
                {
                    isSoldout &&
                    <div className={styles.tag_issoldout}>
                        SOLD OUT
                    </div>
                }

                {
                    isSale &&
                    <div className={styles.tag_sale}>
                        {isSale}% OFF
                    </div>
                }

                {
                    isHot &&
                    <div className={styles.tag_ishot}>
                        HOT
                    </div>
                }
            </div>
        </div>
    )
}


export const LongProductCard = ({ img, title, description, price, isSale, isSoldout, isBestDeal, isHot, ratedCount }) => {
    return (
        <div className={styles.long_product_card}>
            <div className={styles.card_img}>
                <img src={img} alt="" />

            </div>

            <div className={styles.rate}>
                {
                    Array(5).fill(0).map((_, idx) => (
                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.3437 14.8985L14.2812 17.3985C14.7891 17.7188 15.4141 17.2422 15.2656 16.6563L14.125 12.1719C14.0942 12.0476 14.0991 11.9171 14.1391 11.7955C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53908C18.3437 8.15627 18.1094 7.38283 17.5078 7.34377L12.8984 7.04689C12.7727 7.03958 12.6518 6.99578 12.5505 6.92086C12.4492 6.84594 12.3719 6.74314 12.3281 6.62502L10.6094 2.29689C10.5639 2.17182 10.481 2.06377 10.372 1.98742C10.263 1.91107 10.1331 1.87012 10 1.87012C9.8669 1.87012 9.73703 1.91107 9.62802 1.98742C9.519 2.06377 9.43612 2.17182 9.39062 2.29689L7.67187 6.62502C7.62807 6.74314 7.5508 6.84594 7.44952 6.92086C7.34824 6.99578 7.22733 7.03958 7.10156 7.04689L2.49218 7.34377C1.89062 7.38283 1.65625 8.15627 2.11718 8.53908L5.64843 11.4844C5.74713 11.566 5.82077 11.6738 5.86085 11.7955C5.90094 11.9171 5.90584 12.0476 5.875 12.1719L4.82031 16.3281C4.64062 17.0313 5.39062 17.6016 5.99218 17.2188L9.65625 14.8985C9.759 14.8331 9.87824 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3437 14.8985Z" fill="#EBC80C" />
                        </svg>
                    ))
                }
                <span>({ratedCount})</span>

            </div>

            <h3>{title}</h3>
            {/* {
                description &&
                <p>{description}</p>
            } */}

            <span className={styles.price}>
                ${price}
            </span>

            <p>
                {description}
            </p>

            <div className={styles.tags}>
                {
                    isSoldout &&
                    <div className={styles.tag_issoldout}>
                        SOLD OUT
                    </div>
                }

                {
                    isSale &&
                    <div className={styles.tag_sale}>
                        {isSale}% OFF
                    </div>
                }

                {
                    isHot &&
                    <div className={styles.tag_ishot}>
                        HOT
                    </div>
                }
            </div>

            <div className={styles.card_actions}>
                <div className={styles.add_to_favorites}>
                    <CiHeart />
                </div>
                <div className={styles.add_to_cart}>
                    <CiShoppingCart />
                    <span>Add to card</span>
                </div>
                <div className={styles.inspect_item}>
                    <IoEyeOutline />
                </div>
            </div>
        </div>
    )
}


export const SmallProdcard = ({ img, title, price }) => {
    return (
        <div className={styles.small_prodcard}>
            <div className={styles.imgcont}>
                <img src={img} alt="" />
            </div>

            <div className={styles.product_info}>
                <p>{title}</p>
                <h5>${price}</h5>
            </div>
        </div>
    )
}