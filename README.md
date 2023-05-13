# 🧨 BETA | FRESHNESS  🎣
## <place on img>
### [Client 💻](https://github.com/Nikita-Ma/freshness/tree/dev/client) | [Server 💾](https://github.com/Nikita-Ma/freshness/tree/dev/server) | [Design 🔮](https://www.figma.com/file/cHbeanptjFKHGKZzJBv1Ko/WEB-PA-PROJECT?node-id=0%3A1&t=c3zXtzdC05NSsEbh-1)

# Client (v.0.1.5) 


## DOCS

### Install

#### Install project with git

`git clone https://github.com/Nikita-Ma/freshness.git
`

#### Enter on folder client

`cd .\client\ `

#### install dependencies

`npm install`

#### run client project

`npm run start`

#### [NOTES] client started on 3000 PORT

`PORT 3000`

### Config

### Scheme

```
-src // project foolder
     * actions // save all actions
     * reducers // save all reducer
     * screens // layout page
     * components // components page
     * helpers // helpers funcitions
```

### Developed

- [Nik](https://github.com/Nikita-Ma)
- [Honda](https://github.com/hondocha)

---


# Backend (v.0.1.20)

## DOCS

### Install

#### Install project with git

`git clone https://github.com/Nikita-Ma/freshness.git  
`

#### Enter on folder server

`cd .\server\ `

#### install dependencies

`npm install`

#### run server project

`npm run server`

#### [NOTES] `server` started on 5000 PORT `pgsql` started on 5432 _(watch .env file)_

`PORT 5000`

### Config

### Scheme

### PostgreSQL tables

- **user_data**

|u_name|u_password  |u_data   |u_id  |
|--|--|--|--|
| [PK] char| [PK] text |[PK] bigInt|[PK] bigInt|


- **product_data**

|p_name|p_id  | p_count   |p_date  |p_desc  |p_img  | last_updated | 
|--|--|--|--|--|--|--|
| [PK] text| [PK] bigInt |[PK] bigInt|[PK] bigInt|[PK] text| [PK] text | [PK] text | 

### Environment Navigation


-**/src**
<br>
**-------/config**
<br>
**------/controllers**
<br>
**------/middleware**
<br>
**------/routes**
<br>
**------/untils**

### Developed

- Nik

---

# Design  (v.0.2.0)

## DOCS

###  Install

### Config

### Scheme


### Designed
* Nik
* Honda
---
