import { Place } from "../types/Place";

const usePlace = () => {
  const places: Place[] = [
    {
      placeId: 101011,
      name: "Boat in Black Rock",
      description:
        "Take the opportunity to live on a boat in Tobago. The boat is at anchor in Mount Irvine, the south west coast of Tobago. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc:
        "https://a0.muscache.com/im/pictures/6e5e7bd7-bfb5-44ca-a9c2-40f9b66622e7.jpg?im_w=1200",
      price: 112,
    },
    {
      placeId: 11111,
      name: "Chalet in Santa Teresa",
      description:
        "Chalet sunset, 1 queen bed, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc:
        "https://a0.muscache.com/im/pictures/0ae781ec-58f9-4bae-9c57-db428764c186.jpg?im_w=720",
      price: 123,
    },
    {
      placeId: 22222,
      name: "Home in Praia da Costa",
      description:
        "On the beach, sea view, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc:
        "https://a0.muscache.com/im/pictures/610e5931-c4fc-4d02-b8db-ea6defad736c.jpg?im_w=720",
      price: 79,
    },
    {
      placeId: 33333,
      name: "Cottage in Ibiraçu",
      description:
        "Cottage with pool, next to the Giant Buddha, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc:
        "https://a0.muscache.com/im/pictures/5b36790f-4832-48fe-9a33-f2332581054e.jpg?im_w=720",
      price: 237,
    },
    {
      placeId: 44444,
      name: "House in Punta Flamenco",
      description:
        "Our estate has private access to Flamenco Beach so feel free to drive down to our PRIVATE BEACH CLUB, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc:
        "https://a0.muscache.com/im/pictures/miso/Hosting-49435482/original/0fe2fd29-9bb6-43c1-8162-6cf71caed063.jpeg?im_w=1200",
      price: 405,
    },
    {
      placeId: 55555,
      name: "Room in Barcelona",
      description:
        "We have a beautiful free bedroom in our hippie chic house in the heart of the city. It has a double bed where you will wake up with the early morning light which comes from the balcony. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgSrc:
        "https://a0.muscache.com/im/pictures/miso/Hosting-599186284625868619/original/2e9da650-5e89-4569-bf40-b27987cbad5a.jpeg?im_w=1200",
      price: 405,
    },
  ];

  const getPlaces = () => places;

  const getPlace = (placeId: number): Place | undefined => {
    const result: Place | undefined = places.find((item: Place) => {
      return item.placeId === placeId;
    });

    return result;
  };

  return {
    getPlace,
    getPlaces,
  };
};

export default usePlace;
