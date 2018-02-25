# Star Wars Search Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Install

`Clone` the project and run `npm install` from the project directory. 

## Server

Run `ng serve` and navigate to `http://localhost:4200/`.

## Resume

In the construction of this application I used: Creation of service to consume the api, creation of pipe to filter the result of the search, input property and output property to make the communication between the components and the bootstrap to stylize.

## Searching and listing

To make the application work I have created a pipe that receives the value of the object returned from the api with the list of names and using the '.filter ()' method of javascript that returns an array with the results that match what was searched.