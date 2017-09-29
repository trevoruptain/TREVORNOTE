# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users

User.create(email: "iamyourfather@deathstar.com",
            friendly_name: "iamyourfather",
            password: "darth_vader")

User.create(email: "ihatesand@naboo.com",
            friendly_name: "ihatesand",
            password: "anakin_skywalker")

User.create(email: "oochowiemyhand@tatooine.com",
            friendly_name: "oochowiemyhand",
            password: "luke_skywalker")

User.create(email: "organa@alderaan.com",
            friendly_name: "organa",
            password: "princess_leia")
#Notes

40.times do |i|
  notebook_id = (i + 1) % 10
  note_title = Faker::StarWars.planet
  note_body = Faker::StarWars.quote

  Note.create(notebook_id: notebook_id,
              title: note_title,
              body: note_body)
end

#Notebooks

16.times do |i|
  user_id = (i % 4) + 1
  notebook_name = Faker::StarWars.vehicle

  Notebook.create(user_id: user_id,
                  name: notebook_name)
end

#Tags

100.times do |i|
  user_id = (i + 1) % 10
  tag_name = Faker::StarWars.specie

  Tag.create(user_id: user_id,
             name: tag_name)
end

#Taggings

40.times do |i|
  note_id = (i + 1) % 10

  Tagging.create(tag_name: Faker::StarWars.specie,
                 note_id: note_id)
end
