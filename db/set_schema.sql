drop table if exists users, pictures, sizeChart, shoppingCart, cartHistory;

create table users(ID serial primary key, auth0ID text, name text, email text);

insert into users(auth0ID, name, email) values (23423433, 'test', 'email@domain.com');

create table pictures(ID serial primary key, url text, alt text, picPrice int);

insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/jpg/Slide38.jpg', 'morning beach', 30);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/jpg/Slide32.jpg', 'boat checking station', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/jpg/Slide33.jpg', 'sinking trees', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide34.jpg', 'boat dock', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide35.jpg', 'morning lake', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide37.jpg', 'morning lake w/beach', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide39.jpg', 'sinking trees-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide40.jpg', 'morning lake w/beach-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide41.jpg', 'one way sign', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide28.jpg', 'evening lake w/beach', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide21.jpg', 'evening lake w/beach-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide29.jpg', 'evening lake w/beach-3', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide30.jpg', 'evening lake', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide31.jpg', 'evening lake-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide42.jpg', 'sunset', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide2.jpg', 'cave', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide43.jpg', 'houghton lake sunset', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide44.jpg', 'houghton lake sunset-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide45.jpg', 'lake michigan', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide46.jpg', 'lake michigan-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide1.jpg', 'provo canyon fall', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide47.jpg', 'grand Canyon', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide3.jpg', 'mountain sunset', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide4.jpg', 'mountain', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide6.jpg', 'stream', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide7.jpg', 'stream-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide8.jpg', 'stream-3', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide9.jpg', 'pond w/ducks', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide10.jpg', 'pond w/baby ducks', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide15.jpg', 'old wagon wheel against fence', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide5.jpg', 'flowers', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide11.jpg', 'rose', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide12.jpg', 'rose-1', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide13.jpg', 'rose-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide14.jpg', 'rose-3', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide16.jpg', 'yellow tulip', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide17.jpg', 'rose-4', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide18.jpg', 'rose-5', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide19.jpg', 'rose-6', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide20.jpg', 'rosees', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide22.jpg', 'rose-7', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide23.jpg', 'rose-8', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide24.jpg', 'rose-9', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide25.jpg', 'butterfly', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide26.jpg', 'butterfly-2', 25);
insert into pictures(url, alt, picPrice) values ('https://amidstthemountains.com/static/media/Slide27.jpg', 'butterfly-3', 25);

create table sizeChart(ID serial primary key, type text, size text, price int);

insert into sizeChart(type, size, price) values ('Canvas single', '12 x 16', 30);
insert into sizeChart(type, size, price) values ('Canvas single', '14 x 14', 30);
insert into sizeChart(type, size, price) values ('Canvas single', '16 x 20', 40);
insert into sizeChart(type, size, price) values ('Canvas single', '18 x 24', 50);
insert into sizeChart(type, size, price) values ('Canvas single', '20 x 30', 60);
insert into sizeChart(type, size, price) values ('Canvas single', '24 x 32', 65);
insert into sizeChart(type, size, price) values ('Canvas single', '16 x 48', 65);
insert into sizeChart(type, size, price) values ('Canvas single', '30 x 40', 145);
insert into sizeChart(type, size, price) values ('Canvas single', '40 x 60', 285);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '56 x 36, 28x36, 14x36, 14x36', 225);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '56 x 36, 14x36, 28x36, 14x36', 225);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '56 x 36, 14x36, 14x36, 28x36', 225);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '48 x 36, 24x36, 12x36, 12x36', 205);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '48 x 36, 12x36, 24x36, 12x36', 205);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '48 x 36, 12x36, 12x36, 24x36', 205);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '48 x 30, 3-16x30', 170);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '20 x 60, 3-20x20', 140);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '60 x 20, 3-20x20', 140);
insert into sizeChart(type, size, price) values ('Canvas 3-panel', '36 x 27 3-12x27', 125);


create table shoppingCart(id serial primary key, auth0ID text, picID int, SizeID int);

create table cartHistory(id serial primary key, auth0ID text, picID int, SizeID int);
