# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users

4.times do
  user_name = Faker::StarWars.unique.character
  user_email = Faker::Internet.email

  User.create(email: user_email,
              friendly_name: user_name,
              password: "password")
end

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
  user_id = (i % 4) + 1
  tag_name = Faker::StarWars.specie

  Tag.create(user_id: user_id,
             name: tag_name)
end

#Note Shortcut

20.times do |i|
  user_id = (i % 4) + 1
  note_id = i + 1

  NoteShortcut.create(user_id: user_id,
                      note_id: note_id)
end

#Notebook Shortcut

8.times do |i|
  user_id = (i % 4) + 1
  notebook_id = i + 1

  NotebookShortcut.create(user_id: user_id,
                      notebook_id: notebook_id)
end
