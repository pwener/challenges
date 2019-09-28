class CreateHeroes < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :name
      t.integer :rank
      t.references :location, foreign_key: true
    end
  end
end
