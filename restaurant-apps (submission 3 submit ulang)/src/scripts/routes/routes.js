import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const route = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default route;
