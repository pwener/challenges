class AddHeroToLocation < ActiveRecord::Migration[5.2]
  def change
    add_reference :locations, :hero, foreign_key: true
  end
end
