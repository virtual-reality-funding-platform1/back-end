# Lambda X backend

## Hosted backend

### https://lambdabw-virtual-backend.herokuapp.com/

## Models

### Users

```
{
    id:             int     @AUTOINCREMENTS
    username:       String  *requried*  @Unique
    email:          String  *requried*  @Unique
    password:       String  *requried*
    user_role:      String  *requried*
    dateCreated:    Timestamp
    dateupdated:    Timestamp
    avatarUrl:      String
    address_street: String
    address_city:   String
    address_state:  String
    address_zip:    String
    address_country:String
    firstName:      String
    lastName:       String
}
```

### Projects

```
{
    id:                 int         @AUTOINCREMENTS
    goalFundingDate:    Timestamp   *requried*
    dateCreated:        Timestamp
    dateupdated:        Timestamp
    projectTitle:		String		*requried*
    projectStory:		String		*requried*
    projectHeroImage:	String		*requried*
    goalFunding:		integer		*requried*
    currentFunding:		integer		*requried*
    userID:				integer		*requried*
}
```

## Routes

### USERS

| User Action | METHOD | ROUTE             | SEND TO DB                | DB REPLIES        |
| :---------: | ------ | ----------------- | ------------------------- | ----------------- |
|   Create    | POST   | /users            | {usrnm,pswd,eml,usrRole}  | {token, userInfo} |
|    Read     | GET    | /users/:id        | n/a                       | {userInfo}        |
|    Edit     | PUT    | /users/:id        | {usrnm,eml,frtNm,lstNm}   | {Success/Fail}    |
|   Delete    | DELETE | /users/:id        | n/a                       | {Success/Fail}    |
|    Login    | POST   | /users/auth/login | {username,password.. etc} | {token, userInfo} |

### Projects
