## ORM Sequelize script

### Table product
```bash
npx sequelize-cli model:generate --name product --attributes "name:string, type:string, brand:string, price:integer, stock:integer, image:string"
```

### Table customers
```bash
npx sequelize-cli model:generate --name customer --attributes "name:string, address:string, phone:integer"
```

### Table payments
```bash
npx sequelize-cli model:generate --name payment --attributes "quantity:integer, total:integer, paymentMethod:integer, idCustomer:integer, idProduct:integer"
```