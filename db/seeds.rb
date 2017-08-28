# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create({username: 'sampleuser', email: 'reed.gaines@gmail.com', password: 'password',
            zip: '11221', age: 26, gender: "nonbinary", orientation: "queer", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503934735/x9asv5qt6nk4xclyhnjx.png"})
User.create({username: 'holliday', email: 'doc@holliday.com', password: 'password',
            zip: '10027', age: 20, gender: "man", orientation: "gay", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935017/ti9mm5vzj8ervzorbmxp.png"})
User.create({username: 'Ikey', email: 'ike@clanton.com', password: 'password',
            zip: '10166', age: 39, gender: "man", orientation: "straight", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935122/gdbpiwmfxyv7n8zvlhfd.png"})
User.create({username: 'virgille', email: 'virgil@earp.com', password: 'password',
            zip: '10708', age: 45, gender: "man", orientation: "queer", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935212/nm1nfnzvaohfopvvxe9j.png"})
User.create({username: 'annie-OK', email: 'annie@oakley.com', password: 'password',
            zip: '11549', age: 29, gender: "woman", orientation: "gay", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503934838/u3pyqon30sh1jfhjdhte.png"})
User.create({username: 'cal4miteej', email: 'jane@calamity.com', password: 'password',
            zip: '11366', age: 19, gender: "woman", orientation: "straight", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503934873/vrygfpi7pebfrdlynzqd.png"})
User.create({username: 'belle~', email: 'belle@starr.com', password: 'password',
            zip: '10453', age: 33, gender: "woman", orientation: "queer", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935303/eanphangrgg6jx5i7pev.png"})
User.create({username: 'pokerino', email: 'alice@poker.com', password: 'password',
            zip: '11433', age: 50, gender: "woman", orientation: "straight", session_token: "",
            summary: Faker::Simpsons.quote, doing_with_life: Faker::Simpsons.quote,
            good_at: Faker::Simpsons.quote, fav_media: Faker::Simpsons.quote,
            six_things: Faker::Simpsons.quote, thinking_about: Faker::Simpsons.quote,
            fri_night: Faker::Simpsons.quote, message_if: Faker::Simpsons.quote,
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935374/wzivxpvkvdfiwaaxtyqe.png"})
