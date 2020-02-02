import React from 'react';
import Section from '../Section/Section';
import NewsList from '../NewsList/NewsList';

import './Donate.css';

const Donate = props => {
    // Hardcoded donor list for simplicity
    const donors = [
        {
            title: 'WWF',
            url: 'https://donate.wwf.org.au/donate#gs.vaie4y',
            urlToImage:
                'https://www.wwf.org.au/images/UserUploadedImages/389/WWF_Logo_CMYK-01.svg'
        },
        {
            title: 'Pawsitivity',
            url: 'https://www.pawsitivityservicedogs.com/emergencyrescue',
            urlToImage:
                'https://d3n8a8pro7vhmx.cloudfront.net/pawsitivity/sites/3/meta_images/original/172661EC-ECA6-4FED-B11C-1D13287600AE.jpeg?1580635717'
        },
        {
            title: 'Habitat',
            url: 'https://habitat.org.au/how-you-can-help/donate/',
            urlToImage:
                'https://www.logolynx.com/images/logolynx/e9/e95a9c781df1fe921093be192c715f6c.jpeg'
        }
    ];

    const getDonorList = () => {
        return <NewsList donors={donors} />;
    };

    return <Section header={'Section 4'} getDonorList={getDonorList} />;
};

export default Donate;
