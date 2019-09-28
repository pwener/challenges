# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Admin.create(login: 'admin', email: 'adm@adm.com', password: 'admin123', password_confirmation: 'admin123')

heroes = ['Saitama', 'Goku', 'Vegeta', 'Naruto', 'Sasuke', 'Drow Ranger', 'Axe', 'Mortred', 'Andromeda', 'Sandman', 'Zero']
ranks = Hero.ranks.keys

def range
  rand * (1-0.00001) + 0.00001
end

heroes.each do |e|
  Hero.create(name: e, rank: ranks.sample, location_attributes: { longitude: range(), latitude: range()})
end
