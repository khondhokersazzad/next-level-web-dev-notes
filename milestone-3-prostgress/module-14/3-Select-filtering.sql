
-- Select all data from Table
select first_name,age from employee;

-- Column alias (When want to actual coloumn to user but not to actuall change it)
select first_name as "First Name", age as "Age" from employee;

-- Sorting values
select
  first_name,
  age,
  department 
from employee
order by department desc;

-- Distinct (Unique value finding)
select age distinct from employee;

-- Filtering (Finding specific data over fulfilling criteria)
select * from employee
  where department = 'HR'

-- And or Operator
select  * from employee
  where department = 'HR' or department = 'IT'

Select * from employee
  where (age > 25) and (department = 'IT')

-- Between
select first_name, department,age from employee
  where age between 25 and 29;

-- In operator 
select * from employee
  where department in ('IT','HR','Operations')

-- Like operator (Search Operatot)
select * from employee
--  where email like 'ay%'
  where email like 'a___'

-- Ilike Operator(same as Search but it is not case sensitive)
select * from employee
  where email like '%A'

-- Not operator 
select * from employee
  where email not like 'a%'



