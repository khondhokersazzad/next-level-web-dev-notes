-- Limit & Offset

select * from employee limit 9 offset 7;

-- For pagination setup
select * from employee limit 9 offset 7 * 0;
select * from employee limit 9 offset 7 * 1;
select * from employee limit 9 offset 7 * 2;