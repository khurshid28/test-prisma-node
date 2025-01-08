


<img src="https://media.licdn.com/dms/image/v2/D4E12AQGNGAGtiYivsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1703380012682?e=2147483647&v=beta&t=x3PZkRlmOvr52klWcFYYFmdvjAZZlCxraKNFaVEWLjE" alt="" height="100px">

## when using localhost
<code>DATABASE_URL="postgresql://user:password@localhost:5432/mydb"</code>



## when using docker host
<code>DATABASE_URL="postgresql://user:password@database:5432/mydb"</code>






## when changed prisma model,
### first step:
<code>npx prisma migrate dev --name updated </code>

### second step:
<code>docker-compose up --build</code>




