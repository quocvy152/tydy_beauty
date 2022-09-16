const BASE_ROUTE = '/cars';

const CF_ROUTINGS_CAR = {
	CARS: `${BASE_ROUTE}`,
	REGISTER_CARS: `${BASE_ROUTE}/register`,
	UPDATE_CARS: `${BASE_ROUTE}/update/:carID`,
	CARS_CARID: `${BASE_ROUTE}/:carID`,
	GET_LIST_MY_CARS: `${BASE_ROUTE}/list/my-cars`,

    ORIGIN_APP: BASE_ROUTE
}

exports.CF_ROUTINGS_CAR = CF_ROUTINGS_CAR;
