import React, {useEffect} from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide'
import Newnav from '../Newnav/Newnav'
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";

const Maincomp = () => {
  const { products } = useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch]);

  return (
<div>
<Newnav/>
    <div className='home_section'>
      <div className="banner_part">
        <Banner/>
        
      </div>
      
      <div className="slide_part">

        <div className="left_slide">
        <Slide products={products} />
        </div>

        <div className="right_slide">

        </div>
      </div>
      
      <Slide title ='Main' products={products}/>

    </div>
</div>
    
  )
}

export default Maincomp
