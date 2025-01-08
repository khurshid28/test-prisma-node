


<img src="https://devrecipes.net/wp-content/uploads/2024/12/dockerizing-node-postgres-prisma.webp" alt="" height="300px">

## when using localhost
<code>DATABASE_URL="postgresql://user:password@localhost:5432/db_name"</code>



## when using docker host
<code>DATABASE_URL="postgresql://user:password@database:5432/db_name"</code>






## when changed prisma model,
### first step:
<code>npx prisma migrate dev --name updated </code>

### second step:
<code>docker-compose up --build</code>




