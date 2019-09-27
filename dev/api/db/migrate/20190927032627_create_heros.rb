class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :name
      t.integer :rank
      t.integer :location_id

      t.timestamps
    end
  end
end
