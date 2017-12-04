insert into user (username, password, role) values ('user', 'u', 'USER');
insert into user (username, password, role) values ('admin', 'a','ADMIN');

insert into issue (user_id, description, location, status, timestamp) values (1, 'a', 'a', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (1, 'b', 'b', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (1, 'c', 'c', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (2, 'd', 'd', 'ADDED', current_timestamp);
insert into issue (user_id, description, location, status, timestamp) values (2, 'e', 'e', 'ADDED', current_timestamp);
