# Tutorial7

* *Date Created*: 25 Mar 2023
* *Last Modification Date*: 25 Mar 2023
* *Git URL*: <https://git.cs.dal.ca/ngadhiya/csci-5709-tutorials.git>
* *Render deployed URL*: <https://ngadhiya-csci-5709-tutorial7.onrender.com>


### Path URLs
* (Note: pass proper parameters and :id)
* *Get all users URL*: <https://ngadhiya-csci-5709-tutorial7.onrender.com/users>
* *Get specific user details URL*: <https://ngadhiya-csci-5709-tutorial7.onrender.com/user/:id>
* *Post add user URL*: <https://ngadhiya-csci-5709-tutorial7.onrender.com/add>
* *Put udpdate specific user URL*: <https://ngadhiya-csci-5709-tutorial7.onrender.com/update/:id>
* *Delete udpdate specific user URL*: <https://ngadhiya-csci-5709-tutorial7.onrender.com/delete/:id>

## Author

- Tushar Arora ts953716@dal.ca
- Shobhit Arora sh931365@dal.ca
- Yogesh Kumar yg727492@dal.ca
- Nishith Vithaldas Gadhiya nishith.gadhiya@dal.ca
- Rituraj Kadamati rituraj.kadamati@dal.ca

### Tutorial4 run steps using cmd in local

```
    git clone https://git.cs.dal.ca/ngadhiya/csci-5709-tutorials.git
```
```
    cd csci-5709-tutorials/Tutorial7
```
```
    npm install
```
```
    node index.js
```

## Sources Used

### 1: Tutorial5/route.js.js

*Lines 3,4,79*

```

The code above was created by adapting the code in [jeanlescure](https://www.npmjs.com/package/short-unique-id) as shown below: 


```
*reference code:*
  ```  
const uid = new ShortUniqueId({ length: 10 });
uid(); // p0ZoB1FwH6
``` 
    
*mycode:*
``` 
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 10 });
const input = req.body;
input["id"] = uid();
``` 
- <!---How---> The code in [jeanlescure](https://www.npmjs.com/package/short-unique-id)was implemented by...
``` jeanlescure made a npm library to generate short uuid```

- <!---Why---> [jeanlescure](https://www.npmjs.com/package/short-unique-id)'s Code was used because...
``` I needed uuid which is short in length like 10 digit when new user is added.``` 
  
- <!---How---> [jeanlescure](https://www.npmjs.com/package/short-unique-id)'s Code was modified by...
``` I used inside json object to to create new object and pushed to json object array``` 


## Other references
1. https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View