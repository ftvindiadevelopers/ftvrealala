//* SQL  - Structured Query Language

// DBMS Helps as store trillons of data using SQL its also handles the security. DBMS also works with softwears

// CRUD(Create, Read, Update, Delete)

//* Two Types of Database

// 1) Relational database (SQL): Organize data into one or more tables. Each data stored in column and row. And a unique key for identifies each row.

// 2) Non-Relational database (NoSQL): Organize data is anything but a traditional table (Key value store, Document(Json, XML, etc), Graphs). Firebase, MongoDB, DynamoDB

//* Database Queries

// Queries are requests made to the database management to get a specific information.

//Basic Datatypes in SQL
//  - INT
//  - DECIMAL
//  - VARCHAR
//  - BLOB(Large Data)
//  - DATE
//  - TIMESTAMP

//Create Tables
// CREATE TABLE students(
//     student_id INT PRIMARY KEY,
//     name VARCHAR(40),
//     major VARCHAR(40)
// );

// DESCRIBE student; - Showing table datatype and strcuture
// DROP TABLE student - Delete the table;
// ALTER TABLE student ADD gpa DECIMAL; - Adding new fileds
// ALTER TABLE student DROP COLUMN gpa; - Delete specific filed from table

//Inserting data into table

// INSERT INTO student VALUES(1, 'Jack', 'Biology');
// INSERT INTO student VALUES(2, 'Kate', 'Sociology');
// INSERT INTO student(student_id, name) VALUES(3, 'Claire');
// INSERT INTO student VALUES(4, 'Jack', 'Biology');
// INSERT INTO student VALUES(5, 'Mike', 'Computer Science');

// Constraints for Creating Table

// CREATE TABLE student (
//  student_id INT PRIMARY KEY AUTO_INCREMENT,
//  name VARCHAR(40) NOT NULL,
//  major VARCHAR(40) DEFAULT 'undecided',
// );


//Updating Database

// UPDATE student SET name = 'Johnny' WHERE student_id = 4;
// UPDATE students SET major = "Bio" WHERE major = "Biology";
// UPDATE student SET major = 'Biosociology' WHERE major = 'Biology' OR major = 'sociology'

// OR checking the both condition need to fulfil any one || AND checking the both condition

// Deleting Datbase
// DELETE FROM students WHERE student_id = 5;
// DELETE FROM students WHERE name = "Nikhil" AND major ="Science";

// Basic Select Queries

// SELECT * FROM student;
// SELECT student.name, student.major FROM student;
// SELECT name,major FROM students ORDER BY name; - Get the order by name with alphabetical order
// SELECT name,major FROM students ORDER BY name DESC; the data getting by desending order defualt by ASC
// SELECT name,major FROM students ORDER BY name DESC LIMIT 2; - We use Limit the limit our data
// <, >, <>, AND, OR, =, >=,<= 
// SELECT * FROM students WHERE major IN ('Pika'); - In this query the data we need from the list.
