import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Courts in</span> <span className={css.bld}>Ghaziabad</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Rajnagar" count="1" link='/Rajnagar' />
            <PlacesCard place="Rajnagar" count="1" link='/Rajnagar' />
            <PlacesCard place="Rajnagar" count="1" link='/Rajnagar' />
            <PlacesCard place="Rajnagar" count="1" link='/Rajnagar' />
            <PlacesCard place="Rajnagar" count="1" link='/Rajnagar' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;