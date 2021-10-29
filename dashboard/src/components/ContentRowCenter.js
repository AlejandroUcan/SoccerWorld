import React from 'react';
import LeaguesInDb from './LeaguesInDb';
import BrandsInDb from './BrandsInDb';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}
            <LastUserInDb />
            {/*<!-- Genres in DB -->*/}
            <LeaguesInDb />
            <BrandsInDb />

        </div>
    )
}

export default ContentRowCenter;