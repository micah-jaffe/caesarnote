# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create(username: 'Julius', email: 'julius@caesarnote.com', password: 'password')

# these notebook seeds don't work for some reason
Notebook.create(name: 'My First Notebook', user_id: demoUser.id, is_default: true)
Notebook.create(name: 'Secret Things', user_id: demoUser.id, is_default: false)
Notebook.create(name: 'Important Messages', user_id: demoUser.id, is_default: false)

# seed notes here