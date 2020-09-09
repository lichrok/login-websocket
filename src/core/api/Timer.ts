import Api from './Api';

export const SubscribeTimer = () => Api('/subscribe', {method: 'GET'});
