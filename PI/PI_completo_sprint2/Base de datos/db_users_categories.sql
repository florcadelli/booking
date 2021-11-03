create database trabajofinalintegrador;

use trabajofinalintegrador;

create table categories (id int auto_increment primary key, title varchar(255), description varchar (255), urlimg varchar(255));

create table users (id int auto_increment primary key, name varchar(255), last_name varchar(255), mail varchar(255), password varchar(255));