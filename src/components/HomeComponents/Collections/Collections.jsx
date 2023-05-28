import css from './Collections.module.css'

import rightArrow from '/icons/right-arrow.png'
import CathTheMatachImg from '/images/bestInChoice.png'
import NewInTownImg from '/images/newintown.jpg'
import TrendingThisWeekImg from '/images/trendingthisweek.jpg'
import CallingBarHoppersImg from '/images/mostreviewed.jpeg'

import CollectionsCard from '../../../utils/Cards/card2/CollectionsCard'

let Collections = () => {
    return <div className={css.outerDiv}>
        <div className={css.title}>Collections</div>
        <div className={css.tagLine}>
            <span className={css.desc}>Explore curated lists of top restaurants and cafes in Ghaziabad, based on trends</span>
            <span className={css.collectionPlacesTag}>All collections in Ghaziabad <span className={css.rightArrowBox}><img className={css.rightArrow} src={rightArrow} alt="right arrow" /></span></span>
        </div>
        <div className={css.cards}>
            <CollectionsCard imgSrc={CathTheMatachImg} title="Best In Choice" places="30" />
            <CollectionsCard imgSrc={NewInTownImg} title="New In Town" places="19" />
            <CollectionsCard imgSrc={TrendingThisWeekImg} title="Trending This Week" places="30" />
            <CollectionsCard imgSrc={CallingBarHoppersImg} title="Most Reviewed" places="30" />
        </div>
    </div>
}

export default Collections;