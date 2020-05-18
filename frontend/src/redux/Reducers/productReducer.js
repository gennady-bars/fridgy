
import { LIST_LOADING, LIST_LOADED, LIST_ERROR, LOAD_ITEMS, LOAD_LABEL ,  DELETE_ITEM} from '../Actions/action-types';


const initialState = {
  loading: false,
  items: false,
  listError: false,
  itemsApi: "",
  searchTags: ['beef', 'egg', 'milk', 'bisquits', 'potato', 'mashrooms'],
  label: "",
};

export function productReducer (state = initialState, action) {
  switch (action.type) {
    case LIST_LOADING:
      return {
        ...state,
        loading: true,
        items: false,
        listError: false,
      };
    case LIST_LOADED:
      return {
        ...state,
        loading: false,
        items: action.payload,
        listError: false,
      };
    case LIST_ERROR:
      return {
        ...state,
        loading: false,
        items: false,
        listError: action.payload,
      };
    case LOAD_ITEMS: 
    const newItem = action.payload;
    return {
      ...state,
      itemsApi: [newItem]
    }

    case LOAD_LABEL:
      return {
        ...state,
        label: action.payload
      }

    case DELETE_ITEM: 

    // let cat
    // if(action.category === 'Meat'){
    //   cat = 'meat'
    // }else if(action.category === 'Dairy'){
    //   cat = 'dairy'
    // }else if(action.category === 'Fruit'){
    //   cat = 'fruit'
    // }
  
   
    // console.log('this is the category we want to edit', state.items[action.category])

    const  updatedArray = state.items[action.category].filter(result=> result._id !== action.elementID);
    
    return {
      ...state,
      items: {...state.items, [action.category]: updatedArray}
    }

    default:
      return state;
  }
};
