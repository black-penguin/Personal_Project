drop table if exists users;

create table users(id serial primary key, auth0id text, name text, email text);

insert into public.users(auth0ID, name, email)values (23423433, 'test', 'email@domain.com');
