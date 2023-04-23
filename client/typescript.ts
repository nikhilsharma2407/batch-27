// let balance:number = 100;

// let name:string = 'test';

// name = 101;

// let isLoggedIn:boolean|null = null;
// isLoggedIn = true

// let id: number | string;

// id = 101;
// id = '101';

// let unknownDataType:any = "abcd";
// unknownDataType = null;
// unknownDataType = 123


// let transActionAmounts:number[] = [1,2,3,'4',false,null];


// 



interface IState {
    friendList: string[];
    name: string
    username: string
    message: string
    success: boolean
    loading: boolean | null
    isLoggedIn: boolean | null
    usersLoading?: boolean
}

const initialState: IState = {
    friendList: [],
    name: '',
    username: '',
    message: '',
    success: false,
    loading: null,
    isLoggedIn: null,
}

//  const fn = (arg1:<type>,arg2:<type>,...argN:<type>):<return Type of function>

const sum = (num1: number, num2: number): number => {
    console.log(num1 + num2)
    return num1 + num2;
}

// create a function that
// add two number
//  add two strings

const add = <T>(arg1: T, arg2: T): T => {
    return <any>arg1 + arg2;
}

add(1, 2)
add('1', '2')
add<string>(1, '2');
add('1', 2);


// Generics allow us to have variable dataTypes


// Enum
// const ENDPOINTS = {
//     LOGIN:'user/login',
//     SIGNUP:'user/signup',
//     ADD_FRIEND:'user/addFriend',
//     REMOVE_FRIEND:'user/removeFriend',
//     LOGOUT:'user/logout',
// }
enum ENDPOINTS {
    LOGIN='user/login',
    SIGNUP='user/signup',
    ADD_FRIEND='user/addFriend',
    REMOVE_FRIEND='user/removeFriend',
    LOGOUT='user/logout'
}




export { }
