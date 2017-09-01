# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create({username: 'sampleuser', email: 'reed.gaines@gmail.com', password: 'password',
            zip: '11221', age: 26, gender: "nonbinary", orientation: "queer",
            summary: 'A nice enough fella in the wrong part of town. Good with a six-shooter, better with a pool cue.',
            doing_with_life: 'Never thought much about it. Just a born drifter, I suppose.',
            good_at: "I'm a fair cook--you shoulda seen the baked beans I made last night. Deelish.",
            fav_media: "Big fan of Supernatural, the Harry Potter series, and Dashboard Confessional.",
            six_things: "1) My horse Wilford Brimley. 2) My trusty six-shooter. 3) The open road.
            4) A good whiskey. 5) My hat. 6) A warm fire.",
            thinking_about: "How best to wrangle myself a tasty varmint for dinner.",
            fri_night: "Playing poker at the saloon, or on the road under the stars.",
            message_if: "You aren't afraid of a little adventure.",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503934735/x9asv5qt6nk4xclyhnjx.png"})

User.create({username: 'holliday', email: 'doc@holliday.com', password: 'password',
            zip: '10027', age: 20, gender: "man", orientation: "gay",
            summary: "artist. thinker. dreamer. liver.", doing_with_life: "writing poetry. sitting in rooms. going outside.",
            good_at: "anything, given enough time, I'd like to think.",
            fav_media: "w.s. merwin. rear window. speed racer. jumanji.",
            six_things: 'all six are oxygen.', thinking_about: 'how best to get a chicken to the other side.',
            fri_night: "outside, on a night walk. that's how I spend most nights.",
            message_if: "you're looking for something a bit different--a bit off-kilter.",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935017/ti9mm5vzj8ervzorbmxp.png"})

User.create({username: 'Ikey', email: 'ike@clanton.com', password: 'password',
            zip: '10166', age: 39, gender: "man", orientation: "straight",
            summary: "A real-life bonafide entrepreneur, but most importantly, a nice guy looking for a sweetheart.",
            doing_with_life: "Growing my small business, 'Big Ike's Horseshoe Emporium.'",
            good_at: "Microsoft Excel, Adobe... wait, this isn't a job application! Well then... smooching.",
            fav_media: "Bojack Horseman, The Wolf of Wall Street, Call of Duty, The Power of Now",
            six_things: "One- My trusty wristwatch. Two- My asthma medication. Three- My mom.
            Four- My private jet. Five- Honestly? I just love milk. Two percent. Six: My phone LOL",
            thinking_about: "Huh. You know, I wasn't actually thinking about anything. And now I'm thinking about that.",
            fri_night: "Out at the club with my cronie--er, my friends, Olaf and Butch.",
            message_if: "You like to see how rich life can be!",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935122/gdbpiwmfxyv7n8zvlhfd.png"})

User.create({username: 'virgille', email: 'virgil@earp.com', password: 'password',
            zip: '10708', age: 45, gender: "man", orientation: "queer",
            summary: "Professional opera singer who, in my free time, enjoys riflery. A study in contrasts.",
            doing_with_life: "Just trying to make it, day by day.",
            good_at: "I'm very clean--give me a sink full of dishes and watch me amaze!",
            fav_media: "Vivaldi, Chopin, Death Grips, The Diving Bell and the Butterfly.",
            six_things: "Seven, actually- do, re mi fa so la ti xD",
            thinking_about: "Getting into jewelry-making--can anybody teach me?",
            fri_night: "I'm an early-to-bed type, definitely. Earplugs and all, the whole nine yards.",
            message_if: "You're ready to settle down--I'm not into hookups.",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935212/nm1nfnzvaohfopvvxe9j.png"})

User.create({username: 'annie-OK', email: 'annie@oakley.com', password: 'password',
            zip: '11549', age: 29, gender: "woman", orientation: "gay",
            summary: "The best dang shot in the world, hands down, bar none, many have tried, no one will beat me.",
            doing_with_life: "Shooting every target I can get my hands on. Doing no harm.",
            good_at: "Haven't I just told you?",
            fav_media: "Shows: Terrace House. Books: the Abhorsen Trilogy. Music: any and all hip-hop.",
            six_things: "The six shots in a freshly loaded revolver.",
            thinking_about: "How to be less intimidating in this profile... Just kidding, lol. If you want to be with me, you've gotta keep up.",
            fri_night: "Spending time with old friends.", message_if: "You aren't afraid.",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503934838/u3pyqon30sh1jfhjdhte.png"})

User.create({username: 'cal4miteej', email: 'jane@calamity.com', password: 'password',
            zip: '11366', age: 19, gender: "woman", orientation: "straight",
            summary: "A wild woman--no, really. I'm a park ranger. Hear me roar! lol.",
            doing_with_life: "Clearing paths and making trails. Literally and metaphorically. It's the only way!",
            good_at: "I give a mean back rub. I can also pickle just about anything.",
            fav_media: "Parks and Rec xD. No, but really--Parks and Rec.",
            six_things: "I, actually, have six siblings. So, I'd have to say those. Or my big brother would give me a wet willie.",
            thinking_about: "How can things be so bad for some and so good for others? Hard to get my head around :(",
            fri_night: "I'll probably be at a community event near you--I'm a big volunteer!",
            message_if: "You want to stand up straight and meet the world square.",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503934873/vrygfpi7pebfrdlynzqd.png"})

User.create({username: 'belle~', email: 'belle@starr.com', password: 'password',
            zip: '10453', age: 33, gender: "woman", orientation: "queer",
            summary: "you'll never catch me in a landlocked state",
            doing_with_life: "back with my parents, with a doctorate, waiting for the next thing",
            good_at: 'amusing myself by staring at others',
            fav_media: 'joanna newsom, gone home, grotesque by natsuo kirino, beetle bailey jk',
            six_things: 'grass leaves fabric water simple things',
            thinking_about: 'how this service exists how it continues to exist how it can be permitted to exist',
            fri_night: 'pupating', message_if: 'you like',
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935303/eanphangrgg6jx5i7pev.png"})

User.create({username: 'pokerino', email: 'alice@poker.com', password: 'password',
            zip: '11433', age: 50, gender: "woman", orientation: "straight",
            summary: '╮(￣～￣)╭', doing_with_life: 'Associate at a law firm',
            good_at: 'Hanging out alone (｡╯︵╰｡)...', fav_media: 'The Rocky series, Eminem, and all anime!!',
            six_things: 'My cats, my family, my job, my tv, air conditioning, and a comfy chair.',
            thinking_about: '(￣_￣)・・・   stuff...',
            fri_night: "Taking care of my sister's babies... they're so cute!!!!",
            message_if: "You want to try something new~",
            image_url: "http://res.cloudinary.com/reeedo/image/upload/v1503935374/wzivxpvkvdfiwaaxtyqe.png"})



Question.destroy_all

Question.create(question_text: 'How important are academic achievements to you?', answer_one_text: 'Very important.',
                answer_two_text: 'Somewhat important.', answer_three_text: 'Not at all important.')

Question.create(question_text: 'Once you take a moral position, can anything be said or done to change your mind?',
                answer_one_text: 'Yes, life is a big gray area anyway.', answer_two_text: 'No, some things are just right or wrong.',
                answer_three_text: 'Maybe. It depends on the issue.', answer_four_text: 'Maybe, but it would take a lot.')

Question.create(question_text: 'How do you feel about age differences in relationships?',
                answer_one_text: 'I prefer someone close to my own age.', answer_two_text: 'I prefer someone older.',
                answer_three_text: 'I prefer someone younger.', answer_four_text: "Doesn't matter to me.")

Question.create(question_text: 'Would you consider living with a partner who does not want any pets?',
                answer_one_text: 'Yes.', answer_two_text: 'No.')

Question.create(question_text: "Do you pick up after yourself? Be honest.",
                answer_one_text: 'Always.', answer_two_text: 'Yeah, when I have the time.',
                answer_three_text: 'No, I live in filth.', answer_four_text: 'No, someone else does it for me.')

Question.create(question_text: "You're up against a nearly impossible challenge. Your ideal partner...",
                answer_one_text: 'Pushes you hard to succeed.', answer_two_text: 'Reminds you to be realistic.',
                answer_three_text: 'Stands back, but comforts you if you fail.')

Question.create(question_text: 'Do you spend more money on clothes or food?', answer_one_text: 'Clothes.', answer_two_text: 'Food.')

Question.create(question_text: 'Which would you prefer your ideal match to be more into?',
                answer_one_text: 'Sports.', answer_two_text: 'Books.',
                answer_three_text: 'Music.', answer_four_text: 'Movies.')

Question.create(question_text: 'Regardless of your age, do you consider yourself to be an adult?', answer_one_text: 'Yes.', answer_two_text: 'No.')

Question.create(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?',
                answer_one_text: "Yes, it's very important.", answer_two_text: "Yes, it's somewhat important.",
                answer_three_text: "No, it's not very important.", answer_four_text: "No, it's not important at all.")

Answer.destroy_all

Answer.create(answer_num: 2, accepted_answers: '12', importance: 1,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 4, accepted_answers: '4', importance: 2,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 4, accepted_answers: '14', importance: 3,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 1,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 3, accepted_answers: '23', importance: 1,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'sampleuser').id)

Answer.create(answer_num: 4, accepted_answers: '4', importance: 3,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'sampleuser').id)



Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 1, accepted_answers: '13', importance: 1,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 2, accepted_answers: '12', importance: 2,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 3,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 3, accepted_answers: '3', importance: 3,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 2, accepted_answers: '12', importance: 1,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 3,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 3, accepted_answers: '23', importance: 1,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 1,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'holliday').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 2,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'holliday').id)



Answer.create(answer_num: 3, accepted_answers: '23', importance: 2,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 4, accepted_answers: '24', importance: 1,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 3,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 4, accepted_answers: '4', importance: 1,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 1, accepted_answers: '12', importance: 2,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 3,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'Ikey').id)

Answer.create(answer_num: 1, accepted_answers: '12', importance: 1,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'Ikey').id)



Answer.create(answer_num: 2, accepted_answers: '12', importance: 3,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 2, accepted_answers: '24', importance: 1,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 3, accepted_answers: '3', importance: 2,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 1, accepted_answers: '12', importance: 2,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 3,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 1, accepted_answers: '12', importance: 1,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 3,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 1,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'virgille').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 2,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'virgille').id)



Answer.create(answer_num: 3, accepted_answers: '23', importance: 2,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 3, accepted_answers: '3', importance: 1,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 4, accepted_answers: '4', importance: 3,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 1, accepted_answers: '12', importance: 2,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 3, accepted_answers: '13', importance: 3,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 4, accepted_answers: '4', importance: 1,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 3,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'annie-OK').id)

Answer.create(answer_num: 4, accepted_answers: '34', importance: 1,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'annie-OK').id)



Answer.create(answer_num: 3, accepted_answers: '23', importance: 1,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 1, accepted_answers: '12', importance: 2,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 1, accepted_answers: '4', importance: 3,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 3, accepted_answers: '3', importance: 3,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 1,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 3,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 1,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'cal4miteej').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'cal4miteej').id)



Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 4, accepted_answers: '34', importance: 1,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 4, accepted_answers: '14', importance: 3,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 2,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 2,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 3, accepted_answers: '3', importance: 2,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 1,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'belle~').id)

Answer.create(answer_num: 4, accepted_answers: '4', importance: 1,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'belle~').id)



Answer.create(answer_num: 2, accepted_answers: '2', importance: 3,
              question_id: Question.find_by(question_text: 'How important are academic achievements to you?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Once you take a moral position, can anything be said or done to change your mind?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 2, accepted_answers: '12', importance: 1,
              question_id: Question.find_by(question_text: 'How do you feel about age differences in relationships?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 1, accepted_answers: '1', importance: 3,
              question_id: Question.find_by(question_text: 'Would you consider living with a partner who does not want any pets?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 4, accepted_answers: '34', importance: 2,
              question_id: Question.find_by(question_text: "Do you pick up after yourself? Be honest.").id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 2, accepted_answers: '23', importance: 1,
              question_id: Question.find_by(question_text: "You're up against a nearly impossible challenge. Your ideal partner...").id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 2,
              question_id: Question.find_by(question_text: 'Do you spend more money on clothes or food?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 4, accepted_answers: '24', importance: 1,
              question_id: Question.find_by(question_text: 'Which would you prefer your ideal match to be more into?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 2, accepted_answers: '2', importance: 3,
              question_id: Question.find_by(question_text: 'Regardless of your age, do you consider yourself to be an adult?').id,
              user_id: User.find_by(username: 'pokerino').id)

Answer.create(answer_num: 2, accepted_answers: '234', importance: 2,
              question_id: Question.find_by(question_text: 'Is your ideal match well-off financially or at the very least someone who has high income potential?').id,
              user_id: User.find_by(username: 'pokerino').id)



Dialogue.destroy_all

Dialogue.create(user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'holliday').id)

Dialogue.create(user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'Ikey').id)

Dialogue.create(user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id)

Dialogue.create(user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'belle~').id)

Message.destroy_all

Message.create(user_id: User.find_by(username: 'sampleuser').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'holliday').id
              ).id, body: 'hey')
Message.create(user_id: User.find_by(username: 'holliday').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'holliday').id
              ).id, body: 'whats up')
Message.create(user_id: User.find_by(username: 'sampleuser').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'holliday').id
              ).id, body: 'nm u???')


Message.create(user_id: User.find_by(username: 'Ikey').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'Ikey').id
              ).id, body: 'How do you feel about goblins on a scale of 1 to 10?')
Message.create(user_id: User.find_by(username: 'sampleuser').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'Ikey').id
              ).id, body: 'uhhhhh.... not real/10, buddy. what made you ask that?')
Message.create(user_id: User.find_by(username: 'Ikey').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'Ikey').id
              ).id, body: 'I WAS JUST CURIOUS ABOUT YOUR OPINION, BUDDY, GOD')


Message.create(user_id: User.find_by(username: 'cal4miteej').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id
              ).id, body: 'hey')
Message.create(user_id: User.find_by(username: 'cal4miteej').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id
              ).id, body: 'hi')
Message.create(user_id: User.find_by(username: 'cal4miteej').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id
              ).id, body: 'hows it going. you are cute')
Message.create(user_id: User.find_by(username: 'cal4miteej').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id
              ).id, body: "do you like dancing? there's this thing this weekend...")
Message.create(user_id: User.find_by(username: 'sampleuser').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id
              ).id, body: 'youre coming on a bit strong.')
Message.create(user_id: User.find_by(username: 'cal4miteej').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'cal4miteej').id
              ).id, body: 'alright, maybe some other time, then. sorry to bug you')


Message.create(user_id: User.find_by(username: 'sampleuser').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'belle~').id
              ).id, body: 'hey. I love Joanna Newsom. just wanted you to know.')
Message.create(user_id: User.find_by(username: 'belle~').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'belle~').id
              ).id, body: 'thats awesome... whats your fave album?')
Message.create(user_id: User.find_by(username: 'belle~').id,
              dialogue_id: Dialogue.find_by(
                user_one_id: User.find_by(username: 'sampleuser').id,
                user_two_id: User.find_by(username: 'belle~').id
              ).id, body: 'mine is have one on me, although Divers is good too and I like that song Monkey and Bear')
