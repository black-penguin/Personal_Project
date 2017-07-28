drop table if exists users, pictures, sizeChart, shoppingCart;

create table users(ID serial primary key, auth0ID text, name text, email text);

insert into users(auth0ID, name, email) values (23423433, 'test', 'email@domain.com');

create table pictures(ID serial primary key, url text, alt text, price int);

insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide38.jpg', 'morning beach', 30);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide32.jpg', 'boat checking station', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide33.jpg', 'sinking trees', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide34.jpg', 'boat dock', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide35.jpg', 'morning lake', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide37.jpg', 'morning lake w/beach', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide39.jpg', 'sinking trees-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide40.jpg', 'morning lake w/beach-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide41.jpg', 'one way sign', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide28.jpg', 'evening lake w/beach', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide21.jpg', 'evening lake w/beach-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide29.jpg', 'evening lake w/beach-3', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide30.jpg', 'evening lake', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide31.jpg', 'evening lake-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide42.jpg', 'sunset', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide2.jpg', 'cave', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide43.jpg', 'houghton lake sunset', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide44.jpg', 'houghton lake sunset-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide45.jpg', 'lake michigan', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide46.jpg', 'lake michigan-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide1.jpg', 'provo canyon fall', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide47.jpg', 'grand Canyon', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide3.jpg', 'mountain sunset', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide4.jpg', 'mountain', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide6.jpg', 'stream', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide7.jpg', 'stream-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide8.jpg', 'stream-3', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide9.jpg', 'pond w/ducks', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide10.jpg', 'pond w/baby ducks', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide15.jpg', 'old wagon wheel against fence', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide5.jpg', 'flowers', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide11.jpg', 'rose', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide12.jpg', 'rose-1', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide13.jpg', 'rose-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide14.jpg', 'rose-3', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide16.jpg', 'yellow tulip', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide17.jpg', 'rose-4', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide18.jpg', 'rose-5', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide19.jpg', 'rose-6', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide20.jpg', 'rosees', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide22.jpg', 'rose-7', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide23.jpg', 'rose-8', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide24.jpg', 'rose-9', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide25.jpg', 'butterfly', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide26.jpg', 'butterfly-2', 25);
insert into pictures(url, alt, price) values ('https://amidstthemountains.com/jpg/Slide27.jpg', 'butterfly-3', 25);

create table sizeChart(ID serial primary key, type text, size text, price int);

insert into sizeChart(type, size, price) values ('CS', '12 x 16', 30);
insert into sizeChart(type, size, price) values ('CS', '14 x 14', 30);
insert into sizeChart(type, size, price) values ('CS', '16 x 20', 40);
insert into sizeChart(type, size, price) values ('CS', '18 x 24', 50);
insert into sizeChart(type, size, price) values ('CS', '20 x 30', 60);
insert into sizeChart(type, size, price) values ('CS', '24 x 32', 65);
insert into sizeChart(type, size, price) values ('CS', '16 x 48', 65);
insert into sizeChart(type, size, price) values ('CS', '30 x 40', 145);
insert into sizeChart(type, size, price) values ('CS', '40 x 60', 285);

create table shoppingCart(id serial primary key, auth0ID text, picID int, SizeID int);
