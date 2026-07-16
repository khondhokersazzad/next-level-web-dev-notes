-- Group by (Filtering group data)
select department,count(*) from employee
group by department;


---------Group by with Having Condition

select department, avg(age) from employee
group by department having avg(age) > 30