var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require("graphql")


const friendsData = [
    {
        "id": "1",
        "title": "ms",
        "firstName": "Sara",
        "lastName": "Andersen",
        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        "id": "2",
        "title": "miss",
        "firstName": "Edita",
        "lastName": "Vestering",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "3",
        "title": "ms",
        "firstName": "Adina",
        "lastName": "Barbosa",
        "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
    },
    {
        "id": "4",
        "title": "mr",
        "firstName": "Roberto",
        "lastName": "Vega",
        "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
        "id": "5",
        "title": "mr",
        "firstName": "Rudi",
        "lastName": "Droste",
        "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
    },
    {
        "id": "6",
        "title": "mrs",
        "firstName": "Carolina",
        "lastName": "Lima",
        "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d0",
        "title": "mr",
        "firstName": "Emre",
        "lastName": "Asikoglu",
        "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d1",
        "title": "mr",
        "firstName": "Kent",
        "lastName": "Brewer",
        "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d2",
        "title": "mr",
        "firstName": "Evan",
        "lastName": "Carlson",
        "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d3",
        "title": "mr",
        "firstName": "Friedrich-Karl",
        "lastName": "Brand",
        "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
    }
]

const userData = [{
    username: 'nikhil101',
    name: "Nikhil",
    friendList: ['1', '2']
},
{
    username: 'test',
    name: "Test",
    friendList: ['3', '4']
}
]


const FriendType = new GraphQLObjectType({
    name: "Friend",
    description: "This is the Friend Data Type",
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        picture: { type: GraphQLString },
        fullName:{
            type:GraphQLString,
            resolve:({title, firstName, lastName})=>`${title} ${firstName} ${lastName}`
        }
    }
});

const UserType = new GraphQLObjectType({
    name: "Users",
    description: "This is the User Data Type",
    fields: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        friendList: { type: GraphQLList(GraphQLString) },
        friends:{
            type:GraphQLList(FriendType),
            resolve:(parent)=>parent.friendList?.map(id=>friendsData.find(friend=>friend.id===id))
        }
    }
});

const query = new GraphQLObjectType({
    name: "Query",
    description: "This is the Query Object",
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'Hello world!!!'
        },
        users: {
            type: GraphQLList(UserType),
            description: "Returns all the users",
            resolve: () => userData
        },
        user: {
            type: UserType,
            description: "Returns a user by username",
            args:{
                username:{type: GraphQLNonNull(GraphQLString)}
            },
            address:{
                // parent = user
                resolve:(parent)=>parent.address
            },
            resolve: (parent,args) => userData.find(user=>user.username===args.username)
        }
    }
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    description: "This is the Mutation Object",
    fields: {
        signup:{
            type:UserType,
            description:"Create a new User",
            args:{
                username:{type: GraphQLNonNull(GraphQLString)},
                name:{type: GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent,args)=>{
                const user = {...args,friendList:[]};
                userData.push(user);
                return user;
            }
        },
        addFriend:{
            type:FriendType,
            description:"Add a new Friend",
            args:{
                username:{type:GraphQLNonNull(GraphQLString)},
                id:{type:GraphQLNonNull(GraphQLString)}
            },
            resolve:(parent,args)=>{
                const {username,id} = args;
                const user = userData.find(usr=>usr.username===username);
                user.friendList.push(id);
                const friend = friendsData.find(usr=>usr.id===id);
                return friend;
            }
            
        }
    }
}); 

const schema = new GraphQLSchema({
    query,
    mutation
})

var app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")