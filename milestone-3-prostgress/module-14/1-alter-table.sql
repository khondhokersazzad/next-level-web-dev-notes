-- Alter Table
create table teachers (id serial, username varchar(30), age smallint)
-- Alterr Table name 
alter table teachers
rename to teacher;

-- Alter Table - Add a column
alter table teacher
add gender varchar(10);

-- Drop A Collumn
alter table teacher
drop column gender;

-- Renaming a Collumn
alter table teacher
rename column username to user_name;


--Modify constraints
alter table teacher
alter column user_name type varchar(45);

--Add constraits
alter table teacher
alter column user_name set not null;

--Remove Constraits
alter table teacher
alter column user_name drop not null;


--Add Constant table Value
alter table teacher
alter column email
set default 'test@mail.com'

-- drop constrant table  value
alter table teacher
alter column email
drop default;

--Add extra table level constraints
alter table teacher
  add constraint unique_employee_table_email unique(email)

alter table teacher
  add constraint pk_update primary key(id)

--Droping extra table level constraints
alter table teacher
  drop constraint unique_employee_table_email;
