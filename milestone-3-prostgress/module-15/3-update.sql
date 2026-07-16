-- Updating database
select email from employee;
update employee set email = 'default@mail.com' where email is null;


select * from employee
  order by emp_id asc;

-- update multiple cell at same row
update employee
set first_name = 'Rahima', age = 29
where emp_id = 1;

-- update multiple cell at diff rows
update employee
set  last_name = 'Chung'
where emp_id in (5,7)





