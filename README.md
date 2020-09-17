# Lambda VR Funding backend

## Hosted backend

### https://lambdabw-virtual-backend.herokuapp.com/

## Models

### Users

```
{
    id:             int         @AUTOINCREMENTS
    username:       String      *requried*  @Unique
    email:          String      *requried*  @Unique
    password:       String      *requried*
    user_role:      String      *requried*
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
    projectTitle:       String      *requried*
    projectStory:       String      *requried*
    goalFunding:        integer     *requried*
    userID:             integer     *requried*
    currentFunding:     integer     @default(0)
    projectHeroImage:   String
    dateCreated:        Timestamp
    dateupdated:        Timestamp
}
```

## Endpoints

### USERS

|  User Action  | METHOD | ROUTE             | SEND TO DB               | DB REPLIES     |
| :-----------: | ------ | ----------------- | ------------------------ | -------------- |
|    Create     | POST   | /users            | {usrnm,pswd,eml,usrRole} | {token, user } |
|     Read      | GET    | /users/:id        | n/a                      | {userInfo}     |
|     Login     | POST   | /users/auth/login | {email,password}         | {token, user } |
| AuthUser Edit | PUT    | /users/:id        | {usrnm,eml,frtNm,lstNm}  | {Success/Fail} |
| AuthUser Del  | DELETE | /users/:id        | n/a                      | {Success/Fail} |

### Projects

|   USER ACTION    | METHOD | ROUTE                   | SEND TO DB                  | DB REPLIES           |
| :--------------: | ------ | ----------------------- | --------------------------- | -------------------- |
|    Fetch All     | GET    | /projects               | n/a                         | [{all projects}...]  |
|  Get by UserID   | GET    | /projects/users/:userID | n/a                         | [{user projects}...] |
| Get by projectID | GET    | /projects/:projectID    | n/a                         | {project}            |
| AuthUser Create  | POST   | /projects               | {pjTtl,pjStry,glFund,usrID} | {project}            |
|  AuthUser Edit   | PUT    | /projects/:projectID    | {pjTtl,pjStry,glFund,usrID} | {project}            |
|   AuthUser DEL   | DELETE | /projects/:projectID    | n/a                         | {success/fail}       |

### Donations
