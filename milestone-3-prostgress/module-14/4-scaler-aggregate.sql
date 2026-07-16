-- Scaler Function (Function that will return one value for each row)
select upper(first_name) from employee;
select concat(first_name,last_name) from employee;


-- Aggregate Function(Function return one value only)
select max(age) from employee;
select count(*) from employee;
select avg(age) from employee;