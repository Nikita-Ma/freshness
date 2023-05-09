
# 🧨 BETA | FRESHNESS 🎣

![LAST COMMIT](https://img.shields.io/github/last-commit/Nikita-Ma/freshness/dev?style=for-the-badge)  
![LICENSE](https://img.shields.io/npm/l/freshness?style=for-the-badge)

![ISSUES](https://img.shields.io/github/issues/NIkita-Ma/freshness?style=for-the-badge)  
![ISSUES CLOSED](https://img.shields.io/github/issues-closed/Nikita-Ma/freshness?style=for-the-badge)

![GitHub pull requests](https://img.shields.io/github/issues-pr/Nikita-Ma/freshness?style=for-the-badge)  
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/Nikita-Ma/freshness?style=for-the-badge)

## <place on img>

### [Client 💻](https://github.com/Nikita-Ma/freshness/tree/dev/client) | [Server 💾](https://github.com/Nikita-Ma/freshness/tree/dev/server) | [Design 🔮](https://www.figma.com/file/cHbeanptjFKHGKZzJBv1Ko/WEB-PA-PROJECT?node-id=0%3A1&t=c3zXtzdC05NSsEbh-1)

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