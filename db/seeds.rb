# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create({username: 'reed', email: 'reed.gaines@gmail.com', password: 'password',
            zip: 11221, age: 26, gender: "man", orientation: "straight", session_token: ""})
User.create({username: 'holliday', email: 'doc@holliday.com', password: 'password',
            zip: 10027, age: 20, gender: "man", orientation: "gay", session_token: ""})
User.create({username: 'Ikey', email: 'ike@clanton.com', password: 'password',
            zip: 10166, age: 39, gender: "man", orientation: "straight", session_token: ""})
User.create({username: 'virgille', email: 'virgil@earp.com', password: 'password',
            zip: 10708, age: 45, gender: "man", orientation: "queer", session_token: ""})
User.create({username: 'annie-OK', email: 'annie@oakley.com', password: 'password',
            zip: 11549, age: 29, gender: "woman", orientation: "gay", session_token: ""})
User.create({username: 'cal4miteej', email: 'jane@calamity.com', password: 'password',
            zip: 11366, age: 19, gender: "woman", orientation: "straight", session_token: ""})
User.create({username: 'belle~', email: 'belle@starr.com', password: 'password',
            zip: 10453, age: 33, gender: "woman", orientation: "queer", session_token: ""})
User.create({username: 'pokerino', email: 'alice@poker.com', password: 'password',
            zip: 11433, age: 50, gender: "woman", orientation: "straight", session_token: ""})
