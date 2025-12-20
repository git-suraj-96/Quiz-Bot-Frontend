import '../Styles/Loader.css';
import {Spinner} from 'flowbite-react';

function Loader({refrence}){
    return(
        <div ref={refrence} className="loader-loader">
            <div className='loader-box'>
                <div className="loader"></div>
            </div>
        </div>
    );
}

export default Loader;