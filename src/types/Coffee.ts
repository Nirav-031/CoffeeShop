export interface CoffeePrice {
    size: 'S' | 'M' | 'L';
    price: string; // or number, if you prefer
    currency: string;
  }
  
  export interface CoffeeItem {
    id: string;
    name: string;
    description: string;
    roasted: string;
    imagelink_square: any; // can be ImageSourcePropType from react-native
    imagelink_portrait: any;
    ingredients: string;
    special_ingredient: string;
    prices: CoffeePrice[];
    average_rating: number;
    ratings_count: string;
    favourite: boolean;
    type: string;
    index: number;
  }
  