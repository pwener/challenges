class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.decimal :latitude, precision: 5, scale: 2
      t.decimal :longitude, precision: 5, scale: 2
    end
  end
end
