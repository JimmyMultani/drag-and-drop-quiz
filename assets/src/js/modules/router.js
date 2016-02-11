import $ from 'jquery';
window.jQuery = $;

import common from './common';
import controllerHome from '../pages/home';

export default function() {
    console.log('router');
    const CONTROLLER = $('body').data('controller');
    // console.log(typeof controllerLogin);
    // if(CONTROLLER !== '' && typeof ('controller_'+CONTROLLER) === 'function') {
    //   CONTROLLER();
    // }

    common();

    if(CONTROLLER === 'home' && typeof controllerHome === 'function') {
        controllerHome();
    }
}
