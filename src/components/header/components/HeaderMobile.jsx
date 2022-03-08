import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// Recoil Header State
import { useRecoilState, useSetRecoilState } from 'recoil';

// Import Config for the header
import { configAtom } from '../../../config/config';

// eslint-disable-next-line import/order
import { queryAtom } from '../../../config/searchbox';

//Import config for federatedSearch
import { isFederatedAtom } from '../../../config/config';

// Import Hook

import useScreenSize from '../../../hooks/useScreenSize';
// Import SearchBox
// eslint-disable-next-line import/order
import CustomSearchBoxSimple from '../../searchbox/SearchBox';

// Import VoiceSearchComponent
import CustomVoiceSearchComponent from '../../voicesearch/VoiceSearch';
import Navigation from './Navigation';

const HeaderMobile = () => {
  const setQueryState = useSetRecoilState(queryAtom);
  const federated = useSetRecoilState(isFederatedAtom);
  // Import state from the voice search
  const [value] = useRecoilState(configAtom);
  // Define value to display voiceSearch
  const displayVoiceSearch = value.voiceSearch.value;
  // Handle screen sizing & responsive
  const { laptop, laptopXS, tablet, mobile } = useScreenSize();

  return (
    <div className="container container-mobile">
      <div className="container__header-top">
        <div className="container__header-top__logo">
          <Link
            to="/"
            onClick={() => {
              setQueryState('');
              federated(false);
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Algolia-logo.svg/1200px-Algolia-logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        {/* For a search box Simple center */}

        <div className="container__header-top__title">
          <h1>Demo BoilerPlate</h1>
        </div>
      </div>
      {(tablet || mobile) && (
        <div className="searchbox-container searchbox-container-mobile">
          <CustomSearchBoxSimple />
          {displayVoiceSearch && <CustomVoiceSearchComponent />}
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
