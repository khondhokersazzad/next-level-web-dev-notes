-- Inner Join (Only keep data which  match)

select playerid, playername, teamname from players
inner join teams on players.teamid = teams.teamid


-- Left Join 
-- (Added all data from foreign table first then put null data if Primary table has no value )
select playername, teamname from players
  left join teams on players.teamid = teams.teamid; 

-- Right Join
-- Add all data from Primary table first
select playername, teamname from players
  right join teams on players.teamid = teams.teamid;