import { hitsConfig } from '../../config/hits';
import { Highlight } from 'react-instantsearch-dom';
import { useRecoilValue } from 'recoil';
import { Heart } from '../../assets/svg/SvgIndex';

const RelatedItem = ({ item }) => {
  // Get hit attribute from config file
  const { price, image, category, productName } = useRecoilValue(hitsConfig);
  return (
    <div className="relatedItem">
      <div className="relatedItem__img">
        <img src={item[image]} alt={item[category]} />
        <div className="relatedItem__img__heart">
          <Heart />
        </div>
      </div>
      <div className="relatedItem__infos">
        <h3>
          <Highlight hit={item} attribute={productName} />
        </h3>
        <div className="relatedItem__infos__down">
          <p className="relatedItem__infos__down__price">{item[price]}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedItem;
