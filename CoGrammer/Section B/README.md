# **Section B**

### A Spring boot API for the management of competitive games and courses.
Here is the github link [https://github.com/NNYFC/bluetest]() and [~~bluelantern.herokuapp.com~~]() is the link to API hosted on heroku cloud.

- ### Environment
You can either use **Netbeans IDE** or **IntelliJ IDEA** make sure to have
- maven install
- jdk 8 install
- ### Configuration
You should modify the following in the application.properties file found in **Project>src>main>ressource**
- server.port = free_port_number_on_your_local
- spring.datasource.url = jdbc:mariadb://localhost:3306/database_name
- spring.datasource.username = your_DBMS_username
- spring.datasource.password = your_DBMS_password
- ### Execution
Run **mvn dependency:tree** follow by **mvn spring-boot:run** and press ENTER in the cli root folder of project. 
- To create an account make a post request with the body
`{
"nomutilisateur":"nwal",
"emailutilisateur":"nwal@gmail.com",
"pseudoutilisateur":"nnyfc",
"motdepasseutilisateur":"test123"
}`
- TO authenticate  make a post request with the body
`{
"emailutilisateur":"nwal@gmail.com",
"motdepasseutilisateur":"test123"
}`

