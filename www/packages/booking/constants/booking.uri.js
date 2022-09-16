const BASE_ROUTE = '/bookings';

const CF_ROUTINGS_BOOKING = {
	BOOKINGS: `${BASE_ROUTE}`,
	LIST_BOOKING_ADMIN: `${BASE_ROUTE}/list/admin`,
	BOOKINGS_BOOKINGID: `${BASE_ROUTE}/:bookingID`,
	LIST_MY_BOOKINGS: `${BASE_ROUTE}/list/my-booking`,
	LIST_CUSTOMER_BOOKING_MY_CAR: `${BASE_ROUTE}/list/customer-booking-my-car`,
	ACCEPT_BOOKINGS: `${BASE_ROUTE}/action/accept-booking`,
	ACCEPT_PAYING: `${BASE_ROUTE}/action/accept-paying`,
	CANCEL_BOOKINGS: `${BASE_ROUTE}/action/cancel-booking`,
	PAYED_BOOKINGS: `${BASE_ROUTE}/action/pay-booking`,

	ORIGIN_APP: BASE_ROUTE
}

exports.CF_ROUTINGS_BOOKING = CF_ROUTINGS_BOOKING;
